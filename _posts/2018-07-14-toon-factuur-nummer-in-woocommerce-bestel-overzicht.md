---
author: tvdsluijs
categories:
- Coding
comments: 'true'
date: 2018-07-14

image: /images/toon-factuur-nummer-in-woocommerce-bestel-overzicht.jpeg
layout: post
permalink: /2018/07/toon-factuur-nummer-in-woocommerce-bestel-overzicht
publish_date: 2018-07-14
slug: /2018/07/toon-factuur-nummer-in-woocommerce-bestel-overzicht
tags:
- Woocommerce
- Wordpress
title: Toon factuur nummer in Woocommerce bestel overzicht

---
Woocommerce heeft een factuur nummer systeem echter is het tonen van deze factuur nummers niet echt handig. Je kan wel wat plugins installeren om de klant eenvoudiger de factuur te laten downloaden, of dat jij hem eenvoudiger kan downloaden maar even een factuur nummer zien kan niet. Daar heb ik een script voor gemaakt 
<!--more-->

Hieronder (helemaal naar beneden) kan je een script vinden waarmee je eenvoudig de Factuurnummers binnen Woocommerce toont. Na het installeren van dit script (via functions.php of code snippets) krijg je een extra kolom bij je bestellingen waar het factuur (invoice) nummer wordt getoond.

## Woocommerce Invoice / Factuur nummer
Met een WooCommerce webshop wil je natuurlijk PDF facturen kunnen maken en verzenden. Met een extern administratie pakket of facturen programma is dit geen probleem. Echter als je dit niet hebt en Woocommerce wilt gebruiken dan zal je snel een plugin moeten installeren omdat je hier niets over kunt vinden bij de instellingen.

WooCommerce heeft namelijk standaard niet de functionaliteit om PDF facturen aan te maken en te verzenden. De plugin [WooCommerce Print Invoice & Delivery Note](https://nl.wordpress.org/plugins/woocommerce-delivery-notes/) kan dit wel maar dan heb je geen snel overzicht tot het tonen van factuur nummers.

Je kan onderstaande code toevoegen in je Functions, maar makkelijker is het om het via 
de Plugin [Code Snippets](https://wordpress.org/plugins/code-snippets/) in je wordpress
toe te voegen. Dan hoef je niet speciaal je functions.php aan te passen maar kan je het
direct toevoegen als scriptje

Als je  factuur nummers hebt zoals:
* F-2018-754
* F-2018-755
* F-2018-756
of
* 201802-847
* 201802-848
* 201802-849

Dan moet je alles vanaf regel 60 verwijderen. Als er namelijk een streepje tussen zit dan kan het sorteren helaas niet helemaal goed gaan

Oplopende nummers zoals:
* 3434375
* 3434376
* 3434377
of
* F473763
* F473764
* F473765

gaan gewoon goed!

Laat onderaan even weten wat je vond van het script! En als je er wat aan hebt vergeet dan niet om een kop koffie voor me te kopen! [![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/itheo)

{% gist 290ad410c6b3d9032c975fe32c5c2461 %}