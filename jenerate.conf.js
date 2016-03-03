var path = require('path');

var PATHS = {
  templates: path.join(__dirname, 'jen_templates'),
  app: path.join(__dirname, 'app'),
  test: path.join(__dirname, 'test'),
  gulp: path.join(__dirname, 'gulp')
};

module.exports = {

  component: [
    {
      template: PATHS.templates + '/js/components/index.js',
      fileNameScheme: '<% name %>.js',
      outputDir: PATHS.app + '/js/components/'
    },
    {
      template: PATHS.templates + '/stylesheets/components/index.scss',
      fileNameScheme: '<% name %>.scss',
      outputDir: PATHS.app + '/stylesheets/components/'
    },
    {
      template: PATHS.templates + '/test/components/index.js',
      fileNameScheme: '<% name %>_test.js',
      outputDir: PATHS.test + '/components/'
    }
  ],

  page: [
    {
      template: PATHS.templates + '/js/pages/index.js',
      fileNameScheme: '<% name %>.js',
      outputDir: PATHS.app + '/js/pages/'
    },
    {
      template: PATHS.templates + '/test/pages/index.js',
      fileNameScheme: '<% name %>_test.js',
      outputDir: PATHS.test + '/pages/'
    }
  ],

  task: [
    {
      template: PATHS.templates + '/js/tasks/index.js',
      fileNameScheme: '<% name %>.js',
      outputDir: PATHS.gulp + '/tasks/'
    }
  ]

};
