---
id: 504
title: GUI op een Ubuntu Server
date: 2008-07-11T21:22:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2008/07/11/gui-op-een-ubuntu-server/
permalink: /blog/2008/07/gui-op-een-ubuntu-server.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "7734284029166065432"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2008/07/gui-op-een-ubuntu-server.html
hits:
  - "1331"
itrr_another_apply:
  - 'no'
categories:
  - Tech
---
Dus je wilt echt een GUI op een Ubuntu Server ?

Tja, dan moet je wel zoals mij zijn.

Je weet wel wat van Linux maar niet genoeg om een server helemaal op te zetten en te onderhouden.

Met de Ubuntu Client heb je wel al genoeg ervaring en je houdt er gewoon van om die muis te gebruiken.

Ja, ik ben het met je eens dat GUI&#8217;s het leven van een mens wel makkelijker maken.

<a name="more"></a>

Goed, maar je moet 1 ding weten, een GUI gebruikt veel ruimte. Dus als je een servertje hebt waar je niet genoeg HDD ruimte op hebt zitten, doe dit dan NIET.

Open een Putty sessie naar je server (of log gewoon in op je server) en geef de volgende regel in.



<pre>sudo apt-get install ubuntu-desktop</pre>

Oh, je wilt ook nog dat het automatisch start als je server opstart. Nee hoor je bent helemaal niet veeleisend

&nbsp;



<pre>sudo nano /etc/rc.local</pre>

En voeg toe:



<pre>sudo startx</pre>

rc.local zal er dan uit zien zoals (kan dus anders zijn)



<pre>#!/bin/sh -e<br />#<br /># rc.local<br />#<br /># This script is executed at the end of each multiuser runlevel.<br /># Make sure that the script will "exit 0" on success or any other<br /># value on error.<br />#<br /># In order to enable or disable this script just change the execution<br /># bits.<br />#<br /># By default this script does nothing.<br />sudo startx<br />exit 0</pre>