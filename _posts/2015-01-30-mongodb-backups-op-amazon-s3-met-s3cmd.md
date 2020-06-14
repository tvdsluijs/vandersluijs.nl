---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2015-01-30 21:25:00+00:00
dsq_thread_id:
- '6010823206'
hits:
- '561'
layout: post
permalink: /2015/01/mongodb-backups-op-amazon-s3-met-s3cmd.html
tags:
- MongoDB
title: MongoDB backups op Amazon S3 met S3CMD

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