---
layout: post
excerpt_separator: '<!--more-->'
title: 'Loading local XML file in flash builder'
slug: 'loading-local-xml-file-in-flash-builder'
date: '2009-11-06 07:00'
publish_date: '2009-11-06 07:00'
category: ['Coding']
tags: ['Coding']
---
There are a few ways to get a XML file as dataprovider within flash builder.
Some people asked me how to do that in an easy way.  
  
Well, in Flex Builder there actually was no easy way. You had to code it all
yourself. But with the new Flash Builder you can do it pretty much
automatically.  
  
In this small manual I will tell you how.  
  
  
  
Let’s assume you have the following .xml file in data/your_file.xml  
  
[xml]  
  
  
  
Jim  
32  
  
  
Sandra  
35  
  
  
[/xml]  
  
  
Here are some methods you can use:  
  
 **1\. Simple mxml**  
  
[java]  
  
  
  
[/java]  
  
  
 **2\. Use of the HTTPService, as seen in this**[
**video**](http://www.adobe.com/devnet/flex/videotraining/flex4beta/xml/fiaw_v1_08.html
"Video of Flash Builder HTTPService")  
  
[java]  
  
  
  
  
import mx.collections.ArrayCollection;  
import mx.rpc.events.ResultEvent;  
  
public var myData:ArrayCollection;  
  
protected function myHttpService_resultHandler(event:ResultEvent):void {  
myData = event.result.colleagues.colleague;  
}  
]]>  
  
  
  
  
  
[/java]  
  
  
 **3\. Embedded in actionscript**  
  
[java]  
  
  
  
  
[Embed(source=data/your_file.xml, mimeType=application/octet-stream)]  
public var MyXMLData:Class;  
public var myData:XML;  
public function init():void {  
var byteArray:ByteArray = new MyXMLData() as ByteArray;  
myData = new XML(byteArray.readUTFBytes(byteArray.length));  
}  
  
]]>  
  
  
[/  
[/java]  
  
  
 **4\. Using data/services panel**  
  
Actually this is the best you can use. Off course you can do it like the
methods above but if you really it easy, just use the data/services panel.

  * start with a new application and add your_file.xml as done previously
  * Data/Services >>>>>> connect to data/service
  * HTTP
  * Operation: getData |||||||| URL: data/your_file.xml
  * Service name: myLocalDataService
  * finish data/services
  * goto design view. add a dataGrid to the app
  * in properties panel click the ‘bind to data’
  * select the service we created and configure the return type
  * auto-detect >>>>> sample xml (window should display our your_file.xml contents)
  * select root should be colleague (not colleagues).
  * And you’re done!
  * if you want to bind the xml to a variable, you’ll need to listen for a result event on the CallResponder

[java]  
  
  
  
  
import mx.collections.ArrayCollection;  
import mx.controls.Alert;  
import mx.events.FlexEvent;  
import mx.rpc.events.ResultEvent;  
  
public var myData:ArrayCollection;  
  
protected function dataGrid_creationCompleteHandler(event:FlexEvent):void {  
getDataResult.token = myLocalDataService.getData();  
}  
  
protected function getDataResult_resultHandler(event:ResultEvent):void {  
myData = event.result as ArrayCollection;  
}  
  
]]>  
  
  
  
  
  
  
  
  
  
  
  
  
  
[/java]  
  
  
That’s it !  
  
  
  
  
With special thanks to :  
<http://forums.adobe.com/message/2303953>  
mewk

