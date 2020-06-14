---
author: tvdsluijs
categories:
- Coding
comments: 'true'
date: 2019-01-03
description: Sending an email with python 3 is very easy, but you can also send attachments
  with Python 3 and Gmail. Now as I do not like doing stuff twice I wanted to have
  a script that would send files from a folder as separate emails.
excerpt_separator: <!--more-->
layout: post
tags:
- Mail
- Python
title: Send files with Gmail using a python script

---
Sending an email with python 3 is very easy, but you can also send attachments with Python 3 and Gmail. Now as I do not like doing stuff twice I wanted to have a script that would send files from a folder as separate emails. And that is exactly what this python script does. It takes a folder and for every file a mail with that file is created and send to a email address.
<!--more-->

So I have a subscription on this online Receipt scanner service where I can scan receipts with my mobile camera and it will get processed by this service.

Now as this service is very good I also receive a lot of invoices and receipts by mail or I have to download them manually. As the service has a send to email option, sending hundreds of invoices manually to this email address is not really an option for me....  it doing something very simple more then twice! And if I have to do it twice I AUOTMATE it!

## Gmail app Password

Now if you are like me and want to use the Gmail service for this and you have 2-way authentication (which you REALLY shoud have!) you cannot simple start using Gmail to send these emails as Gmail wants to authenticate in a 2-way!

So when you have signed up for 2-Step Verification, Gmaikl normally sends you verification codes. However, these codes do not work with some apps and devices, like Outlook or my Python script. Instead, you’ll need to authorize the app or device the first time you use it to sign in to your Google Account by generating and entering an App password.


Creating a Google App Password is very easy.

1. Go to your Google Account.
2. On the left navigation panel, click Security.
3. On the Signing in to Google panel, click App passwords. 
Note: If you can't get to the page, 2-Step Verification is:
    - Not set up for your account
    - Set up for security keys only
4. At the bottom, click Select app and choose the app you’re using.
5. Click Select device and choose the device you’re using.
6. Click Generate.
7. Copy the the 16 character code in the yellow bar you will need it for this script.
8. Click Done.

Once you are finished, you won’t see that App password code again. However, you will see a list of apps and devices you’ve created App passwords for.

## Mail file folders

To use this script save it somewhere on your pc or Mac, name it "send_files_by_gmail.py" and create a folder named "mail_files" and within this folder, and within this new "mail_files" folder create a folder named "done" and "new".

Your folder will look like this

- send_files_by_gmail.py
    - mail_files
        - done
        - new
    
You can place all the attachments within the "new" folder.

When the script is ready all attachments send will be in the "done" folder.

If the script crashes, you can rerun the script as it will start
where it stopped as it only puts files in the "done" folder when the mail is send out.

## How the python script works

Well, very simple! You do not need to install anything. You have to use python 3 (it will not work with python 2)

You only have to fill in 3 items in the python script

your gmail email address
your gmail app password
and the email address your want to send it to!

```python
if __name__ == '__main__':
    
    from_addr = "some@gmail.com"         # your gmail account email address
    pass_wd = "yourpasswors"              # your pwd (see discription above)
    to_addr = "to@emailaddress.com"     # where the attachment should go to
    
    m = MailFiles(from_addr, pass_wd, to_addr)

```

That's it! Have Fun!

{% gist ae79133ad151f5a675e58ee9152522c7 %}
