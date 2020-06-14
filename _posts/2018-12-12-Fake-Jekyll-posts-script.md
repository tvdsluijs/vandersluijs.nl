---
author: tvdsluijs
categories:
- Coding
comments: 'true'
date: 2018-12-12
description: Create fake Jekyll posts with python solution. For filling your jekyll
  blog fast to test your jekyll theme fast and easy with python
excerpt_separator: <!--more-->
layout: post
tags:
- Fun
- Jekyll
- Automation
- Tutorial
title: Fake Jekyll posts generator script

---

Create fake Jekyll posts with python solution to fill your jekyll blog fast to test how it looks. I needed this beceaus I'm creating a new Jekyll this, actually this jekyll site. I love creating my own themes but that really works best when you have some posts to test the site with. So I created this fake posts for jekyll script.
<!--more-->

So, since a year or so I became a bit of a Python lover. I've been developing whole my life in many many languages, Basic, ASP (classic), ASP.NET, VB, C#, Bash, Javascript, ABAP, LotusScript, Lotus Notes Formula, PDF Interactive Forms script, Actionscript, PHP.... well you get the idea. As it once was my profession I still like to develop something every day.
  
Next to that I've always liked blogging. Just writing about stuff online on one of my many blogs. Since I really have been writing a lot of Python code since I've been addicted to this language I've been thinking about putting a blog online for this. And that is where PurePython.org saw the daylight.  
  
## Content management System  
  
I have been using many Content Management Systems since I'v been blogging, My Own written, Mambo, Joomla, Blogger.com, Wordpress, once again my own written but somehow the existing systems became slow over time and even how secure I mady my Joomla or Wordpress sites, hackers liked my sites very much.  
  
Since I've written my sites into Jekyll blogging became easier for me. Not much updating, not much worrying about hackers, it's blazing fast and it has not much overkill with functionality. Together with Github pages I really found a good money for value option to host my sites and work on github for my code.  
  
## Jekyll Posts
Now, since I'm a code lover I wanted to create a clean Bootstrap 4 theme for my jekyll site. I saw this [theme](https://theme-jekyll-dbyll-demo.aerobaticapp.com/)  and I liked the simpleness of it but I wanted to make it my own. So I've rewritten it in a very lightweight Bootstrap 4 theme. (still shaving the raw edges).

There was only one thing I needed to test my theme. Posts! With posts I would be able to test an overview page, pagination, category and tags page and a blog article page.

Now, I could of course create a dozen of fake posts, with lorum ipsum text, images and headers. But would it not be easier to have a Jekyll fake posts generator python script doing this for me?

A Fake Posts generator for creating an infinite list of posts (also to test performance when you have like a 1000 of more posts.

## Jekyll fake posts generator
So I've created this Jekyll fake posts generator. Just for the fun of it and for automating stuff I don't want to do manually.

This Jekyll fake post generator creates posts, fake posts. It creates posts beween two years, with a fake title, with a fake data, with fake tags, fake categories and fake text.

This generator uses Lorum ipsum and place holder images fill the page with headers, sections and images.

Have fun using it! And if you have any questions, let me know!

{% gist 8855f445df325b93d0e570bfa94116c3 %}