const isVendorModule = resource => {
  let belongsToNode = resource.indexOf(path.join(config.workspace, 'node_modules')) === 0;
  let belongsToBower = resource.indexOf(path.join(config.workspace, 'bower_components')) === 0;

  return belongsToNode || belongsToBower;
};

let options = {
  name: 'vendor',
  minChunks: (module, count) => {
    logger.info(module, count);
    // any required modules inside node_modules/bower_components are extracted to vendor
    return (module.resource && /\.js$/.test(module.resource) && isVendorModule(module.resource));
  }
};

let productionPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: config.scripts.sourceMap,
    compress: {
      warnings: false
    },
    minimize: true
  }),
  // new webpack.optimize.LimitChunkCountPlugin({
  //   maxChunks: 15
  // }),
  // new webpack.optimize.MinChunkSizePlugin({
  //   minChunkSize: 10000
  // }),
  new webpack.optimize.AggressiveMergingPlugin(),
  // split vendor js into its own file
  ...((config.scripts.vendor && !config.scripts.vendors.length)
    ? [new webpack.optimize.CommonsChunkPlugin(options)]
    : [])
];

export default productionPlugins;
