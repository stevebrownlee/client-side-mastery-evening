# Week 20 - Day 1

> **Agenda:**  Angular Auth, last big/little sib


* Make AuthFactory, add script tag
* Make /auth route - auth.html, AuthCtrl, add script tag for auth controller
* Add in login/register view
* Hook up register button to firebase
* Hook up login button to firebase
* Update seeder to have users and uids on items
* Change firebase rules
* Make a User factory for saving/retreiving username
* Make a helper function for Login promise resolve to use in register/login click events
* Hook up logout
	* Make route for /logout, use same template/ctrl as Auth
	* Add if statement to AuthCtrl to check if route is /logout and unauthenticate if it is.
* Fix getItemList in ItemFactory to use orderby/equalto
* Fix PostNewItem and EditItem in ItemFactory to include uid in body
* Add in isAuth check auth before showing views
* Add in code to app.run to redirect to /auth if user is not authenticated

