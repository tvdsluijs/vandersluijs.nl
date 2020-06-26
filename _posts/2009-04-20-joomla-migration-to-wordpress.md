---
author: tvdsluijs
category:
- Coding
comments: 'true'
date: 2009-04-20 12:15

layout: post
publish_date: 2009-04-20 12:15
slug: joomla-migration-to-wordpress
tags:
- Coding
title: Joomla! migration to Wordpress

---
Last weekend I did a Joomla! migration to Wordpress. In this small post I will
explain step by step what I did to get a good outcome in my Wordpress. If you
want to know why I changed from joomla to wordpress just read my [other
post](http://www.iamboredsoiblog.eu/2009/04/19/bye-bye-joomla-hello-wordpress/
"Bye Bye Joomla hello Wordpress") about this. First, make good backups of your
“old” site ! Done making the backups ? No ? Make those damn backups. If
something goes wrong your old joomla! site could be messed up. To proud to
make backups ? Well, don’t come crying at my door when something goes wrong
;-) So just make does damn backups ! Finished ? Okay. I did the following:
Create a directory in your root, called : wordpress Create a new MySQL dbase
to use for the Wordpress installation. (don’t use the Joomla! dbase for this)
Install a fresh clean wordpress in that dir. Don’t know how to do that ? Go
here: [The Famous 5-Minute
Installation](http://codex.wordpress.org/#Famous_5-Minute_Install) or here:
[Detailed Installation
Instructions](http://codex.wordpress.org/#Detailed_Instructions) Go to your
new wordpress site so : <http://www.yourdomain.com/wordpress> Does it work ?
Great go to <http://www.yourdomain.com/wordpress/wp-admin> Just create the
Categories you need (like the categories you have in Joomla!) never mind the
sections, Wordpress does not do sections. (thank god for that !) (tags will do
everything for you.) Now use the Joomla2Wordpress migration tool I adjusted
for utf-8 joomla sites. You can read more about this Joomla2Wordpress
migration tool in [another
post](http://www.iamboredsoiblog.eu/2009/04/20/joomla2wordpress-import-wizard-
with-utf-8-support/ "joomla2wordpress import wizard with utf-8 support"). Did
you finish up migrating all your Joomla! posts to Wordpress ? Great…. now
delete every single directory in your root, exept for Images Wordpress (if you
have any other important directory don’t delete it, like Rubberdoc or a
special non joomla dir) Okay. Now, copy (NOT Move) the directory structure and
files from your wordpress directory into the root of your site. Ready ? Go to
the wp-admin inside your wordpress dir, so
<http://www.yourdomain.com/wordpress/wp-admin> Go to –> Settings –> General
Settings Change both the WordPress address (URL) and Blog address (URL) from :
<http://www.yourdomain.com/wordpress> into :
[http://www.yourdomain.com](http://www.yourdomain.com/) Go To your site
[http://www.yourdomain.com](http://www.yourdomain.com/) Just go and test it
extensively Does it work ? Great, now delete the Wordpress directory. (off
course now is a good time to make another backup !) Does your site still, work
? Great you just migrated your site from Joomla! to Wordpress. Are you ready
now ? No you’re not ! At this point you are facing the biggest Challenge !
Google knows all your old links to the old site. So links like :
<http://www.iamboredsoiblog.eu/Adobe-Flex/flex-datagrid-advanced-paging-and-
filtering.html> Will result in a 404 Error because the new links is :
<http://www.iamboredsoiblog.eu/2009/01/10/advanced-paging-and-filtering-in-
flex-datagrid/> Oh…. NO !!!!!! So now people and google will not be able to
find the right pages. Relax, you can set this right (it needs a bit of a work
though. Install the three following plugins. 1.
[Redirection](http://urbangiraffe.com/plugins/redirection/) 2\. [Google XML
Sitemaps](http://www.arnebrachhold.de/redir/sitemap-home/) 3\. [Useful
](http://skullbit.com/wordpress-plugin/useful-404s/)404’s Let’s start with nr
2. You will have to create an account on the Google WebmasterTools site. Here
you can create a so called xml spider for all your post links within your
site. Already had this ? Great just give your new link to google so it can
index it. Okay number 3. This is to let you know what urls cannot be found
within your site. It mails you the misspelled link so you can use number 1 to
fix this. Number one, every misspelled link has to be put to the right link
within your site. So the link I mentioned :
<http://www.iamboredsoiblog.eu/Adobe-Flex/flex-datagrid-advanced-paging-and-
filtering.html> goes automaticly to
<http://www.iamboredsoiblog.eu/2009/01/10/advanced-paging-and-filtering-in-
flex-datagrid/> That’s a lot of work, I know, but with the google xml index
and the mails send to you this will be an overtime job (so you won’t be
sitting 24 hours redirecting your urls) Well that’s it. If you have some
trouble or problems do not hesitate to contact me.

