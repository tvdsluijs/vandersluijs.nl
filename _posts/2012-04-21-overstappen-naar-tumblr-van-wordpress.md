---
id: 197
title: Overstappen naar Tumblr van wordpress, hoe gaat dat.
date: 2012-04-21T11:02:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2012/04/21/overstappen-naar-tumblr-van-wordpress/
permalink: /blog/2012/04/overstappen-naar-tumblr-van-wordpress.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "6667643006175225240"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2012/04/overstappen-naar-tumblr-van-wordpress.html
hits:
  - "589"
itrr_another_apply:
  - 'no'
categories:
  - Tech
---
Okay, je wilt dus overstappen van WordPress naar Tumblr?

Wees gewaarschuwd je beweegt je op gevaarlijk gebied.

Overstappen is niet zonder consequenties. Je kan bijvoorbeeld zomaar al je bezoekers kwijt raken.

Maar wat moet je nu precies doen en weten als je wilt overstappen? En waar dien je rekening mee te houden bij de overstap van WordPress naar Tumblr.

Dat lees je in dit artikel.<a name="more"></a>

Okay, eerst maar even de nadelen.

Al je Urls veranderen dus er bestaat grote kans dat je je bezoekers gaat verliezen en wellicht ook je pagerank;  
Importeren van je WordPress blog gaat niet!   
Als je je WordPress blog pushed naar tumblr gaan foto’s / plaatjes niet mee;  
De voordelen van het hebben van een tumblr site heb ik in een ander artikel beschreven.

Importeren van je WordPress site in tumblr gaat dus niet. Tumblr heeft voor geen één andere blog service de mogelijkheid om te importeren. Gelukkig kan het wel met een plugin in wordpress. Er zijn er diverse te vinden en waarschijnlijk is er nu een betere dan ik gebruikte dus zoek er gewoon even op.

De plugins die voor wordpress geschreven zijn gebruiken de Tumblr api om je artikelen te pushen naar tumblr.

Er is echter 1 groot nadeel, en dat is dat je foto’s en plaatjes niet meegaan naar tumblr. Dat komt omdat de plaatjes vanaf jou site niet geupload worden naar tumblr, omdat tumblr denkt dat de images op een server staan waar hij ze kan blijven bekijken… maar ja… daar ga je dus de stekker uit trekken.

Youtube fimpjes blijven overigens wel gewoon zichtbaar want die haalt tumblr… je raadt het al bij Youtube vandaan via de code die in het bericht staat.

Dat je Urls veranderen en dus je google search geheel naar de knoppen gaat is gelukkig grotendeels op te vangen door de sitemap te gebruiken die tumblr gratis en voor niets maakt voor je. Die kan je opvragen via <http://www.jouwblog.nl/sitemap1.xml> of <http://jouwblog.tumblr.com/sitemap1.xml>

Als je die bij webmaster tools invult dan gaat het indexeren weer beginnen. Maar eigenlijk wil je gewoon via een htaccess de redirects doen. En dat doe je dus via Page redirects… die je handmatig moet instellen overigens… (en dat kan een berg werk zijn)

Om goed ge-indexeert te worden moet je overigens wel je even je template aanpassen zodat google er iets mee kan. De meeste templates ondersteunen namelijk geen goede manier van indexeren. Of beter gezegd, de templates renderen niet juist alle informatie zodat google er eigenlijk niets mee kan.

In dit artikel kan je vinden hoe je het beste je template kan aanpassen.

Een andere gouden tip… maak een backup van je wordpress site voordat je echt alles weggooit. Misschien wil je ooit nog terug 😉

Maar als je doorzet komt het vast goed met je tumblr site! En kan je je wordpress backup toch weggooien.