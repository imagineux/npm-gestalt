var gulp = require('gulp'),
	recess = require('gulp-recess'),
	config        = require('../config').test;
var cssSrc       = config.dest + "test.css";
 
gulp.task('recess', function () {
	console.log(cssSrc);
    return gulp.src(cssSrc)
        .pipe(recess().on('error', function (err) {console.log(err);}))
        .pipe(recess())
        .pipe(recess.reporter())

        .pipe(gulp.dest(config.dest));
});

gulp.task('default', ['recess', 'watch']);