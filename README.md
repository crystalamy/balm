# BalmJS light
> A flexible Front-End workflow for HTML,CSS,JS

## [Docs](https://github.com/balmjs/balm/tree/light)
> please read me first

## Demo

- [x] [HTML](https://github.com/balmjs/balm-html)
- [x] [Laravel](https://github.com/balmjs/balm-laravel)
- [x] [Vue](https://github.com/balmjs/balm-vue)
- [x] [TypeScript](https://github.com/balmjs/balm-ts)

## [Structure](https://github.com/balmjs/balm-boilerplate)

```
project
├── dist
├─┬ src
│ ├─┬ css
│ │ └── main.css
│ ├── img
│ ├─┬ js
│ │ └── main.js
│ └── index.html
├── dotfile
├── gulpfile.js
├── package.json
└── ...
```

## [Installation & Setup](https://github.com/balmjs/balm/blob/light/docs/installation.md)

```sh
npm install --save-dev gulp balm
```

## [Configuration](https://github.com/balmjs/balm/blob/light/docs/configuration.md)

File: `gulpfile.js`

```js
// 1. import balm
var balm = require('balm-light');

// 2. config balm
balm.config = {
  // your project config
};

// 3. run balm
balm.go();
```

- [example](https://github.com/balmjs/balm/blob/light/docs/_gulpfile.js)
- [template](https://github.com/balmjs/balm/blob/light/docs/_index.html)

## Usage

```sh
# for development
$ gulp

# for production
$ gulp --production
```

## [Common Issues](https://github.com/balmjs/balm/blob/light/docs/issues.md)

## License

MIT © [Elf-mousE](http://elf-mouse.me/)


> __thx [node](https://nodejs.org/) & [gulp](http://gulpjs.com/) & [webpack](http://webpack.github.io/)__
