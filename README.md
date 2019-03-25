# Introducing Gauge: A Framework for User Journey Testing
Most web developers today are familiar with the idea of unit tests. (Some developers even write them!) Unit testing libraries like Jest and Jasmine ship standard with most modern web frameworks.

In this talk, Scott Davis (Principal Engineer, ThoughtWorks) introduces a wholly different kind of testing -- User Journey testing. User Journey tests are written in the language of the user, not the developer. ("I'd like to add tomatoes to my shopping cart", not "I'd like to add the UPC string of the selected item to that array of Strings over there in that CartComponent.") Gauge and Taiko -- both free and open source -- allow you to level up your testing skills and start thinking like a user. Are you up to the challenge?







## Running Locally

This presentation is written in pure, framework-free, browser-native HTML. It can be served from any standard web server. (For example, [Caddy](https://caddyserver.com/).)

A NodeJS-based web server is included to make it easy to run locally. To run the web server:

```console
$ npm install
$ npm start
```

Then visit http://localhost:8000 in a browser.






## Adding a New Language

If you'd like to add a new translation of this presentation, you can easily copy the `en-us` canonical version into a new directory under `/slides` by typing:

```console
$ npm run addlang zh-cn
```

This will create a new directory tree that looks similar to this:

```console
slides/zh-cn/
├── css
├── js
├── slides
│   ├── slide1
|       ├── audio.mp3
|       ├── index.html
|       ├── image.png
│   ├── slide2
│   ├── slide3
```

After that, you can translate the text in `slide1/index.html`. Press `t` while viewing the slideshow to open the Transcripts window and ensure that your translated text is being used.  

If you'd like to add recorded audio, save the audio file as `slide1/audio.mp3` and reference it in `slide1/index.html`. Similarly, you can add any translated images (screenshots, websites, etc.) as `slide1/image.png` and reference them in `slide1/index.html`.

To view the slideshow while you are developing it, type `npm start` and then visit http://localhost:8000/slides/zh-cn/index-src.html. This version of `index.html` dynamically pulls in the slides on-the-fly. Once you are done with the translation and would like to build the final version of the slideshow, type:

```console
$ npm run buildlang zh-cn
```

This merges all of the individual `index.html` slide files referenced in `index-src.html` into the main `slides/zh-cn/index.html` file, maintaining the original links to `slide1/audio.mp3`, `slide1/image.png`, etc. 
