---
layout: redirect
new_url: https://medium.com/purepython/medium-export-to-markdown-files-with-python-534091e4a182
title: Python convert Medium export to Markdown files
slug: /2018/07/python-convert-medium-export-to-markdown-files/
date: 2018-07-13
publish_date: 2018-07-13
categories: ['Coding']
tags: 
 - Medium
 - Jekyll
 - Markdown
 - Python
comments: true
author: tvdsluijs
excerpt_separator: <!--more-->
---
So I left Medium for some obvious reasons. Don't get me wrong! I loved (and maybe still love) Medium, but with no more custom domains and going in a direction I don't prefer, I created my own sites on Github.

Well github now in the hands of MickeySoft... surely Github is going to hell, but as long as I can host my scripts and sites on their servers for 80 bucks per year.. I'm quite okay with it. 

<!--more-->

## Medium to Markdown


Now, I'm hosting my site on Github Pages... and Github pages run on... Jekyll... and Jekyll needs Markdown files to run on.

Now that is funny as I tried (as many many many developers did) to create my own CMS for my sites, which will never ever finish... and it used MarkDown Files. 

So I do understand that Markdown is actually very handy when it comes to blogs and sites.

But medium only lets you export HTML files (smart as they are). So I had to create a python script to turn my HTML articles into MD files (markdown-files)

## Python Script for Medium 

So I started working on a Python script to turn the Medium export HTML files into Markdown. I also wanted to download the images within the file (don't want to host them on medium) and I wanted to put some of the YAML code on top that Jekyll needs to display the page in a correct way.

Now... my script is far from great. It might have flaws... it's now really reusable, its not clean code, there are no unit tests... but understand that I only needed this script for a one time conversion.

Of course as a developer I do know that all one time scripts will be used more than once :-)

So I'm giving you this script. It's on the Github Gist site for you to use and change to what ever you need it.

If you like it, don't forget to buy me a coffee !
[![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/itheo)

So how does this works? Grab my code. Put it where you can run it. Python 3.x needed I guess... and beautifulsoup and xlrd (2 top lines to install)

Export your content... and let it run!

### Exporting your content

1.  Click on your user icon and click  **Settings**.
2.  Scroll down to the  **Accounts**  section.
3.  Click  **Download .zip**.
4.  A link to download your archive will be sent to you by email when it is finished.

When you are logged in you can also use this direct [link](https://medium.com/me/export)
Press The Export button and you will see "We received your export request. You’ll get an email with download instructions soon."

Just wait for the mail to come in.

In the email you will find the next message:
*We’ve created an archive of the information you’ve shared on Medium. You can download the zip file for the next 24 hours.*

Just press the big button to download!

Unzip the content to a folder where you can find it.

And start up the script below.

At a certain point the script will ask for a path. This is the path you have put your medium export (unzipped) folder. Put "/posts" behind it.

Your path will look something like (for MAC)
```
/Users/yourname/Downloads/mediumexport2/posts
```
Somewhat similar for windows users.

{% gist 21543f463d8fa1626d11f5ce01f68258 %}
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTI1NjEzNTE1Nl19
-->