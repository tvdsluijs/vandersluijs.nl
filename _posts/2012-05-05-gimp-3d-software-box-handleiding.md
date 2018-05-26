---
id: 191
title: GIMP 3D Software Box handleiding
date: 2012-05-05T03:31:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2012/05/05/gimp-3d-software-box-handleiding/
permalink: /2012/05/gimp-3d-software-box-handleiding.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "2472953089215129785"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2012/05/gimp-3d-software-box-handleiding.html
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
  - "539"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5769391467"
categories:
  - Tech
tags:
  - Gimp
---
Veel mensen hebben waarschijnlijk (net zoals ik) gezocht naar een handleiding voor het maken van een 3D software box (Software doos) in GIMP. Zo’n Software doos wordt vaak gebruikt als display voor software die mensen aanbieden, of zoals ik componenten aanbieden via internet. Ik wist dat er van Photoshop heel veel handleidingen en te kopen actions waren, maar ik wilde hoe dan ook GIMP gebruiken. <!--more-->


  
Na lang zoeken heb ik er één gevonden…. echter was deze in het spaans. Nu weet ik niet hoe het met jullie zit maar mijn spaans is redelijk slecht. Na diverse vertaal programma’s er over te hebben gegooid is het me gelukt zo’n doos te maken… beter zelfs ik heb hem beter gemaakt.

Hieronder leg ik in een korte eenvoudige handleiding uit hoe je een Software box kan maken binnen GIMP.

Mocht er na het lezen van deze handleidingen iets niet duidelijk zijn laat het dan weten dan pas ik de handleiding in het onduidelijke deel aan. Er wordt wel vanuit gegaan dat je wel eens gewerkt hebt met GIMP en dat je een beetje engels kan (alhoewel ik alles zo veel mogelijk probeer te vertalen van menu items)

Hieronder zal ik uitleg geven over de Simpele versie van de 3D software box, de iets moeilijkere (zoals je die hier linksboven ziet) zal in een volgende handleiding ter sprake komen.

Simpele Doos

We starten met een nieuw document van 400&#215;400 pixels (Menu: File->New / Bestand->Nieuw). Je kan eventueel ook een groter document kiezen neem hem echter wel vierkant en je zal de overige maten zelf even moeten uitrekenen (simpel voorbeeld: 500&#215;500 pixels zal een zijkant hebben van 150 pixels). Ik neem overigens een witte achtergrond.

We gaan hier een Guide/Hulplijn in maken van 120px breed. Dit doe je als volgt, klik in de linker rand (waar de lineaal staat), hou vast en sleep naar rechts. Je ziet nu een blauwe verticale (da’s van boven naar beneden) lijn verschijnen. Die trek je dus tot aan de 120px (kijk in de onderste balk daar zie je als je aan het heen en weer slepen bent, dan kan je hem precies op 120px zetten). Lukt dit niet doe het dan via het Menu (Menu: Image->Guides->New Guide / Afbeelding->Hulplijn->Nieuwe Hulplijn)

Op deze manier maken we een zijkant en de voorkant van de doos.

Maak nu de eigen indeling / tekening op je doos. Hou daar bij dus rekening dat alles wat aan de linkerkant van de blauwe hulplijn staat de zijkant wordt en alles aan de rechterkant van de blauwe hulplijn wordt de voorkant. Hierbij ga ik je niet helpen want je kan op 1000 en 1 manieren je eigen doos voorzien van kleurtjes, tekst enz enz enz.

We gaan nu de linkerkant/zijkant van de rechterkant/voorkant scheiden.

Selecteer de tool waarmee je rechthoeken kan selecteren. Selecteer nu de linkerkant van de hulplijn, zoals je zult merken zal de selecteertool zich automatisch vastplakken aan de hulplijn. Maak nu en kopie via Menu: Edit->Copy Visible / Bewerken->Zichtbare kopieëren.

Plak het geheel daarna als nieuwe laag in de afbeelding (Menu: Edit->Paste / Bewerken->Plakken). Vergeet hierna niet er een layer/laag van te maken, door op “create new layer/nieuwe laag maken” te klikken.

Doe dit zelfde met de rechterkant van de doos, dus selecteer de rechterkant, kopie maken en plakken als nieuwe laag.

Eventueel kan je voor het gemak je lagen een naam geven, klik 2x achter elkaar op de laag naam en pas de laag aan naar bijvoorbeeld “Zijkant”, “Voorkant”.

De rest van de lagen mag je van mij verwijderen, wellicht wil je eerst nog even deze versie opslaan als tussen versie, waarna de de overige lagen verwijderd. Deze gebruiken we namelijk niet. (je houdt hierna dus 2 lagen over: zijkant / voorkant)

We gaan nu een filter van GIMP de rest van het werk laten doen (ho ho ho… je moet echt nog wel iets doen hoor)

Ga naar het volgende menu item, Menu: Filters->Map->Map Object / Filters->Projecties->Projecteer op Object (tja gelukkig doe ik de vertalingen van de GIMP niet)

Je krijgt nu het volgende scherm te zien:
  
Kies in het eerste tabblad (options/opties) bij “Map To/Projecteer op” : Box/Blok

Daarnaast kies je voor een transparante achtergrond, Een nieuwe afbeelding en Anti Aliasing inschakelen.

Als je tussen door wilt zien hoe één en ander er uit zou kunnen komen te zien klik dan op Preview/Vooruitblik.

Als je met lichteffecten wilt spelen ga dan naar het tabblad “light/licht”. Ik doe in deze handleiding overigens niets met dit tabblad, je mag dit naar eigen inzicht uit proberen (je zou bijvoorbeeld de instelling van X van -0,5 naar 0,5 kunnen zetten).

Nu gaan we naar het tabbald “Orientation/Oriëntatie”. Hier heb ik de Y Rotation/Rotatie op -40,0 gezet. Klik op Preview/Vooruitblik om te kijken of dit je aanstaat en pas het eventueel aan (naar bijvoorbeeld -30,0 ofzo).

ZO…. en dan nu eindelijk het meest belangrijke… het vertellen wat nu de zijkant(RIGHT/RECHTS) en voorkant(FRONT/VOOR) van de doos wordt.

Ga naar het laatste tabblad “Box/Blok”. We moeten hier 2 kanten aanpassen en wel de voorkant en linkerzijkant.

Kies bij Front/Voor de naam van de layer/laag die op de voorkant moet komen, kies bij Right/Rechts de layer/laag naam die je aan de linkerkant wilt (ja rechts links …. beetje vreemd door elkaar ik weet het)

Hierna zetten de Z op 0.2. Klik nogmaals op Preview/Vooruitblik.

Zodra je op OK klikt zal na enige tijd het resultaat als nieuwe afbeelding verschijnen.