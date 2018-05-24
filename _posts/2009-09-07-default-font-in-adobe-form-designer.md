---
id: 391
title: Default Font in Adobe Form Designer
date: 2009-09-07T07:39:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2009/09/07/default-font-in-adobe-form-designer/
permalink: /blog/2009/09/default-font-in-adobe-form-designer.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "3918594577602463708"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2009/09/default-font-in-adobe-form-designer.html
hits:
  - "522"
itrr_another_apply:
  - 'no'
dsq_thread_id:
  - "5818728350"
categories:
  - Tech
---
I see a lot of questions on the web about setting a default font in Adobe’s Form Designer. Like this one: 

> **How can I set the  default font for fields in Forms Wizard?   
>** I know that I can right click on a form field, and set the format for future fields based on that field&#8217;s appearance, but when I run the Forms Wizard on a doc the fields all end up as Helvetica. Is there someway to change this behaviour, or, failing that, is there an easy way to change the appearance of all the fields in a file after the fact? I know I could do it one by one, but that gets a little boring. 

<a title="Setting default font in Adobe Form Designer" href="http://forums.adobe.com/thread/300264" target="_blank">Adobe Forums</a> I also see a lot of not really working solutions about setting the font. Like Search Replace in the XML Source or select all fields where you want to change the font and change them. But there is a solution ! <a name="more"></a> If you like to use an other font like me on a text object, just create your own objects in the Library palette. So you can drag your own text objects onto the form. To do this, create a new form, drag a  text object onto it, use the Font palette for your own font and size that you want as default then drag it back to the Library palette&#8217;s Standard tab (you can also create your own Tab). You&#8217;ll  get a dialog where you can specify a new name for this text object. Specify the same name and you&#8217;ll get the opportunity to replace the text field in the Library palette with this customized version. If you have more objects you want to make your own, just create a new panel within the library and save your customized objects in it rather than overwriting the standard ones.