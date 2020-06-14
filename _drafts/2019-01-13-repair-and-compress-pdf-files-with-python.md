---
layout: redirect
new_url: https://medium.com/purepython/repair-and-compress-pdf-files-with-python-b9024e4bedf8
title:  Repair and compress PDF files with python
date: 2019-01-13
dateModified: 
seo_description: Repair PDF files with python or Compress PDF files with python is very simple. Well that was what I was thinking. Many PDF files need repair or can be compressed and this can be done by using Python.
categories: [Coding]
tags:
 - PDF
 - Python
excerpt_separator: <!--more-->
name: Pure Python
comments: true
author: tvdsluijs
---
Repair PDF files with python or Compress PDF files with python is very simple. Well that was what I was thinking. Python is very powerful so repairing or compressing a simple PDF file should be easy right? Well...... 

<!--more-->

So I was doing my book keeping for my little own company [TS Intermedia](https://www.ts-intermedia.nl/ "TS Intermedia"){:target="_blank"} and I had to upload (or mail) all these invoices to the Receipt scanner service. I created (of course) a [mail python](/2019/01/03/send-files-by-gmail-python/){:target="_blank"} script for this. But at a certain point PDF files where not imported. I contacted the helpdesk and they told me that the PDF file was "corrupt." Well not really corrupt, but there where some strange characters at the beginning of the file. I guess the system that created the PDF files had a bug so it started with some HTML code.

As I do not like doing work twice.... and in this case manually typing in the numbers, dates and other invoice data of 20+ invoices I wanted to repair the PDF's so I could upload them.

## Mac Viewer
So the fantastic :-) OS X software has a feature called Viewer. Within viewer you can save the PDF you are looking at and guess what.... it fixed the PDF file!

I could upload it to the system and it was converted into usable data.

Now.... again... I'm not the guy that does work twice (manually) so opening, saving and closing 20+ PDF files.... no I guess not. So as the Mac Viewer app is very good to use for one file, it was no option.

## Github
So I searched fo a Python package to help me repair my PDF files. Now there are a lot of fixes to be found on the internet. But, they don't work. Or they don't work in Python 3.x or you need a contract with a third party as some fixes are your api calls to services that will fix you PDF.

Finally I found a solution on Github. # [theeko74](https://github.com/theeko74){:target="_blank"} created the [Pdfc -- PDF Compressor](https://github.com/theeko74/pdfc){:target="_blank"} python PDF repair / compressor tool. It was actually ment to only compress PDF files but it also fixed the file.

Now there is one catch! It not a python solution at all! It actually uses GhostScript on the background to solve this problem.

## GhostScript

Ghostscript is an interpreter for PostScript™ and Portable Document Format (PDF) files. Ghostscript consists of a PostScript interpreter layer, and a graphics library. Sometimes the Ghostscript graphics library is confusingly also referred to simply as Ghostscript. Even more confusingly, sometimes people say Ghostscript when they really mean GhostPDL.

So if you want to use the PDF compressor you need to install GhostScript.

Got a Mac? Then its easy.

```bash
brew install ghostscript
```

Have windows... well... good luck with the [installation](https://ghostscript.com/doc/9.21/Install.htm){:target="_blank"}!

## Class version

So as the theeko74, Pdfc -- PDF Compressor works very well, it does not work on folders with multiple files. So I forked the code in Github and created an other version of it.

I created a Class for the function that you can call to compress and repair. Using a class is more easy for you to use as you can just call it, to use it or extent it to build an even better version for you needs.

So to compress and or repair PDF files you can use the files on my [Github account](https://github.com/tvdsluijs/pdfc){:target="_blank"}.

For using my code just add ```import CompressPDF``` to your code.

And then it's as ease as.....
```python
    start_folder = "/your-folder" 
    compress = 2
    p = CompressPDF(compress)  
  
    compress_folder = os.path.join(start_folder, "compressed_folder/")  
    if not os.path.exists(compress_folder):  
        os.makedirs(compress_folder)  
  
    '''Loop within folder over PDF files'''  
  for filename in os.listdir(start_folder):  
        my_name, file_extension = os.path.splitext(filename)  
        if file_extension == '.pdf':  
            file = os.path.join(start_folder, filename)  
            new_file = os.path.join(compress_folder, filename)  
  
            if p.compress(file, new_file):  
                print("{} done!".format(filename))  
            else:  
                print("{} gave an error!".format(file))
```




