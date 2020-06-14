---
layout: redirect
new_url: https://medium.com/purepython/get-google-analytics-pageviews-with-python-55366762a4be
title:  Get Google Analytics pageviews with python
date: 2019-01-06
dateModified: 
seo_description: Show pageviews in you jekyll site with Google Analytics v4 API and Python and a little javascript
categories: [Coding]
tags: 
 - Google
 - Jekyll
 - Python
excerpt_separator: <!--more-->
name: Pure Python
comments: true
author: tvdsluijs
---
So I was thinking, how to get live pageviews to show on my Jekyll site. A Jekyll site is a static site, it's generated for display as static HTML pages. It's not generated at every view but only once when it's uploaded to de server. And when it is re-uploaded. So you can't really show "live" pages views.... or can you?

<!--more-->

So I actually came up with a very simple solution to show page views on my site. I would create a small javascript that would call a api. That api would then write a view in to a database and get the number of views of that page.

I would need:

- 1 small piece of javascript
- 1 SQLite database
- 1 small API script 

The API script is creating or updating a row in the database and getting the new number of views.

When I was writing the code, I started thinking of how I would handle reloads of a page. I don't want every reload of a page to count as an actual view. If I would press F5 I would create hundreds of false views in a second.

So I started creating some cookie scripts and changed the API to create unique views.

And it got bigger and bigger....because I wanted it to be save and GDPR proof.... and then I was like .... okay, this will never go live, it's becoming to complicated. And then I had a revelation! Google Analytics! They already have unique page views. They have everything in place for GDPR and reload counts.

And there is a Google Analytic API where you can actually get data every easy.

I did keep the SQLite database in between, I dont want to flood the google api with every view / call I have on my pages. Not that I have like a million pageviews per day, but I want to play it nice. And it's really not important if you can see page views that is 4 tot 8 hours old or realtime.

## Google Analytics API

So there are a view things you need for this to work. Getting Google analytics pageViews or Page Views is not difficult but you need to do the following.

To get started using Analytics Reporting API v4, you need to first [use the setup tool](https://console.developers.google.com/start/api?id=analyticsreporting.googleapis.com&credential=client_key), which guides you through creating a project in the Google API Console, enabling the API, and creating credentials.

#### Create credentials

**Note:** When prompted click  **Furnish a new private key**  and for the  _Key type_  select  **JSON**, and save the generated key as  `client_secrets.json`; you will need it later in this tutorial.

1.  Open the  [**Service accounts**  page](https://console.developers.google.com/iam-admin/serviceaccounts). If prompted, select a project.
2.  Click  **Create service account**.
3.  In the  **Create service account**  window, type a name for the service account, and select  **Furnish a new private key**. Then click  **Save**.

Your new public/private key pair is generated and downloaded to your machine; it serves as the only copy of this key. You are responsible for storing it securely.

#### Add service account to the Google Analytics account

The newly created service account will have an email address that looks similar to:

`quickstart@PROJECT-ID.iam.gserviceaccount.com`

Use this email address to  [add a user](https://support.google.com/analytics/answer/1009702) to the Google analytics view you want to access via the API. 

In this case only  [Read & Analyze](https://support.google.com/analytics/answer/2884495)  permissions are needed.

### Install the client library
You can either use a package manager or download and install the Python client library manually:

But installing is most easy by:

```bash
$	pip install google-api-python-client
```

and

```bash
$	pip install oauth2client
```

for more information about using and installing the google-api-python-client go to [this page](https://developers.google.com/analytics/devguides/reporting/core/v4/quickstart/service-py).

### Getting things ready

You need to follow the following steps to get things wrapped up to make use of the Google Analytics API together with Python

1. Move the previously downloaded  `client_secrets.json`  to the same directory as the sample code. 
2. Replace the value of  `VIEW_ID`. You can use the  [Account Explorer](https://ga-dev-tools.appspot.com/account-explorer/)  to find a View ID.
3. create a google_analytics.py file to put in the python code.

## Python code

Now for this example I'm gonna leave out the SQLite example, but as a bonus :-) I've put my code ready for you in my [GitHub account](https://github.com/tvdsluijs/pageview_analytics_sqlite_python).

So way below you will only find de code to show it in a page, and getting the information with python.

The most difficult for me was to find out how the Google Analytics v4 API worked, well more how to get the right data out of the API

```python
body = {
            'reportRequests': [
                {
                    'viewId': self.view_id,
                    'dateRanges': [{'startDate': self.startdate, 'endDate': self.enddata}],
                    'metrics': [{'expression': 'ga:uniquePageviews'},
                                {'expression': 'ga:pageviews'}],
                    'filtersExpression': pagePath
                }]
        }
```

So you need the view_id from your site from the google analytics account. You also need a start and end date written like "Y-M-D" Year, Month and day.

Then you have to tell what metrics you would like to get back from the Google Analytics API.

So I've chosen to use the uniquePageviews and the pageviews.

A **unique pageview**, as seen in the Content Overview report, aggregates**pageviews** that are generated by the same user during the same session. A **unique pageview** represents the number of sessions during which that page was viewed one or more times.

A **pageview** (or **pageview** hit, page tracking hit) is an instance of a page being loaded (or reloaded) in a browser. **Pageviews** is a metric defined as the total number of pages viewed. So, the total number of visits per page.

And then at the end you have to tell the API for what page you want to see the data. So you have to filter the expression on PagePath.

## JQuery Google Python Analytics code and Jekyll

So I don't want to get the page views on the home page,  so I've made sure that the call is only fired when a user visits an article page and created a script within my jekyll theme.

Within the Page I created a span `<span id="urlviews"></span>` where the information should show and! the script checks if the div or span with a certain id exists and then fires the call to my api python page to get the information.

```javascript
    $(function() {  
        var $urlviews = $('#urlviews');  
    // check if urlviews exsists  
        if ( $urlviews.length ){  
            $.getJSON( "{{site.api_url}}/url_views?path={{site.view_id}}:{{page.url}}", function( json ) {  
                $("#urlviews").html(json.views+" Views.");  
            });  
        }  
    });  
```
So the `if ( $urlviews.length ){` part checks together with `var $urlviews = $('#urlviews');` if the urlviews id actually exists. If it exists (lenght is not None) it starts the rest of the code

```
$.getJSON( "{{site.api_url}}/url_views?path={{site.view_id}}:{{page.url}}", function( json ) { 
``` 

is go call a url together with the view_id and the page url.

Now I have to tell you that I made this for Jekyll so if you thing what are those `\{\{ }}` well it's a certain way to tell Jekyll what to place in it. As I already told you Jekyll is a static page generator and uses the liquid template engine.

So:

```
{{site.api_url}}
``` 
displays the api URL defined within the _config

```
{{site.view_id}}
``` 
shows a view_id I defined within the _config

```
{{page.url}}
``` 
shows the page url (without the domain)

As you can see I have a separator between the view_id and the page url. Within my API a split this var and use both variables separately  to get the information from Google analytics, or in my case from my database or google analytics.

## Python Flask

Now, If you really want to make this script into a API you need a framework to behave like a web based api that give you back some information. You can to this with Flask. I'm not gonna explain how I managed to do that in this article as this article is already long enough.

{% gist 9dc0f3d2a650cd88c7c0e60d861182fb %}
