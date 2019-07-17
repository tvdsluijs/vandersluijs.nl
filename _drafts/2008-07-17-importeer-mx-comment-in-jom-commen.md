---
id: 501
title: Importeer MX Comment in Jom Comment
date: 2008-07-17T14:47:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2008/07/17/importeer-mx-comment-in-jom-commen/
permalink: /2008/07/importeer-mx-comment-in-jom-commen.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "6043511734661085143"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2008/07/importeer-mx-comment-in-jom-comment.html
hits:
  - "1377"
itrr_another_apply:
  - 'no'
categories:
  - Tech
---
Sinds kort van Joomla! 1.0.x naar Joomla! 1.5 overgestapt ?

En je gebruikte in Joomla! 1.0.x het MX Comment Component ?

Dan heb je het zelfde probleem als ik heb. Voor Joomla! 1.5 is MX Comment nog niet in native versie. Een andere goede comments component is Jom Comment.

Maar … daar is nog geen importeer mogelijkheid voor de MX Comments. Nog niet ???? Nu wel !

Wil je weten hoe ? Lees dan verder.

Ik had al in het forum van va de ontwikkelaar aangegeven dat ik graag een MX Comment import mogelijkheid zou willen. En er was ook al aangegeven dat dit binnenkort kwam in de volgende versie. Maar hier wilde ik eigenlijk niet op wachten.

Dit is een redelijke out of the box oplossing.

Met de volgende stappen moet het lukken om te importeren

Je hebt overigens wel wat kennis nodig van MySQL / phpmyadmin.

PROBEER HET IS OP EEN TEST OMGEVING !!!! NOOIT OP EEN LIVE SITE !!!

Let op: dit werkt alleen op een Joomla 1.0.x (op 1.0.15 getest) installatie.

Wat heb je nodig:

Een Werkende webserver met mysql server

&#8211; Joomla Files

&#8211; Backup van oude dbase (of in ieder geval de MMS tabellen van het oude MMS component)

&#8211; de zip met mijn files

Er hoeft geen complete installatie van joomla te zijn.

Een directory met alle files op een webserver en je backup van je oude Joomla omgeving (of minimaal de tabellen van het oude mms component is voldoende.

Je config file moet wel juist zijn, en dan met name het deel van de dbase connectie.

Stap 1.

Zorg dat je ten alle tijde een goede backup hebt van je oude joomla omgeving, of je nieuwe joomla omgeving met hierin de MMS tabellen van het oude MMS component.

Stap 2.

Zet de uitgepakte zip in de root (je hoeft je geen zorgen te maken over de structuur) gewoon inclusief folders in de root zetten.

Stap 3. 

Open in root/mxcomment/ de file confi.php in een tekst editor.

Stap 4.  
Open je browser en surf naar <http://plek>_waar_de_site_staat/mxcomment

LET OP: er vind nu gelijk verwerking plaats.

Stap 5.

Open phpmyadmin of een andere tool om je MySQL dbase mee aan te passen.

Heb je al een backup gemaakt van de data van je Joomla 1.5 ?

Stap 6.

Open de dbase van je oude Joomla 1.5 site .

Copieer de text (dit zijn queries) uit je browser van de verwerking van mijn script.

Stap 7.

Plak te tekst in SQL / Query browser in phpmyadmin of je eigen MySQL tool  
Heb je al een backup gemaakt van de data van je Joomla 1.5 ?

Draai de geplakte queries (met F5 of F9 of run Query / run SQL)

DONE !

[download id=”7” format=”1”]