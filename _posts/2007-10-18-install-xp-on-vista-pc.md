---
id: 527
title: Install XP on Vista PC
date: 2007-10-18T13:10:00+00:00
author: Theo van der Sluijs
excerpt_separator: <!--more-->
layout: post
guid: http://vandersluijs.nl/blog/index.php/2007/10/18/install-xp-on-vista-pc/
permalink: /2007/10/install-xp-on-vista-pc.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "3994652293269451112"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2007/10/install-xp-on-vista-pc.html
hits:
  - "457"
itrr_another_apply:
  - 'no'
categories:
  - Tech
---
Microsoft Vista Sucks&#8230;. Well not completely, but it is not even a near finished (and bugfree) product I think. 

I think Microsoft felt the new Ubuntu versions breathing down the neck&#8230; and with all the articles about the vista delays, they just had to give out this Vista (Millenium / ME) version. 

I have a Dell Computer&#8230; an Dimension 9200 to be exact.   
<a name="more"></a>  
And Vista is on it. I installed Vista a dozen times, but it just doesnt work right.   
I tried to install XP, but this ends in a BSOD (Blue Screen Of Death).   
I tried to install Ubuntu&#8230; well Ubuntu did not like my Dimension. 

More and more people are trying to downgrade from Vista to XP. Hell a lot of consumer companies are telling people to downgrade. 

But&#8230; I cann&#8217;t downgrade&#8230;.. Well to be honest&#8230; I could not downgrade&#8230;. And now I can ! Yes You CAN ! 

This is THE simple Solution (might even work on a Non Dell computer): 

Step 1) Boot the Bios (On a DImension 9200, tap F12 immediately after turning on the computer) 

Step 2) Go to &#8220;Device Setup&#8221; 

Step 3) Scroll down to the &#8220;Sata&#8221; Heading and go to &#8220;Sata Operation.&#8221; 

Step 4) Change the setting to &#8220;RAID Autodetect/ATA.&#8221; 

Done. Now reformat and install Windows XP (Or Linux, or what have you) without a hitch. 

This process should work on any new computer that comes with Raid Autodetect/ATA turned off. 

Good Luch !!! 

Still having troubles with BSOD ? You might need to load the Dell Raid drivers when installing XP. 

First, try to see if your computer let you load driver from USB disk (you might have to turn it on in bios).   
If you cann&#8217;t load them from a USB disk, and you don&#8217;t have a floppy drive, try to slipstream your XP with the right drivers. 

You can read the How To <a target="_blank" href="http://www.maximumpc.com/article/How-To--Slipstream-your-XP-installation">here</a> .   
2007-10-18 10:09:06