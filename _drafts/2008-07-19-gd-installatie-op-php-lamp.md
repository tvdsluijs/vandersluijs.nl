---
id: 499
title: GD installatie op PHP / LAMP
date: 2008-07-19T21:30:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2008/07/19/gd-installatie-op-php-lamp/
permalink: /2008/07/gd-installatie-op-php-lamp.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "5554865503555104901"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2008/07/gd-installatie-op-php-lamp.html
hits:
  - "1570"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "6232945692"
categories:
  - Tech
---
Er worden veel vragen gesteld over GD installatie na een LAMP installatie op een Ubuntu server. Php GD Library dient om plaatsjes te maken in PHP. En geloof me, dat wil je. Denk maar aan een foto album. Maar ook CMS paketten zoals Joomla! maken hier gebruik van. Maar bij een standaard LAMP installatie is dit dus niet geïnstalleerd. Maar dan kan je heel makkelijk zelf.   
<a name="more"></a>  
Open een putty sessie: 

<pre>sudo apt-get install php5-gd</pre>

Daarna apache herstarten met&#8230; 

<pre>sudo /etc/init.d/apache2 restart</pre>