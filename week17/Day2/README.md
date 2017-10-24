# Week 17 - Day 2

> **Agenda:** Firebase, firebase deploy


### Firebase Deployment

1.  one time installation of firebase command line tools
    ```
    npm install -g firebase-tools 
    ```
2. Authenticate firebase account 
    ```
    firebase login
    ```

3. initialize firebase app
    ```
    firebase init
    ```
SELECT: Database: Deploy Firebase Realtime Database Rules <br>
SELECT:  firebase database you want to use <br>
configure as SPA - y <br>

4.  Replace Gruntfile
5.  Add public folder to .gitignore
6.  Run Grunt
7.  deploy to firebase
    ```
    firebase deploy
    ```