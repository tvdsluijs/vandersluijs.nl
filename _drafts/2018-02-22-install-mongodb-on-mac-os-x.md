---
layout: post
title: 'Install MongoDB on Mac OS X'
slug: 'install-mongodb-on-mac-os-x'
date: '2018-02-22 07:01:00.948000+00:00'
excerpt_separator: < !--more -->
publish_date: '2018-02-22 07:01:00.948000+00:00'
image:
  path: '/images/1*lLD6w6_jjDQwnznRw_ysxg.jpeg'
  feature: '1*lLD6w6_jjDQwnznRw_ysxg.jpeg'
  credit: 'negativespace.co'
  creditlink:  'http://negativespace.co/photos/coding/'
categories: ['Tech']
tags: 
 - 'Mongodb'
 - 'Database'
 - 'OS X'
 - 'Development'
 - 'Coding'
---
I installed mongodb a lot of times on my macbook. And everytime I keep
forgetting how. So I was thinking… Let’s create a little page on how…

I installed mongodb a lot of times on my macbook. And everytime I keep
forgetting how. So I was thinking… Let’s create a little page on how to, so I
can find it easily.
< !--more -->
I hope you can also use this small manual.

Update Homebrew’s package database.  
In a system shell, issue the following command:



    brew update

You can install MongoDB via brew with several different options. Use one of
the following operations:

#### Install the MongoDB Binaries

To install the MongoDB binaries, issue the following command in a system
shell:



    brew install mongodb

#### Create the data directory

Before you start MongoDB for the first time, create the directory to which the
mongod process will write data.

By default, the mongod process uses the /data/db directory. If you create a
directory other than this one, you must specify that directory in the dbpath
option when starting the mongod process later in this procedure.

The following example command creates the default /data/db directory:



    sudo mkdir -p /data/db

#### Set permissions for the data directory

Before running mongod for the first time, ensure that the user account running
mongod has read and write permissions for the directory.



    sudo chmod 0755 /data/db && sudo chown $USER /data/db

#### Run MongoDB.

To run MongoDB, run the mongod process at the system prompt. If necessary,
specify the path of the mongod or the data directory.

To run MongoDB Simply enter mongod at the system prompt:



    mongod

#### Stop MongoDB

Later, to stop MongoDB, press **Control+C** in the terminal where the mongod
instance is running.



    brew services start mongodb


    brew services restart mongodb


    brew services stop mongodb

That’s all!
