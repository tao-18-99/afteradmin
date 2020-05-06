module.exports = {
    publicPath: '/',
    outputDir: "dist",
    devServer: {
        port:9875,
        proxy: {
            '/api': {
                target: 'http://api.test.company.shaoziketang.com/v1.0/',
                changeOrigin: true,
                pathRewrite: {
                    "/api": ''
                }
            }
        }
    },

};
