---
author: tvdsluijs
category:
- Coding
comments: 'true'
date: 2010-03-18 20:38
excerpt_separator: <!--more-->
layout: post
publish_date: 2010-03-18 20:38
slug: wordpress-about-the-author-box
tags:
- Coding
title: Wordpress about the author box

---
Well today my colleque asked me why I have a link to “yourherbalcare.com” on
my site.  
  
I said, “I don’t have link to that site.”. He said, yes you have it’s below
your “About the Author Box”, between tags.  
  
I went into the sourcecode of my site, and yes there it was. It’s a hack of
the developer of this plugin to use your site to promote his own.  
  
Well, the “yourherbal care. com” is offline now but the link remains in your
own site if you don’t remove it.  
  
And here’s how you can remove it.  
  
  
  
Open a FTP application to your site. And find /wp-content => /plugins =>/wp-
author-bio  
  
Open the following file with notepad or another text display application.  
  
Go to line 24 and remove the following code. (as a mather of fact you can
remove the whole of line 24).

> [http://yourh erbal care.com](http://yourh%20erbalca%20re.com%22/)>Your
Herbal Care

Save the file and put it back on your server where you found it.  
  
That’s it !

