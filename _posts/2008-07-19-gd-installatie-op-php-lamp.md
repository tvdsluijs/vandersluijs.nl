---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2008-07-19 21:30:00+00:00
dsq_thread_id:
- '6232945692'
hits:
- '1570'
layout: post
permalink: /2008/07/gd-installatie-op-php-lamp.html
title: GD installatie op PHP / LAMP

---
Er worden veel vragen gesteld over GD installatie na een LAMP installatie op een Ubuntu server. Php GD Library dient om plaatsjes te maken in PHP. En geloof me, dat wil je. Denk maar aan een foto album. Maar ook CMS paketten zoals Joomla! maken hier gebruik van. Maar bij een standaard LAMP installatie is dit dus niet geïnstalleerd. Maar dan kan je heel makkelijk zelf.   
<a name="more"></a>  
Open een putty sessie: 

<pre>sudo apt-get install php5-gd</pre>

Daarna apache herstarten met&#8230; 

<pre>sudo /etc/init.d/apache2 restart</pre>