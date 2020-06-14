---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2011-08-02 00:22:00+00:00
dsq_thread_id:
- '5943605360'
hits:
- '1568'
layout: post
permalink: /2011/08/wordpress-versnellen-doormiddel-van.html
title: WordPress versnellen doormiddel van .htaccess aanpassing

---
Nu wordpress 3.x uit is (nu 3.2.1, maar als je dit leest is er waarschijnlijk al weer een nieuwere versie uit) wordt het tijd om WordPress eens supersnel te maken.

Waarschijnlijk heb je gemerkt dat WordPress 3.2 al veel sneller is geworden, maar het kan nog sneller!

Het sneller maken van WordPress kan redelijk eenvoudig door wat regels toe te voegen aan je .htaccess file.

Een .htaccess-bestand is een simpel tekstbestandje waarmee je dingen kunt uitvoeren en sommige (server-)instellingen kunt wijzigen of omzeilen.

En hiermee kan je dus ook je wordpress sneller maken.

Met het volgende stukje tekst wat je boven aan je bestaande .htaccess zet (dus voor de standaard wordpress .htaccess) zet je je site in de zogenaamde comprimeer mode. Eigenlijk zipt de server ieder bestand voordat hij hem naar de bezoeker stuurt. Zijn browser pakt het automatisch weer uit en toont het in de browser.

Doordat het bestand vele malen kleiner is (inclusief javascript, css, plaatjes enz) heeft de bezoeker hem veel sneller binnen.

Okay, genoeg theorie, de code:

mod_gzip_on Yes    
mod_gzip_dechunk Yes    
mod_gzip_item_include file .(html?|txt|css|js|php|pl)$    
mod_gzip_item_include handler ^cgi-script$    
mod_gzip_item_include mime ^text/.*    
mod_gzip_item_include mime ^application/x-javascript._    
mod\_gzip\_item_exclude mime ^image/._    
mod_gzip_item_exclude rspheader ^Content-Encoding:._gzip._

ExpiresActive On    
ExpiresDefault &#8220;access plus 1 seconds&#8221;    
ExpiresByType text/html &#8220;access plus 1 seconds&#8221;    
ExpiresByType image/gif &#8220;access plus 2592000 seconds&#8221;    
ExpiresByType image/jpeg &#8220;access plus 2592000 seconds&#8221;    
ExpiresByType image/png &#8220;access plus 2592000 seconds&#8221;    
ExpiresByType text/css &#8220;access plus 604800 seconds&#8221;    
ExpiresByType text/javascript &#8220;access plus 216000 seconds&#8221;    
ExpiresByType application/x-javascript &#8220;access plus 216000 seconds&#8221;

Header set Cache-Control &#8220;max-age=2592000, public&#8221;

Header set Cache-Control &#8220;max-age=604800, public&#8221;

Header set Cache-Control &#8220;max-age=216000, private&#8221;

Header set Cache-Control &#8220;max-age=216000, public, must-revalidate&#8221;

Header set Cache-Control &#8220;max-age=1, private, must-revalidate&#8221;

Header unset ETag

FileETag None

Download de .htaccess code