---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2007-07-05 08:49:00+00:00
excerpt_separator: <!--more-->
hits:
- '429'
layout: post
permalink: /2007/07/problems-with-vista-and-older-logitec.html
title: Problems with Vista and older Logitech Webcams

---
Like I told you before, I have Vista working on my new PC.   
I have a Logitech Zoom webcam, which worked just fine with Windows XP

Vista does not know this webcam, and logitech doesn&#8217;t provide the drivers for Vista.

No, logitech would like it more if you buy a new Vista ready webcam.

I don&#8217;t want to buy a new webcam, so I searched for a workaround, and found one. 

  1. Install QuickCam 32-bit Version: 10.5.0 or newer , <a href="http://www.logitech.com/index.cfm/support_downloads/downloads/&cl=US,EN" target="_blank">download here</a> 
  2. When you get to the camera detection part where it asks you to plug in your camera, plug it into a new usb port (if you had it plugged in when you installed Vista) and just press skip.
  3. Windows may try and find the driver for it, you can cancel that too.
  4. Install the old QuickCam software (Version: 8.4.8 build 1034A)and overwrite anything it asks you to (it will fail to install completely because of the new version, but it will put the files you need into the Logitech program files directory.       
    The old software <a href="http://www.logitech.com/index.cfm/downloads/software/CA/EN,CRID=1794,contentid=7649" target="_blank">is here</a> <a href="http://www.logitech.com/index.cfm/downloads/software/CA/EN,CRID=1794,contentid=7649" target="_blank"></a> 
  5. Go to the windows orb (former start button), open control panel, go to system, then on the top left of the window click device manager.
  6. Find the unknown usb device (hopefully you only have one&#8230; otherwise unplug anything else that doesn&#8217;t work or you haven&#8217;t updated the driver for yet)
  7. Right click and select update driver, choose a location to find the driver, navigate your way to C:Program FilesLogitechQuickCamWebInstallDriversWinNewPRO2
  8. Press OK or whatever, and let it install.
  9. Enjoy! 

<a name="more"></a>