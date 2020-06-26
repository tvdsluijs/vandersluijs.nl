---
author: tvdsluijs
category:
- Tech
comments: 'true'
date: '2017-03-12 13:06:57+00:00'

image: https://vandersluijs.resultants-e.nl/1*eqxgrhVHH0GE6TRVa3mPeg.jpeg
layout: post
publish_date: '2017-03-12 13:06:57+00:00'
slug: oplossing-too-many-redirects-probleem-met-ssl-en-wordpress
tags:
- Tech
- WordPress
- Https
- Ssl Certificate
- Coding
title: "Oplossing \u201CToo Many Redirects\u201D probleem met SSL en Wordpress"

---
Dus je wilt eindelijke een veilige Wordpress omgeving! Je hebt netjes een
certificaat aangevraagd! Via Comodo of Letsencrypt. Je hebt alle server
aanpassingen gedaan, en dan is het eindelijk tijd om Wordpress om te zetten.

En voor je het weet… is alles kapot!
<!--more-->
> SSL voor een veilige site en voor Google

Met de campagne HTTPS everywhere heeft Google wat maanden terug de stap gezet
door de Google diensten te beveiligenvia https. Ze moedigen het gebruik van
HTTPS al enkele jaren aan om het internet veiliger te maken. En nu is het tijd
dat jij het ook gaat doen want Google gaat https meewegen in de ranking.

Dus je hebt het certificaat aangevraagd en op de server gezet. Je hebt de
volgende stappen gevolgd om je site te “verplaatsen”.

  * wp-login.php kan gebruikt worden om de urls aan te passen
  * open de fite en zoek de regel

    
    
      
    require( dirname(__FILE__) . ‘/wp-load.php’ );

  * voeg de volgende regels toe.

    
    
      
    //FIXME: do comment/remove these hack lines. (once the database is updated)  
    update_option(‘siteurl’, ‘http://your.domain.name/the/path' );  
    update_option(‘home’, ‘http://your.domain.name/the/path' );

  * sla het bestand op

Je haast je naar de site en voor je het weet zit je tegen een wit of grijs
scherm te kijken met de volgende tekst

> This webpage has a redirect loop

Okay…. en nu?

#### Oplossing Too Many Redirects Wordpress

Heel internet heb je al afgezocht, en niemand komt met een werkende oplossing
lijkt het!

Alle plugins uitgezet, werkte niet.  
Nogmaals alle aanpassingen doorgelopen, werkte niet!

Pas als je het weer terug hebt gezet lijkt je site weer te werken!

Maar je wilt HTTPS!!

Eigenlijk kan je het geheel niet oplossen met het aanpassen van Wordpress.
Waarschijnlijk is jou server zo geconfigureerd dat het werkt met bijvoorbeeld
een caching server er voor of een loadbalancer. Hierdoor snapt Wordpress niet
of je nu wel of niet HTTPS zit.

Het kan verholpen worden door de volgende regels toe te voegen aan je
config.php bestand.

    
    
    if ( (isset($_SERVER[‘HTTP_X_FORWARDED_PORT’] ) && ( ‘443’ == $_SERVER[‘HTTP_X_FORWARDED_PORT’] ))  
     || (isset($_SERVER[‘HTTP_CF_VISITOR’]) && $_SERVER[‘HTTP_CF_VISITOR’] == ‘{“scheme”:”https”}’)) {  
     $_SERVER[‘HTTPS’] = ‘on’;  
    }

Daarna kan je of in Wordpress de URL aanpassen zoals je al eerder gedaan hebt
of de volgende regels toe te voegen (pas even joudomein.nl aan in jou echte
domein naam, met of zonder www!)

    
    
      
    define(‘WP_HOME’,’https://joudomein.nl');  
    define(‘WP_SITEURL’,’https://joudomein.nl');  
      
    

Als je daarna ook nog even de volgende regels in je HTACCESS aanpast dan
worden alle urls netjes met een 301 verwezen naar de https variant. Dat vind
Google wel zo fijn!

.htaccess

    
    
    # BEGIN Force http to https  
    RewriteEngine On  
    RewriteCond %{HTTPS} !=on  
    RewriteRule ^(.*) https://%{HTTP_HOST}/$1 [R=301,L]  
    # END Force http to https

En als het goed is heb je nu een werkende wordpress met https!!

 _Foto door: Pixabay Source: pixabay.com_

 ** _ps: heb je goed gekeken naar deze pagina? Er klopt iets niet! Eeuwige
roem voor de eerste die het ziet!_**

