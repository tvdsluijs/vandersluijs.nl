---
author: tvdsluijs
category:
- Coding
comments: 'true'
date: 2009-03-03 19:50
excerpt_separator: <!--more-->
layout: post
publish_date: 2009-03-03 19:50
slug: from-seconds-to-hours-minutes-and-seconds-in-actionscript
tags:
- Coding
title: From Seconds to Hours, Minutes and Seconds in Actionscript

---
Ever wanted to calculate seconds back to Hours:Minutes:Seconds so that 5854
seconds becomes 01:37:34 ? You can do it with the following AS3 script

    
    
    public function SetHMS(sec:String):String{   
          var seconds:Number = Number(sec);   
          var hours:Number = 0;   
          var minutes:Number = 0;   
          var strHours:String   
          var strMinutes:String;   
          var strSeconds:String;   
      
          while(seconds>=3600){   
              hours++;   
              seconds-=3600;   
          }   
      
          while(seconds>=60){   
              minutes++;   
              seconds-=60;   
          }                
      
          strHours = hours       strMinutes = minutes       strSeconds = seconds   
          return strHours + ":" + strMinutes + ":" + strSeconds;   
      }

