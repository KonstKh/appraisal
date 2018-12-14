const config = require('config');
const path = require('path');
const express = require('express');
const app = express();
const env = config.environment;
const favicon = require('serve-favicon');

if(env === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

const serveFromBasePath = (req, res) => {
  if (req.url.startsWith(config.url.basepath)) res.sendFile(__dirname + '/dist/index.html');
  else res.redirect(`${config.url.basepath}${req.url}`);
}

app.use(config.url.basepath, favicon(path.join(__dirname, 'dist', 'favicon.ico')));
app.use(`${config.url.basepath}/static`, express.static('./dist/static'));
app.get('/*', serveFromBasePath);

app.listen(config.url.port, () => console.log("App listening on port " + config.url.port));

