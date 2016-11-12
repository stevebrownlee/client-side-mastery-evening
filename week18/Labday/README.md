# Week 18 Labday Agenda

> **Agenda:** demo movie history, Firebase deployment, complete rich browser exercises, assign optional quiz

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

4.  Replace bower components with CDNs
5.  Add public folder to .gitignore
6.  put all files you need in the public folder
7.  deploy to firebase
    ```
    firebase deploy
    ```