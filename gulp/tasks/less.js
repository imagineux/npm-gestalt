var gulp          = require('gulp'),
    less          = require('gulp-less'),
    config        = require('../config').test;
var lessSrc       = config.src + "test.less";


gulp.task('less', function () {
	console.log(lessSrc);
  return gulp.src(lessSrc)
    .pipe(less().on('error', function (err) {console.log(err);}))
    .pipe(gulp.dest(config.dest));

});

gulp.task('default', ['less', 'watch']);