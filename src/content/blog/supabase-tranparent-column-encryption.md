---
title: "Supabase Transparent Column Encryption"
description: "How to avoid error P0002 query returned no rows when implmenting TCE in Supabase with security label pgsoidum."
pubDate: "Nov 5 2023"
heroImage: "/placeholder-hero.jpg"
---

Transparent Column Encryption is a great feature in Postgres that allows you to encrypt sensitive data. If you made it to this article you have likely read about [TCE on the Supabase blog](https://supabase.com/blog/transparent-column-encryption-with-postgres) by pgsodium author [Michel Pelletier](https://github.com/michelp) and possibly run into the common `P002 query returned no rows` error.

After struggling with this myself I finally read through the pgsodium ReadMe closely enought to find the solution.

I found many others were having issues implementing TCE in Supabase:
https://github.com/supabase/supabase/issues/18192
https://github.com/orgs/supabase/discussions/16633
https://github.com/orgs/supabase/discussions/15150
https://discord.com/channels/839993398554656828/1142525644266287105
https://discord.com/channels/839993398554656828/1142555076104310814/1142555076104310814

So I decided to write this guide to help anyone else implement Transparent Column Encryption in either Supabase or any Postgres instance for that matter.

The issue is actually very simple. You need to first create a key with pgsodium by running this SQL statement:

```
select * from pgsodium.create_key();
```

This will retrun a record that looks something like this:

```
-[ RECORD 1 ]-------------------------------------
id          | 74d97ba2-f9e3-4a64-a032-8427cd6bd686
status      | valid
created     | 2022-08-04 05:06:53.878502
expires     |
key_type    | aead-det
key_id      | 4
key_context | \x7067736f6469756d
comment     | This is an optional comment
user_data   |
```

That `id ` is what you are probably missing, as was the case in all of the issues mentioned above.

So you can implement this a few ways:

1. Use the same key to encrypt every column:

```
CREATE EXTENSION IF NOT EXISTS pgsodium WITH SCHEMA extensions;

create table secrets (
  id uuid primary key default gen_random_uuid(),
  secret text,
  user_id references auth.users(id)
);

SECURITY LABEL FOR pgsodium
	ON COLUMN public.secrets.secret is 'ENCRYPT WITH KEY ID 74d97ba2-f9e3-4a64-a032-8427cd6bd686 ASSOCIATED (user_id);

```

Notice that the Key ID `74d97ba2-f9e3-4a64-a032-8427cd6bd686` is the value returned from `# select * from pgsodium.create_key(); above.`

2. Use a default key but allow other key ids:

```
CREATE EXTENSION IF NOT EXISTS pgsodium WITH SCHEMA extensions;

create table secrets (
  id uuid primary key default gen_random_uuid(),
  secret text,
  key_id uuid not null default 74d97ba2-f9e3-4a64-a032-8427cd6bd686,
  user_id references auth.users(id)
);

SECURITY LABEL FOR pgsodium
	ON COLUMN public.secrets.secret is 'ENCRYPT WITH COLUMN key_id ASSOCIATED (user_id);

```

3. Create the pgsodium default key and set it as the default key (this is my preferred method because it works plays nicely with migrations)

```
create table secrets (
  id uuid primary key default gen_random_uuid(),
  secret text,
  key_id uuid not null,
  user_id uuid not null references auth.users(id),
  nonce bytea default pgsodium.crypto_aead_det_noncegen()
);

DO $$
DECLARE
    key_id_value uuid;
BEGIN

  SELECT id INTO key_id_value FROM pgsodium.create_key(name := 'default');

  EXECUTE 'ALTER TABLE secret_keys ALTER COLUMN key_id SET DEFAULT ' || quote_literal(key_id_value) || '::uuid';

END;
$$ LANGUAGE plpgsql;

security label for pgsodium
on column secret_keys.secret
is 'ENCRYPT WITH KEY COLUMN key_id ASSOCIATED (user_id) NONCE nonce';
```

We also added a security nonce and are associating the user_id so that we can add RLS policies that only allow users to perform CRUD operations on their own secrets.

DO NOT FORGET TO ADD RLS.
Example RLS implementation:

```
alter table "public"."secret_keys" enable row level security;


create policy "Enable CRUD if user is org admin."
on "public"."secret_keys"
as permissive
for all
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());
```

You may also need to grant permissions like so:

```
GRANT EXECUTE ON FUNCTION pgsodium.crypto_aead_det_encrypt (bytea, bytea, uuid, bytea) TO authenticated;

```

[DM me on Twitter/𝕏](https://twitter.com/jonkkillian) if you run into any issues implementing Transparent Column Encryption (TCE) in Supabase and I will try to help.
