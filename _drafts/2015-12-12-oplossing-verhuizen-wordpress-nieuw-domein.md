---
id: 1995
title: Oplossing verhuizen WordPress nieuw domein
date: 2015-12-12T06:00:32+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/?p=1995
permalink: /2015/12/oplossing-verhuizen-wordpress-nieuw-domein.html
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
hits:
  - "611"
itrr_another_apply:
  - 'no'
categories:
  - Tech
tags:
  - Wordpress
---
Het verhuizen van een WordPress domein kan voor nogal wat kopzorgen zorgen.

Probleem is namelijk dat WordPress geen dynamische domein namen gebruikt maar gewoon harde. Zowel in configuratie als in je content.

En als je dan je blog verplaatst dan werkt er in basis niets meer.<!--more-->

## Oplossing WordPress naar nieuw domein

Ik weet niet waarom er ooit gekozen is voor een niet dynamische domein oplossing in WordPress.

Het staat er keihard in (in config en in database) en als je je wordpress site gaat verhuizen naar een ander domein heb je dus een uitdaging.

Ik heb mijn site al een paar keer verhuist en loop steeds weer tegen het zelfde probleem aan.

> Waarom doet mijn WordPress site het niet

En de oplossing is eigenlijk heel simpel!

Twee regeltjes aanpassen of toevoegen in wp-config.php

&nbsp;

[infobox color=&#8221;#f4f4f4&#8243; textcolor=&#8221;#000000&#8243; icon=&#8221;code&#8221;]
  
  
define(&#8216;WP_HOME&#8217;,&#8217;http://jou-nieuwe-domein.nl&#8217;);
  
  
define(&#8216;WP_SITEURL&#8217;,&#8217;http://jou-nieuwe-domein.nl&#8217;);[/infobox]

&nbsp;

Klaar, je wordpress site doet het weer als vanouds!