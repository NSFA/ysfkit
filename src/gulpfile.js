'use strict';
const path = require('path');
const gulp = require('gulp');
const gulpWebpack = require('webpack-stream');
const webpack = require('webpack');
const rename = require('gulp-rename');
const config = require('./webpack.config.js');


let entryPath = path.resolve(__dirname, '../docs/entry.js');

gulp.task('default', ()=> {
	return gulp.src(entryPath)
		.pipe(gulpWebpack(config))
		.on('error', (err) => {
			console.log(err);
		})
		.pipe(gulp.dest(process.cwd()));
});