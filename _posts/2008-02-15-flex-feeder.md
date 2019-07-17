---
layout: post
excerpt_separator: <!--more-->
title: 'Flex Feeder'
slug: 'flex-feeder'
date: '2008-02-15 06:00'
publish_date: '2008-02-15 06:00'
category: ['Tech']
tags: ['Code']
---
Nu wordt het echt interessant.  
  
Ik heb zojuist een rss reader gemaakt met Flex.  
  
Was niet echt ingewikkeld, maar ja het ziet er leuk uit. Toch ;-)  
  
  
  
En de code voor al dit geweldigs is :  
  
  
  
  
  
  
[Bindable]  
public var feedlist:Array = [{label:”Maak een keuze”, data:”“},  
{label:”Tweakers”,
data:”[http://feeds.feedburner.com/tweakers/mixed”}](http://feeds.feedburner.com/tweakers/mixed”%7D),  
{label:”Nu.nl”, data:”<http://www.nu.nl/deeplink>
_rss2/index.jsp?r=Algemeen”},  
{label:”Webwereld”, data:”_[
_http://feeds.webwereld.nl/webwereld”}_](http://feeds.webwereld.nl/webwereld”%7D)
_,  
{label:”Automatiseringgids”, data:”_[
_http://automatiseringgids.sdu.nl/ag/rss/rss_](http://automatiseringgids.sdu.nl/ag/rss/rss)nieuws.jsp”}  
];  
[Bindable]  
  
public var selectedItem:Object;

