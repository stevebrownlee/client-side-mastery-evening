# Week 16 - Day 2

> **Agenda:** In class API demo - IMGUR

API = Application Programming Interface is a set of subroutine definitions, protocols, and tools for building software applications.

##### IMGUR Docs
https://api.imgur.com/endpoints

#####  Steps for starting an IMGUR app:
* Go to IMGUR and create a login
* Register your application
    * Give it an Application Name
    * Authorization Type :  OAuth 2 authorization with a callback URL
    * Add in callback URL - can be localhost:8080
    * Add in your email address
    * Hit submit and you should see your secret keys

##### Check the API’s rate limit
this is how many requests you can make in a certain amount of time - for IMGUR its 12,500 requests per day or 1250 uploads per day.  This is fine.  We have had people who have limits of 15 requests per minute - when you are making css changes you hit a lot limit REALLY fast and then get stuck and can’t do anything

##### Register your Imgur App
https://api.imgur.com/#registerapp  = it says “For public read-only and anonymous resources, such as getting image info, looking up user comments, etc. all you need to do is send an authorization header with your client_id in your requests. “ So what does that mean - we need the client_Id and we need to put it in the header.  ok……

##### What are Secret Keys 
They allow you read and sometimes write access to APIs.  They are vital to making the API work but also dangerous (i.e. expensive) in the wrong hands.  Hackers troll github public repos looking for secret keys and then use your keys to charge you lots of money. because of this NEVER push secret keys up to github - best thing to do is create a json file that you put in your gitignore.

##### Putting Secret Keys in our app
Create apiKeys.json and apiKeys.json.example.  Put apiKeys.json in .gitignore.  

Use promise to load api keys from json object in .

##### Make ajax call to gallery endpoint
Want to search by gallery tag - so in the docs I found https://api.imgur.com/endpoints/gallery#gallery-tag.  This requires the name of the tag.  also has some optional inputs that we don’t need.

Be sure to assign key to header and make gallery request.


