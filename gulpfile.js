const { src, watch, dest, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const minCss = require("gulp-clean-css");

const styles = () => {
  return src("./src/sass/*.scss")
    .pipe(sass())
    .pipe(concat("app.css"))
    .pipe(minCss())
    .pipe(dest("./src/css/"));
};

const watcher = () => watch(["./src/sass/**/*.scss"], styles);

exports.default = series(watcher, styles);
