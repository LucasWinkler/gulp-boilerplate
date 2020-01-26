# Gulp Boilerplate [![Build Status](https://travis-ci.com/LucasWinkler/gulp-boilerplate.svg?token=6xPTYyj9yJazuMpzepqi&branch=master)](https://travis-ci.com/LucasWinkler/gulp-boilerplate)

A simple boilerplate for front-end web development which uses [Gulp](https://gulpjs.com/) v4.

This is my first time trying gulp so it won't be perfect. I just wanted to create a basic template to work off of with a file structure I liked.

## Features

- Live reloading
- Cache busting
- SCSS converted to css, auto prefixed and minified with sourcemaps)
- Javascript concatenated into a single file, minified with sourcemaps and supports ES6)
- Image minifying

## Getting Started

Follow these steps in order to get the website up and running locally on your machine.

### Installation

- `npm install` to install any dependencies
- `npm start` or `gulp watch` to start a live reload session

### Building

- `npm run build` or `gulp` to build the application

### Extras

- `gulp` or `gulp build` to build the application
- `gulp watch` to enable live reload
- `gulp clean` to delete the build folder
- `gulp styles` to run the style tasks
- `gulp scripts` to run the script tasks
- `gulp images` to run the image tasks
- `gulp favicon` to run the favicon tasks

## File Structure

```bash
├── app
│   ├── images
│   │
│   ├── js
│   │   ├── main.js
│   │   │
│   │   └── vendors
│   │
│   └── scss
│       ├── abstracts
│       │
│       ├── base
│       │
│       ├── pages
│       │
│       └── main.scss
│
└── build
    ├── images
    │
    ├── js
    │   ├── app.min.js
    │   │
    │   └── vendors.min.js
    │
    └── css
        └── styles.min.css
```

## Tips

- You can use any file structure for your javascript and scss files. The one provided is an example.
