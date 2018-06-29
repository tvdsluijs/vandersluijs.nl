---
layout: post
excerpt_separator: '<!--more-->'
title: 'Adobe Flex Insert met PhP en Json'
slug: 'adobe-flex-insert-met-php-en-json'
date: '2008-02-28 18:48'
publish_date: '2008-02-28 18:48'
category: ['Coding']
tags: ['Coding']
---
Tja, data laten zien is natuurlijk heel erg leuk.  
  
Maar data muteren of inserten is nog veel leuker.  
  
Laten we eens beginnen met het Inserten van Data. Heel simpel, gewoon 1 naam
toevoegen.  
  
Moet geen probleem zijn toch ? En dat is het ook niet.  
  
  
  
De code van al dit moois :  
  
Flex:  
  
  
  
  
import mx.controls.Alert;  
import mx.controls.TextInput;  
import mx.events.PropertyChangeEvent;  
import mx.events.CollectionEventKind;  
import mx.events.CollectionEvent;  
import mx.events.DataGridEvent;  
import mx.rpc.events.ResultEvent;  
import mx.collections.ArrayCollection;  
import com.adobe.serialization.json.JSON;  
  
[Bindable]  
private var dataArray:ArrayCollection;  
  
private function initDataGrid():void  
{  
dataArray = new ArrayCollection();  
getData.send();  
}  
  
private function getPHPData(event:ResultEvent):void  
{  
var rawArray:Array;  
var rawData:String = String(event.result);  
rawArray = JSON.decode(rawData) as Array;  
dataArray = new ArrayCollection(rawArray);  
}  
  
private function sendPHPData():void{  
var objSend:Object = new Object();  
var dataString:String  
dataString = escape(dataString);  
objSend.name = txtInputName.text;  
sendData.send(objSend);  
txtInputName.text = “”;  
getData.send()  
}  
  
private function updatedDataResult(event:ResultEvent):void{  
lblStatus.text = String(event.result);  
}

