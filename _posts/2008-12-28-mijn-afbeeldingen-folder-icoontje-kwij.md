---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2008-12-28 13:35:00+00:00
hits:
- '912'
layout: post
permalink: /2008/12/mijn-afbeeldingen-folder-icoontje-kwij.html
title: Mijn Afbeeldingen folder icoontje kwijt

---
Tja. als ik bij mijn ouders ben komt het geregeld voor dat mijn moeder iets heeft gedaan op haar PC, wat ze beter niet had kunnen doen.

Zo had ze dit keer haar Mijn Afbeeldingen map verplaatst en was hierbij het icoontje dat bij de Mijn Afbeeldingen map hoort verdwenen.

<a name="more"></a>  
Om eerlijk te zeggen had ik nog nooit gezien dat dit icoontje van deze map kwijt kon raken.

Maar mijn moeder was dat natuurlijk gelukt. Na veel zoeken op internet kwam ik er achter dat de desktop.ini er voor zorgt dat een map de juiste instellingen krijgt zodat je dat &#8220;Mijn Afbeeldingen&#8221; icoontje ook te zien krijgt.

Toen ik zag wat er in deze desktop.ini moest staan, was ik al snel genezen en had er niet zo heel veel zin in om dat op te lossen.

Echter&#8230; toen kwam ik achter een korte regel code van <a href="http://www.technologyquestions.com/technology/windows-xp/246982-my-pictures-folder.html" target="_blank">deze site</a> waarmee je het in één keer kon terug zetten.

Je krijgt het Mijn Afbeeldingen icoontje op de volgende manier terug.

Ga naar start in XP

Klik op Uitvoeren.

Ze de volgende regel er in:

**rundll32 mydocs.dll,PerUserInit**

klik op OK of druk op Enter.

Klaar !