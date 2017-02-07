const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('default', () => {
	gulp.dest('src/gototop.js')
		.pipe(babel())
		.pipe(gulp.dest('dist/'))
})
