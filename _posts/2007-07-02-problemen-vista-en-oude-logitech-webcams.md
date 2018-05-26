---
id: 540
title: Problemen Vista en oude logitech Webcams.
date: 2007-07-02T14:01:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2007/07/02/problemen-vista-en-oude-logitech-webcams/
permalink: /2007/07/problemen-vista-en-oude-logitech-webcams.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "1582629817195819673"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2007/07/problemen-vista-en-oude-logitech-webcams.html
hits:
  - "1726"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5884893373"
categories:
  - Tech
tags:
  - Windows
---
Ik heb dus sinds kort Microsoft Vista. Onder XP had ik mijn Logitech Zoom perfect draaien.

Vista herkend deze webcam echter niet. Logitech heeft ook geen nieuwe drivers voor deze webcam uitgebracht.

Natuurlijk wil Logitech liever nieuwe webcams verkopen, dat ben ik niet van plan en heb dus een WorkAround gevonden.

Op deze manier heb ik mijn webcam werkend gekregen.

1. Installeer de allernieuwste webcam software van logitech. Dit is de QuickCam 32-bit version: 10.5.0 of hoger    
Deze kan je hier downloaden <http://www.logitech.com/index.cfm/support_downloads/downloads/&cl=NL,NL>

2. Als je bij het detecteer onderdeel komt (gevraagd wordt om de webcam in te pluggen), plug hem in en klik op (skip/volgende)

3. Waarschijnlijk gaat Vista hem proberen te installeren, gewoon negeren / cancellen enz

4. Okay, download nu de laatste versie van je webcam (Logitech Zoom / Quickcam Software 8.4.8 ofzo / voor XP).     
Overschrijf alle drivers met deze “oude” drivers.     
Waarschijnlijk zal de installatie niet volledig afronden,     
als het maar de benodigde drivers op je harddisk zet is, dit is voldoende.

5. Okay, ga naar de Vista Orb (de start knop, links onderin, open control panel,     
ga naar system, en dan links boven in device manager / aparaat beheer

6. Ga naar Unknown usb device / Onbekend apparaat

7. Klik rechts en selecteer update driver, kies een lokatie om de driver te zoeken en navigeer naar    
C:Program FilesLogitechQuickCamWebInstallDriversWinNewPRO2

8. Klik Ok of zo iets, en installeer het (dat doet Vista voor je)

9. Hastakidee….. je Webcam werkt, met de oude drivers en de nieuwe Logitech Software !