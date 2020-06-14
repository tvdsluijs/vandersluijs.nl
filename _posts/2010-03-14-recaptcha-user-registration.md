---
author: tvdsluijs
category:
- Coding
comments: 'true'
date: 2010-03-14 13:56
excerpt_separator: <!--more-->
image: https://vandersluijs.resultants-e.nl/0*N-C5AXoGcJi8B75X.gif
layout: post
publish_date: 2010-03-14 13:56
slug: recaptcha-user-registration
tags:
- Coding
title: reCaptcha User Registration

---
Do you also hate to have all those spammers registering to your Joomla! site ?

Well, let’s put an end to that with the reCaptcha sollution.

This update of the Joomla! user register component will stop the fake users
register into your Joomla! system.

See a Demo
[here](http://demos.gebruikmaar.nl/joomla/index.php?option=com_user&view=register).

The installation of this sollution is quite simple.

  1. Go to <https://admin.recaptcha.net/accounts/login/>
  2. Sign in or Sign Up
  3. Add a new site or choose your own site
  4. After creating the site or choosing your site you will be displayed a Public and a Private Key
  5. Unzip the Component sollution to a place on your harddisk
  6. Open “configkeys.php” in notepad text editor (the file is in the folder components/com_users
  7. Use the private / public keys from reCaptcha and add them on the place where the … ‘s are (so remove the … and past the codes into it)
  8. Upload the components folder (which contain all folders/files you need) into the root of your site.
  9. Done !

 **Please** , do make a backup of your site before applying !

 **Update [ _02–06–2010_ ]** : Now for Joomla! 1.5.18

 **Joomla! 1.5 only!**  
  
You can [download](https://github.com/tvdsluijs/Joomla-recaptcha-users) the
source from [github](https://github.com/tvdsluijs/Joomla-recaptcha-users)!  
  
Like my code ? Don’t forget to

![](https://vandersluijs.resultants-e.nl/0*N-C5AXoGcJi8B75X.gif)

