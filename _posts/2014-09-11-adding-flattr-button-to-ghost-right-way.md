---
id: 41
title: Adding a Flattr button to Ghost, the right way
date: 2014-09-11T20:21:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2014/09/11/adding-flattr-button-to-ghost-right-way/
permalink: /blog/2014/09/adding-flattr-button-to-ghost-right-way.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "4433573437863102432"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2014/09/adding-flattr-button-to-ghost-right-way.html
hits:
  - "818"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "6476869394"
categories:
  - Tech
---
So you want to add a Flattr button to Ghost?

You&#8217;ve read this post [Adding a Flattr button to Ghost](http://whird.jpope.org/adding-a-flattr-button-to-a-ghost-blog/) by Jeremy Pope but it just doesn&#8217;t work?

I had the same problem!

But here&#8217;s how you can make it work! 

### The Wrong Way {#thewrongway}

There&#8217;s nothing really wrong with [Jeremy Pope](http://whird.jpope.org/adding-a-flattr-button-to-a-ghost-blog/) way. I guess the post is just old and the Ghost code changed.

I had all kinds of problems with this way of implementing it.

### The Right Way {#therightway}

But actually it&#8217;s very easy to implement a Flattr button in your page

You really don&#8217;t need to know a lot of coding.

Just open up the file &#8220;post.hbs&#8221; in a notepad/texteditor and and put the following lines of code wherever you want the button to show up!

**Now, don&#8217;t forget to make your changes!!**

In this code change YOURFLATTRUSERNAME (user_id=) to your own username

And change language to your own language code, mine is _language=nl_NL_

nl_NL is for Dutch, The Netherlands 

en_GB is for English, Great Britain 

en_US is for English, US

That&#8217;s it!

Save the file, zip the theme and upload it to your ghost CMS!

And don&#8217;t forget to flattr this post 🙂

Did you know you can host your own Ghost blog on your own [Digital Ocean](https://www.digitalocean.com/?refcode=38909179d2dc) server?