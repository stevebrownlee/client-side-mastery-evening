# Week 19 - Day 2

> **Agenda:** Angular - GET, POST, DELETE from firebase


* Make new firebase repo
* Add firebase script tag
* Add firebase credentials as constant 
* Use angular.run to do firebase initialize
	* Configuration blocks get executed during provider registration, and can only be injected providers and constants. This is typically where you would configure application-wide stuff, such as the $routeProvider. Stuff that needs to be configured before the services are created.
	* Run blocks get executed after the injector has all the providers. Now, all instances and constants can be injected. This is typically where you would configure services, $rootScope, events and so on.
* Make an ItemFactory to do all $http calls
* Break app.js into controller files and config files
* Add a GET method that display stuff to DOM from firebase
* Add a POST method that sends new todos to firebase
* Add a DELETE method that remove todos from firebase.

