---
layout: post
excerpt_separator: <!--more-->
title: 'Joomla2Wordpress import wizard with UTF-8 support'
slug: 'joomla2wordpress-import-wizard-with-utf'
date: '2009-04-20 06:01'
publish_date: '2009-04-20 06:01'
category: ['Coding']
tags: ['Coding']
---
I recently switched from Joomla! over to Wordpress. One major step which was
preventing me from making the move for so long was the export process.  
  
Then I found [a post](http://azeemkhan.info/2008/joomla2wordpress-import-
wizard-v3/) on azeemkhan.info which had a wizard which would allow you to move
the content over. But there was a problem. It did not support UTF-8 sites like
Joomla! 1.5 So I decided to take this script and change it to a working script
with UTF-8 support.  
  
  
  
First things first ! Make backups of your old site !!!!!  
  
1\. Unzip Joomla2WordPress.zip  
2\. Edit config.php and enter all missing values  
3\. Upload files to /export on your server  
4\. Add Categories in wordpress which you want to import into  
5\. Open
[www.yoursite.com/export/index.php](http://www.yoursite.com/export/index.php)
on a browser  
6\. Select either a Joomla Section, Category or Links Category  
7\. Select a Wordpress Category to import into  
8\. Repeat Steps 5–7 till all of your articles have been imported  
9\. Enjoy and Spread the word!  
  
If you have any problems with this tool, just drop me a mail.  
  
[download id=”1" format=”1"]  
  
This application is created for a wordpress installation not in the root but
in /root/wordpress on your server. If your wordpress installation is in the
root or in another directory (eg: /root/blog, /root/posts) you have to adjust
the following lines to this :  
_Line 11: if (!file_exists(‘../wordpress/wp-config.php’))  
Line 17: require_once(‘../wordpress/wp-config.php’);  
Line 21: $guessurl = str_replace(‘/wordpress/wp-admin/install.php?step=2’, ‘’,
‘_[ _http://’_](http://%27/) _. $_SERVER[‘HTTP_HOST '] .
dirname($_SERVER[‘PHP_SELF’]) );  
Line 312: require_once (“../wordpress/wp-includes/functions.php”);  
Line 441: require_once (“../wordpress/wp-includes/functions.php”);_

