---
author: tvdsluijs
category:
- Coding
comments: 'true'
date: 2009-04-06 13:35
excerpt_separator: <!--more-->
layout: post
publish_date: 2009-04-06 13:35
slug: livecycle-pdf-form-big-sized-
tags:
- Coding
title: LiveCycle PDF Form big sized.

---
If you created a PDF form with SAP Interactive Form by Adobe or with Adobe
LiveCycle Designer you sometimes get a large form which in essention is just a
small form. When creating forms for customers of [NL for
Business](http://www.nl4b.com/ "NL4B Adobe LiveCycle Form Designer, big
form."), I saw my form just get bigger and bigger when adding one or two more
fields.  
  
Well heres the number one TIP to get smaller files. Its a bit of a work when
dealing with multi page or large number of fields / text pages but you will
have to remove all the fonts from your fields, texts and other text objects
and choose a Adobe font for it. Yes, I understand that sometimes this is not
according to your layout specs, but let me give you a example. 1 form, 1
field, 1 text object. Lets take the font Arial for this job. (this font is not
an Adobe font) Save it as Acrobat 7.0 Dynamic File will be : 213KB Now lets
take a Adobe font for this form, lets take the Minion Pro font. Save the
form as Acrobat 7.0 Dynamic File size will be : 143KB Hello . thats like 70KB
less ! Now . lets add the same amount of text objects and text fields. And
make half of them BOLD. Arial file size is . 413KB Minion Pro (an Adobe Font)
is 280KB now we are talking about a difference of **133KB !!!!!!** So, if you
like to start making lightweight Adobe Forms start with choosing the right
Adobe font for you. Adobe fonts start with the letter a (color red). Trust
me you will find them in your Adobe LiveCycle Designer font window (SHIFT+F4).

