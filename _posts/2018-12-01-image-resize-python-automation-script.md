---
author: tvdsluijs
categories:
- Coding
comments: 'true'
date: 2018-12-01
description: How to resize images in python solution! With this python script. Resize
  in a blink of an eye with this easy python script. Multiple sizes, cropping in one
  script.
excerpt_separator: <!--more-->
layout: post
tags:
- Automation
- Images
- Python
title: Image resize python automation script

---

Resizing images with python a solution comes in handy when you want to resize a lot of images. As I was creating a photo portfolio website for a friend of mine. He had all these nice photo's but they were pretty big. To big to use on his website. You don't want to load megabytes of data for a webpage just to show some photo's. We could resize all the photo's by hand, but as I don't like doing things twice I wrote a Image resize python automation script.    
  
<!--more-->  
  
## Image resize script  
This script works pretty easy. You have an image folder, where you can put in all the images that you want to resize. There is a done_images folder where all the images will be put when the resize is done (so the script will not resize it over and over again). And there is a resized folder where all the resized renames images are.  
  
The script works with multiple (or just one) resize dimensions. So you can just say you want to resize the images or photos to one other size or you could resize an image or photo to multiple sizes.  
  
As an example in the script it resizes to:  
sizes = [[400, 400], [800, 600], [1024, 768]]  
  
If you put in one image into the image folder, when running the script it will resize to :
- 400x400  
- 800x600  
- 1024x768  
  
This image resize python script will not only resize but when needed also rescale to the right dimensions.  
  
For using this script you need to install the python-resize-image python package  
  
by doing a    

    pip install python-resize-image

Don't forget to create the folders:
- done_images/
- images/
- resized/

Put your images to resize in the images folder and run the script!

Thats all. 

{% gist 0a1f841062655cc1f3c42454a3c9ce7b %}
