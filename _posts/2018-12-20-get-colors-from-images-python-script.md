---
author: tvdsluijs
categories:
- Coding
comments: 'true'
date: 2018-12-20
description: Get all colors from an image with python in RGB and HEX codes solution.
  This script gets all the colors from the images you need in HEX and RGB coloring.
excerpt_separator: <!--more-->
layout: post
tags:
- Images
- Automation
- Python
title: Get colors from images python script

---

Get colors from image with python is not very difficult. You want to have all the colors from an image? Or maybe multiple images? You can open Photoshop, or like me Pixelmator, but getting all the colors with the eyedropper tool can be a lot of work. So why not use a "get colors from images" python script.

<!--more-->  
## Getting colors from image
When you design websites or want to create a style for a new company you are mostly to start with colors. Now when you want to work from a certain image you really like or a pre-made logo, you might want to have all the colors from that image or logo.

You can make use of an eyedropper that can be found in an image-editing software, like Photoshop, Lightroom or Pixelmator. But when a image has many colors, you might end up spending your entire day clicking to get out all the colors.

> *An _eyedropper_ is a tool found in many image editing programs that let you click on a point in the image to identify and select its color.*

## RGB and HEX colors

Now getting out these colors might take you a long time, but getting the RGB and HEX value can also be a lot of work.

More and more both RGB and HEX are being used within CSS / SCSS / SASS and LESS for creating websites. And as I was creating this site, and the API Python version of it it took me quite some time to get all the colors out of the logo's.

The **RGB color** model is an additive color model in which red, green and blue light are added together in various ways to reproduce a broad array of colors. 

> Both HEX and RGB are used to define colors.

A **hex** triplet is a six-digit, three-byte **hexadecimal** number used in HTML, CSS, SVG, and other computing applications to represent **colors**. 

## Create color python script
Now I do not like repetitive work and clicking within an image to get out all the colors really looks a lot to me like repetitive work.

So I created this small color extracting script. It shows you per image all the different colors with hex and GRB values in a terminal.

{% gist 0a35c92b52e90cc0ef919fd70bf1c372 %}
