---
layout: post

title: 'How to git clone into a non-empty directory'
slug: 'how-to-git-clone-into-a-non-empty-directory'
date: '2016-07-16 13:52:53+00:00'
excerpt_separator: < !--more -->
publish_date: '2016-07-16 13:52:53+00:00'
image:
  path: '/images/1*Ut9MHyKtDDHspQat8gKqVQ.jpeg'
  feature: '1*Ut9MHyKtDDHspQat8gKqVQ.jpeg'
  credit: 'https://www.pexels.com/photo/apple-code-coding-computer-574069/'
  creditlink:  'https://www.pexels.com/photo/apple-code-coding-computer-574069/'
category: ['Coding']
tags: 
 - 'Git'
 - 'Development'
---
I’m building a few new projects. Some in just plain good old PHP and some with
a nice framework like Slim 3. I’ve got a good working shared hosting solution
at [Vimexx](https://www.vimexx.nl/affiliate/1730) and the only problem I have
that when I git clone in a usually non empty directory I get these nice
errors.
< !--more -->
So here are the 5 simple steps to git clone in to that non empty folder!

So you want to git clone in to that folder where there is already some files?

Let me guess. When you do:

    
    
    git clone ssh://user@host.com/home/user/private/repos/project_hub.git ./

You get a:

    
    
    Fatal: destination path '.' already exists and is not an empty directory.

So what are the options here?

If you do

    
    
    git help clone

You get:

    
    
    Cloning into an existing directory is only allowed if the directory is empty.

No Shit! Sherlock!

So should you remove or move all the files and folders within the folder you
want to clone into?

No!

Don’t worry! I’ve got you’re back!

The solution to Git Clone into a non empty folder is simple!

#### Solution to Git Clone into a non empty directory

The solution is very simple! Actually there are two solutions. Just see which
one suits you!

    
    
    git init  
    git remote add origin PATH/TO/REPO  
    git fetch  
    git checkout -t origin/master

or

    
    
    git init .  
    git remote add -t \* -f origin <repository-url>  
    git checkout master

#### Git Clone

What is Git Clone? Git Clone, Clones a repository into a newly created
directory, creates remote-tracking branches for each branch in the cloned
repository, and creates and checks out an initial branch that is forked from
the cloned repository’s currently active branch.

After the clone, a plain git fetch without arguments will update all the
remote-tracking branches, and a git pull without arguments will in addition
merge the remote master branch into the current master branch.

Executing the command git clone git@github.com:whatever creates a directory in
a current folder named whatever, and drops the contents of the git repo into
that folder. Use a dot (.) behind the command to place the files directly into
the current folder.

