---
layout: post

title: 'Remove file or folder from Git Repo'
slug: 'remove-file-or-folder-from-git-repo'
date: '2016-07-17 11:44:41+00:00'
excerpt_separator: < !--more -->
publish_date: '2016-07-17 11:44:41+00:00'
image:
  path: '/images/1*Ut9MHyKtDDHspQat8gKqVQ.jpeg'
  feature: '1*Ut9MHyKtDDHspQat8gKqVQ.jpeg'
  credit: 'https://www.pexels.com/photo/apple-code-coding-computer-574069/'
  creditlink:  'https://www.pexels.com/photo/apple-code-coding-computer-574069/'
category: ['Coding']
tags: 
 - 'Folders'
 - 'Git'
 - 'Development'
 - 'GitHub'
---

So you’ve got some file in your GIT Repo that do not belong there? Bummerrrrr
every time you git pull your Git repo gives you a hard time with these files!
Do you want to merge? These files will be erased or what ever error message
you get! You don’t want these files in your Repo anymore and putting them in
the .gitignore does not help.
< !--more -->
So? How do you remove a file, files or a folder from you Git repo?

So, I’m using composer, which creates a vendor folder and a composer.lock
file. And most of the time when I push my stuff to Git these files and this
folder gets pushed to the repo to.

Well, let me tell you a little something. Those files do not belong in your
REPO! The only composer file needs to be put in your Git repository is the
composer.json file!

But if it’s not the composer created files, it could also be a config.php
(don’t want that in your repo either!) some log files or other temp stuff that
don’t belong in the git repo.

But putting it into your .gitignore file does not help anymore! You first have
to remove it from your codebase then put it in the .gitignore file and then
add the files again.

Oh man! Is there no easier way?

YES THERE IS!

#### Solution for removing files or folder from Git Repo

So here are 3 easy steps for removing files or folders from your Git
repository without removing them from your own codebase.

So lets say you want to remove the vendor folder and the composer.lock from
GIT. Not from your codebase.

Follow these 3 steps:

  * Add the files to the .gitignore
  * Remove the files/folders from git with a simple command
  * Do a git add / commit and push!

DONE!

#### Add the files to the .gitignore

So adding files to git the .gitignore is simple.

Open .gitignore with nano or a text editor or PHPStorm

Add lines like these :

    
    
    vendor/  
    vendor/*  
    composer.lock

where folder/ stands for a folder, folder/* stands for all files within a
folder and file.ext stands for a filename and its extention.

Save .gitignore

Step one done!

#### Remove the files/folders from git with a simple command

So let’s remove the file, files or folder from git!

It’s one simple command

    
    
    git rm -r --cached folderName/

Where foldername stands for a folder like : vendor/

Or when you use a file you can

    
    
    git rm -r --cached filename.ext

Remove all the folders and files you like to see go from Git.

Done!

#### Do a Git add / commit and push!

So, now you are ready to push these changes to git.

Do a simple

    
    
    git add .

and

    
    
    git commit -m 'lets remove those darn files folders'

and

    
    
    git push

All done!

Now when you do a Git Pull on your live system, don’t forget that files you
removed from git will not appear in your live environment. So you need to do
stuff like Composer update and stuff.

Have fun!!

