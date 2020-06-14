---
layout: post
title: 'MongoDB /data/db folder permission problems'
slug: 'mongodb-data-db-folder-permission-problems'
date: '2018-02-23 08:01:01.606000+00:00'
excerpt_separator: < !--more -->
publish_date: '2018-02-23 08:01:01.606000+00:00'
image:
  path: '/images/1*pGpT2epd3Wo_-dkqfRW0tg.jpeg'
  feature: "1*pGpT2epd3Wo_-dkqfRW0tg.jpeg"
  credit: 'George Becker'
  creditlink:  'https://www.pexels.com/u/eye4dtail/'
categories: ['Tech']
tags: 
 - 'Mongodb'
 - 'Database'
 - 'Development'
 - 'Coding'
---
MongoDB is a document database with the scalability and flexibility that you
want with the querying and indexing that you need. And I think…

MongoDB is a document database with the scalability and flexibility that you
want with the querying and indexing that you need. And I think it’s a really
great Database but sometimes it’s just a pain!
< !--more -->
I have had multiple times that I was getting the “Unable to create/open lock
file: /data/db/mongod.lock errno:13 Permission denied” message!

And everytime I was searching the net to get a solution. Until now! I’ll just
write a little article with all my found solutions so I don’t need to search
for it again (as from now, I know it’s on my own site :-). I did the same with
the [solution](https://itheo.nl/remove-file-or-folder-from-git-
repo-195f643a95c7) for removing git files or folders.

> errno:13 Permission denied

So, you’ve got a lock error on your Mongod.

It could be a real permission error. So just set the rights right.



    sudo chown mongod:mongod /data/db

If you get a “chown: mongod: Invalid argument” message…. it might be that
/data/db does not exists.

So do a:



    sudo mkdir -p /data/db

That might work!
