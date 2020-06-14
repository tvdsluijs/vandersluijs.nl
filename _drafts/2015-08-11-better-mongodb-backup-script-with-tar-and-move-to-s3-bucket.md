---
layout: post
excerpt_separator: < !--more -->
title: 'Better MongoDB backup script with Tar and move to S3 Bucket'
slug: 'better-mongodb-backup-script-with-tar-and-move-to-s3-bucket'
date: '2015-08-11 11:52:12+00:00'
publish_date: '2015-08-11 11:52:12+00:00'
category: ['Coding']
tags: ['S3-Bucket', 'AWS', 'Mongodb']
---
A few months ago I wrote a article about a MongoDB backup script.

It worked, but after a while it became useless because it kept locking my
MongoDB server. And with that lock it did not open it afterwards so my sites
just crashed.
< !--more -->
This happend because the MongoDb was just to big to handle within a reasonable
time. So I had to write another MongoDB backups script.

This script, creates a backup from any MongoDB database, turns it into a tar
file and moves it to any Amazon S3 environment.

#### MongoDB Backups script

The script is pretty straight forward. Just change the [vars] and you can
backup your MongoDB!

Have fun using it!

