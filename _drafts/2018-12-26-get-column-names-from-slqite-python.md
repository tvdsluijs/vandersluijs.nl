---
layout: redirect
new_url: https://medium.com/purepython/get-column-names-from-sqlite-with-python-c8d38794aba
title:  Get column names from SQLite with Python
date: 2018-12-26
dateModified: 
seo_description: Get the column names with python from a SQLite database is possible! The sollution is actually very easy.
categories: [Coding]
tags: 
 - SQLite
 - Tutorial
 - Python
excerpt_separator: <!--more-->
name: Pure Python
comments: true
author: tvdsluijs
redirect_from: "/2018/12/26/get-column-names-from-slqite-python.html"
---
Get the column names with python from a SQLite database is possible! The sollution is actually very easy. To get a list of column names from a table in a SQLite database or getting the row or rows back as a dictionary solution is just one extra line of code when setting the connection. So yes, there is a simple way of getting the column names.
<!--more-->

The solution is in one single line! ```conn.row_factory = sqlite3.Row``` is as easy as this!

The SLQite Row instance serves as a highly optimized row_factory for Connection objects. This tries to mimic a tuple in most of its features.

The Row instance supports mapping access by column name and index, iteration, representation, equality testing and len().

If two SLQite Row objects have exactly the same columns and their members are equal, they compare equal.

Let’s initialize a table with the power of columns :-) :

```python
    conn = sqlite3.connect("mydatabase.db")
    conn.row_factory = sqlite3.Row  #this for getting the column names!
```

THAT's it!!!

When you now do a normal query on the SQLite database with Python you will get the column-names back with the values.

```python
    conn = sqlite3.connect(self.sqlite_file)
    conn.row_factory = sqlite3.Row  
    
    field = "Rotterdam"
    
    sql = '''SELECT `name`, `address`, `city` 
             FROM `addresses` WHERE `city` = ?'''

    cur = conn.cursor()
    cur.execute(sql, field)    
    
    rows = cur.fetchall()
    for row in rows:
        print(dict(row))
```

The ```dict(row)``` is telling the row data that it is of a dictionary type. So you will get the data back in dictionary style. 

```
output:
    {'name': 'Jansen', 'address': 'Blaak 928', 'city': 'Rotterdam'}
    {'name': 'Klaasen', 'address': 'Maasberglaan 23', 'city': 'Rotterdam'}
    {'name': 'de Vos', 'address': 'Meent 198', 'city': 'Rotterdam'}
```

You can also get the values with key-names like:

```python
    for row in rows:
        r = dict(row)['name']
        print(r)
```

or a maybe somewhat nicer way to get the data from the SQLite table with python, is:

```python
    for row in rows:
        r = dict(row)
        print(r['name'])
```

If you want a complete example look below!

{% gist 6300d1510e7b3963e5b192756360b76e %}
