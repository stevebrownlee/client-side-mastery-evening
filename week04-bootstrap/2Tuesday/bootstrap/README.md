# Bootstrap

For this lecture you will be doing the same project we did with event listeners - the Pie lesson - but with bootstrap.  Since most of the JS can be reused spend the time on this project really exploring the bootstrap documentation.

## Questions and Role
* Have Greg take role
* Give a few minutes for students to ask any questions they have from the last class.

### Setup
Have them create a new github repo called `bootstrap`.  I have already created this repo for [E10](https://github.com/nss-evening-cohort-10/bootstrap) - https://github.com/nss-evening-cohort-10/bootstrap

Locally the project should live here: `~/workspace/foundations/inclass/bootstrap`.

Have them push README.md to master and then create a `setup` branch that changes the background color of the body and does a console.log.  Once they push to master you are ready to go with the lecture

### Introduce Bootstrap
Class lecture notes are [HERE](https://github.com/nss-nightclass-projects/Night-Class-Resources/blob/master/book-1-foundations/chapters/bootstrap.md).

* Give a quick introduction to what bootstrap is - mobile first front-end component library.  Its based on flexbox so things will look familiar
* Take them to the [bootstrap website](https://getbootstrap.com/) And give them a tour.

Give them a general overview of what is available for them with bootstrap.  Easy way to do this is go through the left navigation bar super quickly - layout, content, component, utilities.

### Install bootstrap
* Bootstrap has multiple different installation methods - CDN, npm, direct install.  For now we are going to use the CDN.
* Explain what a CDN is - CDN: Content Delivery Network.  Each version of bootstrap is published to servers so we can link directly to the script and link tags.
* Bootstrap has both CSS components (grid system) and components that respond with JS (modals, pagination, tabs etc.)  Because of this we need to include both script tags and link tags.
*  The JS part of bootstrap also requires PoperJs and Jquery so we need to include script tags

* Have students make a branch called `setup2`
* On this branch add the bootstrap link tag and the 3 script tags
* EXPLAIN:  link tags to librarys ALWAYS go in the header above local link tags
```html
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="main.css">
```
* EXPLAIN:  script tags almost ALWAYS go in the body DO NOT PUT THEM IN THE HEADER - except special circumstances.  We also place library script tags before our own.
```html
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="main.js"></script>
```
* have students add a bootstrap button to their html page to test that bootstrap is working
* EXPLAIN:  moving forward for EVERY project they do at NSS the setup branch should include adding bootstrap.  So all setup branches moving forward should have: link tags to `bootstrap.min.css` and `main.css`, script tags for `bootstrap.min.js` and popperJs and jquery and `main.js`.  A console.log in the `main.js` file.  A body background color change in `main.css`.  A bootstrap button in `index.html`

* PR and merge the `setup2` branch

### Create Navbar
* create a branch called `navbar`
* Add in a bootstrap navbar - show them the documentation go over options how build one out etc.
* PR and merge the `navbar` branch

### Create Pie Cards
This ticket is your chance to explore bootstrap grid and bootstrap cards
* Create a branch called `cards`
* Have students copy the pies array from the events project
* Build up the `pieBuilder` and `printToDom` functions - for now just print pie names
* Take students to the [bootstrap card](https://getbootstrap.com/docs/4.3/components/card/) docs.
* Show them how to add it to the domString
* Show them how to use the [bootstrap grid](https://getbootstrap.com/docs/4.3/layout/grid/) to put their pies in rows of 4
* Do any styling as needed
* PR and merge the `cards` branch

### Create instructor buttons
* Create a branch called `filters`
* Use the grid and utiltiy functions to add in the instructor buttons - I used a [Button Group](https://getbootstrap.com/docs/4.3/components/button-group/) to do this.
* Give students 20-30 minutes to add in the JS event listeners.  Challenge them to do this without looking at the previous assignment
* PR and merge the `filters` branch

### HW
Go over their HW.  It can be found [HERE](https://github.com/nss-evening-cohort-10/e10-homework/blob/master/week04.md).  Explain each assignment - Sorting hat and Personal site part 2. Sorting hat is due next tuesday.  Personal site part 2 is due the following saturday
