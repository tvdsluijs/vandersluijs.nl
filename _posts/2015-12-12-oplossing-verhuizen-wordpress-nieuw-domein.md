---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2015-12-12 06:00:32+00:00
hits:
- '611'
layout: post
permalink: /2015/12/oplossing-verhuizen-wordpress-nieuw-domein.html
tags:
- Wordpress
title: Oplossing verhuizen WordPress nieuw domein

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