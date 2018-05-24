---
id: 46
title: Blogger importeren in Ghost.org
date: 2014-09-11T20:13:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2014/09/11/blogger-importeren-in-ghostorg/
permalink: /blog/2014/09/blogger-importeren-in-ghostorg.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "6411172036430972924"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2014/09/blogger-importeren-in-ghostorg.html
hits:
  - "1321"
itrr_another_apply:
  - 'no'
categories:
  - Tech
---
Het had nogal wat voeten in aarde, de overstap van blogger naar Ghost.

Ik wilde niet meer wachten op Ghost 5.0 omdat het er naar uitzag dat dat nog wel even op zich liet wachten.

Dan maar wat meer doen om een mijn blogger blog in Ghost te krijgen. 

## Viel tegen {#vieltegen}

Maar dat viel vies tegen.

Met Blogger kan je vrij makkelijk een export maken van je blog, maar Ghost vreet alleen Json&#8217;s! En blogger spuugt alleen XML uit. Nu kan ik zelf wel wat scriptjes schrijven om van XML naar JSON te komen, maar daar had ik geen tijd voor.

Dus opzoek naar een andere oplossing. En dus vond ik op internet een converteer tool genaamd [blogger2ghost](http://blogger2ghost.com/)

De bouwer zegt dat het vrij makkelijk is, maar er best nog fouten in kunnen zitten. De tool maakt connectie met je blog en download dan al je artikelen in JSON formaat.

Handig! Maar in mijn geval werkte het niet. Dit doordat de plaatjes niet meekwamen. En daarnaast heeft Ghost een nogal niet handige manier van plaatjes importeren. (die is er namelijk niet)

Okay, change of plans! Er is nog een allerlaatste manier om je blogger blog in Ghost te krijgen, maar dan heb je eigenlijk best wat werk!

## WordPress {#wordpress}

Lang lang lang lang lang geleden (nou zo lang geleden ook weer niet) werkte ik in WordPress. Prima platform, maar je bent dagelijks meer tijd kwijt aan het updaten van wordpress en alle plugins dan dat je tijd hebt om te bloggen.

Maar dat is dus de oplossing om voor NU je Blogger blog in Worpress te krijgen.

**Stap 1:**  
Maak een XML export van je Blogger blog.

Als je je blog wilt exporteren, klik je gewoon op &#8216;Blog exporteren&#8217; op het tabblad Instellingen | Overig .

Klik daarna op de knop Blog exporteren. Je blog wordt opgeslagen als Blogger-exportbestand (.xml) dat je als back-up kunt bewaren op de harde schijf of kunt importeren naar een andere blog. 

_Overigens is deze stap niet persé nodig met de nieuwste versie van de Blogger import plugin van wordpress, maar een backup hebben is nooit weg._

**Stap 2:**  
Installeer op een webserver een wordpress site. 

Heb je geen webserver gebruik dan Amazon AWS of in mijn geval [Digital Ocean](https://www.digitalocean.com/?refcode=38909179d2dc) . In niet meer dan 1 klik en 5 dollar (of gebruik de gratis 2 maanden variant) kan je WordPress daar installeren. In hun [handleiding](https://www.digitalocean.com/community/articles/one-click-install-wordpress-on-ubuntu-13-10-with-digitalocean) is het prima omschreven. 

**Stap 3:** Importeer je Blogger export

Ga naar Tools -> Import en klik op Blogger. Waarschijnlijk zegt wordpress dat ze de plugin moeten downloaden en installeren. Dat is een kwestie van Ok,Ok -> install en &#8220;Activate Plugin & Run Importer&#8221;.

Daarna moet je je via deze plugin authenticeren op je Blogger blog via &#8220;Authorize&#8221;.

En het importeren van je Blogger Blog kan beginnen.

Artikelen, reacties alles komt mee op deze manier!

**Stap 4:** Zet je plaatjes in een cloudomgeving

Helaas heeft Ghost.org nog geen manier om je plaatjes te importeren&#8230; dus heb je een externe plek nodig om ze te hosten.

Dit kan heel goed via een CDN op bijvoorbeeld S3 van Amazon. (heb ik zelf ook gedaan) Let wel dit brengt maandelijks extra kosten met zich mee. Het zal niet veel zijn, mits je geen miljoenen bezoekers per maand hebt. Maar het is wel iets om rekening mee te houden.

Maak een bucket aan in S3 die de zelfde naam heeft als je blog, dus bijvoorbeeld : blog.wiebenikdan.nl of www.mijndomeinnaam.nl efin je snapt het wel.

De URL naar de CDN zal dan iets worden van: blog.wiebenikdan.nl.s3-website-eu-west-1.amazonaws.com

Je moet daarnaast de bucket openbaar maken en &#8220;Static Website Hosting&#8221; zetten op &#8220;Enable website hosting&#8221; verder hoef je daar niets in te vullen want het wordt toch een CDN en geen echte site.

Je dient ook een gebruiker aan te maken onder S3 waarmee je de plaatjes kan uploaden. Dit doe je via de &#8220;Security Credentials&#8221; bij Users. Je maakt een nieuwe user aan met een voor jou duidelijke naam en vinkt aan &#8220;Generate an access key for each User&#8221;.

Daarna krijg je twee zogenaamde sleutels die je kopieert naar een notepad of tekst editor of evernote (deze gegevens heb je later nog nodig namelijk)

Als je klikt op &#8220;Show User Security Credentials&#8221; krijg je een &#8220;Access Key ID&#8221; en een &#8220;Secret Access Key&#8221; te zien. Die zijn dus belangrijk. 

Ook heb je de mogelijkheid om de keys via een download-optie te krijgen. Ja joh&#8230; download maar voor de zekerheid.

**stap 5:** CDN koppelen via w3 total cache aan je wordpress site

</p> 

  * Ga naar Plugins > Nieuwe plugin


  * Typ een zoekopdracht in &#8220;w3 total cache&#8221;


  * Klik bij de gewenste plugin op “Nu Installeren”


  * Als de installatie voltooid is klik je op “Activeren”


  * Klaar, de w3 total cache plugin is nu klaar voor gebruik
</ul> 

Hierna dien je de CDN te configureren en heb je de gegevens nodig die je had opgeslagen. 

Het is niet heel ingewikkeld maar best wat werk. Voor een zeer uitgebreide handleiding hierover ga je naar deze [link](http://jeffreifman.com/detailed-wordpress-guide-for-aws/activate-amazon-cloudfront/)

Vergeet niet al je plaatjes en foto&#8217;s met de knop &#8220;upload to CDN&#8221; op de S3 omgeving te zetten.

**stap 6:** nee helaas we zijn er nog steeds niet.  
Installeer de Disqus plugin. Die heb je nodig om je reacties op te slaan. Hiervoor heb je een Disqus account nodig die kan je [hier](http://disqus.com/profile/signup/) aanmaken.

Na installatie van Disqus ziet het systeem dat je reeds reacties hebt en zal je vragen om ze te importeren.

**stap 7:** We zijn er bijna!

Installeer de WordPress [Ghost.org plugin](http://wordpress.org/plugins/ghost/faq/)

Activeer de plugin.

Nu de Ghost plugin volledig is geïnstalleerd en geactiveerd, zie je nu de optie onder tools -> &#8220;Export to Ghost&#8221;. Zodra je op die pagina komt zie je een knop &#8220;Download Ghost File&#8221;. Als je daarop klikt gaat de plugin je wordpress artikelen downloaden in 1 bestand. Dit is het bestand dat zal worden gebruikt om te importeren je berichten dus zorg ervoor dat je deze op een veilige plaats bewaard.

**Stap 8:** Importeer het bestand in Ghost!

Ga naar je Ghost site en typ achter de url /ghost/debug

Hier kan je je gegenereerde WordPress file importeren.

Als je dat hebt gedaan zal je zien dat al je blogposts op je Ghost.org site staan.

**N.B.**  
Ik ben zeker een uur of 2 a 3 bezig geweest met de gehele conversie. Ik hoop dat Ghost.org binnenkort een eenvoudigere manier heeft om Blogger sites te importeren.

Ik heb ook het Disqus verhaal nog niet op de rit op <http://blog.vandersluijs.nl> misschien gebruik ik het wel helemaal niet en stap ik over op Google+ Comments, die ik hier ook gebruik.

Ik hoop dat je iets aan mijn tutorial had. Ik heb niet alles tot op de punt uitgelegd, je zal een beetje technisch onderlegt moeten zijn en ik heb al gezien dat verschillende knopnamen in andere talen nogal afwijken.

Ik hoop dat het je lukt met de import en wens je veel succes met je site!

En laat hieronder nog even weten of het is gelukt en wat jou Ghost.org site nu is.