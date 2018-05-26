---
id: 38
title: 'Ghost en de &quot;oplossingen&quot;'
date: 2014-09-11T20:25:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2014/09/11/ghost-en-de/
permalink: /2014/09/ghost-en-de.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "3798631743154324725"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2014/09/ghost-en-de.html
hits:
  - "794"
itrr_another_apply:
  - 'no'
categories:
  - Tech
---
Sinds de paar dagen dat ik Ghost gebruik wordt ik met de dag enthousiaster en enthousiaster. Het is eenvoudig, het is snel en het is clean.

Maar zoals ik in een eerdere blog post al melde zijn er nogal wat tekortkomingen, tekortkomingen die overigens wel door het Ghost team opgelost gaan worden, maar tot dan komen hier de 

## Oplossingen! {#oplossingen}

</p> 

  1. Geen sitemap! 
    Gelukkig hebben we wel RSS in Ghost! En dat kunnen we gewoon gebruiken in Google webmaster tools!</li> 
    
    
    
      * Geen Analytics 
        Ja&#8230;. hiervoor moet je dus wel even een template file **default.hbs** openen met een text editor. Als je het zelf host dan moet je dit even met FTP (of via nano op linux) aanpassen. 
        
        Als je het laat hosten bij Ghost.org dan moet je even de theme downloaden van <https://github.com/TryGhost/Casper> en daarna de theme weer zippen en oploaden via ghost. 
        
        Voor de </head> moet je je analytics code zetten en klaar!</li> 
        
        
        
          * Geen Webmaster tools 
            Fijn&#8230; tegenwoordig zit dit aan analytics gekoppeld dus dat hoeft niet meer!</li> 
            
            
            
              * rel = author 
                Hiervoor moet je weer **default.hbs** aanpassen. Ook voor de </head> moet je de volgende regel zetten : <link href="https://plus.google.com/+hierjounaamofgooglenummer" rel="author" /> 
                
                Je kan ook nog in **post.hbs** ergens onder aan voor de eind van {{/post}} de volgende regel zetten <a href="https://plus.google.com/+hierjounaamofgooglenummer?rel=author">by JouNaam </a></li> 
                
                
                
                  * Comments / reacties / Commentaar 
                    Deze is ook veel simpeler dan dat ik dacht! Onder </footer> plaats je de volgende code </li> 
                    
                    </ol> 
                    
                    Zo zie je dat het aanpassen van Ghost eigenlijk heel simpel is.
                    
                    Maar je moet het wel willen doen, helaas werkt dit dus nog niet via een simpel configuratie bestand of zo.
                    
                    _Met dank aan:_
                    
                    </p> 
                    
                      * [BiosElemental](http://bioselemental.com/ghost-adding-google-comments/)
                    
                    
                      * [carstengrimm](https://ghost.org/carstengrimm/)
                    </ul>