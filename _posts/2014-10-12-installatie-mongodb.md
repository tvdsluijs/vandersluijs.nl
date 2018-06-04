---
id: 34
title: Installatie MongoDB
date: 2014-10-12T15:48:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2014/10/12/installatie-mongodb/
permalink: /2014/10/installatie-mongodb.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "6334141436027431585"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2014/10/installatie-mongodb.html
blogger_thumbnail:
  - /images/2014/10/mongoDB-logo.png
hits:
  - "575"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5842790051"
categories:
  - Tech
---
![MongoDB installatie](https://vandersluijs.resultants-e/2014/10/mongoDB-logo.png)

MongoDB is een open source NoSQL document-georiënteerde database. Er is geen database schema en records (documenten genaamd) worden in Binair JSON opgeslagen. Documenten / Records zijn flexibel en je zit dus niet vast aan hoe de velden heten, hoe groot ze zijn enz. MongoDB kent geen relationeel (DBS) databasemanagementsysteem en je kan geen joins gebruiken.

MongoDB is hierdoor razendsnel en kan enorm groot zijn zonder aan snelheid in te hoeven boeten.

Wil je ook MongoDB gebruiken&#8230;. dan is het wellicht handig dat je weet hoe je het instaleert.

### Installatie van MongoDB {#installatievanmongodb}

MongoDB kan op ieder OS geïnstalleerd worden. Of het nu Linux, Apple OS X of Windows is, het kan op bijna ieder systeem draaien. 

Zelf denk ik dat het het beste draait op een Linux gebaseerd systeem, maar als je het wil installeren op een windows bak ga gerust je gang.

De uitleg hier onder zal op een linux gebaseerd systeem zijn, maar op de [MongoDB](http://docs.mongodb.org/manual/installation/) site zelf hebben ze voor ieder systeem wel een uitleg.

### MongoDB & PHP {#mongodbphp}

Hieronder leg ik uit hoe je MongoDB samen met de php extension kan installeren.

Het zijn drie eenvoudige stappen, en ik denk dat wanneer je enige terminal (shell) ervaring hebt dat je het moet kunnen.

Open een terminal en voer de volgende regels uit.

##### Stap 1 {#stap1}

<pre>apt-get install php5-dev php5-cli php-pear  <br /></pre>

##### Stap 2 {#stap2}

<pre>pecl install mongo  <br /></pre>

Open daarna je php.ini file en voeg onder het kopje **extensions** het volgende toe

extension=mongo.so

> That&#8217;s all!!

Tja&#8230;. moeilijker dan dit wordt het echt niet 🙂

Waar **Stap 3** is? 

Oh ja&#8230;.

##### Stap 3 {#stap3}

Veel plezier met het gebruik van MongoDB!

MongoDB kan je ook installeren op een [Digital Ocean](https://www.digitalocean.com/?refcode=38909179d2dc) omgeving!