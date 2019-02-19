# Introducing Gauge: A Framework for User Journey Testing
Most web developers today are familiar with the idea of unit tests. (Some developers even write them!) Unit testing libraries like Jest and Jasmine ship standard with most modern web frameworks.

In this talk, Scott Davis (Principal Engineer, ThoughtWorks) introduces a wholly different kind of testing -- User Journey testing. User Journey tests are written in the language of the user, not the developer. ("I'd like to add tomatoes to my shopping cart", not "I'd like to add the UPC string of the selected item to that array of Strings over there in that CartComponent.") Gauge and Taiko -- both free and open source -- allow you to level up your testing skills and start thinking like a user. Are you up to the challenge?







## Running Locally

This presentation is written in pure, framework-free, browser-native HTML. It can be served from any standard web server. (For example, [Caddy](https://caddyserver.com/).)

A NodeJS-based web server is included to make it easy to run locally. To run the web server:

```console
$ npm start
```

Then visit http://localhost:8000 in a browser.

