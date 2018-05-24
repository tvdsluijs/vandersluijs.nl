---
id: 23
title: MongoDB backups op Amazon S3 met S3CMD
date: 2015-01-30T21:25:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2015/01/30/mongodb-backups-op-amazon-s3-met-s3cmd/
permalink: /blog/2015/01/mongodb-backups-op-amazon-s3-met-s3cmd.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "3482757085522472533"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2015/01/mongodb-backups-op-amazon-s3-met-s3cmd.html
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
  - "561"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "6010823206"
categories:
  - Tech
tags:
  - MongoDB
---
In mijn laatste post heb ik geschreven over de installatie, configuratie van S3CMD en hoe je eenvoudig backups kan maken van je MySQL databases en web files.

In deze post leg ik uit hoe je heel eenvoudig een backup kan maken van je MongoDb op je Amazon s3 Bucket met S3CMD.
  
<!--more-->

Op veel van mijn sites zoals [NopNop.nl](http://www.nopnop.nl/), [Woodbrass.nl](http://www.woodbrass.nl/) en [GebruikMaar.nl](http://www.gebruikmaar.nl/) draai ik MongoDB dus ik vond het tijd dat ik maar eens een backup ging maken van deze databases op een andere cloud-omgeving dan mijn&nbsp;<a data-cke-saved-href="https://www.digitalocean.com/?refcode=38909179d2dc" href="https://www.digitalocean.com/?refcode=38909179d2dc">DigitalOcean</a>&nbsp;server. Ook maar op een Amazon S3 Bucket.

Met onderstaand bash script kan je via een cronjob kinderlijk eenvoudig backups maken van je MongoDb. Het is eenvoudig aan te passen naar eigen wensen.

Via deze weg is je MongoDB ook weer netjes gebackuped op een veilige Cloud omgeving.
  


<div style="text-align: center;">
  <b><i>Ik hou van koffie&#8230; dus als je bovenstaande handig vond doneer dan.</i></b>
</div>

<div style="text-align: center;">
  <b><i>&nbsp;Rechts boven in staan mijn doneer knoppen!</i></b>
</div>