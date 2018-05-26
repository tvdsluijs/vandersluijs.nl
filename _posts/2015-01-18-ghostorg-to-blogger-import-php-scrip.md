---
id: 26
title: Ghost.org to Blogger import php script
date: 2015-01-18T08:32:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2015/01/18/ghostorg-to-blogger-import-php-scrip/
permalink: /2015/01/ghostorg-to-blogger-import-php-scrip.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "2403782505533486640"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2015/01/ghostorg-to-blogger-import-php-script.html
blogger_thumbnail:
  - https://farm8.staticflickr.com/7480/16119646628_2f567e1e6d_c.jpg
wp_review_location:
  - bottom
wp_review_desc_title:
  - Samenvatting
wp_review_color:
  - '#1e73be'
wp_review_fontcolor:
  - '#555555'
wp_review_bgcolor1:
  - '#e7e7e7'
wp_review_bgcolor2:
  - '#ffffff'
wp_review_bordercolor:
  - '#e7e7e7'
video_post_url:
  - ""
link_post_url:
  - ""
audio_post_url:
  - ""
pmc_featured_category:
  - "1"
pmc_featured_post:
  - "1"
hits:
  - "1337"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5737097831"
feature-img: https://vandersluijs.resultants-e.nl/2015/01/16119646628_2f567e1e6d_c.jpg
categories:
  - Tech
---
Ghost is a platform dedicated to one thing: Publishing. It&#8217;s beautifully designed, completely customisable and completely Open Source. Ghost allows you to write and publish your own blog, giving you the tools to make it easy and even fun to do.

The Ghost application is free. Free to use, free to modify, free to share, free to redistribute. You can do anything you like with the software, without legal restriction.

But I don&#8217;t want to modify it&#8230; I don&#8217;t want to redistribute it.. I just want to use it &#8230; without any installation or upgrading or anything&#8230; I just want to blog.

And than&#8230;. Ghost is not free!
  
<!--more-->


  
Don&#8217;t get me wrong. I&#8217;m a &#8220;happy&#8221; Ghost user. I love the clean interface and I love the Markdown to write my Blog items.

But after using Ghost.org for my Blog for 6 months I wanted to go back to Blogger for two obvious reasons.

**Reason 1: I don&#8217;t like paying twice !**

Don&#8217;t get me wrong! I pay for many many things. Like my Lightroom license (bought upgrades from version to up to 5), I bought many many apps for my Android, iPhone and Macbook. And I pay on a monthly base for my [DigitalOcean](https://www.digitalocean.com/?refcode=38909179d2dc) server!

So I&#8217;ve got my own server&#8230; why would I pay an extra 5 bucks for a blogging platform I can host myself. But I don&#8217;t want the hassle of updating my blogging platform every now and than. And I want my Blog te be secure with backups and all. Blogger does this all for your, withour paying a cent! (yes yes&#8230; free internet means that I&#8217;m the product)

**Reason 2: Ghost.org doesn&#8217;t do a Good SEO job**

Since I put my Blog on Ghost.org, visits went down like the <a href="http://en.wikipedia.org/wiki/Hindenburg_disaster#Landing_timeline" target="_blank">Hindenberg</a> in 1937!!!

SEO is bad on Ghost.org&#8230;. I had like 400 visitors a day on my Blog&#8230;. on Ghost it went down to 40 a MONTH!

So I decided that it was time to go back to Blogger.

Now, Ghost has a great tool to import your Blogger blogs. And Ghost actually has a Export tool to backup your own Blog. But! Blogger does not have a import tool for backups only made by&#8230; yes Blogger itself.

So I decided to make my own import tool. At first I created a XML generator from the JSON that Ghost exports. But with over 500 posts on my Blog, blogger does not seem to want to import the file. It can also be that Blogger just doesn&#8217;t want to eat the XML I created by their specs.

After trying a few XML files.. Blogger came up with another problem&#8230;. it told me I was trying to do to many imports a day&#8230; so I had to wait 24hours!

Okay&#8230;. that&#8217;s not going to work, I thought! But they have a API I connect to! Writing the PHP code to import all my Blogs by using the API I was happy to find another way for importing.

After my script was ready and run it for the first time&#8230;. another problem came up! Google and Blogger don&#8217;t like post flooding! Which means that you can only use the API for importing 50 posts on a daily base.

So I&#8217;ve rewritten my script to import 50 posts with the press of a link.

After this great journey from creating a XML generator to an API script importer, I thought it would be nice to share not only my knowledge about what you can and cann&#8217;t do with the Blogger import tool, but also to share the code I&#8217;ve written for connecting to the Blogger API.

Now, bare with me here, the code I&#8217;ve written will not win an Emmy award for best written code. It does not looks nice, it&#8217;s not OO and it does not have a lot of documentation. But it works for me. So you might want to rewrite parts for your self.

Next you need a few things to get this working.

First you need the Zend framework. I use this to create the connection
  
Second, if you use 2way authentication on your Google login you need an extra <a href="https://support.google.com/accounts/answer/185833?hl=nl&ctx=ch_DisplayUnlockCaptcha" target="_blank">App login</a>. The API (with oAUTH1.0) cannot handle 2way authentication. You can create an extra APP login in the <a href="https://security.google.com/settings/security/apppasswords" target="_blank" rel="nofollow">Apps Passwords page</a>.

And last but not least you need the following two php files.

Have fun importing your blog posts from Ghost.org to Blogger. I&#8217;ll be pressing the import link the next 11 days to import all 540 blog posts 🙂