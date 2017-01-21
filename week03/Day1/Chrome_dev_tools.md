# Week 3 Day 1 - Chrome Dev Tools


## Overview
* Chrome dev tools make your job 1 billion times easier
* They are so well developed that Chrome is the browser of choice
* To open via command line:
	* ```Ctrl+Shift+I``` (Windows) or ```Cmd+Opt+I``` (Mac)
	* Right click and select inspect
	* Select the hamburger in chrome then Tools>Developer Tools

## Tabs on the Dev tools
### Magnifying glass/square with arrow
* This allows you to click on a specific element in your browser - once you click it brings up that element in the element tab
* Good for checking the styling on a specific element
* Allows you to see click events 

### Device View
* Allows you to see how your page looks on different devices
* Can help you set break points
* Now always exact - better ot test on a device but its a lot easier to test on browser than on a device

### Elements
* One of the 2 most important tabs
* You will use this all the time every time
* shows you all the html on your page and how things are nested
* Shows you the styles that are on each element
* Shows you when styles have been overriden


### Console
* JS console
* Will mostly use it to console.log errors or data
* Also a great place to do quick practice or try something out
* Can use it to display dom variables ```window```

### Sources
* Where you debug javascript
* Shows you every JS file you have loaded and allows you to add breakpoints
* We will talk about this more next week when we talk about JS

### Network
* Shows all resources that have been requested - XML, CSS, HTML, JS, images
* Make sure oyu have Disable cache clicked

### Timeline
* Gives you an overview of where time is spent with loading assets
* Won't really use it in this class

### Application/Resources
* Shows you all the Cookies you have open or variables in local storage
* Will use this a lot when we get to firebase

### Profiles
* Allows you to profile the execution time and memory usage of a page
* Won't really use in this class

### Security
* Tells you the security level of your page
* Alerts you if data is coming over HTTP instead of HTTPS etc
* Won't really use in this class

### Audits
* Analyzes a page as it loads
* Provides suggestions for decreasing page load time
* Relatively new feature - we won't use it for class

