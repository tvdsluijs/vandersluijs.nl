---
id: 44
title: Magento uiteindelijk toch een slechte keuze
date: 2014-09-11T20:18:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2014/09/11/magento-uiteindelijk-toch-een-slechte/
permalink: /2014/09/magento-uiteindelijk-toch-een-slechte.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "3858889794119878044"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2014/09/magento-uiteindelijk-toch-een-slechte.html
blogger_thumbnail:
  - /images/2014/Sep/magento_bad_choice.png
hits:
  - "941"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5710752766"
categories:
  - Tech
---
![Magento is a Bad Choice](/images/2014/Sep/magento_bad_choice.png)  
Magento, het zag er zo mooi uit vanuit de verte.

De gouden berg voor e-commerce, met diamanten oplossingen en platina keuzes. Gemaakt om een enorme webshop te bevatten en zowel de eigenaar ervan als de gebruikende klant te voorzien van geweldige business.

Helaas, niets is minder waar. 

## Papier maché {#papiermach}

Vaak vertel ik het bovenstaande verhaal aan mensen die aan mij vragen hoe goed magento nu eigenlijk is.

Ik zie het voor me als een gouden berg in de woestijn met diamanten kroonluchters.

Probleem is echter dat wanneer je dichter bij komt het een papier maché berg is.

Na 5 jaar ontwikkelen in Magento met diverse divelopers zeggen ze allemaal het zelfde. Te traag, te ingewikkeld, te slecht onderhoudbaar.

Het is niet voor niets dat grote partijen zoals Zalando stoppen met magento.

Het enige wat heel goed is, is de marketing waarmee het &#8220;verkocht&#8221; wordt. Ik zeg verkocht tussen quotes want je hebt natuurlijk gewoon een gratis versie.

Maar wat is nou het probleem. Is het echt niet goed? Om eerlijk te zeggen is het fantastisch!

HuH????

Ja. Theoretisch dan!! Alles, maar dan ook echt alles wat door DBA-ers en OO Evangelisten al jaren lang gepredikt wordt zit er in!

En dat is dan ook gelijk de nekslag! 

## DBA Heaven {#dbaheaven}

De [normalisering](http://nl.wikipedia.org/wiki/Databasenormalisatie) van het database model gaat zo ver dat je bij het ophalen van een product niet gek moet staan te kijken als hij 160x door de zelfde tabel moet &#8220;loopen&#8221; om de data bij elkaar te krijgen. Geweldige natte droom door een DBA-er om het zo uit te normaliseren&#8230;. maar maar killing voor de performance.

Natuurlijk hebben we hiervoor de zogenaamde index. Die slaat als het ware de database plat zodat je snel de gegevens op kan halen. Waarom er dan niet is gekozen voor een mongoDB is mij een raadsel want die is daarvoor speciaal gemaakt.

Probleem van de index is dat deze bij heel veel producten zo lang draait dat hij nooit meer zijn gegevens up to date krijgt. 

## Need more RAM!! {#needmoreram}

Daarnaast het [OO](http://nl.wikipedia.org/wiki/Objectgeori%C3%ABnteerd) prachtig ingebouwd zodat je zelfs een punt (ja deze .) kan hergebruiken (okay okay&#8230; dat net niet). Probleem echter is dat wanneer je Magento wil gebruiken om bijvoorbeeld een simpele feed wil genereren het hele framework er inclusief eventuele mem-leaks bij krijgt. 

Een developer vroeg me om meer geheugen in de server te stoppen omdat hij al makkelijk 1GB gebruikte om een feed te genereren. Ik zei hem dat hij dat moest vergeten en zijn script onder de 100MB moest brengen, maakte mij niet uit hoe. Hij gebruikte magento niet meer, en ging met zijn script terug naar 41MB.

Alles maar dan ook alles wat theoretisch geweldig klinkt op papier, werkt Magento tegen. 

## So Slow, so very slow {#soslowsoveryslow}

Op mijn werk halen we geen product meer uit Magento om te tonen in de web-shop. De producten zitten welliswaar in Magento, maar stoppen we in [SORL](https://lucene.apache.org/solr/) zodat we er niet alleen de klant super snel naar kunnen laten zoeken, maar hiermee bouwen we ook de categorie-pagina&#8217;s, de categorie-product-pagina&#8217;s en de product pagina&#8217;s zelf mee op.

Daarvoor hebben we ook nog eens [varnish](https://www.varnish-cache.org/) en [nginx](http://nginx.com/) draaien om de pagina&#8217;s super snel uit caching te serveren en raad is&#8230;.. ja de site is nu snel!

Magento kan dat dus niet. Ze hebben in hun enterprise versie, waar je zo&#8217;n 15.000 euro per server instantie voor moet betalen (ja dus bij 4 virtuele webservers kost dat 60.000 EURO!), full page caching zitten. Maar ik vraag me af of het daar echt veel sneller door wordt.

Een web shop die puur seq nog op magento draait is goed te herkennen. Tot zo&#8217;n 5 seconden wachten voordat je een pagina geserveerd krijgt is heel normaal.

## Development is a pain {#developmentisapain}

Als ik heel eerlijk ben dacht ik dat de developers een beetje zaten te zeuren bij het ontwikkelen in Magento.

Ik heb diverse developers in mijn team, van licht Medior tot zwaar Senior en allemaal zeggen ze het zelfde.

Waarom is iets heel simpels zo vreselijk ingewikkeld gemaakt in Magento. Ze vinden de opzet en de gedachte heel goed, maar het developen er in vreselijk.

Ik heb diverse development teams, waaronder 1 Magento team. Als ik nieuwe developers aan neem en ze hebben met Magento gewerkt vragen ze allemaal of ze alsjeblieft niet in het Magento team hoeven mee te helpen.

> Magento Developer &#8211; mag ik in het andere team?

Dus heb ik een testje gedaan. Ik zelf werk zo nu en dan mee in een ander team en ik heb mezelf en het magento team de zelfde opdracht gegeven. Bouw een merken vertaal scherm, met overzicht, zoekfunctie alles er op en er aan.

De developer van het Magento team (een senior) deed er een week over. Inclusief testen tot aan uitrol naar live.

Ik had het in ons eigen gemaakte framework binnen één dag live staan.

Dan vraag je je toch af. Was die developer zo sloom&#8230; ha ha ha nee dat was hij niet. 

## Niet voor het MKB {#nietvoorhetmkb}

Met diverse partijen heb ik het over de Magento problematiek. En zo nu en dan geven ze dan aan dat Magento eigenlijk meer voor het MKB is met een paar producten.

Maar ik vind van niet. Magento is helemaal niet geschikt voor MKB. Een eenmanszaak wil zich helemaal niet hoeven bezighouden met verregaande optimalisaties op server en software gebied. Laat staan dat ze het geld hier voor hebben of willen uitgeven.

Een MKB-er wil gewoon een makkelijk te gebruiken systeem wat in één keer werkt.

Ook praat ik zo nu en dan met Magento evangelisten. Ze zullen wel blij zijn met dit stukje wat ik hier schrijf :-).

Natuurlijk vinden ze zelf dat Magento ge-wel-dig is! Maar als je door gaat vragen en met ze verder praat dan geven ze ook toe dat Magento zo niet te gebruiken is.

## Slechte keus? {#slechtekeus}

Is magento dan echt een slechte keuze? Ja! 

Behalve als je een enorme zak geld hebt en het je niet uitmaakt hoeveel tijd en geld het kost om het te optimaliseren.

Op mijn werk hebben we het traject om Magento er uit te gooien al ingezet en hebben er voor gekozen om zelf een web-shop framework te bouwen. 

## TIPS! {#tips}

En voor bedrijven die van Magento af willen of als u nog moet beginnen aan uw web-shop / e-commerce avontuur heb ik nog wat tips.

</p> 

  1. Neem geen Goliath-pakket als je maar een dwerg shop nodig hebt. 


  2. Een web-shop pakket moet super snel performen op een simpele server (als het druk wordt op uw site kan u altijd nog overstappen naar een mega-server, met caching) 


  3. Laat u goed informeren over de diverse systemen bij een onafhankelijk web-ontwikkel bedrijf (dus niet één die gespecialiseerd is in bijvoorbeeld alleen Magento) 


  4. Probeer diverse systemen uit. De meeste e-commerce pakketten hebben wel een demo site. Als u verzuipt in de mogelijkheden is het pakket waarschijnlijk ongeschikt voor u.
</ol> 

Vragen? Mail me! (bellen mag ook!) Ben je het niet met me eens? Dat mag natuurlijk, lucht je hart, geef je mening hieronder.