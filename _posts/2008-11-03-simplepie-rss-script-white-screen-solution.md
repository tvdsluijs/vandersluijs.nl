---
layout: post
excerpt_separator: < !--more -->
title: 'Simplepie RSS script white screen solution'
slug: 'simplepie-rss-script-white-screen-solution'
date: '2008-11-03 00:00'
publish_date: '2008-11-03 00:00'
category: ['Coding']
tags: ['Coding']
---
Well, I was working on my home server with the Simplepie script
(<http://simplepie.org>) to get some RSS feeds on a site.  
It worked great untill I moved it to my live Server.  
All I got where white screens…. could not figure it out what this problem was.  
Than I found this forum  
  
  
<http://simplepie.org/support/viewtopic.php?id=1134>  
The developers say they don’t have a clue why this is happening. But will try
to solve this.  
Till then, I found a way around it. (thanxs to “dostovskk”)  
The problem is the cURL library installed on the server.  
So a way to resolve this is to either update the cURL lib or to use the force
_fsockopen to fetch the remote files.  
To force the use of fsockopen > open simplepie.inc > look for the following
piece of code : “var $force_fsockopen = false;” and change it to “var
$force_fsockopen = true;”

