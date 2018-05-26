---
id: 28
title: Ducentis Ghost theme review
date: 2015-01-10T08:05:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2015/01/10/ducentis-ghost-theme-review/
permalink: /2015/01/ducentis-ghost-theme-review.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "9111329479724925219"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2015/01/ducentis-ghost-theme-review.html
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
  - "1544"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "6046728376"
categories:
  - Tech
---
Al een tijdje ben ik op zoek naar een beter thema voor mijn Ghost.org blog.

Door mijn werk ben ik al heel veel te weten gekomen over hoe je het beste HTML code voor Google kan presenteren door bijvoorbeeld gebruik te maken van schema.org

De meeste thema&#8217;s ondersteunen dit helaas nog niet goed, maar ik heb er nu één gevonden die dit wel doet, namelijk, [Ducentis](http://ducentis.ghost.io/).

Hij kost wel 29 dollar! Maar als je een preview er over schrijft kan je hem gratis krijgen&#8230; dus raad is wat ik nu doe 🙂<!--more-->

### Ducentis Thema {#ducentisthema}

Ducentis is een zeer compleet thema het heel veel functionaliteit speciaal voor Ghost. Hier onder staan 20 redenen om Ducentis volgens de makers te gaan gebruiken, namelijk:

  * De bouwers van Ducentis maken al thema&#8217;s sinds de release van Ghost in oktober 2013 en ze kennen Ghost van binnen en van buiten.

&nbsp;

  * Ze maken gedegen beslissingen en ze geven opties die zinvol zijn.

&nbsp;

  * Ze hebben veel passie voor kunst. Schrijven, fotografie en creatieve expressie zijn hun dagelijks ding..

&nbsp;

  * Wij zetten dachten in dingen en dingen in gedachten, oftewel ze blijven het verbeteren.

&nbsp;

  * Ze hebben over een periode van maanden gewerkt aan dit thema om het zo beter en beter te maken.

&nbsp;

  * Je hoeft zelf niet in de code te duiken om iets te configureren.

&nbsp;

  * Je kan makelijk updates doen van het thema zonder dat je configuratie kwijt raakt.

&nbsp;

  * Je hoeft maar één licentie te kopen en daarna mag je het op al je eigen blogs gebruiken.

&nbsp;

  * Het is ontworpen om je content heen.

&nbsp;

  * Het thema is geoptimaliseerd voor SEO.

&nbsp;

  * Het thema is geoptimaliseerd voor Google Page Speed

&nbsp;

  * Voor toegankelijkheid volgt het de &#8220;Best Practices&#8221;.

&nbsp;

  * Het is geschreven op de W3C HTML5 voorgestelde aanbevelingen en het is W3C geldig.

&nbsp;

  * Het heeft zeer gedetailleerde documentatie, die je begeleid van installatie tot maatwerk aanpassingen van je site.

&nbsp;

  * Het gebruikt de beste derde partij plugins die er zijn.

&nbsp;

  * Het integreert met populaire services zoals Google Analytics, Disqus, Embedly en MailChimp.

&nbsp;

  * Het heeft zeer schone code en geoptimaliseerde CSS en JavaScript.

&nbsp;

  * Het kan makkelijk uitgebreid of aangepast worden.

&nbsp;

#### Maar wat vind ik zelf? {#maarwatvindikzelf}

Ik heb natuurlijk zelf ook wat testjes gedaan om te kijken of het echt wel W3C gevalideerd wordt en of schema.org juist is geïmplementeerd.

##### Test 1: Schema.org {#test1schemaorg}

Om een html pagina te valideren tegen de Schema.org test ga je naar de Google [Tool voor gestructureerde gegevenstests](http://www.google.nl/webmasters/tools/richsnippets).

Daar vul je de URL in voor de pagina die je wil testen.

In mijn geval wil ik een content pagina can Ducentis testen, namelijk :

<http://ducentis.ghost.io/20-reasons-to-choose-ducentis/>

Volgens de &#8220;Tool voor gestructureerde gegevenstests&#8221; komt deze pagina er correct uit.

Google snapt dat het gaat om een Blog en de velden zijn op een juiste manier ingevuld.

##### Test 2: W3C HTML5 Markup Validation Service {#test2w3chtml5markupvalidationservice}

Bij test twee ga ik testen of de pagina juist gevalideerd wordt tegen de W3C HTML5 Markup Validation Service.

Hiervoor ga je naar [Markup Validation Service](http://validator.w3.org/) en hier vul ik de zelfde URL in als bij de schema.org test.

Hier komen helaas voor nu wat foutjes uit: **6 Errors, 9 warning(s)** .

Het zijn geen ernstige fouten, maar ze kunnen door een kleine aanpassing in de code worden opgelost.

##### Test 3: Google Pagespeed {#test3googlepagespeed}

Om te kijen of de de pagina snel is gebruik ik Google Pagespeed.

Nu is dat niet helemaal eerlijk, want als de site op een trage server draait dan zal hier een slechte waardering uit komen, maar Google zal sowieso met goede tips komen om de site te versnellen via het optimaliseren van plaatjes, CSS en javascript.

Om het te testen ga ik naar [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) en vul ook hier weer de zelfde url in.

Op basis van een mobiele test komt er het volgende uit:

64 / 100 Snelheid

83 / 100 Gebruikerservaring

  * JavaScript en CSS in inhoud boven de vouw die het weergeven blokkeren, verwijderen

&nbsp;

  * Afbeeldingen optimaliseren

Op basis van een desktop test komt er het volgende uit:

72 / 100 Overzicht van suggesties

  * Afbeeldingen optimaliseren

Ik denk dat deze twee problemen snel op te lossen zijn door op de server mod_pagespeed in te ricten. Die zorgt er voor dat de plaatjes voor ieder device optimaal worden weer gegeven en dat js- en css-files optimaal worden gecomprimeerd en getoond wanneer nodig.

##### Test 4: Controleren van code {#test4controlerenvancode}

Helaas kan ik deze stap op dit moment niet doen omdat ik nog niet in bezit ben van de template.

Als ik de Ghost template heb van Ducentis zal ik deze zeker even controleren.

#### Conclusie {#conclusie}

Op een paar kleine W3C foutjes na lijkt dit een zeer goede template / thema te zijn voor Ghost.

De foutjes hadden in mijn ogen niet gehoeven (zeker niet omdat ze zelf zeggen vaak de code te controleren) maar het is op zich geen ramp en Google zal deze site zeker zeer goed kunnen indexeren.

Zorg zelf voor een goede snelle server en verbinding naar de server waarop je site draait. Als je daarbij ook nog Mod_pagespeed draait zal google helemaal blij worden van dit thema.

Zelf het thema kopen? [koop nu!](https://creativemarket.com/temacotta/123119-Ducentis)

Nu nog hopen dat Ducentis mijn review voldoende vindt om een gratis versie aan mij te verstrekken!