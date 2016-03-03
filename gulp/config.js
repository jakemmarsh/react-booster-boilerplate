'use strict';

const config = {

  scripts: {
    entry: './app/js/main.js',
    src: './app/js/**/*.js',
    dest: './build/js/'
  },

  images: {
    src: './app/images/**/*.{jpeg,jpg,png,gif}',
    dest: './build/images/'
  },

  fonts: {
    src: 'app/fonts/**/*.{eot,svg,ttc,ttf,woff,woff2}',
    dest: './build/fonts/'
  },

  sourceDir: './app/',

  buildDir: './build/',

  testFiles: './test/**/*.js'

};

export default config;
