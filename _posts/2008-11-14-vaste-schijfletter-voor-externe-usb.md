---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2008-11-14 16:55:00+00:00
hits:
- '1255'
layout: post
permalink: /2008/11/vaste-schijfletter-voor-externe-usb.html
title: Vaste schijfletter voor externe USB drive

---
   
Je kent het volgende probleem vast ook wel.  
Zodra je de USB drive in je laptop steekt krijgt hij elke keer een andere schijfletter / drive letter.  
Dat is niet handig want je wilt niet steeds hoeven zoeken waar je USB drive / schijf nu is op je pc.  
Dus hier een handleiding om dat vast te zetten. 

<a name="more"></a>  
&#8211; Ga in Windows XP naar Start -> Run (openen)&#8230;;  
&#8211; Type in het schermpje &#8220;mmc&#8221; (zonder &#8220;/quotes) en klik OK. Nu opent er een window met de title Console 1;  
&#8211; Selecteer File -> Add/Remove Snap-in&#8230; Er opent nu een scherm met titel Add/Remove Snap-in ;  
&#8211; Klik op de Add knop aan de onderzijde van het scherm (op het Standalone tab);  
&#8211; Selecteer Computer Management uit de lijst en klik op de Add knop;  
&#8211; De Local Computer vinkje zou geselecteerd moeten zijn. Klik op de Finish knop;  
&#8211; Klik op de sluiten knop en ga terug naar Add/Remove Snap-in scherm, klik dan op OK en ga terug naar Console 1;  
&#8211; Expandeer het item Computer Management (Local) aan de linkder kant (onder Console Root);  
&#8211; Expandeer het item Storage, klik dan op het Disk Management item;  
&#8211; Zodra het scherm zich vult aan de rechterkant van dit scherm, zoek je USB schijf op. Let op dit scherm is scrollbaar dus wellicht staat het verder naar beneden;  
&#8211; Klik met je rechter muis knop op de USB Schijf en selecteer Change Drive Letter and Paths van het popup menu;  
&#8211; Hier kan je de juiste schijfletter selecteren (dit moet aan een ongebruikte schrijfletter;   
&#8211; Klik op OK zodra je de schijfletter hebt toegevoegd / aangepast;  
&#8211; Selecteer File -> Exit vanuit het hoofdmenu, en save de settings als daarom gevraagd wordt (wordt er niet om gevraagd ? geen probleem);  
Klaar !  
Je kan het testen door je USB schijf los te koppelen van je machine en daarna weer te koppelen.  
In explorer zou hij de schijfletter moeten krijgen die je gekozen hebt.  
Soms moet je op F5 (verversen/refresh) klikken om de explorer te verversen.