---
id: 384
title: Keynotes in 3D, learned another testing methode in flex.
date: 2009-10-06T04:20:00+00:00
author: Theo van der Sluijs
layout: post
guid: http://vandersluijs.nl/blog/index.php/2009/10/06/keynotes-in-3d-learned-another-testing/
permalink: /blog/2009/10/keynotes-in-3d-learned-another-testing.html
blogger_bid:
  - "7319082336334478150"
blogger_blog:
  - blog.vandersluijs.nl
blogger_id:
  - "1051443384741783716"
blogger_author:
  - g104814725400115166555
blogger_comments:
  - "0"
blogger_permalink:
  - /2009/10/keynotes-in-3d-learned-another-testing.html
hits:
  - "1295"
itrr_another_apply:
  - 'no'
categories:
  - Tech
---
Well unfortunately I did not see the complete Keynotes, but my collegue did. The keynote started to late allready and the session times came nearer and nearer. I really wanted to attent my Session so I went off early to my first session on Monday. But because of this I seem to have missed out the best part of the Keynote. Well actually 2 best parts. <a name="more"></a> The first part was that they had a Mythbuster kind of act were they tried to put flash on the Iphone. They even tried it with a real blender to blend it with flash, well the iphone broke off course. They even tried it stick it on the iphone and rolled a steamwals over it.   The second part of what I missed was the 3D part. They showed part of the New Movie Avatar in 3D. My collegue Leon B. was totally flabbergasted about this. To bad I missed this but on the other hand I learned to use a new way of testing classes in Adobe Flash Builder. From now on I am going to use “Flex Unit Tests” and Test Driven Development for this. Test Driven Development is one of the rules of [eXtreme Programming](http://www.extremeprogramming.org/) (XP). Originally, XP programmers wrote tests for any part of their code that could break. However, this soon evolved in to the practice of writing the tests _before_ writing the actual code. This may sound strange, but there is reason behind this madness; by knowing what _can_ go wrong, you have a better idea of what your code needs to be able to handle. TDD has evolved in to a process by which code is _generated_, as opposed to a testing process. It does still effectively perform tests, but that is more of a by-product. The first thing you need is a Unit Testing framework. You can write your own, but that is not necessary. Most people use one of the existing frameworks such as FlexUnit or ASUnit. In TDD, functionality is added in very small chunks: You come up with a test, you write the test, you write the code to satisfy the test, possibly refactor it to make it more efficient, and then start with the next test. Each test may only take a minute or so to write; it may take 10; one test should not take hours though. You can read more about Unit testing and Test driven development <a title="Unit testing and Test Driven Development (TDD)" href="http://www.adobe.com/devnet/flex/articles/unit_testing.html" target="_blank">here</a>.