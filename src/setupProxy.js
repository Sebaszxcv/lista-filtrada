const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', 
    createProxyMiddleware({
      target: 'https://www.theaudiodb.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v1/json/2' 
      },
      secure: false,
      onProxyReq: (proxyReq, req, res) => {
        
        proxyReq.setHeader('Accept', 'application/json');
      }
    })
  );
};