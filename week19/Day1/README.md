# Week 19 - Day 1

> **Agenda:**  Angular Routing


* Install Angular-Route
	* bower install angular-route --save
	* add script tag for angualr-route
	* add in "ngRoute" to app.js
* set up 2 simple routes (item-list and item-new)
	* add in routes to AppConfig.js
	* make controllers and simple views
	* add script tags for controllers to index file
	* add anchor tags to nav controller
* move code from index.html for list and new views
* get POST, PUT, and DELETE working
* add route for item view: make new view and controller
* Add route for item-edit: same template as item-new, new controller
* Add in getSingle method to factory so a single item is brought back when on the item-edit page
* Make sure UPDATE works
* Add ng-change event on checkboxes - this will require function in list controller that uses ItemFactory.editItem
* CRUD completed - only thing left is AUTH