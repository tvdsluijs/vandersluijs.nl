---
id: 520
title: Snelle DosPrompt Hier !
date: 2008-02-14T20:03:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2008/02/14/snelle-dosprompt-hier/
permalink: /blog/2008/02/snelle-dosprompt-hier.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "4230904015013092040"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2008/02/snelle-dosprompt-hier.html
hits:
  - "1351"
itrr_another_apply:
  - 'no'
categories:
  - Tech
---
Dus… je werkt met verkenner ? (eigenlijk hoop ik dat je met Total Commander werkt, das veel beter)

En je wil eigenlijk waar je zit in je directory structuur direct een dos prompt hebben zonder eerst ….

Start -> RUN -> CMD -> D: -> cdprogram files -> cdnog een dir -> cdnogeendir

Nou dan heb ik DE oplossing voor je

DOS PROMPT HIER / DOS PROMPT HERE

Open je notepad en plak daar de volgende code in :

REGEDIT4

[HKEY_CLASSES_ROOTDirectoryShellDosPrompt]

@=&#8221;Run MS-DOS Prompt here&#8221;

[HKEY_CLASSES_ROOTDirectoryShellDosPromptCommand]

@=&#8221;Cmd /k CD &#8220;%L&#8221; &#8221;   
Sla het op je buroblad op als doshere.reg

Dubbel klikken, ja je wilt het in je register verwerken … en …. klaar.

(wel even herstarten met de PC)

Rechtermuisknop op de verkenner directory oftewel de directory waar je de dosprompt wil zien…..

Voilá !