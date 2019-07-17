---
layout: post
excerpt_separator: <!--more-->
title: 'Flex vervang / replacer'
slug: 'flex-vervang-replacer'
date: '2008-12-25 11:29'
publish_date: '2008-12-25 11:29'
category: ['Coding']
tags: ['Coding']
---
Heb je dat ook wel eens ? Dat je in een string iets wilt wijzigen in Adobe
Flex en Actionscript maar … hoe ?  
  
Tja tijdens diverse werkzaamheden bij NL for Business (NL4B) had ik dat ook.
Waarom bestaat er geen goede replace in Adobe Flex.  
  
Nu wel ;-)  
  
Ik heb de volgende code gemaakt, deels vanuit andere code sites.  
  
  
  
Zet de volgende code binnen je AS3 script of tussen <mx:script.

    
    
    private function str _replace( replace_ with:String,   
    replace:String,   
    original:String ) : String {  
          var array:Array = original.split(replace);  
          return array.join(replace _with);  
      }_

 _Hoe te gebruiken ? Heel simpel, replace_ with is waarmee je het wilt
vervangen, replace is het deel dat je wilt verangen, original… is dus het
origineel.

    
    
    var newString:String = str _replace( "", " ", postal);_

 _dus….  
  
original = “The quick brown fox jumps over the lazy dog”;  
  
replace_with = “yellow”;  
  
replace = “brown”;  
  
wordt : “The quick yellow fox jumps over the lazy dog”;

