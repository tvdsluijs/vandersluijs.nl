---
author: tvdsluijs
categories:
- Fotografie
comments: 'true'
date: 2015-02-18 20:58:00+00:00
dsq_thread_id:
- '5853232214'
hits:
- '627'
image: https://vandersluijs.resultants-e.nl/2015/02/1424312906_blog_compose.png
layout: post
permalink: /2015/02/plaats-je-blog-fotos-buiten-je-site-via.html
title: Plaats je Blog foto&#8217;s buiten je site via Amazon S3, Cloudfront of Flickr

---
<div class="separator" style="clear: both; text-align: left;">
  WordPress, Blogger, Ghost.org, Tumblr, SquareSpace, het zijn stuk voor stuk prima sites waar je je blog kan plaatsen. Je kan met sommige op je eigen server een blog beginnen maar ze bieden ook allemaal de optie om het bij hun in de cloud te doen.<br /> Hoe dan ook, services genoeg om je site / blog te starten! Maar pas op met plaatjes en foto&#8217;s!!<!--more--></p> 
  
  <p>
    Ik heb al heel wat blogs gehad. Dat wil zeggen ik heb bij verschillende partijen en met verschillende systemen.
  </p>
  
  <p>
    Ik heb eerst mijn eigen CMS geschreven, daarna ben ik over gestapt op Joomla!, ik ging naar WordPress toen naar mijn eigen installatie van WordPress, naar Blogger, daarna naar Tumblr, weer terug naar Blogger, naar WordPress, naar Blogger, naar Ghost.org en weer terug naar Blogger.
  </p>
  
  <p>
    Niet alleen leerde me dit dat mijn Ranking naar zijn knoppen ging omdat ik nooit de juiste URL&#8217;s naar mijn blogposts terug kreeg en Google me dus ieder keer opnieuw helemaal opnieuw moest indexeren en er dus veel te veel 404&#8217;s op mijn site waren.
  </p>
  
  <p>
    Maar daar gaat deze Blog-Post niet over. Elke keer als ik mijn site &#8220;verplaatste&#8221; raakte ik ook veel of zo niet al mijn plaatjes en foto&#8217;s kwijt. Zo niet ook de laatste keer weer van Ghost.org naar Blogger.
  </p>
  
  <p>
    Probleem is dat veel blog services zoals WordPress.com, Blogger, Ghost, Tumblr enz zetten plaatjes en foto&#8217;s op hun eigen cloud servers en als je geen import tool hebt om die plaatjes en foto&#8217;s mee te nemen naar je eigen blog&#8230;. well&#8230;. you&#8217;re fucked!
  </p>
  
  <p>
    Geen plaatjes, Geen foto&#8217;s&#8230;. Blog Posts zonder images&#8230;.. Heb ik nu dus ook.
  </p>
  
  <p>
    Maar dat kan anders! Als je het nu goed oppakt, maakt het nooit meer uit waar je je blog heen verhuist!
  </p>
  
  <p>
    Je moet namelijk je plaatjes op een aparte cloud omgeving zetten. Alles kan, Amazon S3 of Amazon Cloudfront of zoals ik nu doe via Flickr!
  </p>
  
  <p>
    Voordeel is dus dat je Blog posts weet dat de plaatjes dus van Amazon of Flickr moeten komen en niet van Ghost / Blogger of Tumblr. En zodra je verhuist dan weet de nieuwe omgeving ook waar de plaatjes vandaan moeten komen.
  </p>
  
  <p>
    Als je het echt goed wil doen, zet je plaatjes dan op Amazon S3, koppel Amazon Cloudfront er aan en zorg dat je een eigen subdomein (bijv: images.jouwdomein.nl) via een CNAME aan cloudfront koppelt.
  </p>
  
  <p>
    Dan haal je je altijd je plaatjes en foto&#8217;s via je &#8220;eigen domein&#8221; op een goede en altijd werkende manier op of je nu verhuist naar Blogger, Ghost of Tumblr.
  </p>
  
  <div style="text-align: center;">
    <b><i>Ik hou van koffie&#8230; dus als je bovenstaande handig vond doneer dan.</i></b></p> 
    
    <div style="text-align: center;">
      <b><i> Rechts boven in staan mijn doneer knoppen!</i></b></p>