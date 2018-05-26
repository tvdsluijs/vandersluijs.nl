---
id: 4
title: ZeelandNet wifi-modem in voor gebruik met een eigen router?
date: 2015-05-21T20:55:15+00:00
author: Theo van der Sluijs
layout: post
guid: https://vandersluijs.nl
permalink: /blog/2015/05/zeelandnet-wifi-modem-gebruik-eigen-router.html
hits:
  - "128"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5811393575"
categories:
  - Tech
---
<div>
  Zolang ZeelandNet Bridge Mode nog niet mogelijk gemaakt heeft in het Wifi Modem, is IP Pass Through voor de eigen router in het Wifi Modem (EPC3925) een redelijk alternatief.
</div>

<!--more-->

<div>
  Gebruik onderstaande werkwijze voor het aansluiten van de eigen router op het zeelandnet modem:
</div>

<div>
</div>

  * Zorg dat het Macadress van de eigen router bekend is.
  * Ga via 192.168.11.1 naar het Wifi Modem. Log in met inlognaam en password.

<div>
  <a href="https://vandersluijs.resultants-e.nl/2016/05/b0ebfd1d-7ac4-4e52-9c9c-2fe24f74d9e8.jpg"><img class="alignnone size-medium wp-image-5" src="https://vandersluijs.resultants-e.nl/2016/05/b0ebfd1d-7ac4-4e52-9c9c-2fe24f74d9e8-300x150.jpg" alt="zeelandnet modem eigen router" width="300" height="150" /></a>
</div>

  * Vul het Macadress van de eigen router in onder Applications & Gaming bij IP Pass Through.
  * Schakel de SPI Firewall uit in het Wifi Modem als je verder geen gebruik maakt van het Wifi Modem
  * Herstart het Wifi-Modem
  * In de eigen router staat DHCP AAN, stellen we beveiliging in en regelen Wlan (zoals bekend). Mocht het een Sitecom zijn, is het verstandig de Security Cloud uit te zetten.
  * Sluit nu de voeding van de router aan en de netwerkkabel tussen een Lanpoort ( op Wifi-Modem) naar Wanpoort ( losse poort op router).
  * Herstart de pc.
  * Hardware kan zowel op de router gebruikt worden via Wireless en Lan als op het het Wifi-Modem. Let op dat als je via Wifi of Lan van het modem verbindt dat dit een &#8221;ander&#8221; netwerk is!
  * Wel zal je, als je het Wifi-Modem wilt benaderen, dit voortaan rechtstreeks moeten doen (niet via hardware welke van de router gebruik maakt).