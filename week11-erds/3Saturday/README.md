# Week 11 - Day 3

> **Agenda:** JSON, ERDs, Axios


## JSON
* Have them make a repo called cows
* Have them do regular setup branch
* Show them how to create json by making `db/bears.json` - stress that its just a javascript object with DOUBLE quotes around the keys.  NO COMMENTS OF ANY KIND IN JSON FILES
* Show them jsonlint.com and have them validate their json

## ERDs
* ERD = Entity Relationship Diagram
* Allows us to map out what keys we are putting in our collections and how the collections relate to each other
* First example - BEAR HUNTING = should come up with about 3 collections: Bears (already have JSON file for this), Hunters, kills (hunterId, bearId)
* Have everyone make a free [Lucid Chart](https://www.lucidchart.com) account.
* Show them how to create an ERD using the entity objects
* 2nd example - Give them 45ish minutes to create an Emergency Room ERD - keep the topic vague.  Tell them you want to see a lucid chart
ERD when they are done
* 3nd example - Give them 45ish minutes to create an order system for a popular restaurant - I used Panera for E10.  Tell them you want to see a lucid chart ERD when they are done

## Axios
* Now back to the cows repo
* we are building a simple application that represents a communal cow pasture filled with cows from different farmers
* Build out an ERD - 3 collections: cows, farmers, CowFarmers (join table)
* Have students build out a json file for each collection
* If they haven't already students will need to install axios `npm install axios --save`
* Have students create a get request to the cows.json file to start - just a console is fine