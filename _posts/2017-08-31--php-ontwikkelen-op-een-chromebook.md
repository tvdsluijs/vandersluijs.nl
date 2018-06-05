---
layout: post
excerpt_separator: < !--more -->
title: php ontwikkelen op een Chromebook
slug: 'php-ontwikkelen-op-een-chromebook'
date: '2017-08-31 20:04:22.459000+00:00'
publish_date: '2017-08-31 20:04:22.459000+00:00'
image:
  feature: 'https://vandersluijs.resultants-e/1*_UI1YYXp2vby2qdgUKcsyA.jpeg'
category: ['Apple', 'Chromebook', 'Development', 'PHP']
tags: ['Apple', 'Chromebook', 'Development', 'PHP']
---
Zoals je wellicht hebt kunnen lezen heb ik mijn baan opgezegd en moest ik
daarbij mijn Macbook inleveren. Tja daar ging mijn ontwikkel omgeving
< !--more -->

Zoals je wellicht hebt kunnen lezen heb ik mijn baan opgezegd en moest ik
daarbij mijn Macbook inleveren. Tja daar ging mijn ontwikkel omgeving.

Ik dacht er aan om een MacBook te kopen, maar ja om nu weer 3000 euro te gaan
uitgeven aan een over de top gehyped(maar wel heel goed werkende) laptop vond
ik wat overdreven.

Maar ja… ik moest verder. Zonder eigen dev-bak kon ik toch niet verder?

> Toch?

Dus ging ik op onderzoek op internet. En kwam er al snel achter dat redelijk
wat mensen op een Chromebook hun development werkzaamheden deden.

PHP, Ruby, Angular, NodeJS, Python het is allemaal mogelijk! Met wat omwegen.

Toen ik op internet gelezen had dat het echt mogelijk was heb ik mezelf een
Chromebook cadeau gedaan. En wel de [Acer
CB3–431-C5K7](https://partner.bol.com/click/click?p=2&t=url&s=33431&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fp%2Facer-14-cb3-431-c5k7-chromebook-14-inch%2F9200000057985519%2F&name=Acer%2014%20CB3-431-C5K7%20-%20Chromebook%20-%2014%20Inch),
wat een prachtige (maar geheel niets zeggende) naam is voor een character uit
Star Wars maar niet is over te brengen naar geïnteresseerden op een feestje.

In het kort is deze [Acer
CB3–431-C5K7](https://partner.bol.com/click/click?p=2&t=url&s=33431&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fs%2Fchromebook%2F&name=chromebook%20Computer%20kopen%3F%20Alle%20Computers%20online)
een Full HD 14 inch Chromebook waarvan ik de specs en hoe hij werkt in een
ander artikel verder zal omschrijven.

Ik ben een kleine week bezig geweest (avonden vooral) om alles van mijn
MacBook om te zetten naar Chrome Extensions, Google Drive Uploads, Contacten
uploads enz.

Toen ik alles om had gezet heb ik langzaam mijn MacBook qua programmatuur
ontmanteld en moest ik dus steeds meer gaan doen op mijn Chromebook, totdat de
dag kwam dat ik niet anders meer kon dan op mijn Chromebook te werken.

En het antwoord is JA, je kan NIET op een Chromebook ontwikkelen als je hem
niet rigoureus wilt hacken, en JA je kan WEL op een Chromebook ontwikkelen met
de juiste (en vooral online) tools!

### Chromebook ombouwen tot Development bak

Je kan je Chromebook helemaal “Hacken” en ombouwen tot een echte Development
Bak.

Ik vraag me er wel serieus af of dit :

  1. Handig is, want chromebook kapot, kan je weer overnieuw beginnen.
  2. Genoeg ruimte biedt om je omgevingen op te draaien.

Maar het is mogelijk!

Als eerste moet je Crouton installeren! Daarvoor moet je in de developer mode
van je Chromebook komen.

Om je Chromebook in development mode te zetten volg je dit stappen plan:
[enter the developer mode](http://www.howtogeek.com/210817/how-to-enable-
developer-mode-on-your-chromebook/).

Als het je gelukt is om de terminal te starten met CTRL+ALT+T kan je aan de
gang!

  1. Installeer de [crouton integratie extentie](https://chrome.google.com/webstore/detail/crouton-integration/gcpneefbbnfalgjniomfjknbcgkbijom) in Google Chrome
  2. Download dan crouton en installeer het met de volgende extenties. Je kan dat als volgt doen in de terminal.

    
    
    shell  
    sudo sh ~/Downloads/crouton -t core,xiwi,keyboard,x11,cli-extra,extension

Dit zal dan Crouton installeren met de volgende onderdelen.

  *  **core**
  *  **Xiwi** : voor het embedden van linux applicaties in Chrome tabs en windows
  *  **Keyboard:** Kan je lekker makkelijk keyboard shortcuts gebruiken in je linux applicaties
  *  **X11:** X Window System. Essentieel om de meeste programma’s te draaien.
  *  **cli-extra:** installeerd wat nieuwe features voor de commandl ine.
  *  **extension:** Installeert extra’s voor de Crouton browser extention. upports to the Crouton browser extension. Zoals clipboard syncing via WebSockets zodat je kan copy/pasten van browser naar xiwi tabs en windows.

> Now you can enter the chroot

    
    
    sudo enter-chroot

Zo nu heb je Ubuntu tot je beschikking!

Hierna kan je GIT, Sublime Text en Apache + PHP + MySQL.

Je kan lezen hoe dat moet op deze pagina:

[ **Ultimate guide for Web Development on Chromebook — Part 1: Crouton**  
 _So why would anyone want to use Chromebook for web development? There’s a
couple of reasons:_ medium.com](https://medium.com/@martinmalinda/ultimate-
guide-for-web-development-on-chromebook-part-1-crouton-2ec2e6bb2a2d
"https://medium.com/@martinmalinda/ultimate-guide-for-web-development-on-
chromebook-
part-1-crouton-2ec2e6bb2a2d")[](https://medium.com/@martinmalinda/ultimate-
guide-for-web-development-on-chromebook-part-1-crouton-2ec2e6bb2a2d)

Heb ik dit bovenstaande gedaan?

Nope! Ik heb in mijn ogen een betere oplossing.

### Chromebook development in de cloud

Het grote voordeel van de cloud is dat wanneer je hardware kapot gaat alles
altijd in de cloud staat. Dus je koopt gewoon een nieuwe chromebook, je logt
in en binnen 10 minuten ben je weer aan de slag!

Een ander groot voordeel van de Cloud en dus van een Chromebook is dat updates
(bijna) tot het verleden horen. Als je puur en alleen Chromebook gebruikt (en
dus geen half gehackte ubuntu bak hebt) zijn updates iets van het verleden…
althans voor jou.

Chromebook update zich zelf, wanneer het nodig is en alles wat in de cloud
gebeurd wordt ook voor je geupdate. Geen apt get update meer dus :-)

#### Nadeel development in de cloud

Nadeel van de cloud is dat wanneer je geen toegang hebt tot internet je geen
toegang hebt tot de cloud en dus ook niet kan ontwikkelen.

Het nadeel vind ik zelf eigenlijk verwaarloosbaar. Ik heb eigenlijk 90% van de
tijd wel toegang tot internet (waarschijnlijk zelfs 99% van de tijd) en als
internet er dan uit ligt dan ben ik of bezig met internet weer op gang te
krijgen of wel kan ik toch niks omdat ik nou juist internet nodig had om te
doen wat ik moest doen.

> Face it! We can’t live without internet!

Als je online gaat ontwikkelen staat je omgeving altijd voor je klaar!

En het mooie is dat het in iedere browser op iedere laptop, desktop of zelfs
tablet voor je klaar staat.

In de trein doe je wat Development op je Chromebook, thuis ga je zonder iets
te updaten verder op je iMac en wanneer je op vakantie bent kan je zelfs
verder op je Tablet of iPad.

#### Cloud-based IDEs

Er zijn diverse zogenaade cloud-based IDE’s. En deze werken super met een
Chromebook. Er is wel een nadeel, je moet vaak per maand een bedrag betalen.
Echter hebben sommige ook een gratis versie.

  * [Nitrous.io](https://www.nitrous.io/): Zag er veelbelovend uit, veel over gelezen…. maar is helaas niet meer te gebruiken. Ondersteunde wel: Ruby, Node.js, Python, PHP or Go.
  * [Cloud9 IDE](https://c9.io/): Mijn favoriet! Werkt lekker snel! Kan enorm veel code regels aan. Werkt in virtuele vooraf geïnstalleerde of eigen virtuele workspaces (alles via SSH). Ondersteunt meer dan 40 programmeertalen zoals PHP, Ruby, Python, Go.
  * [Codeanywhere](https://codeanywhere.com/): Mooie omgeving waarin je de volgende handige features tot je beschikking hebt. Code sharing, terminal access, real-time collaboration, code completion, linting, multiple cursors, Zen coding support, code beautify. Alle devices en browsers ondersteuen ze. Meer dan 72 programmeertalen zoals JS, PHP, HTML, PHP, Python, Ruby, Go.

 _Met dank aan_[ _Techrepublic_](http://www.techrepublic.com/article/so-you-
want-to-develop-on-a-chromebook/) _waar ik over deze IDE’s gelezen heb._

Zoals hierboven omschreven gebruik ik zelf Cloud9. Ik gebruik op dit moment de
gratis versie die eigenlijk al heel goed werkt. Alleen als je wilt switchen
tussen verschillende workspaces duurt dat (extra) lang… want tja… ze willen
natuurlijk dat je gaat betalen.

Zo zie je maar dat je prima op een Chromebook kan programmeren. Chromebook
zijn niet duur en in 10 minuten ben je up and running

Wil je nou ook een chromebook? Kijk dan even op mijn [sponsor
pagina](https://partner.bol.com/click/click?p=2&t=url&s=33431&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fs%2Fchromebook%2F&name=chromebook%20Computer%20kopen%3F%20Alle%20Computers%20online)
voor de laatste
[aanbiedingen](https://partner.bol.com/click/click?p=2&t=url&s=33431&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fs%2Fchromebook%2F&name=chromebook%20Computer%20kopen%3F%20Alle%20Computers%20online)!

 _Photo : Kaboompics // Karolina_

