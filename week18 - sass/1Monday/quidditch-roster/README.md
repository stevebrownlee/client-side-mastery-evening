# The Quiddich Roster

#### Objectives:
1. Intro to [component-based architecture](https://derickbailey.com/2015/08/26/building-a-component-based-web-ui-with-modern-javascript-frameworks/)
2. Intro to [Sass](http://sass-lang.com/)


#### How to run:
1. Clone the repository
2. `cd lib`
3. `npm i`
4. `grunt`
5. Set up a new [Firebase project](https://console.firebase.google.com/u/0/)
6. Enable the Real Time Database
7. Import `db/players.json` to seed the database.
8. Add the following rules:
```
{
  "rules": {
    ".read": true,
    ".write": true,
    "players": {
      ".indexOn": "team"
    }
  }
}
```
9. Create a `apiKeys.json` from the `apiKeys.example.json` and add your personal Firebase keys
10. Run [http-server](https://www.npmjs.com/package/http-server) from the root of the project and the project will be served in the browser at `localhost:8080`