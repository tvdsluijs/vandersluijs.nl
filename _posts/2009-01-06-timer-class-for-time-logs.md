---
layout: post
excerpt_separator: '<!--more-->'
title: 'Timer Class for time logs'
slug: 'timer-class-for-time-logs'
date: '2009-01-06 19:27'
publish_date: '2009-01-06 19:27'
category: ['Coding']
tags: ['Coding']
---
Do you want to know how long your functions take to do there job?  
  
Or do you have multiple functions where you want to know how long they take
before they are ready ? Even better do you want to keep track of multiple
timers in multiple functions?  
  
It is possible!  
  
  
Acutally it is very simple to do this, just use this class:

    
    
    package com.scripts   
    {   
            import flash.utils.getTimer; //import the timer    
      
            public class logtimer   
            {   
                    public function logtimer(){   
                            //TODO: implement function   
                    }   
      
               //some timer prep   
                public var startTime:Number;   
             public var endTime:Number;   
                //some timer functions   
      
                //START TIMER FUNCTION   
                public function startTimer():void {   
                    // Get the time when the preinitialize event is dispatched.   
                    startTime = getTimer();   
                }   
      
                public function endTimer():void {   
                    // Get the time when the creationComplete event is dispatched.   
                    endTime = getTimer();   
                }             
      
              public function elapsedTime():Number{   
                    var totalTime:Number = endTime - startTime; //calculate the ms between   
      
                 return totalTime; //return it !   
              }   
      
            }   
    }

Here’s a little app that uses this class.  
  
  
  
You can find the source on [github](https://github.com/tvdsluijs/Flex-Timer-
Class-for-time-logs/)!

