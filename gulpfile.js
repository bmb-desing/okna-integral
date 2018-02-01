var gulp          = require('gulp');
var browserSync   = require('browser-sync');
var autoprefixer  = require('gulp-autoprefixer');
var group         = require('gulp-group-css-media-queries');
var smartgrid     = require('smart-grid');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglifyjs');
var cssnano       = require('gulp-cssnano');
var rename        = require('gulp-rename');
var del           = require('del');
var imagemin      = require('gulp-imagemin');
var pngquant      = require('imagemin-pngquant');
var cache         = require('gulp-cache');
var sass          = require('gulp-sass');


gulp.task('default',['browser-sync','css-libs', 'scripts'],function(){
gulp.watch('app/sass/*.sass',function(e){
  gulp.src(e.path)
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer(['last 15 version','>1%','ie 8', 'ie 7'],{cascade: true}))
    .pipe(group())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream:true}));
  });
gulp.watch('app/*.html',browserSync.reload);
gulp.watch('app/js/*.js',browserSync.reload);
});

gulp.task('browser-sync',function(){
  browserSync({
  server: {
  baseDir: 'app/./'
  },
  notify: false
  });
});

gulp.task('scripts',function(){
  return gulp.src([
    'app/libs/jquery/dist/jquery.min.js',
    'app/libs/owl-carousel/dist/owl.carousel.min.js',
    'app/libs/maskedinput/dist/jquery.maskedinput.min.js',
    ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js/'));
});

gulp.task('css-libs',function(){
  return gulp.src('app/css/libs.css')
  .pipe(cssnano())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('app/css/'))
});

gulp.task('clean',function(){
  return del.sync('dist');
});

gulp.task('clear',function(){
  return cache.clearAll();
});

gulp.task('img',function(){
  return gulp.src('app/img/**/*')
  .pipe(cache(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    une: [pngquant()]
  })))
  .pipe(gulp.dest('dist/img'));
});

gulp.task('build',['clean','img','sass','scripts'],function(){

  var buildCss = gulp.src([
    'app/css/main.css',
    'app/css/libs.min.css',
    ])
  .pipe(gulp.dest('dist/css'));
  var buildFonts = gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src('app/js/*.js')
  .pipe(gulp.dest('dist/js'));

  var buildHtml = gulp.src('app/*.html')
  .pipe(gulp.dest('dist/'));
});


var settings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: "30px", /* gutter width px || % */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            'width': '1100px', /* -> @media (max-width: 1100px) */
            'fields': '30px' /* side fields */
        },
        md: {
            'width': '960px',
            'fields': '15px'
        },
        sm: {
            'width': '780px',
            'fields': '15px'
        },
        xs: {
            'width': '560px',
            'fields': '15px'
        },
        ms: {
            'width': '360px',
            'fields': '15px'
        }
        /*
        We can create any quantity of break points.

        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
};

  gulp.task('smart',function(){
  smartgrid('app/\sass', settings)
});

