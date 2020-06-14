---
author: tvdsluijs
categories:
- Coding
comments: 'true'
date: 2018-10-04
excerpt_separator: <!--more-->
layout: post
permalink: /2018/10/scraping-contact-data-with-python-export-to-csv/
publish_date: 2018-10-04
slug: /2018/10/scraping-contact-data-with-python-export-to-csv/
tags:
- Python
- Scraping
title: Scraping contact data with Python export to csv

---
So I saw this assignment on upwork.com or [freelancer.com](https://www.freelancer.com/get/vw247161vw) and I just wanted to see if I could do it with python.

The assignment was to scrape the contact information from http://www.petfoodnz.co.nz with a PHP script. Now I've done a lot of development in PHP but since I've met Python I just don't really like PHP anymore. 
<!--more-->
If you just want the whole script and don't want to read my explanation just scroll way down.

## Needed for web scraping
So there are a few things to know before you start. I only write and tested it in Python 3.x so I'm not sure if this script will work in python 2.7. I can also not give you directions on how to get it working in python 2.7. 

I do understand that a lot of people like python 2.7 over 3.x but... as 2.7 will cease to exists it might be a good start to learn and use 3.x. 

You also need some extra library's for this script to work.

If you use python a lot you will recognise a few of the modules I've used.

```
pip install requests
pip install lxml
pip install beautifulsoup4
```
I'm not really sure why python 3 did not add requests to it's standard library. But you will need it to call a URL and get all of it's content back.

**Beautiful Soup** is a library that makes it easy to scrape information from web pages. It sits atop an HTML or XML parser, providing Pythonic idioms for iterating, searching, and modifying the parse tree.

**lxml** is the most feature-rich and easy-to-use library for processing XML and HTML in the Python language. 

As Beautiful Soup and lxml seem to be the same there is a mayor difference between the two. It is not possible to get parts of a HTML page thru the use of xpath. As I really like beautiful soup, for this small assignment where the site that I'm scraping does not use class and id-names you can only use lxml to get the data fairly easily.

## The scraping code
So let's start with the code and let's start at the bottom. 

I really like using classes as in my opinion they are more powerful, easier to use and you can when a one file project becomes a somewhat bigger project use it as an OO part.

Now when using a classed file you might want to use `if __name__ == '__main__': ` statement at the end of the file.

In this way you can use the class when putting the file itself to work and when you use this class in other projects and import it it will only be called from that other file. So pretty handy!

```py
if __name__ == '__main__':
	g = getAddress("http://www.petfoodnz.co.nz/directory.htm", "contacts.csv")
```
So... in this example the `g =` part is not really necessary but it just puts the class in it. The real magic happens the the `getAddress` part.

It calls a url to start scraping and it will put all the found information in the contacts.csv file

## Set start vars and start scraping

When starting up this class I'm setting some variables to get going.

I'm setting the filename to be used when creating the csv file.
I'm getting the main url for later usage so it easier to call all the separate company pages, where the actual data is.

Then I call the start function to get all the company page date to scrape with `self.geturlcontent`.

When that function returns actual data (and not `None`) the script can start scraping the separate company urls with `self.geturlsfrommain`.

Than it will process these urls with `self.processurls`

And the creating of the csv (excel file) can start with `self.createexcel()`

```py
def __init__(self, url=None, filename="contacts.cvs"):
	if url is not None:
		self.filename = filename
		self.url = url
		self.mainurl = "{0.scheme}://{0.netloc}/".format(urlsplit(self.url))
		self.addresses = []
		content = self.geturlcontent(self.url)
		if content:
			self.urls = self.geturlsfrommain(content)

		self.processurls(self.urls)
		self.createexcel()

	return None
```
## Get the url content

Getting the the content of a page is not really difficult. You can use requests for this. It also checks if you get a 200 status codes back, which means that you actually get a server response.

So the below code is for getting the main page where all the links to all the other company pages are and it is uses for getting the html data from all the company pages.

It's pretty straight forward. When it did not get any data it will return a `False`

```py
def geturlcontent(self, url):
	result = None
	if url is not None:
		result = requests.get(url)

	if result.status_code == 200:
		return result.content

	return False
```
## Getting all company urls

So on the first page we need scraping all the company links are present.

So with Beautifulsoup we can process the content scrapped with requests and start searching for all a (href's) where the href (url) starts with companies.

When scrapped this part returns a list with all the urls found on the page that start with companies

When none where found it will return `None`

```py
def geturlsfrommain(self, content):
	soup = BeautifulSoup(content, features="lxml")
	links = []
	for link in soup.findAll('a', attrs={'href': re.compile("^companies")}):
		links.append(link.get('href'))
		
	return links
```

## Processing the Urls

So this is where the url processing starts. It is build in two separate functions the first loops thru the URL's, the second gets the data from the urls.

So while looping thru the urls it reuses the `geturlcontent` that we also used in getting the html from the main page.

After getting that HTML data we put it in the second function that get's the company address info from that data.

```py
def processurls(self, urls):
	for u in urls:
		url = "{}{}".format(self.mainurl,u)
		print(url)
		content = self.geturlcontent(url)
		if content:
			data = self.getdatafromurls(content)
			self.addresses.append(data)
```

So this second function uses the xpath to get the data from the HTML. Now, whenever this site will change (putting new tables in it) this will break. But as this site is not using any class or id names there is no real other way to do this.

It gets the HTML part in the 2 table with the first TD and the 9th TD which is a table again.

In the function I use that table to loop thru the TR's and get the data from the TD's (are you still here ? :-) )

So no, not really to easy.... not difficult either but... it would have been easier with class or id names.

So, after 10 loops I just stop, hoping nothing really important comes after that 10 TR's.

I clean up the data (next chapter) before using it in the CSV.

```py
def getdatafromurls(self, content):
	root = html.fromstring(content)
	data = {}

	xpathdata= "/html/body/div/table[2]/tr[1]/td[9]/table"
	table = root.xpath(xpathdata)
	i = 0
	for row in table[0].xpath(".//tr"):
		values = row.xpath(".//td")

		if values[2].text_content() != '':
			key = values[0].text_content()
			key = self.removerubish(key)

			value = values[2].text_content()
			value = self.removerubishvalue(value)

		rawdata = {key: value}
		data.update(rawdata)

		i += 1
		if i == 10:
			break

	return data
```

## Cleaning shit up

I've written 3 small functions to get rid of tabs, line returns, some jibberish and gobbledygook before using it and putting it in the csv file.

```py
def removerubish(self,key):
	key = re.sub('\:|[ \t]+', '', key)
	key = key.lower()
	return key

def removerubishvalue(self,value):
	value = re.sub('[ \t]+', ' ', value)
	value = re.sub('\n', '', value)
	value = re.sub('\r', '', value)
	value = re.sub(r'[^\x00-\x7F]+','',value)
	return value

def text(self,elt):
	return elt.text_content().replace(u'\xa0', u' ')
```

## Creating the csv

Creating the csv is really simple.
You first get the keys inside the dictionary, then open the file you want to write all the data into, where you give in the keys with writeheader you want to use as first line (header).
And with one statement you write all the data into the file.

I'm using `extrasaction='ignore'` as I had a few addresses that had the problem they where having more address information than others. And when the keys don't match up you will get a big error.

```py
def createexcel(self):
	keys = self.addresses[0].keys()
	with open(self.filename, 'w') as output_file:
	dict_writer = csv.DictWriter(output_file, keys, extrasaction='ignore')
	dict_writer.writeheader()
	dict_writer.writerows(self.addresses)
```

Is this the best script I've ever written? Nope!
Can it be better? Yup

But it does the job.

Like the script? Please buy me a coffee for my work. Thank you!!!

[![Koop me een koffie](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/itheo)

{% gist 7283bb37b940b628c96fec61942060fe %}
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyODgxNTAyMzEsLTE3NTkzMjczOTldfQ
==
-->