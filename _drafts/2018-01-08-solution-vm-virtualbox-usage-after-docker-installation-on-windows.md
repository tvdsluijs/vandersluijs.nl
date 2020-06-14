---
layout: post
title: 'Solution VM VirtualBox usage after docker installation on Windows'
slug: 'solution-vm-virtualbox-usage-after-docker-installation-on-windows'
date: '2018-01-08 06:54:38.783000+00:00'
excerpt_separator: < !--more -->
publish_date: '2018-01-08 06:54:38.783000+00:00'
image:
  path: '/images/1*u2MX2pZCg6GGZoBkEgjmdQ.png'
  feature: '1*u2MX2pZCg6GGZoBkEgjmdQ.png'
  credit: 'Microsoft Windows :‘-)'
categories: ['Tech']
tags: 
 - 'Docker'
 - 'Virtualbox'
 - 'Windows 10'
 - 'Hyper V'
---
So you installed docker to check it out. After using M Virtualbox machine for
a couple of years you heard so much about this docker you…

So you installed docker to check it out. After using M Virtualbox machine for
a couple of years you heard so much about this docker you just had to try it
out.
< !--more -->
> Right???

And after using it a bit… well you just want to go back to good old VM
Virtualbox. But you can't… because as soon as you spin it up…. windows crashes
with a big blue screen of death.

Sounds familiair?

I had the same problem and this is how I solved it.

### Docker

[Docker](https://www.docker.com/) is a virtualization project on an operating-
system-level. As it first was Unix only, docker now also comes bundled with
Windows Server 2016 and it is available for Windows and Mac.

Docker allows users, like you and me, to install applications inside software
containers. The application running in docker runs separated/isolated from the
operating system on which the applications are running. Setup and removal of
these applications is easy and has little to no effect on the operating
system.

As you understand Docker is a very secure and fast way to build and test
applications as your windows machine will not notice them running.

### VM VirtualBox

VM VirtualBox (owned by Oracle) is a cross-platform virtualization
application. You install it on your existing Intel or AMD-based, Windows, Mac,
Linux or Solaris.

VM VirtualBox allows you to run multiple operating systems (inside multiple
virtual machines) at the same time. So on your Windows or Mac based PC you can
run Ubuntu, CentOS, Windows 95 or a Windows 2008 server. You can install and
run as many virtual machines as you like — the only practical limits are disk
space and memory.

### Hyper-V

Microsoft Hyper-V enables running virtualized computer systems on top of a
physical host. These virtualized systems can be used and managed just as if
they were physical computer systems, however they exist in virtualized and
isolated environment.

Hyper-V must be enabled on your desktop system. Docker for Windows
automatically enables it upon install.

Hyper-V is not compatible with Oracle VirtualBox. Therefore, you cannot run
the two solutions simultaneously.

Even worse, if you try… windows crashes into a blue screen of death!

### Solution running VM VirtualBox

So, like me, you want to get rid of docker (just uninstall it!) and want to
run VM VirtualBox again… well guess what… you cann’t!

Nope….. you screwed up your system with installing Docker that comes with
Microsoft Hyper-V installed and no other then Microsoft can screw your system.

But there is a solution!

> Uninstalling docker is not enough!

I would say, get rid of your windows machine and buy a Macbook, or a
Chromebook but you just have to get rid of Hyper-V

Actually there are a few solutions… and as great as Windows is… one or more or
none will work.

#### Solution 1

  * Press Windows key + X
  * Click Programs and Features
  * Click Turn Windows features on or off
  * Expand Hyper-V
  * Uncheck it.

#### Solution 2

Open een Powershell window and type in:



    Disable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All

![](/images/0*DPbl1tIxoS06aRJA.)

Type Y and press Enter when prompted to restart the computer.

Solution 3

Open CMD (as an Administrator) and type in:



    dism.exe /Online /Disable-Feature:Microsoft-Hyper-V-All

![](/images/0*ou_kKrWBiCT4h_Lv.)

Type Y and press Enter when prompted to restart the computer.

If one of these solutions don’t work, there are two other solutions you might
want to try.

  1. Reinstall Windows 10 (well good luck with that!)

2\. Buy a real computer! Buy a MacBook!
