---
id: 100
title: Work locally fast on a mounted drive in Netbeans / Eclipse / PHPStorm
date: 2013-06-19T21:40:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2013/06/19/work-locally-fast-on-mounted-drive-in/
permalink: /2013/06/work-locally-fast-on-mounted-drive-in.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "831114153933347164"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2013/06/work-locally-fast-on-mounted-drive-in.html
blogger_thumbnail:
  - http://blog.theovandersluijs.nl/wp-content/uploads/2013/06/network_mounted_directory_may_be_slow_phpstorm-300x37-300x37.png
hits:
  - "2131"
dsq_thread_id:
  - "5701004594"
categories:
  - My Life
---
So you&#8217;ve got a big project you&#8217;re working on and got a good development environment and your IDE handles stuff through a mounted drive!

And guess what&#8230;. editing, saving, committing, updating is slow as a snail! It&#8217;s not your IDE you should worry about! No &#8230;. it&#8217;s your mounted drive!  
<!--more-->

But wait! The mounted drive, with your files is to your development server! The development server every colleague&nbsp;works on! The development environment that comes the closed to your test, accept and live server!

You created this development server so you did not had to set up all kinds of VM-servers for each developer on their own windows/mac/linux environment. Well, that was not the big issue, but keeping all the vm&#8217;s to the same level with the same updates is the problem.

So, you&#8217;ve got it all worked out. But it just doesn&#8217;t work! It&#8217;s slow! Mounted drives are slow! Let me tell you, I tried every IDE there is. And most of the complaints I&#8217;ve read wasn&#8217;t about that the IDE missed functions or could not tell the classes from each other, not that they could not find the functions&#8230;. no the main complaint was that they were S.L.O.W.!

Now Eclipse is SLOW! I don&#8217;t know how they managed to get this great IDE from slick to totally fat but it&#8217;s like you&#8217;re pushing a whale through a watertube! It&#8217;s SLOW! People get used to it.

So I used them all. Started at Eclipse (it&#8217;s SLOW!) , going to Netbeans (looked SLOW!), then to Notepad++ (well that obviously doesn&#8217;t work) and then I thought well what the Frack I&#8217;m gonna buy the best thing there is! So I bought PHPStorm!

I installed it, imported my projects. And guess WHAT! It was SLOW!! That was 90 euro&#8217;s nicely spend, NOT!

Indexing took like two decennia, the time it took for updating on SVN I could do a repaint of my whole house! During the updating of the project from SVN I two knitted sweaters!

And then I saw the light! Well actually PHPStorm showed me the light![<img alt="network_mounted_directory_may_be_slow_phpstorm" class="alignleft size-medium wp-image-870" height="37" src="https://vandersluijs.resultants-e.nl/2013/06/network_mounted_directory_may_be_slow_phpstorm-300x37-300x37.png" width="300" />](/images/2013/06/network_mounted_directory_may_be_slow_phpstorm-300x37.png)

So&#8230; working on mounts is slow? What? I&#8217;ve got a&nbsp;1Gigabit Network connection, and the files are on SSD&#8217;s!! Should I go for fiber optic?

So I talked to some of my colleagues and one told me that during the work he did outside the company he worked locally on a mounted drive!

> Say What?

Yes work locally on a mounted drive! And he told me how he did this.

All the project files where local on this laptop, and with rsync he synced the files (one way) the the mounted drive!

Al the indexing, svn updates, svn commits he did locally and then the rsync synced the files back to the mounted drive! Instantly! So then he pressed save, rsync instantly synced the file by using SSH and he could test his changes on the development server.

So I went on a small adventure! Within PHPStorm there&#8217;s a feature called &#8220;New Project from Existing Files Wizard&#8221; that I wanted to try.&nbsp;It&#8217;s very easy! PHPStorm just copies all the files (except for SVN and some other files or folders) to your local drive and with some preference adjustments PHPStorm puts the changes back to your mounted drive.

[<img alt="phpstorm" class="alignright size-medium wp-image-872" height="200" src="https://vandersluijs.resultants-e.nl/2013/06/phpstorm-300x200-300x200.png" width="300" />](/images/2013/06/phpstorm-300x200.png)Now&#8230; I hope you see where it goes wrong! It doesn&#8217;t copy the SVN files! PHPStorm thinks that you want to keep updating / committing on the mounted drive! But I don&#8217;t want that!

I copied the SVN folders back to my local drive, but that did not work either. Cause I left out a lot of folders, SVN&nbsp;thought hey where are those files? And it started updating many many files.

Okay&#8230; that doesn&#8217;t work&#8230; not the PHPStorm way. But it had to work.. somehow!

My colleague told me I had to start using rsync!

Okay, this is what I did. I SVN checked-out my project to my local drive! Then I searched for a good Mac tool for syncing, and come up with <a href="http://www.mudflatsoftware.com/dropsync.html" target="_blank" title="Syncing Files">Dropsync</a>!

> DropSync can be used to push local changes to a webserver, or make a local copy of a website&#8217;s files.

It&#8217;s a left to right or right to left rsync tool! It works great! You can tune it all the way like you would using rsync! You can leave out certain files or folders. I let Dropsync sync two projects from my localdrive to my mounted drive. It&#8217;s done over SSH, it&#8217;s fast and reliable!  
[<img alt="MainScreen_Syncing_500" class="alignleft size-medium wp-image-873" height="205" src="https://vandersluijs.resultants-e.nl/2013/06/MainScreen_Syncing_500-300x205-300x205.png" width="300" />](/images/2013/06/MainScreen_Syncing_500-300x205.png)If the connection is lost, you can always manually do a local to mount sync!

SVN updates and SVN commits are done on your local drive! Superfast! You can do it with PHPStorm or with any versioning tool you like to use.

Indexing in PHPStorm is superfast! PHPStorm is fast!&nbsp;That was 90 euro&#8217;s nicely spend, YES it &nbsp;actually was!!!

So there you go! It&#8217;s easy, with a little bit of work up front you&#8217;ve got a super fast, super stable project in your own IDE!

And yes, PHPStorm is a great IDE! I work with it every day!

Questions? Just ask!

This works with the following IDE&#8217;s to my knowledge! It&#8217;s SVN tested! But I guess it also works with Git!

<a href="http://www.jetbrains.com/phpstorm/" target="_blank" title="PHP IDE for developing smarter, not harder">PHPStorm</a>  
Smart PHP IDE with refactorings, code completion, on-the-fly code analysis and coding productivity orientation. For&nbsp;€89 you&#8217;ve got a Personal License. I bought it, and I love it!

<a href="http://www.eclipse.org/" target="_blank" title="A project aiming to provide a universal toolset for development. ">Eclipse</a>The PHP IDE project delivers a PHP Integrated Development Environment framework for the Eclipse platform. It&#8217;s free, &nbsp;I liked it a long time but it was very very slow and uses a lot of resources.

<a href="https://netbeans.org/" target="_blank" title="Fully-featured Java IDE written completely in Java, with many modules available, such as: debugger, form editor, object browser, CVS, emacs">Netbeans</a>  
NetBeans&nbsp;is an integrated development environment (IDE) for developing primarily with Java, but also with other languages, in particular PHP