/**
 * Gulpfile
 * Contains build tasks
 */

const gulp = require('gulp');
const { createComponent } = require('./utils');

// create module files
gulp.task('component', () => {
  const componentName = process.argv[4];

  if (!componentName) {
    return console.error('Invalid arguments. Make sure to pass an app name and module name.');
  }

  createComponent(componentName);
});
