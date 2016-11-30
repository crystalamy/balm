// balm config simple demo

// 1. import balm
var balm = require('balm');

// 2. config balm
balm.config = {
  roots: {
    source: 'app' // source code root
  },
  paths: {
    source: {
      css: 'styles',   // css dir = app/styles
      js: 'scripts',    // js dir = app/scripts
      img: 'images', // image dir = app/images
      font: 'fonts'   // font dir = app/fonts
    }
  },
  styles: {
    ext: 'scss', // style extensions
    autoprefixer: ['last 2 versions']
  },
  scripts: {
    entry: {
      common: ['jquery'],
      main: './app/scripts/main.js'
    },
    vendors: ['common']
  }
  // cache: true,
  // assets: {
  //   root: '/path/to/your_project',
  //   publicPath: 'public',
  //   subDir: ''
  // }
};

// 3. run balm
balm.go(function(mix) {
  if (balm.config.production) {
    // publish assets(styles,scripts,images,fonts) to `/path/to/your_project/public`
    mix.publish();

    // publish `index.html` to `/path/to/your_project/public`
    mix.publish('index.html', 'public', {
      basename: 'yourFilename',
      suffix: '.blade',
      extname: '.php'
    });
  }
});
