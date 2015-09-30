var gulp = require('gulp'),
    replace = require('gulp-replace'),
    fs = require('fs');

// in your task
gulp.task('default', function() {
return gulp.src('./*.html')	
	//.pipe(replace(/<link href="screen.css"[^>]*>/, function(s) {
  .pipe(replace(/<link rel="stylesheet" href="stylesheets\/screen.css"[^>]*>/, function(s) {
      var style = fs.readFileSync('stylesheets/screen.css', 'utf8');
      return '<style>\n' + style + '\n</style>';
  }))
  .pipe(gulp.dest('Deploy/'));
});

 /*
  var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');
 
gulp.task('default', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss({
                applyStyleTags: true,
                applyLinkTags: true,
                removeStyleTags: true,
                removeLinkTags: true
        }))
        .pipe(gulp.dest('build/'));
});

*/