# Week 17 - Day 2

> **Agenda:** Add Firebase Auth to Todo App


In Firebase Console, Rule will need to change to:
```{
    "rules": {
        ".read": true,
        ".write": true,
        "items": {
          ".indexOn": "uid"
        },
        "users": {
          ".indexOn": "uid"
        }
    }
}```