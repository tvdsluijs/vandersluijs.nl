---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: '2018-03-15 06:33:37.815000+00:00'
excerpt_separator: < !--more -->
image: /images/1*EgBzZbiwvFoUyXiVPEvuuw.jpeg
layout: post
publish_date: '2018-03-15 06:33:37.815000+00:00'
slug: using-ubuntu-on-windows
tags:
- Ubuntu
- Windows 10
- Bash
- Terminal
- Command Line
title: Using Ubuntu on Windows 10 without Admin Rights

---
So you want to use Linux at work but you are bound to work on a Windows 10
Machine? Did you know you can actually install Ubuntu together…

So you want to use Linux at work but you are bound to work on a Windows 10
Machine? Did you know you can actually install Ubuntu together with Windows
10, without Admin credentials.
< !--more -->
#### Ubuntu on Windows 10

As a Mac and Linux user I know that the shell / command line / terminal is
where you make magic happen. It’s just perfect for any task like fast zipping
/ unzipping, python coding and other development, file management and a bunch
other tasks.

The Windows Subsystem for Linux, actually already introduced in the
Anniversary Update, finally became a stable feature in the Fall Creators
Update.

Now you can actually run bash with Ubuntu on your Windows 10 machine! But
but…. how do you make this work?!

#### Turn on Developer mode in Windows 10

If you ever looked any further than your standard startup menu and dig a
little deeper in the Windows 10’s settings, you might have overseen a very
important item calles “Developer Mode”.

When you actually put Developer Mode to “ON”, Good Old Windows allows you to
more easily test apps you’re developing, use the Ubuntu Bash shell
environment, change a variety of developer-focused settings, and do other such
things.

So how do you find this Developer Mode?

Simple! Press Windows key and type “Use developer features”. Click the item
and the following screen is presented to you!

![](/images/1*4229_T_kcwvPMF2Bp1gDQA.png)

In this screen click the Developer Mode Radio Button.

Some people without Admin rights get a Package failed to install error.

Don’t worry, We will take care of it. Just close this screen and go to the
next item.

#### Turn Windows features on for Bash and Ubuntu in Windows 10

Some programs and features included with Windows, such as Internet The Windows
Subsystem for Linux, must be turned on before you can use them. Certain other
features are turned on by default, but you can turn them off if you don’t use
them.

Once again, Press the Windows key and type “Programs and Features”

Click it and you will see a screen where on the left site it’s says:

> Turn Windows Features on or Off

![](/images/1*zOsSTlJp0h-OvLPQJuwxQA.png)

Click Turn Windows features on or off

Now a new windows will open. Search for “Windows Subsystem for Linux” and
click on the check box.

![](/images/1*9XprGOm6ut93z51JFL0O2w.png)

Click Ok, and probably windows tell’s you to restart. Okay… restart!

#### Open bash to start Bashing!!

When your computer restarted. Press Windows key and type

> Bash

You will see something like “Bash on Ubuntu on Windows”

Click it!

You will get a terminal like window with the question if you agree to all..
yes yes yes press Y and continue.

It is possible that the system seems to hang! No worries keep it hanging for
some time (minutes to hours) and when it seems to hang after an hour or so,
just close the window and restart Bash again.

And there you go! You’ve got a working terminal on Ubuntu on Windows.

#### Updating Ubuntu, installing fails!

When u want to update Ubuntu with Sudo apt-get update, you cannot!

That is when you don’t have enough rights on you’re system.

But there is a workaround.

Open bash and enter (each line at a time):



    sudo apt-get clean  
    cd var/lib/apt  
    sudo mv lists lists.old  
    sudo mkdir -p lists/partial  
    sudo apt-get clean  
    sudo apt-get update

And Voilà! Now it does update!

Have fun!!
