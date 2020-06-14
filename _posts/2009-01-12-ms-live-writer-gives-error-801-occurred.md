---
author: tvdsluijs
categories:
- Tech
comments: 'true'
date: 2009-01-12 10:31:00+00:00
hits:
- '702'
layout: post
permalink: /2009/01/ms-live-writer-gives-error-801-occurred.html
title: MS Live Writer gives &quot;Server Error 801 Occurred&quot; on Joomla!

---
If you are updating your Joomla! site / blog with Microsoft Live Writer and you get a &#8220;Server Error 801 Occurred&#8221; when updating you could aks yourself &#8220;did I delete a category or section from your joomla! site?&#8221;.  
If you did youre MS Live Writer cannot find some of the categories anymore and you cannot blog with Live Writer anymore.  
That&#8217;s a bit of a problem.

<a name="more"></a>  
You could try and update your category&#8217;s and section in the MS Live Writer tool, but trust me that is not going to work.  
The problem lies deeper. As the Live Writer creates your account when installing and configuring the tool it gets the standard category from joomla!. When this differs from your configured Live Writer account you will get the &#8220;Server Error 801 Occurred&#8221; error.  
But we can solve this very easily.   
In your MS Live Writer Menu -> &#8220;Blogs&#8221; -> &#8220;Edit Blog Setting&#8221;. On the Account Tag click on the &#8220;Update Configuration Button&#8221;. Press Next on the first screen (you don&#8217;t need to change any information here). On the next screen Select &#8220;Movable Type Api&#8221; at the &#8220;Type of blog that you are using&#8221; and put the next url in the &#8220;Remote posting URL for your blog&#8221; -> &#8220;[http://www.yoursite.com/xmlrpc/index.php&#8221;](http://www.yoursite.com/xmlrpc/index.php), change the yoursite.com part to suite your own site.  
Press next.   
Wait until it did some downloading and configuring.   
Press Finish.  
Tadaaaaaaaa, you&#8217;re ready to go.