var gulp = require('gulp');

// Include all the plugins mentionned in package.json
var plugins = require('gulp-load-plugins')();
// browser-sync is a plugin which refresh browser window automatically on change
var browserSync = require('browser-sync');

// Path variables
var src = './src';    // Work repository
var dist = './dist';  // Production repository



/**
 * BROWSER-SYNC TASK
 */

gulp.task('browserSync',  function () {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
});


/**
 * HTML TASKS
 */

gulp.task('html',  function () {
  return gulp.src(src + '/*.html')
    .pipe(gulp.dest(dist + '/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


/**
 * CSS TASKS
 */

// Compile Scss files to CSS files
gulp.task('css', function () {
  return gulp.src(src + '/assets/scss/**/*.scss')
    .pipe(plugins.scss())
    .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(dist + '/assets/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Minify CSS files for production
gulp.task('minify', function () {
  return gulp.src(dist + '/assets/css/*.css')
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(dist + '/assets/css/min/'));
});



/**
 *  JS TASKS
 */

// minify JS files
gulp.task('js', function () {
  return gulp.src(src + '/assets/js/**/*.js')
    .pipe(plugins.uglify())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(dist + '/assets/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});



// Build task (html + css + js)
gulp.task('build', ['html', 'css', 'minify', 'js']);

// Default task
gulp.task('default', ['build']);

// Watch task : watch all .scss, .html and .js files and run 'build' task on change.
gulp.task('watch', ['browserSync'], function () {
  gulp.watch(src + '/assets/scss/**/*.scss', ['build']);
  gulp.watch(src + '/assets/js/**/*.js', ['build']);
  gulp.watch(src + '/*.html', ['html']);
});
