---
templateKey: blog-post
title: 'The Best Budget DIY NAS Server [In 2020]'
date: 2020-02-28T02:07:03.727Z
slug: the-best-budget-diy-nas-server-2020
image: /img/jakob-owens-nimlssnl-nu-unsplash.jpg
description: >-
  Off-The-Shelf NAS devices are rather expensive and under-powered. Building a
  DIY NAS seems like a good option but can also add up quickly. After looking at
  the options available I came up with the best solution for building a budget
  NAS server in 2020. Let's Get Into It.
tags:
  - server
  - nas
  - plex
  - docker
---
Here is how I discovered that the best **budget DIY NAS server in 2020** is actually a used "prebuilt" enterprise tower server. Specifically, the **Dell Poweredge T110 II**.

While the Dell T110 II typically sells for $120 - $150 on eBay (in March of 2020), if you watch long enough, you can find a killer deal like the $72 one I landed. But what do you get for the money?

## Dell Poweredge T110 II NAS Server Specs:

* 6 Hard Drive Bays (4 x 3.5"+ 2 x 5.25") 
* Intel Xeon E3-1220 V2 CPU 22nm 4 cores / 4 threads @ 3.1 GHz (Better than any off the shelf NAS)
* Intel LGA1155 chipset (Cheap CPU upgrade via ebay to 4 cores / 8 threads i.e. E3-1230 V2 @ 3.3 GHz )
* 16 GB DDR3 ECC RAM (Upgradeable to 32GB)
* Dell Perc H200 RAID Card (For Hard Drive Expansion + Cheap SAS Hard Drive Compatability)
* Low Power Consumption (25 - 30 Watts idle without drives) \[WIFE APPROVED]
* Quiet \[WIFE APPROVED]

My NAS search began when my media library reached the limits of the 1TB external hard drive that was shackled in isolation to the home theater PC in my living room. I received quite the sticker shock when I started to search Amazon for Off-The-Shelf 4-bay NAS devices like Synology and Q-NAP. So I set out on the quest to find alternatives.

## What Does A Budget NAS Need to Have?

* 4 Hard Drive Bays (Minimum)
* \[Relatively] low power consumption
* Comparable Read/Write Speeds to Off-The-Shelf NAS devices
* Effectively run a Plex media server (or Emby/Jellyfin)
* Bonus Points: Extra bandwidth to run small docker container projects. i.e. Wiki, CMS, Pi Hole, etc.

I considered building a NAS Server from scratch as I am no stranger to building PCs. I scoured the internet and came across two great resources for building a home NAS server: The NAS Killer 4.0 Build and The Perfect Media Server. Check these resources out if you want to go down the same rabbit hole of endless information I did or read on to find out the summary of what I learned from them.

## Do You Need Low Power Consumption NAS Server?

Yes, but probably not as low as you think. 

I wasted a lot of time trying to find a Low Power NAS server or build guide that would also be fast. The Raspberry Pi 4 looked like a good option from a low power stand point but the more I looked into it, the more I was convinced that I wanted more storage, more power and more flexibility than even the 4GB Raspberry Pi 4 can provide. It is a great little device for fun projects like Pi hole but in the end the trade-offs were too great for me.

Next I looked into the Intel Celeron J3455 combos

Cover Photo by Jakob Owens on Unsplash
