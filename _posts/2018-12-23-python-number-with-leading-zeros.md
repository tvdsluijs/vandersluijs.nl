---
author: tvdsluijs
categories:
- Coding
comments: 'true'
date: 2018-12-23
description: Adding a leading zero in python solution for python 2 and python 3 number
  solution and is not very difficult. Leading zero's in Python can be done with a
  simple script.
excerpt_separator: <!--more-->
layout: post
tags:
- Python
- Tutorial
title: Leading zeros in Python

---
Leading zeros in a python number is not very difficult. A leading zero is any 0 digit that comes before the first nonzero digit in a number string in positional notation. For example, James Bond's famous identifier, 007, has two leading zeros. When leading zeros occupy the most significant digits of an integer, they could be left blank or omitted for the same numeric value.

<!--more-->
Now the sollution in python is not very difficult.

Basically what you want is numbers to be the same length like this:

```
001
002
003
004
010
015
045
099
100
112
156
``` 

To get leading zero's in Python 2 you can do:

```python
number = 1
print "%02d" % (number,)
```
Basically % is like printf or sprintf. Where the 2 stands for 1 leading zero, when the number is not higher then 9. 

```outcome: 01```

Now with another number and more leading zero's.
```python
number = 23
print "%04d" % (number,)
```

```outcome: 0023```


To get leading zero's in Python 3.+ the same behavior can be achieved with:
```python
number = 6
print("{:02d}".format(number))
```

```outcome: 06```


And to get leading zero's in Python 3.6+ the same behavior can be achieved with f-strings:
```python
number = 4
print(f"{number:02d}")
```

```outcome: 04```

Another way of doing it is.

```python
number = 23
print('{0:04}'.format(number))
```

```outcome: 0023```

As you can see there are multiple ways to put leading zero's in front of a number.