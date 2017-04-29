# Week 17 - Day 1

> **Agenda:**  todo App cont, momentJS(zoe)


Before doing auth students will need to go into their Firebase console, click on Databse, click on Rules and change rules to:

```
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```