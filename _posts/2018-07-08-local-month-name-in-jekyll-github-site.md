---
author: tvdsluijs
categories:
- Coding
comments: 'true'
date: 2018-07-08
excerpt_separator: <!--more-->
image: /images/local-month-name-in-jekyll-github-site.jpg
layout: post
publish_date: 2018-07-08
slug: /2018/07/local-month-name-in-jekyll-github-site/
tags:
- Liquid
- Jekyll
- Github
title: Local month name in Jekyll Github site

---
GitHub is a great place to create your own site with Jekyll. But when you host your site with Jekyll on Github you do not have alle possibilities that Jekyll has. As a Dutch guy with Dutch sites I did not want the date to show up in an English way, so I wrote a little piece of code to show the Dutch month names.

<!--more-->

## Github & Jekyll

As you might know, or don’t know Github as a feature called Pages. With pages you can Setup your own Github site together with Jekyll. GitHub is a web-based hosting service version control using Git. It is mostly used for computer code. Jekyll is a simple blog-aware static site generator for personal, project, or organization sites.

Now these two are a great combination to setup your site fast, easily and with markdown files a nice way to create and update site pages and blog items.

Not only is this combination fast but also reliable and greatly appreciated by Google Search.

## Github shortcomings

Now, publishing on Github using Jekyll is great.... but there are some shortcomings. To keep everything reliable Github only allows a certain amount of Plugins and you cannot set some settings like Local information. 

### Default plugins
There are some [plugins](https://pages.github.com/versions/) you can use, like sitemap, Seo, pagination, gist but there are a lot more plugins that you unfortunately cannot use.

Default plugins you can use are:
- jekyll-coffeescript 
- jekyll-gist
- jekyll-github-metadata
- jekyll-paginate
- jekyll-relative-links
- jekyll-optional-front-matter
- jekyll-readme-index
- jekyll-default-layout
- jekyll-titles-from-headings

And there are some extra plugins you have to put in your _config.yml file to work.

As you cannot use the language plugin there is no way to change the date easily. But I have the solution for you.

## Jekyll local date solution

So to get this working you have to add the months to your _config.yml file and the rest to you post.html file or to a file where you need it:

{% gist  5481ede5540aece46e375107e680f44a %}

