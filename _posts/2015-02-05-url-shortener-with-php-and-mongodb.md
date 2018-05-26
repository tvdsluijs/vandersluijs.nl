---
id: 22
title: Url shortener with PHP and MongoDB script
date: 2015-02-05T19:42:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2015/02/05/url-shortener-with-php-and-mongodb/
permalink: /2015/02/url-shortener-with-php-and-mongodb.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "4009359999460601796"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2015/02/url-shortener-with-php-and-mongodb.html
blogger_thumbnail:
  - http://3.bp.blogspot.com/-Db4N4kTCljc/VNPCcW4bCbI/AAAAAAABRzY/9ws3flksoAs/s1600/1423185597_basic1-029_url_web_address-512.png
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
  - "2200"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5700415773"
image: https://vandersluijs.resultants-e.nl/2015/02/1423185597_basic1-029_url_web_address-512.png
categories:
  - Tech
tags:
  - MongoDB
---
<div class="separator" style="clear: both; text-align: left;">
  Last week at work some marketing guys asked me if I could build a URL Shortener script.
</div>

They did not want to use bitly anymore.

I told them that I had a url shortener sites ones (snurl.eu) and that I could probably could find the script again.

When I found the script and thought about MongoDB&#8230; I guess it was time to rewrite it.
  
<!--more-->

So when I had the internet site Snurl.eu I wanted to have my own URL shortener service. I was kinda lazy so I searched for a PHP script that did just wat I wanted.

So I stumbled upon the Script build by Brian Cray. His &#8220;**<a href="http://briancray.com/posts/free-php-url-shortener-script/" target="_blank" rel="nofollow">Free PHP URL shortener script that kicks ass</a>**&#8221; as he called it was perfect. Build in 2009.. so a bit old but it did the trick.
  
**
  
** 
  
Now 6 years later I rebuild it. Why&#8230;.? well I just love MongoDB. Don&#8217;t get me wrong. MySQL is great&#8230; but for simple and big ass databases.. with hits-updates&#8230;. well you don&#8217;t want to use MySQL anymore! You want a NoSQL version!

Since I created the [NopNop.nl](http://www.nopnop.nl/) site with MongoDB and it has shown it&#8217;s strength and speed to me, I really wouldn&#8217;t know why I would use MySQL for these purposes.

Sorry&#8230;. back to the Url Shortener! So&#8230;. when my colleagues asked me for this Url Shortener script, I pulled the Brian Cray script and did a little rebuild 🙂

It&#8217;s still has these great features (and more!):

  * Can shorten over 42 billion unique URLs in 6 or less characters or if you want it can do 12.000.000 in only 4 characters!!!
  * It&#8217;s even super duper super fast, as it uses MongoDB and uses like almost no server resources
  * Yes, it does include an API, for creating short URL&#8217;s on the fly!
  * Wanna count those visites? Just turn it on!
  * Option to limit to one ore more IP addresses for personal use and to prevent spamming!!
  * It uses only alphanumeric characters so all browsers can interpret the URL (yes even IE)
  * SQL injection hacks?? Ha ha ha it&#8217;s Mongo!!!
  * Url realness checker! No more 404&#8217;s
  * Uses 301 redirects for SEO.
  * Wanna cache? Not needed with MongoDB, but still an option!
  * Wanna use your own short url? Just send it with the Long Url!

### Installation is easy!

&nbsp;

<div>
  <b>Make sure your server meets the requirements:</b>
</div>

<div>
  <div>
    <ul>
      <li>
        Run this from your own (short) domain
      </li>
      <li>
        Apache
      </li>
      <li>
        PHP
      </li>
      <li>
        MongoDB
      </li>
    </ul>
  </div>
  
  <div>
  </div>
  
  <div>
    Download the script from <a href="https://bitbucket.org/tvdsluijs/url-shortener-php-mongodb">BitBucket</a>!
  </div>
  
  <div>
    Upload the files to your web server
  </div>
  
  <div>
  </div>
  
  <div>
    If you want to use the caching option, create a directory named cache with permissions 777
  </div>
</div>

<div>
</div>

<div>
  <b>That&#8217;s IT!</b>
</div>

<div>
</div>

<div>
  <h3>
    Using your personal URL shortener service
  </h3>
  
  <div style="background-color: white; box-sizing: border-box; color: #333333; font-family: 'Roboto Slab', serif; font-size: 16px; line-height: 24px; margin-bottom: 24px; position: relative;">
    To manually shorten URLs open in your web browser the location where you uploaded the files. You should see a simple form to add your url, which will return a shortened version.
  </div>
  
  <div style="background-color: white; box-sizing: border-box; color: #333333; font-family: 'Roboto Slab', serif; font-size: 16px; line-height: 24px; margin-bottom: 24px; position: relative;">
    To programmatically shorten URLs with PHP use the following code:
  </div>
  
  <div class="highlight" style="background: #f0f0f0; border: 1px solid #cccccc; box-sizing: border-box; color: #333333; font-family: 'Roboto Slab', serif; font-size: 16px; line-height: 24px; margin-bottom: 24px; min-width: 100%; overflow: hidden; padding: 12px; position: relative;">
    <pre style="box-sizing: border-box; font-family: monospace, serif; font-size: 12px; line-height: 16px; position: relative; white-space: pre-wrap; word-wrap: break-word;">$shortenedurl = file_get_contents('http://yourdomain.com/shorten.php?longurl=' . urlencode('http://' . $_SERVER['HTTP_HOST']  . '/' . $_SERVER['REQUEST_URI']));</pre>
  </div>
</div>

I like to thank <a href="https://github.com/briancray/PHP-URL-Shortener" target="_blank" rel="nofollow">Brian Cray</a> for his versions.

You can find my script on [BitBucket](https://bitbucket.org/tvdsluijs/url-shortener-php-mongodb).

<div style="text-align: center;">
  <b><i>I do like coffee! So if you like, please donate a penny or so.</i></b>
</div>

<div style="text-align: center;">
  <b><i> You can find my donate buttons on the top right!</i></b>
</div>