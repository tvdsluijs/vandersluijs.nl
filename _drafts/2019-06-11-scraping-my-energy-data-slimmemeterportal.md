---
layout: redirect
new_url: https://medium.com/purepython/scraping-energy-data-from-slimmemeterportal-nl-with-python-e34f40eff58
title: Scraping energy data from slimmemeterportal.nl with Python
slug: /2019/06/scraping-my-energy-data-slimmemeterportal/
permalink: /2019/06/scraping-my-energy-data-slimmemeterportal/
date: 2019-06-11
publish_date: 2019-06-11
categories: ['Coding']
tags: 
 - Python
 - Scraping
comments: true
author: tvdsluijs
excerpt_separator: <!--more-->
---
So the other day I wanted to start working with Matplotlib, a Python 2D plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments across platforms.

But to plot data and create graphs you need one thing! Data! So I was thinking about plotting my solar panel data, but there was one small problem. I did not had access to the raw data. One online solar panel service however did have my data stored in XLS (excel) files, but because I did not had a pro version I could not get that data back older than one year.

So I decided to hack and scrape the site with python.
<!--more-->

Hacking the site is pretty easy. The owner did a good job not getting the data by using a browser, as you cannot click back to previous years but the underlying xls files are not secured. So I only had to find out what the urls were and the scrapping could start.

## install requirements

So for this script to run you need two items to install in your python environment.

requests, to actually get the data from the urls and beautifullsoup (bs4) to scrape the data from the page.

You need bs4 because the slimmemeterportal is working with a csrf code (generated code each time you visit the page). A csrf token or code is generated for the forms and Must be tied to the user's sessions. It is used to send requests to the server, in which the token **validates** them. This is one way of protecting against csrf, another would be checking the referrer header.

Cross-site request forgery, also known as one-click attack or session riding and abbreviated as **CSRF**(sometimes pronounced sea-surf) or XSRF, is a type of malicious exploit of a website where unauthorized commands are transmitted from a user that the web application trusts.

So guess what? I can hack myself around this and still use the data in an unauthorized way.

Okay, so far for the boring stuff, just install the two packages.

```
pip install requests
pip install bs4
```

## Filling in the needed vars

In my script there are 3 vars you have to fill in.

Your slimmemeterportal.nl username
Your slimmemeterportal.nl password
and the year you want the scraping to start.
```py
username = "" # slimmemeterportal username  
password = "" # password  
start_year = "" # year your started measurements
```

And that's it! Let the scraping begin!!!

## But wait! How does this work.

Well it's pretty easy!

This script uses your login name and password to login and get the user credentials it needs.

```py
r = s.get(start_url)  # Get first page for the csrf code (generated each time)  
soup = BeautifulSoup(r.content, 'html.parser')  
  
authenticity_token = soup.find('input', {'name': 'authenticity_token'}).get('value')  
# get the csrf data from the input field  
payload = {"utf8": "✓", "authenticity_token": authenticity_token, "user_session[email]": username,  
  "user_session[password]": password, "commit": "Inloggen"}  
c = s.post(login_url, data=payload)
```

After that is done, it can create the monthly urls to get your xls (excel) data.

It does so by looping the years and months
```py
for y in years:  
    for m in months:
```
Where it creates a unique url that contains the xls (excel) data
```py
datum = datetime.date(y, m, 1)  
  
ux = int(time.mktime(datum.timetuple()))  
sim = int(seconds_in_month(m, y))  
  
url = "https://slimmemeterportal.nl/cust/consumption/chart.xls?
commodity=power&datatype=consumption&range=" \  
      "{}&timeslot_start={}".format(seconds, ux)  
  
filename = "{}-{}.xls".format(y, m)  
# print(url)  
r = s.get(url)
```
And when it has the data, it creates a xls file on your harddrive.
```py
with open(filename, 'wb') as f:  
    f.write(r.content)
```

Now, to seem like a normal user I've put in a sleep mechanism. If not it hits the server to hard and fast and it might think we are doing a ddos or it understands we are scraping his server ;-)

```py
time.sleep(5)
```

Well, that wraps it up. Have fun with the code!

## Output slimmemeterportal

Oh one more thing.

You will get this kind of data from the XLS files

||||
|--- |--- |--- |
|Tijdstip|levering totaal [kWh]|teruglevering totaal [kWh]|
|01-01-17|11,271|-0,174|
|02-01-17|6,721|-2,36|
|03-01-17|11,457|-0,13|
|04-01-17|6,664|-1,379|
|05-01-17|6,377|-3,672|
|06-01-17|12,752|-2,47|
|07-01-17|9,499|0|

{% gist a4ad638f11283a3d82763a47ae210109 %}

Like the code? [![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/itheo)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg5Nzk0NjA4LC0zNzEwOTg3MTldfQ==
-->