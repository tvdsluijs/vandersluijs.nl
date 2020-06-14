---
layout: post
title: Better Jekyll Github pagination without Plugin
author: Theo van der Sluijs
slug: /2018/07/better-jekyll-github-pagination-without-plugin/
date: 2018-07-11
publish_date: 2018-07-11
thumbnail: /images/better-jekyll-github-pagination-without-plugin_thumbnail.jpeg
image:
  path: /images/better-jekyll-github-pagination-without-plugin.jpeg
  feature: better-jekyll-github-pagination-without-plugin.jpeg
  credit: Pixabay
  creditlink: https://pixabay.com
categories: ['Coding']
tags: 
 - Jekyll
 - Github
 - Liquid
comments: true
excerpt_separator: <!--more-->

---
I love the way Github let's you publish your own site with Jekyll. There is however one
minus you can live with or without. You cannot use extra Jekyll plugins besides the plugins
provided on Github pages. And pagination can only be done in a nice way when you have
a extra plugin, or is there a way?

<!--more-->

So I have this other dutch blog [40enfit.nl](https://40enfit.nl) that has already over 
200 articles. Now showing 10 article excerptsp er page, meaning there are a little over
20 pagination links
!["Pagination Jekyll"](/images/pagination_1.png)

Now this just fits on a desktop screen. But it aint fittin any mobile. And when more articles arrive, the number will only grow.

Usualy you would install a Jekyll plugin to take care of this, that you will only see a
few pagination links, like Google used to do on it's search page.

Without a plugin I created a other solution that works perfectly on Github with Jekyll.

!["Pagination Jekyll"](/images/pagination_2.png)

The first thing you do is add a few extra lines to your _config.yml

```yaml
str_next_page: "Volgende"  
str_previous_page: "Vorige"
```
and
```yaml
pagination_nr: 5
paginate_path: /page:num/
```
So the first 2 lines are for showing the words : Next and Previous in the pagination part. The Words "Volgende" en "Vorige" are dutch. Change them to your likings.

The pagination_nr is to show 5 previous and 5 next links to pagination pages.

If you only want to show 2, make it 2 and 3 when you want to make it show 3.

paginate_path is to set the right path to the next or previous pagination page, you can leave this as it is.

Now I've got an extra file in the _includes folder called : pagination.html that I load in the index.html

```
{% raw %}{% include pagination.html %}{% endraw %}
```
The pagination file looks like this

{% gist 49dd4523bb919e85c24fa32e3834b719 %}


Have fun! 

Please let me know in the comments below what you think of it.