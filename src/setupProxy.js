const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://52.78.209.66:8080',
      changeOrigin: true,
    }),
  );
};
