const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5000/",
    })
  );
  
};
module.exports = function (app) {
  app.use((req, res, next) => {
      res.removeHeader('Cross-Origin-Resource-Policy');
      res.removeHeader('Cross-Origin-Embedder-Policy');
      next();
  });
};
