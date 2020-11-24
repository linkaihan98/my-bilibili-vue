const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve(''))
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin:true,
                pathRewrite:{
                  '/api':''
                }
            }
        },
        open: true
      }
};