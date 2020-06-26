---
author: tvdsluijs
category:
- Coding
comments: 'true'
date: 2008-12-26 13:34

layout: post
publish_date: 2008-12-26 13:34
slug: flex-openen-webpagina-url
tags:
- Coding
title: Flex Openen Webpagina / URL

---
Een web pagina openen vanuit flex, of een mailto sturen vanuit flex is
eenvoudiger dan je denkt.  
  
Tijdens een project bij NL4B (NL for Business) had ik dit nodig en na wat
zoeken kwam ik er achter dat de volgende code hiervoor erg makkelijk werkte.  
  
  
  
In je AS3 script zet je dit onderdeel

    
    
    private function getURL(url:String, window:String):void {  
          var request:URLRequest;  
          request = new URLRequest(url);  
          navigateToURL(request, window);  
      }

En via een click kan je hem dan aanroepen.

    
    
    click="getURL('http://www.iamboredsoiblog.eu', '_blank');"

Waarbij de url voor de site staat die je wilt openen (of mailto: voor mailtje)
en window voor hoe je het scherm van de url wilt openen. _blank opent een
nieuw scherm.

