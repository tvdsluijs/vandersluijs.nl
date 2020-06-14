---
layout: redirect
new_url: https://medium.com/purepython/30-times-around-the-world-with-exponential-growth-in-python-d6cef743e02b
title: 30 times around the world with exponential growth in python
slug: /2019/06/30-times-around-the-world-exponential-growth-in-python
permalink: 2019/06/30-times-around-the-world-exponential-growth-in-python
date: 2019-06-20
publish_date: 2019-06-20
categories: ['Coding']
tags: 
 - Python
 - Math
comments: true
excerpt_separator: <!--more-->
---
So I was in Barcelona for a Conference, and it was really great. There was a talk and the presenter tried to explain that with 30 exponential steps you could go around the world 30 times.

And I was thinking... is this actually correct? And the next Python script was born!
<!--more-->

> My honest answer is I don't know!

## Normal vs Exponential steps.
Normal growth or steps also known as linear are like this. One step is One step, Two steps are two steps. So if one step equals one meter, then one step is one meter and two steps are two meters.

If you take 10 steps you know that your are 10 meters from your starting point and when you take 30 steps you are 30 meters from your starting point. With linear steps you can very accurately point out where you will be standing with 30 steps. 

So if we calculate with meters the overview would be:

{:.foo}
|  Steps | Meters   |
|---|---|
| 1  | 1  |
| 2  | 2  |
| 3  | 3  |
| 4  | 4  |
| 5  | 5  |
| 6  | 6  |
| ...  | ...  |

and so on.

30 steps, exponential steps will take you much further. But this first depends on the growth rate. 

Most of the times exponential growth that a lot of sites talk about is explained like this.

The first step is one meter but every next step is times two. So 2 meters, 4 meters, 8 meters, 16 meters, 32 meters. Trust me after step 6 you cannot say anymore where you will be standing.

So the overview is:

|  Steps | Meters   |
|---|---|
| 1  | 1  |
| 2  | 2  |
| 3  | 4  |
| 4  | 8  |
| 5  | 16  |
| 6  | 32  |
| ...  | ...  |

and so on.

The script I created to calculate this:
```py
def create_growth(self):  
    for i in range(self.start+1, self.stop+1):  
        nor = "{} meter".format(i)  
        if i == 1:  
            self.expo = 1  
		elif i == 2:  
            self.expo = 2  
		else:  
            self.expo = self.expo * 2
```

At step 30 you would have 536,870,912 meters (536 million) , but a lot of sites talk about having over 1 billion meters at step 30.

So, I started reading more and more about calculating Exponential growth as my script was failing me.

## Exponential Growth 
What is exponential Growth?

> growth whose rate becomes ever more rapid in proportion to the growing total number or size.

Wikipedia says:
Exponential growth is exhibited when the rate of change—the change per instant or unit of time—of the value of a mathematical function of time is proportional to the function's current value, resulting in its value at any time being an exponential function of time, i.e., a function in which the time value is the exponent. 

Well... simply said:

When growth becomes more rapid in relation to the growing total number, then it is **exponential**.

Exponential growth is extremely powerful. One of the most important features of exponential growth is that, while it starts off slowly, it can result in enormous quantities fairly quickly - often in a way that is shocking.

## Exponential growth Formula
Now there is this exponential growth formula

<center><a href="https://www.codecogs.com/eqnedit.php?latex=\large&space;y&space;=&space;(a&plus;r)^{x}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\large&space;y&space;=&space;(a&plus;r)^{x}" title="\large y = (a+r)^{x}" /></a></center>
where you have :

a = for the initial amount, which is 1 in my case    
r = growth rate as a decimal, which in my case is 1 (not a decimal)   
x = number of time intervals passed, and this is 30    
y = amount after x time (is the outcome for me)    

This formula is used to express a function of exponential growth.

So let's give this formula a try. When you start with 1 and you growth rate is 1 and you do this 5 times the answer is:

<center><a href="https://www.codecogs.com/eqnedit.php?latex=\large&space;y&space;=&space;(1&plus;1)^{5}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\large&space;32&space;=&space;(1&plus;1)^{5}" title="\large y = (a+r)^{x}" /></a></center>

Now this does not seems correct with my above table where it clearly says:

|  Steps | Meters   |
|---|---|
| ...  | ...  |
| 5  | 16  |
| 6  | 32  |

So I was thinking maybe there really is a flaw in my python code. So I started to do some more python research. I first started reading more about Math and Numpy as I thought the answer would be there.

> But, it's much more easier than that!

You can use ** for exponentiation! 

So where `2 * 5` is 10 `2 ** 5` is 32
With this knowledge I can easily create the exponential growth formula 

<center><a href="https://www.codecogs.com/eqnedit.php?latex=\large&space;y&space;=&space;(a&plus;r)^{x}" target="_blank"><img src="https://latex.codecogs.com/png.latex?\large&space;y&space;=&space;(a&plus;r)^{x}" title="\large y = (a+r)^{x}" /></a></center>
with

`y = (a+r)**x`

Thats it!

Now if I want to show all steps just do this:

```py
a = 1	# initial amount
r = 1	# growth rate
x = 5	# time intervals passed
steps = [] # list to put in all the outcomes 
  
for i in range(0, x+1):  	# add 1 else it stops 1 to early
	y = (a+r)**i
  steps.append(y)  
  
print(steps)
```
exponential growth outcome : `[1, 2, 4, 8, 16, 32]`

## Moore's Law
So... after testing `(1+1)**30` we can see the outcome is `1.073.741.824` which is a bit over 1 billion meter and just over 1 million km (1.073.741).

Going around the earth is 40.075 km, lets just say 40.075 KM. So doing that 30 times is:

`40.075 x 30 = 1.202.250 KM`

So that's that! With exponential growth you can only go `26.79 times` around the work.

>Is it? Nope it's a bit more complicated!

Exponential growth in tech usually is connected to **Moore's law**. Moore's law is the observation that the number of transistors in a dense integrated circuit doubles about every two years.

So the outcome would look like this

|  Steps | Meters   |    |
|---|---|---|
| 1  | 1  ||
| 2  | 2  |double|
| 3  | 2  ||
| 4  | 4  |double|
| 5  | 4  ||
| 6  | 8  |double|
| 6  | 8  ||
| ...  | ...  |

and so on.

Most sites talk about double the amount every step with exponential growth. But this is incorrect when we use Moore's Law.

Because the growth rate doubles about every two years... I mean 2 steps. And it's in about two steps, mostly the double the amount is in 18 to 24 months, so that is somewhere between 1.5 and 2 steps. Yes I know... years /months / steps are like a bit the same here. 

Now in my small script `(a+r)**x` I don't use random step growths. But I can (I think).

I can easily create random floats between 0,7 and 1 which are the correct steps if you take Moore's Law in to consideration.

`round(random.uniform(0.7, 1),1)`

Every step is random so I cannot just put it in `(a+r)**x`, I have to loop and randomize every step.

```py
import random  
  
a = 1 # initial amount  
# r = random and comes back in the loop  
x = 5 # time intervals passed  
steps = []  # list to put in all the outcomes  
  
for i in range(0, x + 1):  # add 1 else it stops 1 to early\  
  r = round(random.uniform(0.7, 1), 1) # variable growth rate  
  y = round((a + r) ** i)  
    steps.append(y)  
  
print(steps)
```
Every time I run this script the outcome will be different because of the random step growth.

`[1, 2, 3, 7, 16, 14]`  
`[1, 2, 3, 8, 16, 25]`   
`[1, 2, 3, 6, 10, 19]`   

So let's run 3 times 30 times, the outcome could be:

`8.193.466`   
`1.073.741.824`   
`45.517.160`    
As you can see it's different every time.

And there you have it. Exponential Growth in Tech is unpredictable and you can certainly not go around the world 30 times with it. In some cases you can go a long way, but it might as well be just 20 times around the earth.

Note:
---
So, this article is not based on facts. It might be how it is, but it could be as wrong as it possible can be. I just wrote it for fun and to think about how exponential growth works. So please don't use my calculations or scripts within optimizing fuel-cells for spaceships, code for self driving cars, calculations for building megastructures or time travel with a Delorean.


Thank you!

-----

Like the script? Please buy me a [coffee](https://www.buymeacoffee.com/itheo) for my work. Thank you!!!
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NzE2OTc3MTAsMTQ5ODk2MjQwOSwxOD
gwMDE5MzU0LDgzNzQwNjMwNywtMTY2NjcyODUxMSwtMTkyNzIx
MjcyNCwtMTE0MDkzNjcwMCwtNDYyNTM1NjMwLDcyMDkwMTQxMi
wtNzkwMTA2ODIsLTM4MDQzNDIzNCwtMTI3OTQxNzM4MywyODk3
NzgzNzVdfQ==
-->