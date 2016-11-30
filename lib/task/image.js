class Image extends BalmJS.Task {
  constructor() {
    super('images');
  }
  get fn() {
    return () => {
      return gulp.src(config.source.img + '/**/*')
        .pipe(gulp.dest(this.getImageDist()));
    };
  }
}

export default Image;
