---
id: 30
title: Webshop hotfix schijf van vijf
date: 2014-11-27T20:58:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2014/11/27/webshop-hotfix-schijf-van-vijf/
permalink: /2014/11/webshop-hotfix-schijf-van-vijf.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "643637469944320661"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2014/11/webshop-hotfix-schijf-van-vijf.html
blogger_thumbnail:
  - https://farm8.staticflickr.com/7564/15893676895_f2f4bb6db5_c.jpg
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
  - "644"
dsq_thread_id:
  - "5761560170"
image: https://vandersluijs.resultants-e.nl/2014/11/15893676895_f2f4bb6db5_c.jpg
categories:
  - My Life
  - Tech
---
Hotfixes! Soms is het dagelijkse kost, soms komt het een tijdje niet voor. Maar hotfixes zullen altijd de dagelijkse ontwikkel flow verstoren. In veel organisaties is het niet duidelijk wat een hotfix nu precies is, of beter gezegd wat zou nu wel en wat zou nu niet een hotfix zijn.

Om daar duidelijkheid in te scheppen heb ik de Hotfix schijf van vijf bedacht.<!--more-->

### Mijn probleem is een hot fix! {#mijnprobleemiseenhotfix}

**Hotfix**

> Een hotfix is een enkelvoudig samengesteld softwarepakketje dat een of meer bestanden bevat die worden gebruikt om een probleem in een softwareproduct, zoals een programmeerfout, op te lossen. Gewoonlijk worden hotfixes gemaakt als klantenservice voor zeer specifieke situaties die uit klachten van gebruikers voortkomen.

Als je net zoals ik in de web ontwikkeling zit en dan met name web-shop (maar spiegel het gerust aan je eigen werk) dan herken je vast de volgende situatie&#8217;s!

> Ik moet nu een banner plaatsen maar krijg een foutmelding! (Marketing manager

of

> Ik heb een spelfout gezien die ik niet kan aanpassen (Copywriter)

of

> Ik krijg geen goede Google analytics gegevens door!(Seo/Sea beheerder)

Als het aan de gebruiker zou liggen zou alles een hotfix zijn! Dit kan je toch wel &#8216;even&#8217; oplossen. Deze feature heb ik nu echt nodig, dat is toch maar 2 minuten werk?

De site is niet kapot, de klant kan nog gewoon bestellen maar toch vinden deze personen hun probleem zo groot dat ze dit waarschijnlijk als hotfix gaan inschieten.

Maar is dit een hotfix? Kan een seo/sea beheerder 2 dagen wachten tot het is opgelost of zelfs een week? Kan een actie later online of moet je de huidige ontwikkel flow hier echt voor gaan frustreren.

Ik denk van niet. Maar in de ogen van de gebruiker van het systeem, de copywriter, de marketeer, de seo/sea beheerder is dit wel een groot probleem.

Tot nu kon ik ze nooit goed uitleggen dat dit geen hotfix kon zijn. En toen heb ik de &#8220;hot-fix schijf van vijf bedacht&#8221;!

### De hotfix schijf van vijf {#dehotfixschijfvanvijf}

Om te voorkomen dat iedereen direct denkt dat zijn probleem een hotfix is heb ik nagedacht hoe ik dit op de werkvloer duidelijk kon maken. Eigenlijk hoefde ik er ook niet heel lang over na te denken. De gedachte bij mij was, wat is onze Core Business?

> verkopen aan klanten

Zonder verkoop geen geld, zonder geld geen bedrijf!

Welke stappen zijn belangrijk in het verkopen aan de klant?

  * vinden
  * bekijken
  * bestellen
  * afrekenen
  * ontvangen

Als één van deze stappen ontbreekt krijgt de klant zijn goederen niet en wij dus geen geld.

Alles wat daar buiten valt frustreert de aankoop van de klant niet en kan dan derhalve ook niet belangrijk zijn.

Niet belangrijk genoeg voor een hotfix!

En daar was toen de hotfix schijf van vijf!!

#### Vinden, bekijken, bestellen, afrekenen, ontvangen {#vindenbekijkenbestellenafrekenenontvangen}

Als klant doorloop je verschillende stappen om een product te kunnen gaan gebruiken.

  1. Klant moet product kunnen vinden
  2. Klant moet product kunnen bekijken
  3. Klant moet product kunnen bestellen
  4. Klant moet product kunnen afrekenen
  5. Klant moet product kunnen ontvangen

Als één van deze stappen ontbreekt zal de klant niet ontvangen wat hij wil en zal het dan dus ook geen geld betalen of zijn geld gaan terug vragen. Alle punten zijn van boven naar onder afhankelijk van elkaar. Mist er een stap dan kan de klant niet verder en zal de klant zijn product niet ontvangen.

#### Klant moet product kunnen vinden. {#klantmoetproductkunnenvinden}

Als een klant een product niet kan vinden, via de zoekbalk of via het klikken door categorieën, kan hij het product ook niet bekijken en/of bestellen. Wanneer de klant het product niet vindt, zal er dus ook geen levering plaatsvinden. Het niet kunnen vinden van een product kan het gevolg zijn van allerlei problemen. Iemand is bijvoorbeeld vergeten het product te publiceren of door een bug wordt het product niet getoond onder een categorie of in een zoekvenster. Denk in dat laatste geval aan een niet goed lopende sync naar bijvoorbeeld een SORL- of ElasticSearch-omgeving. Deze problemen vallen dus onder een hotfix!

#### Klant moet een product kunnen bekijken {#klantmoeteenproductkunnenbekijken}

Vaak wil een klant een product bekijken, of het nu de productpagina zelf is of een product in een categorieoverzicht. Kan het product niet bekeken worden, dan kan de klant het product niet bestellen en niet afrekenen. Er zal in zo&#8217;n geval dus geen levering plaatsvinden. Het niet kunnen bekijken van een product heeft verschillende mogelijke oorzaken. Er kan een bug zijn waardoor de routing niet goed loopt en er een 404 optreedt. Het kan zijn dat een sync naar een ERM-pakket niet goed loopt, waardoor het product uit assortiment lijkt te zijn en niet getoond wordt. Verder moet de productinformatie accuraat zijn om tot bestelling over te kunnen gaan. Ofwel, wanneer een voorraad of prijs niet klopt, zal een klant het product niet bestellen.

#### Klant moet een product kunnen bestellen {#klantmoeteenproductkunnenbestellen}

Als een klant een product gevonden en/of bekeken heeft en de voorraad en prijs zijn correct, zal hij waarschijnlijk over willen gaan tot bestellen. Het is daarom van belang dat een product in een winkelwagentje/mandje komt. De klant doet dit door te klikken op een bestelknop of door middel van een bijbestellen-vinkje. Als een product om wat voor reden dan ook niet in het winkelwagentje komt of wanneer een klant niet het gewenste aantal kan instellen, kan er niet tot betaling worden overgegaan en zal het product niet bij de klant aankomen.

Hotfix dus!

#### Klant moet een product kunnen afrekenen {#klantmoeteenproductkunnenafrekenen}

Als de klant klaar is met het vullen van zijn winkelwagentje, zal hij over willen gaan tot betaling en verzending. Het hele checkout-proces moet dus zonder problemen doorlopen kunnen worden.

Onder de checkout wordt meestal verstaan:

  * het kunnen inloggen of registeren;
  * toevoegen/muteren factuur en verzendadres(sen);
  * keuze betaalmogelijkheid;
  * keuze verzendmogelijkheid;
  * het daadwerkelijk kunnen betalen.

Het is hierbij goed mogelijk dat wanneer het betalen via een PSP gaat, het ingrijpen bij de externe betaalpartij ook onder de hotfix valt (al is het maar dat development of de ondersteunende afdeling daarnaar gaat bellen!)

De rest van het lijstje lijkt me vanzelfsprekend. Als de klant niet kan inloggen, registeren of via snelle checkout geen factuur en verzendadres kan aanmaken, zal hij het product niet kunnen ontvangen. Ook wanneer een klant zijn gegevens niet kan wijzigen na inloggen, zal de klant het product niet krijgen waar hij het wil hebben.

#### Klant moet een product kunnen ontvangen {#klantmoeteenproductkunnenontvangen}

Als de klant het product gevonden, bekeken, besteld en afgerekend heeft, zal hij het pakket verwachten. Alhoewel dit proces grotendeels buiten de webshop plaatsvindt, zullen bijvoorbeeld de syncs richting een ERP, WMS of logistiek pakket wel moeten werken. Als deze syncs niet goed lopen, zal het product niet afgeboekt, niet gepickt en niet verzonden worden en zal de klant het product niet ontvangen.

Dit deel zou ook een hotfix moeten zijn binnen het systeem.

### Duidelijkheid {#duidelijkheid}

Wat is er mooier dan een duidelijke uitleg naar diverse afdelingen binnen het bedrijf over wat nu wel en wat geen hotfix is. De Webshop hotfix schijf van vijf is dit! Het is al snel duidelijk bij de betreffende afdelingen of hun probleem hier nu wel of niet in valt.

Misschien past dit geheel niet binnen het bedrijf waar je werkt, natuurlijk ben je dan vrij om het zo neer te zetten dat het wel klopt maar maak er daarna wel een poster van zodat je die op strategische plaatsen kan ophangen.

![Hot fix webshop schijf van 5](https://farm8.staticflickr.com/7564/15893676895_f2f4bb6db5_c.jpg)

[Meer formaten](https://www.flickr.com/photos/tvds/15893676895/sizes/l/)

Met dank aan [Joost van Cadzand](http://damnright.nl/) en [Bax-shop](http://www.bax-shop.nl)