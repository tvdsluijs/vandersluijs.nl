---
id: 509
title: Internet Explorer 7 Startpagina verwijderen
date: 2008-06-23T21:02:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2008/06/23/internet-explorer-7-startpagina/
permalink: /2008/06/internet-explorer-7-startpagina.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "7341531723529296005"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2008/06/internet-explorer-7-startpagina.html
hits:
  - "1228"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5891429847"
categories:
  - Tech
---
Heb jij dat ook….

Net IE7 (Internet Explorer 7) geïnstalleerd… en niet van die eerste pagina af kunnen komen.

Je weet wel die “Thanks for choosing Internet Explorer 7” / “Bedankt dat u voor Interet Explorer 7 kiest” pagina.

Wat je ook probeert…… die pagina blijft, en het mooiste van alles is, je wilt wel op die knoppen in die pagina klikken, maar je komt er niet doorheen.

In deze zogenaamde RunOnce pagina  
“<http://runonce.msn.com/runonce2.aspx”> zit een javascript dat op  
sommige pc’s niet goed wil werken. 

Vraag me niet wat het probleem is, maar het is een probleem waar ik lang mee zat en niet kon oplossen.

Tot ik op 2 pagina’s eindelijk de oplossing voor dit vervelende probleem vond.

En nee je kan het helaas niet oplossen via Interet Explorer 7.

Maak een tekst bestandje (bestandsnaam.reg) en zet dit er in:

Windows Registry Editor Version 5.00

[HKEY_CURRENT_USERSoftwareMicrosoftInternet ExplorerMain]

“RunOnceComplete”=dword:00000001

“RunOnceHasShown”=dword:00000001

Dubbel klik er op, en klik op OK.

Done ! 

Bron:  
<http://www.msfn.org/board/how-to-disable-the-annoying-http-runo-t75475.html> 

en  
<http://it.megocollector.com/?p=56>