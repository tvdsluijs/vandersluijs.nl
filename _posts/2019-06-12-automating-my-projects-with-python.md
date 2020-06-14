---
author: tvdsluijs
categories:
- Coding
comments: 'true'
date: 2019-06-12
excerpt_separator: <!--more-->
layout: post
permalink: /2019/06/automating-my-projects-with-python/
publish_date: 2019-06-12
slug: /2019/06/automating-my-projects-with-python/
tags:
- Python
- Automation
title: Automating My Projects With Python

---
So, I saw this fine video on youtube about, building stuff within one day. It was made by [KalleHallden](https://github.com/KalleHallden/) and I really enjoyed this video.

But during the video I wondered if his code would work on every workstation. Now I have a Mac, and Kalle does too, but this

```py
path =  "/Users/kalle/Documents/Projects/MyProjects/"
```
Will not work on a Windows machine.  Home folders are different on many platforms.

So, why not use a home finding feature of python itself, like :

```py
from pathlib import Path
home = str(Path.home())
```
So, I was thinking, can I improve this script? 

**Yes!**

So let's Go!

## What's to be done

So there is this list Kalle created to be done.

- [ ] Navigate to MyProjects
- [ ] Create folder with project name
- [ ] Navigate info folder
- [ ] Git init
- [ ] Go to GitHub an create new repository
- [ ] Copy the remote
- [ ] Add remote to my local folder
- [ ] Create readme file
- [ ] Git add
- [ ] Git commit
- [ ] Git push
- [ ] Code . (open IDE)

Now I think this list can be shorter and easier.

So let's start by navigating to the projects folder.

## Navigate to folder

This piece of code lets you print the home folder. On windows, linux or Mac os
```py
from pathlib import Path  
home_folder = str(Path.home())  
print(home_folder)
```
The output, on my Macbook is `/Users/theovandersluijs`

Let's say we want to create the new projects in:

[home]/Documents/MyProjects

We can concatenate the home folder easily with the Documents and MyProject folder with the `os.path.join` statement.

```py
from pathlib import Path  
import os  
  
home_folder = str(Path.home())  # this is the users home folder on any OS  
  
my_project = os.path.join(home_folder, "Documents", "MyProjects")  
print(my_project)
```
this gives us `/Users/theovandersluijs/Documents/MyProjects`

Now let's say we want to create "New_project" into this folder structure.

Easy we are going to use `os.makedirs`

```py
from pathlib import Path  
import os  
  
home_folder = str(Path.home())  # this is the users home folder on any OS  
  
my_project = os.path.join(home_folder, "Documents", "MyProjects", "New_project")  
  
os.makedirs(my_project, exist_ok=True)
```

And we are done!

- [x] Navigate to MyProjects
- [x] Create folder with project name

The first step, we did not have to do.
The second step, will also be obsolete in one of the next chapters.

## Creating the github repository

Creating a github repository is very easy!

First you need to install the GitHub package for Python. `pip install PyGithub `

Then you need a [Token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) to gain access to your GitHub account using python. You can find information about generating a GitHub Token [here](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

So now that you have your token you can start using the script below.

```py
from github import Github  

token = "[YOUR TOKEN]"  
user = Github(token).get_user()  
name = "New_project"  
auto_init = True # creates the Readme file  
homepage = "https://www.itheo.nl"  
description = "This is a nice description about this project"  
private = False  
license_template = "cc-by-sa-4.0"  
  
repo = user.create_repo(  
        name,  
  auto_init=auto_init,  
  homepage=homepage,  
  description=description,  
  private=private,  
  license_template=license_template  
       )
```
So what does all these vars mean.

- **Name**: The name of the repository (***Required***).
- **auto_init**: Pass `true` to create an initial commit with empty README. Default: `false`.
- **homepage**: A URL with more information about the repository.
- **description**: A short description of the repository.
- **private**: Either `true` to create a private repository or `false`to create a public one. Creating private repositories requires a paid GitHub account. Default: `false`.
- **license_template**: Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".

There are various licenses you can choose from. You will find them all [here](https://help.github.com/en/articles/licensing-a-repository)

More information about creating a repository and all the possible variables on GitHub can be found [here](https://developer.github.com/v3/repos/#create)

If you like to see some output after the script use these:
```py
print(repo.full_name)  
print(repo.html_url)  
print(repo.ssh_url)
```
The first will show you the full name of the newly created repository including your username
`tvdsluijs/New_project`

The second shows the html url you can use either to browse to to find your repo or to use to clone your repo
`https://github.com/tvdsluijs/New_project`

The last is the SSH url to clone your repo
`git@github.com:tvdsluijs/New_project.git`
 And this last statement will come in handy when we want to clone our repo to our harddrive.

We do not need any selenium or beautifullsoup to get any of the needed data from the GitHub page. 

So what steps did we do here?

- [x] Go to GitHub an create new repository
- [x] Create readme file

We actually do not need these with the code I've created.
~~- [ ] Copy the remote~~

~~- [ ] Git add~~

~~- [ ] Git commit~~

~~- [ ] Git push~~

## The Clone wars

Well... not really wars, but I just wanted to put a Star Wars item within this article :-)

But it is about cloning. Because we want to Clone the Repository to our harddrive.

Unfortunately there is no way (yet) to clone with pygithub. So we are going to do this by good old os package already within python.

```py
home_folder = str(Path.home())
my_projects_folder = os.path.join(home_folder, "Documents", "MyProjects")  

clone = "git clone {}".format(repo.ssh_url)

os.chdir(my_projects_folder) 
os.system(clone)
```

With `clone = "git clone {}".format(repo.ssh_url)` you specify the ssh_url from GitHub where your repository is.

Specifying the path where the cloned project needs to be copied   is done by : `os.chdir(my_projects_folder) `
Do NOT specify the name of your project within this statement. The cloning will create the folder auto-magicly!

And clone the whole shabang with: `os.system(clone)`

So what steps did we do here?

- [x] Create folder with project name
- [x] Navigate info folder
- [x] Git init
- [x] Copy the remote
- [x] Add remote to my local folder

So as we did all of this within a small piece of code a lot of items became obsolete within the original ToDo List.

So what is left of the original list

- [x] Create new repository
- [x] Copy the remote to local folder

> DONE!

Well only for the automated opening of the IDE and off course for the bash script for Mac and Windows.

## Bash scripting

For windows you need to create a bat file and place that in your windows sys folder or create a path variable to the .bat file so you can run it anywhere.

Second to that you need to know where python.exe is located
And last where the python script is located

Your bat script could look like this:
```batch
"C:\Users\Theo\AppData\Local\Programs\Python\Python37-32\python.exe" "C:\Users\Theo\Documents\MyProjects\New_project\create.py"
pause
```
For MacOS you should create a .sh file, some thing like `.my_commands.sh`

With the following code

```sh
#!/bin/bash

function create() {
	python /Users/theovandersluijs/Documents/MyProjects/New_project/create.py
}
```
If you `source ~/.my_commands.sh` you will be able to start the python script anywhere from you system in a terminal.

## Wrapping things up

Now, if you add some input variables to make the script more intuitive and dynamic and put some try, catch and logging into it, slam in into a class with objects, you will get something like my project you can find on GitHub!

Go to my [GitHub Page](https://github.com/tvdsluijs/initialize_project_with_python) for all the code.


Like the script? Please buy me a [coffee](https://www.buymeacoffee.com/itheo) for my work. Thank you!!!


## Kalle Hallden's Video

Please watch the video of Kalle below, it's really nice to see a passionate developer working.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7Y8Ppin12r4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Also take a look at his other [video's](https://www.youtube.com/channel/UCWr0mx597DnSGLFk1WfvSkQ), or go to his [github account](https://github.com/KalleHallden/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTM0NTI3NDUxOCwtMTEzNzE3NzE3Miw2Nz
A5NzQyMjksLTUyMzg2NTg1M119
-->