---
layout: post
excerpt_separator: < !--more -->
title: 'Auto remove highlighted fields'
slug: 'auto-remove-highlighted-fields'
date: '2009-07-17 11:38'
publish_date: '2009-07-17 11:38'
category: ['Coding']
tags: ['Coding']
---
This week when working at [NL for Business](http://www.nl4b.com/ "NL For
Business") I was creating some PDF documents with Adobe Form Designer for a
demo.  
  
I noticed that when I had some required fields they instantly turned red and
had a blue highlighting.  
  
I really really did not like this. So I searched the net and found a way to
remove this  
  
  
  
When you put this into your code (at a point that the the form is ready)

    
    
    1:
    
    
    2:  if (app.runtimeHighlight == true)
    
    
    3:  {
    
    
    4:  app.runtimeHighlight = false;
    
    
    5:  }

The highlighting is gone !  
  
Wowow !!!  
  
If the person using the form presses a button, they just light up like they
are suppose to do.  
  
Off course when you press the highlight button in Acrobat, they will also
light up.

