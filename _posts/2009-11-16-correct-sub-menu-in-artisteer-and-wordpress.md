---
layout: post
excerpt_separator: <!--more-->
title: 'Correct sub menu in Artisteer and Wordpress'
slug: 'correct-sub-menu-in-artisteer-and-wordpress'
date: '2009-11-16 20:22'
publish_date: '2009-11-16 20:22'
category: ['Coding']
tags: ['Coding']
---
Like the submenus that Artisteer generates within the temaplate you made but
you cannot find them anywhere when you installed the template on your
wordpress websites. I am talking about the Categories and Archives sub menus
off course. Well, it is actually very simple. Just put this piece of code in
your template header.php Find the next lines in Header.php:

Delete them. Then put these lines back where the other lines stood.

  * Archivesf

Save, ready !

