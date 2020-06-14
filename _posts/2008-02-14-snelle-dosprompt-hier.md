---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2008-02-14 20:03:00+00:00
hits:
- '1351'
layout: post
permalink: /2008/02/snelle-dosprompt-hier.html
title: Snelle DosPrompt Hier !

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