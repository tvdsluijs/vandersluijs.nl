---
author: tvdsluijs
category:
- Coding
comments: 'true'
date: 2010-03-02 19:15

layout: post
publish_date: 2010-03-02 19:15
slug: read-out-system-memory-using-adobe-flex
tags:
- Coding
title: Read out system memory using Adobe Flex

---
So you have a application, and you want to know how much it takes of your (or
the users) system memory ?  
  
Easy, just use the following code:  
  
  
  
[as3]  
  
  
  
  
  
public function SySMem():void{  
var memoryUsedInKb:int = int(System.totalMemory / 1024);  
lblSysMem.text = memoryUsedInKb.toString()+” KB”;  
}  
]]>  
  
  
  
[/as3]  
  
But be aware this code show the totalMemory of all instances of flash objects
opened at that moment.  
  
So if you want to test if correctly close all other flash objects within all
browsers and also AIR Applications.

