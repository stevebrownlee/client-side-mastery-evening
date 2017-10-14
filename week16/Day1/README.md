# Week 16 - Day 1

> **Agenda:** APIs(Lauren)


## Movie History
### [The Movie Database](https://www.themoviedb.org/)

### One Time Setup
#### Sign Up
Sign up for TMDB [HERE](https://www.themoviedb.org/account/signup)
#### Request an API key.  
	* Log in
	* Click on gravitar
	* Select "Settings"
	* Select "API" on left menu
	* Scroll to bottom under Request an API Key click the link
	* Click developer
	* Accept the terms of use
	* Fill out the form that pops up - every field needs to be filled out, including a long description.  
	* It should automatically give you a key once you fill the form out

#### Docs
The docs are kinda hard to find from the main site but they exist [HERE](https://developers.themoviedb.org/3/getting-started)

### Each time you use it in an app
#### Securely fetch API key
Put the key in a json file that does not get pushed to github.  Make an ajax request to the file to get the key.  This should happen on page load - When we get to angular this should be put in the .run.

#### Configuration
Students will need to make a call to /configuration directly after getting their key from their json file - this route gives access to things we need in order to view the movie poster for each movie.  
[Configuration Docs](https://developers.themoviedb.org/3/configuration/get-api-configuration)

#### Search
Students will be using the search section of the API.  They will need to have any spaces in their search replaced with "%20".  They will also need to use their API keys.  Documentation for search by movie can be found [HERE](https://developers.themoviedb.org/3/search/search-movies)

#### Images
The images that come back from the API are all relative paths.  In order to put in image tags you actually need to create the correct absolute path.  Look at this [documentation](https://developers.themoviedb.org/3/getting-started/images).  There are three parts to this path: base_url, file_size, file_path.  The base_url comes from configuration call we made earlier (this can and sometimes does change with new versions of the api).  The file_size can be hard coded.  I chose to use "w342".  The file_path is the poster_path in the api return.