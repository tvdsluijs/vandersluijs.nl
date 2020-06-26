---
author: tvdsluijs
category:
- Coding
comments: 'true'
date: 2010-02-13 10:23

layout: post
publish_date: 2010-02-13 10:23
slug: flex-as3-password-creator-generator
tags:
- Coding
title: Flex AS3 Password Creator / Generator

---
Ever wanted to create or generate passwords within Adobe Flex / Flash Builder
or AS3 ?  
Well it’s quite simple to do this.  
You only need 11 lines of code for generating a password (well 13 if you count
the function statement)  
  
With this piece of code you can create any kind of password for your user.  
[as3]  
public function createpw(strHash:String =
‘abchefghjkmnpqrstuvwxyz0123456789’,lnHash:Number = 5):String  
{  
var i:Number = 0;  
var hash:String = “”;  
var nLenght:Number = strHash.length;  
while (i

