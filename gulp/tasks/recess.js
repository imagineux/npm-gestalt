var gulp = require('gulp'),
	recess = require('gulp-recess'),
	config        = require('../config').test;
var cssSrc       = config.dest + "test.css";
 
gulp.task('recess', function () {
    return gulp.src(cssSrc)
        .pipe(recess({
			strictPropertyOrder: false,
			noIDs: true,
			noJSPrefix: true,
			noOverqualifying: true,
			noUnderscores: false,
			noUniversalSelectors: true,
			zeroUnits: false
        }))
        .pipe(recess.reporter())
});

gulp.task('default', ['recess', 'watch']);