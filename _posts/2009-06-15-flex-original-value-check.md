---
author: tvdsluijs
category:
- Coding
comments: 'true'
date: 2009-06-15 11:00
excerpt_separator: <!--more-->
image: https://vandersluijs.resultants-e.nl/0*pvzm8qD7iWIRXhmP.gif
layout: post
publish_date: 2009-06-15 11:00
slug: flex-original-value-check
tags:
- Coding
title: Flex Original value check

---
For a small project for [NL4B](http://www.nl4b.com/ "NL for Business") I
needed to have a org valau checker for Datefield, TextArea and Inputfield.  
  
Standard there is no check on original and new value within these fields.  
  
I don’t understand why this is not a standard in these field as everybody like
to know if fields have changed right ?  
  
So I started to build my extended Textinput, datefield and Textarea.  
  
  
  
The idea is very simple.  
  
You put some information in a Textinput, datefield or Textarea. And when the
user changes the information of one of these fields you would like to check if
it is changed.  
  
Let’s say you only want to let the user “save” when something has changed. You
could activate the Save button on a change event. But what if the user changes
the change back to it’s original.  
  
Well you want the save button to be disabled again right ?  
  
And that is what these extended versions of Textinput, datefield and Textarea
just do.  
  
You insert an orgString, and if the get differ is 1 the value has been
changed. if 0 it didn’t. Hell you can even check it your self with orgValue.  
  
Wanna see it work ?

You can find the source on [github!](https://github.com/tvdsluijs/Flex-
Original-value-check)  
  
Like my code ? Don’t forget to

![](https://vandersluijs.resultants-e.nl/0*pvzm8qD7iWIRXhmP.gif)

