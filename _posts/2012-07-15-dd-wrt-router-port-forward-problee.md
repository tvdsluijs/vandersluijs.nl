---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2012-07-15 22:55:00+00:00
dsq_thread_id:
- '5820582297'
hits:
- '1016'
layout: post
permalink: /2012/07/dd-wrt-router-port-forward-problee.html
title: dd-wrt router port forward probleem opgelost

---
Ik kocht een buffalo router omdat ik las dat je hem van dd-wrt kan voorzien.

Dat wil ik graag want ik wil de sterkte zelf graag kunnen instellen.

Maar bij de laatste update van dd-wrt ging het fout. <a name="more"></a>

Geen port forward deed het meer. Ik balen natuurlijk want mijn interne webserver op poort 80 werkte niet meer.

Erger nog ik kwam er niet achter waarom het niet werkte. Alle poorten had ik juist geforward en  stond goed dus het moest echt werken.

Maar nee hoor geen poort forward deed het meer.

Ik heb heel het internet afgezocht en toen kwam ik er achter dat er iets met backloops is en met de firewall.

Efin, na van alles geprobeerd te hebben kwam ik er achter.

Het is eigenlijk vrij simpel

**Ga naar:**

Administratie -> Commando&#8217;s

**type in:**

_iptables -t nat -A POSTROUTING -j MASQUERADE_

**Klik op:**

bewaar firewall

Reboot even de router voor de zekerheid en de port forward of port-forwards werken weer.