---
id: 2937
title: 'Solution : PHP Warning: Module ‘newrelic’ already loaded in Unknown on line 0'
date: 2015-03-20T17:56:36+00:00
author: Theo van der Sluijs
layout: post
guid: https://itheo.nl/?p=2033
permalink: /blog/2015/03/solution-php-warning-module-newrelic-already-loaded-in-unknown-on-line-0.html
hits:
  - "507"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5704063426"
categories:
  - Tech
tags:
  - php
---
<div class="separator" style="clear: both; text-align: left;">
  So you are using NewRelic!
</div>

Good for you! New Relic is the Application Performance tool for your site with complete performance visibility for all aspects of your software environment. With it you can measure  Customer Experience and Business Success!!

But what about that nasty error?!?!?!
  
<!--more-->

<img class="alignleft wp-image-2035" title="Solution : PHP Warning: Module ‘newrelic’ already loaded in Unknown on line 0" src="https://itheo.nl/wp-content/uploads/2016/02/newrelic-300x300.png" alt="Solution : PHP Warning: Module ‘newrelic’ already loaded in Unknown on line 0" width="170" height="170" />New Relic is an American software analytics company based in San Francisco, California.It&#8217;s technology, delivered in a software as a service model, monitors Web and mobile applications in real-time that run in cloud, on-premises, or hybrid environments.

If you cannot build a web / mobile application monitor yourself you really should install New Relic. It really helps to find problems on server and application level. Do you have a slow web-shop? New Relic will tell you where the bottleneck is. It could be the hardware, but also MySQL or PHP. It really helps you pinpoint where the problems are.

Developing without this piece of software installed on your linux servers is a no go! But&#8230; if you can build a monitoring system yourself&#8230; do it yourself!

## New Relic Error Module ‘newrelic’ already loaded

At a certain point I had this error coming back to my terminal window when ever I ran a PHP script.

<blockquote class="tr_bq">
  <p>
     PHP Warning: Module ‘newrelic’ already loaded in Unknown on line 0
  </p>
</blockquote>

I drove me crazy&#8230;. why is this error coming back to me.

And then it came to me&#8230;. a new version was installed a few weeks ago&#8230;.. would there be multiple config-files?

And yes, when I searching for &#8220;newrelic.ini&#8221; I found several.

## Solution : Module ‘newrelic’ already loaded in Unknown on line 0

I solved it by removing  /etc/php5/cli/conf.d/newrelic.ini

No more : PHP Warning

No more : **Module ‘newrelic’ already loaded in Unknown on line 0**

New Relic is back to being just great!!

<div style="text-align: center;">
</div>