---
author: tvdsluijs
categories:
- Coding
comments: 'true'
date: 2018-12-22
description: Renaming files and images with an auto increment number at the end with
  this small python script solution. Renames all you files in a blink of an eye.
excerpt_separator: <!--more-->
layout: post
tags:
- Automation
- Files
- Python
title: Rename files with auto increment number in python

---
Renaming files with an auto increment number at the end in Python is very easy. I created this script because every now and then I have to rename a lot of files, like images, to a one named-based with increment number files. This script is very easy to rename files, it keeps the right file-extension and add's a auto incremented number at the end.

<!--more-->
Renaming files in python is easy. But renaming and keeping unique names is a bit more difficult.

With this rename and auto increment name changer it's very ease to do all your renaming jobs. 

let's say you want to convert this list with images to something you understand

```
DSC_0000.JPG
SBCS0000.JPG
DSCN0001.jpg
IMG_0001.jpg
DCP_0001.jpg
DSCF0001.jpg
PICT0000.JPG
MVC-0000.JPG
```
 using the name "holiday-spain"
 
The names will come out like this:
```
holiday-spain-0001.jpg
holiday-spain-0002.jpg
holiday-spain-0003.jpg
holiday-spain-0004.jpg
holiday-spain-0005.jpg
holiday-spain-0006.jpg
holiday-spain-0007.jpg
``` 

Just change

the start folder (mine is : "profile_photos")
name the newName for the new name of the files
and the startIncNumber to with what number it should start.
```python
startfolder = os.path.join(dir_path, "profile_photos")
newName = "your-great-new-file-name"
startIncNumber = 1
```

Have fun!

{% gist 1640613a32416b1197fc36b45e7b4999 %}
