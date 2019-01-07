# Nutshell Instructions

Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily weather, events, articles, friends, and chat messages.

You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

1. Functions
1. Databases/API
1. Github
1. Objects
1. CSS
1. Handling user events
1. Data entry/editing
1. Relational data
1. React
1. React Routing


## Firebase
Your team should have 1 firebase project that is created through github projects.  Your firebase should have the following 6 collections:
```
/users
/articles
/events
/weather
/friends
/messages
```

Each collection should have data in the following structure:
### Users

```json
{
  "username": "Cat Lady",
  "uid": "5ykBb0xyadPZLgH4EPO4i88HIql2"
}
```

### Messages

```json
{
    "uid": "5ykBb0xyadPZLgH4EPO4i88HIql2",
    "message": "What's up?",
    "timestamp": 1528763298535,
    "isEdited": true
}
```

### Articles

```json
{
    "uid": "5ykBb0xyadPZLgH4EPO4i88HIql2",
    "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
    "title": "Wormholes Allow Information to Escape Black Holes",
    "synopsis": "Check out this recent discovery about workholes"
}
```

### Friends

```json
{
    "uid": "5ykBb0xyadPZLgH4EPO4i88HIql2",
    "friendUid": "gH4EPO4i88HIql25ykBb0xyadPZL",
    "isAccepted": true,
    "isPending": false
}
```

### Weather

```json
{
    "uid": "5ykBb0xyadPZLgH4EPO4i88HIql2",
    "zipcode": 37209,
    "isCurrent": true
}
```

### Events

```json
{
    "uid": "5ykBb0xyadPZLgH4EPO4i88HIql2",
    "event": "Bonfire at the beach",
    "startDate": 1528763298535,
    "location": "Ocean Beach"
}
```

## Professional Requirements

1. Use create-react-app to start the project
1. Use eslint to check for errors
1. The README for your project should include instructions on how another person can download and run the application
1. You should be writing tickets and moving them along a github project board
1. The project should be deployed to firebase