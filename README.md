# Gulp Boilerplate [![Build Status](https://travis-ci.com/LucasWinkler/gulp-boilerplate.svg?token=6xPTYyj9yJazuMpzepqi&branch=master)](https://travis-ci.com/LucasWinkler/gulp-boilerplate)

A simple boilerplate for front-end web development which uses [Gulp](https://gulpjs.com/) v4.

This is my first time trying gulp so it won't be perfect. I just wanted to create a basic template to work off of with a file structure I liked.

## Features

- Live reloading
- Cache busting
- SCSS: convert to css, sourcemaps, auto prefix and minifier
- Javascript: sourcemaps, concat, minifier and supports ES6
- Images: minifier

## Getting Started

Follow these steps in order to get the website up and running locally on your machine.

### Installation

- `npm install` to install any dependencies
- `npm start` or `gulp watch` to start a live reload session

### Building

- `npm run build` or `gulp` to build the application

## File Structure

```bash
├── app
│   ├── images
│   │
│   ├── js
│   │   ├── main.js
│   │   │
│   │   └── vendors (all vendor files are placed here)
│   │
│   └── scss
│       ├── main.scss
│       │
│       └── pages (styles for separate pages will be in here)
└── build
    ├── images
    │
    ├── js
    │   ├── app.min.js
    │   │
    │   └── vendors.min.js
    └── css
        └── styles.min.css
```

## Tips

- You can use any file structure for your javascript and scss files. The one provided is an example.
