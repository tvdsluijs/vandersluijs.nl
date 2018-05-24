---
id: 139
title: GIMP 3D Software Box handleiding (Deel II)
date: 2013-01-12T20:18:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2013/01/12/gimp-3d-software-box-handleiding-deel-ii/
permalink: /blog/2013/01/gimp-3d-software-box-handleiding-deel-ii.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "4620024557311403668"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2013/01/gimp-3d-software-box-handleiding-deel-ii.html
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
  - "559"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5929982388"
categories:
  - Tech
tags:
  - Gimp
---
Deze handleiding is een uitbreiding op GIMP 3D Software box deel 1.

Met deze handleiding wordt er een iets moeilijkere 3D doos gemaakt.

Maar mijn inziens wel een mooiere doos. Hij is iets meer gedraaid waarbij je ook een bovenkant kan laten zien.<!--more-->

Dat geeft net iets meer 3D effect en geeft een mooier resultaat.

Waarschijnlijk zul je veel herkennen van het eerste deel, daar de meeste stappen gelijk zijn.

We starten met een nieuw document van 400&#215;520 pixels (Menu: File->New / Bestand->Nieuw). Je kan eventueel ook een groter document kiezen neem hem echter wel vierkant en je zal de overige maten zelf even moeten uitrekenen (simpel voorbeeld: 500&#215;650 pixels zal een zijkant hebben van 150 pixels). Ik neem overigens een witte achtergrond.

(Let op: zoals je ziet is de hoogte dus inderdaad hoger dan dat de breedte is.)

We gaan hier een Guide/Hulplijn in maken van 120px breed. Dit doe je als volgt, klik in de linker rand (waar de lineaal staat), hou vast en sleep naar rechts. Je ziet nu een blauwe verticale (da’s van boven naar beneden) lijn verschijnen. Die trek je dus tot aan de 120px (kijk in de onderste balk daar zie je als je aan het heen en weer slepen bent, dan kan je hem precies op 120px zetten). Lukt dit niet doe het dan via het Menu (Menu: Image->Guides->New Guide / Afbeelding->Hulplijn->Nieuwe Hulplijn)

Daarnaast zet je een horizontale hulplijn ook op 120px maar dan vanboven af genomen.

Op deze manier maken we een zijkant, voorkant en bovenkant van de doos.

Nu gaan we even een stukje uit de doos snijden, want zoals je wellicht opgevallen is hebben we een hoek te veel (linkerboven hoek)

Selecteer de tool waarmee je rechthoeken kan selecteren. Klik boven de linkerboven kant en selecteer nu
  
de het vierkantje wat zich links boven in bevind, zoals je zult merken zal de
  
selecteertool zich automatisch vastplakken aan de hulplijn.

Druk hierna op de DEL toets op je toetsenbord, en het vierkantje is leeg.

Maak nu de eigen indeling / tekening op je doos. Hou daar bij dus rekening dat alles wat aan de linkerkant van de blauwe hulplijn staat de zijkant wordt en alles aan de rechterkant van de blauwe hulplijn wordt de voorkant. Boven de blauwe lijn wordt de bovenkant van de doos.

Hierbij ga ik je niet helpen want je kan op 1000 en 1 manieren je eigen doos voorzien van kleurtjes, tekst enz enz enz.

We gaan nu de linkerkant/zijkant van de rechterkant/voorkant en de bovenkant scheiden.

Selecteer de tool waarmee je rechthoeken kan selecteren. Selecteer nu de linkerkant van de hulplijn, zoals je zult merken zal de selecteertool zich automatisch vastplakken aan de hulplijn. Maak nu en kopie via Menu: Edit->Copy Visible / Bewerken->Zichtbare kopieëren.

Plak het geheel daarna als nieuwe laag in de afbeelding (Menu: Edit->Paste / Bewerken->Plakken). Vergeet hierna niet er een layer/laag van te maken, door op “create new layer/nieuwe laag maken” te klikken.

Doe dit zelfde met debovenkant en de rechterkant van de doos, dus selecteer de rechterkant, kopie maken en plakken als nieuwe laag.

Eventueel kan je voor het gemak je lagen een naam geven, klik 2x achter elkaar op de laag naam en pas de laag aan naar bijvoorbeeld “Zijkant”, “Voorkant” “bvenkant”.

De rest van de lagen mag je van mij verwijderen, wellicht wil je eerst nog even deze versie opslaan als tussen versie, waarna de de overige lagen verwijderd. Deze gebruiken we namelijk niet. (je houdt hierna dus 2 lagen over: zijkant / voorkant).

We gaan nu de bovenkant klaar maken om de top van de doos te worden.

Hiervoor moeten we deze laag schalen.

Selecteer de laag in het lagen scherm, en klik met je rechter muisknop op de laag in de afbeelding.

Kies nu voor MuisMenu: Layer->Scale Layer / Laag->Laag Schalen.

Je kan nu de gehele laag uittrekken tot onder aan de afbeelding.

We gaan nu een filter van GIMP de rest van het werk laten doen (ho ho ho… je moet echt nog wel iets doen hoor)

Ga naar het volgende menu item, Menu: Filters->Map->Map Object / Filters->Projecties->Projecteer op Object (tja gelukkig doe ik de vertalingen van de GIMP niet)

Je krijgt nu het volgende scherm te zien:

Kies in het eerste tabblad (options/opties) bij “Map To/Projecteer op” : Box/Blok

Daarnaast kies je voor een transparante achtergrond, Een nieuwe afbeelding en Anti Aliasing inschakelen.

Als je tussen door wilt zien hoe één en ander er uit zou kunnen komen te zien klik dan op Preview/Vooruitblik.

Als je met lichteffecten wilt spelen ga dan naar het tabblad “light/licht”. Ik doe in deze handleiding overigens niets met dit tabblad, je mag dit naar eigen inzicht uit proberen (je zou bijvoorbeeld de instelling van X van -0,5 naar 0,5 kunnen zetten).

Nu gaan we naar het tabbald “Orientation/Oriëntatie”. Hier heb ik de Y Rotation/Rotatie op -40,0 gezet. Klik op Preview/Vooruitblik om te kijken of dit je aanstaat en pas het eventueel aan (naar bijvoorbeeld -30,0 ofzo).

Daarnaast zetten we de X op 15.0 om de doos
  
iets naar voren te draaien.

ZO…. en dan nu eindelijk het meest belangrijke… het vertellen wat nu de zijkant(RIGHT/RECHTS) , voorkant(FRONT/VOOR) en bovenkant (TOP/BOVEN0 )van de doos wordt.

Ga naar het laatste tabblad “Box/Blok”. We moeten hier 3 kanten aanpassen en wel de voorkant, linkerzijkant en bovenkant.

Kies bij Front/Voor de naam van de layer/laag die op de voorkant moet komen, kies bij Right/Rechts de layer/laag naam die je aan de linkerkant wilt , en voor de boven kant kies je TOP/Boven (ja rechts links …. beetje vreemd door elkaar ik weet het)

Hierna zetten de Z op 0.2. Klik nogmaals op Preview/Vooruitblik.

Zodra je op OK klikt zal na enige tijd het resultaat als nieuwe afbeelding verschijnen.

Maar ……. wat ziet die doos er raar uit ?

Ja hij is een beetje lang geworden. Vraag me niet waarom dit is, wellicht dat iemand het weet. Maar we gaan dit even aanpassen.

Ga naar Menu: Image->Scale Image / Afbeelding->Afbeelding Schalen.

Je ziet hierna het volgende scherm.

Klik eerst op het kettinkje naast de Width,Height / Hoogte, Breedte instellingen, als je dit niet doet zal het plaatje namelijk gelijkwaardig geschaald worden, en dat willen we dit keer juist niet.

Pas daarna de hoogte gelijk aan die van de breedte, en klik op OK. (dus bijvoorbeeld 400&#215;400)

Je zult zien dat hierna de doos wel juist is.