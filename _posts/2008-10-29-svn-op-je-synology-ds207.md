---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2008-10-29 20:32:00+00:00
dsq_thread_id:
- '5710493099'
hits:
- '1516'
layout: post
permalink: /2008/10/svn-op-je-synology-ds207.html
title: SVN op je Synology DS207

---
Ik heb dus een mooie Synology DS 207 gekocht met 2x 1 TB schijfjes er in. Dat leek me wel handig. Ik had een mooie Ubuntu server staan, maar die trok me toch wat te veel stroom. En hoe los je dat op&#8230;. door iets energie zuinigs te kopen&#8230; en neer te zetten. Via internet kwam ik er al snel achter dat de synology nas systemen redelijk zuinig zijn&#8230; zeker met wat groen gelabelde schijven er in. Alles wat mijn Ubuntu server kon&#8230; kan ook op de synology&#8230; out of the box&#8230;.. behalve dan 1 ding&#8230;. namelijk SVN / Subversion. In deze korte handleiding leg ik uit hoe je dit toch op je Synology kan krijgen.   
<a name="more"></a>   
Stap 1: Zorg dat je <a href="http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html" target="_blank">putty</a> of telnet verbinding hebt.  
Log aan met   root  
(je wachtwoord van de root is gelijk aan het wachtwoord van admin) Ik zelf vind putty erg makkelijk. Nog nooit met putty gewerkt ? <a target="_blank" href="http://lacocina.nl/artikelen/putty.html">Klik hier</a>.

Stap 2.  
Download het volgende bestand (<a target="_blank" href="http://oinkzwurgl.org/dl.php?file=bootstrap-ppc.tar.gz">IPKG</a>) en zet hem in je public directory op je synology bak.. Ik zelf wist niet hoe ik daar ff snel moest komen dus had ik hem in 1 van mijn zelfgemaakt directories gezet (in mijn geval download) Stap 3.  
Voer in  putty de volgende regels uit, 1 voor 1. (zet bij public eventueel de directory die jij zou kiezen) en geef na iedere regel een enter. 

<pre name="code" cols="60">cd /<br />tar -xzvf /volume1/public/bootstrap-ppc.tar.gz<br />ln -s /volume1/opt /opt<br /><br />/opt/bin/ipkg update<br />/opt/bin/ipkg upgrade<br /><br />/opt/bin/ipkg install svn</pre>

Okay.. als je zover zonder foutmelding bent gekomen&#8230; gefeliciteerd 😉  
Maar we gaan nu weer een stapje verder.  
Maak een shared folder via de synology web client, en maak hem zichtbaar voor explorer. Dan mag je straks je repositories gewoon via explorer benaderen. Dat is ook wel handig voor de config files die we gaan aanpassen.  
Sowieso is het handig om even een backup te draaien van alles op je synology servertje.  
Goed ik heb een svn directory aangemaakt.  
Nu gaan we een repository aan maken, zorg dat putty weer open staat.

<pre name="code" cols="40">svnadmin create /volume1/svn/repository</pre>

Zodra je repository is gemaakt open dan even de repository direcotry via de explorer. Hier kan je via een editor zoals notepad / editpad of notepad++ dat gebruik ik altijd, even de rechten en zo aanpassen. Hiervoor moet je in de file  repository/conf zijn.  
Je moet jezelf even als gebruiker toevoegen of eventueel anonymous toegang regelen in de svnserve.conf file.   
Okay terug naar putty en knal daar de volgende regel in

<pre name="code" cols="40">svnserve -d -r /volume1/svn/repository</pre>

Nu is de server gestart en kan je proberen om het vanaf je pc de repository te openen.  
Let op: wellicht moet je een keer je synology ds 207 rebooten voordat het werkt. Dit kan heel simpel ook via Putty via het commando

<pre name="code" cols="40">reboot</pre>

   
Tja&#8230; nu draait het wellicht allemaal heel mooi&#8230; maar als je je systeem reboot dan werkt het niet meer omdat de svn server dan niet draait.  
Dus zal je dit moeten laten opstarten als je systeem herstart.  
Je kan dit aanpassen in de rc config file die vind je

<pre name="code" cols="40">cd /etc<br />ls</pre>

Dan zie je hem staan.  
Laten we eerst even een backup van dit bestandje maken&#8230; voor het geval fout gaat.

<pre name="code" cols="40">cp /etc/cp /etc/cp.backup</pre>

Aanpassen kan via

<pre name="code" cols="40">vi rc</pre>

Doe het volgende, ga redelijk boven in maar onder de regel waarin het woord &#8220;PATH=/&#8221; staat en druk op de letter a  
Nu zit je in edit mode.  
Voeg de volgende regel toe

<pre name="code" cols="40">svnserve -d -r /volume1/svn/repository</pre>

Ga nu naar de regel (doormiddel van pijltje omhoog) waar in dus die PATH=/ staat.  
Ga achter de eerste : staan en voeg dit toe 

<pre name="code" cols="40">opt/bin:/opt/sbin:</pre>

Okay nu gaan ge opslaan dat doe je via

<pre name="code" cols="40">:w</pre>

hierna sluiten met 

<pre name="code" cols="40">:q</pre>

Klaar !!!  
Veel success met je SVN / SubVersion repository op je synology DS207  
   
Met dank aan diverse sites waaronder:  
<http://rob.runtothehills.org/archives/25>[  
](http://www.runtothehills.org/archives/25) <http://wordaligned.org/articles/one-svnserve-multiple-repositories>