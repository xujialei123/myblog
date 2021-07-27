const fs =require('fs')
const path = require('path')
module.exports = {
    productionSourceMap:true,
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
            //这个是加上自己的路径，
            //注意：试过不能使用别名路径
            path.resolve(__dirname, "./src/assets/less/base.less")
            ]
        }
    }
}