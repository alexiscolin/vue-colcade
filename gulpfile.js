const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglifyjs');
const rename = require('gulp-rename');

gulp.task('default', () =>
	gulp.src('src/index.js')
		.pipe(babel({
			presets: ['env']
		}))
    .pipe(uglify())
    .pipe(rename('vue-colcade.min.js'))
		.pipe(gulp.dest('dist'))
);
