---
id: 75
title: Van MD5 naar veilige versleuteling
date: 2014-01-18T12:38:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2014/01/18/van-md5-naar-veilige-versleuteling/
permalink: /blog/2014/01/van-md5-naar-veilige-versleuteling.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "6729092774489993126"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2014/01/van-md5-naar-veilige-versleuteling.html
blogger_thumbnail:
  - http://blog.theovandersluijs.nl/wp-content/uploads/2014/01/34164244_d529aee319_m.jpg
hits:
  - "1740"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5735421086"
categories:
  - Tech
tags:
  - Code
  - php
---
<table cellpadding="0" cellspacing="0" style="float: left; margin-right: 1em; text-align: left;">
  <tr>
    <td style="text-align: center;">
      <a href=https://vandersluijs.resultants-e.nl/2014/01/34164244_d529aee319_m.jpg" style="clear: left; margin-bottom: 1em; margin-left: auto; margin-right: auto;"><img border="0" src=https://vandersluijs.resultants-e.nl/2014/01/34164244_d529aee319_m.jpg" height="150" width="200" /></a>
    </td>
  </tr>
  
  <tr>
    <td style="text-align: center;">
      Foto door&nbsp;&nbsp;<a href="http://www.flickr.com/photos/badwsky/" style="background-color: #fefefe; color: #0063dc; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 18px; text-align: left; text-decoration: none;">Whiskeygonebad</a>
    </td>
  </tr>
</table>

Wachtwoord beveiliging is het meest belangrijke als je een website of webshop hebt.

Het is namelijk belangrijk dat je de wachtwoord veiligheid van je site gebruikers, je klanten kan waarborgen.

MD5 leek in het begin leuk toen iedereen nog een 486DX2 in huis had maar met een computer cluster van nog geen 2000 euro kan je 700.000.00 wachtwoorden per seconde kraken!

Goede versleuteling van de wachtwoorden is dus belangrijk. Maar hoe ga je dat doen? Hoe kan je van MD5 overstappen naar een betere manier van versleutelen.

In dit artikel leg ik uit hoe je dat kan doen, waarbij je nu al direct huidige wachtwoorden van MD5 naar bijvoorbeeld SHA265 kan omzetten en nieuwe wachtwoorden in een salted sha512x1000 kan encrypten.  
<!--more-->

Dus je hebt een MD5 versleutelde wachtwoorden gebruikers tabel, en daar wil je zo snel mogelijk vanaf.

Dat kan! En in een paar simpele stappen. Ten eerste moet je er voor gaan zorgen dat al deze MD5 versleutelde wachtwoorden iets veiliger wordt!

Dat gaan we doen met behulp van een SALT en SHA512 en een # (hash teken)

Wat doe ik hier precies? Ik kan niet het huidige MD5 wachtwoord terug omzetten naar een normaal te lezen wachtwoord. Nou&#8230; dat zou wel, maar laten we even zeggen dat ik niet ieder MD5 versleuteld wachtwoord wil opzoeken op Google en ik wil ook geen 2000 euro uitgeven aan een systeem die dit voor mij kan doen.

Ik wil ook helemaal niet de echte wachtwoorden van mijn gebruikers zien.

Met deze mysql update versleutel ik nog een keer het MD5 versleutelde wachtwoord. Ik zet er het # (hash) teken voor zodat ik mijn code kan laten zien dat ik een MD5 wachtwoord versleuteld heb naar een betere versleuteling en dat dit dus geen out-of-the-box MD5 wachtwoord is.

Dus ik pak het MD5 wachtwoord, daar plak ik een timestamp voor als Salt, deze string versleutel ik als SHA512 hash, dan plak ik er een # hash teken voor en zet ik er achter : (dubbelepunt) timestamp.

Mijn mijn geval is de timestamp dus de creationdate van het record wat redelijk uniek is omdat het om een unixtimestamp gaat.

Nu heb ik al direct de wachtwoorden in mijn database veel veiliger gemaakt, alhoewel het nog steeds de oude MD5 versleutelde wachtwoorden zijn.

Hieronder de code die alles verwerkt bij inloggen met oude versleutelde wachtwoorden en deze ook direct omzet naar veiligere versleutelde wachtwoorden.

Wat doet deze code?

Bij het ophalen van de gebruikergegevens via de user haalt hij ook het wachtwoord op en in het eerste deel kijkt hij of er bij het opgeslagen wachtwoord een # in staat en of dit dus een oud MD5 wachtwoord is.  
_if(substr($this->password, 0, 1) == &#8216;#&#8217;){_  
_  
_ Daarna gaat hij de SALT er af halen (implode op 🙂 en dan hou je dus je salt en je hashed wachtwoord over. Dan neemt hij het ingevoerde wachtwoord wat hij door MD5 gooit en de SALT uit het opgehaalde wachtwoord er voor zet.

Dat hashed hij daarna met SHA512

<pre style="background-color: white; font-size: 12px; line-height: 16px; padding: 0px; width: 744px;"><div>
  <br /><i>$saved<em>pw = explode(':', substr($this->password, 1) );</i></div><br />
  
  <div>
    <br /><i>$salt = $saved</em>pw[1];</i>
  </div>
  
  <br />
  
  <div>
    <br /><i>$data = $salt.md5($passwd);</i>
  </div>
  
  <br />
  
  <div>
    <br /><i>$givenPasswd = hash('sha512', $data); //oude manier controle!</i>
  </div>
  
  <br /></pre>
  
  
  <p>
    Als dit overeenkomt met wat er in de database komt dan heb je een match en is de gebruiker dus wie hij zegt dat hij is.
  </p>
  
  
  <p>
    Op dat moment heeft PHP ook het echte ingevoerde wachtwoord en kan je het dus echt goed versleuteld gaan opslaan.
  </p>
  
  
  <p>
    Dit kan via getHashedPWWithSalt! Je genereert eerst een unieke salt voor deze persoon, en die geef je mee aan getHashedPWWithSalt. Hieruit komt een nieuwe salted SHA512 hash die je kan gebruiken!
  </p>
  
  
  <pre style="background-color: white; font-size: 12px; line-height: 16px; padding: 0px; width: 744px;"><div>
  <br />$salt = generateSalt();
</div>

<br />

<div>
  <br />$this-&gt;password = getHashedPWWithSalt($passwd,$salt);
</div>

<br /></pre>
  
  
  <p>
    Heb je ook gezien dat ik heb 10x sha512 hashed voordat ik hem terug geef. Dit kan je ook ophoven naar bijvoorbeeld 250 of nog hoger. Hierdoor wordt het steeds moeilijker voor computers om het echte wachtwoord te achterhalen.
  </p>
  
  
  <p>
    Op deze manier kan je van MD5 versleutelde wachtwoorden naar goed versleutelde wachtwoorden.
  </p>
  
  
  <p>
    Overigens is SHA512 eigenlijk nog niet veilig genoeg. Wil je echt veilig dan moet je naar bcrypt.
  </p>
  
  
  <p>
    Heb je nog vragen? Stuur me een mail op theo [at] vandersluijs.nl
  </p>
  
  
  <blockquote>
    <p>
      Met dank aan <a href="http://blog.ircmaxell.com/" target="_blank">Anthony Ferrara</a>, hij zette mij aan het denken tijdens een PHP Congres over hoe ik dit het beste kon gaan oplossen.
    </p>
  </blockquote>