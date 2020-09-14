const  path = require("path");
module.exports = {
    entry: "./index.html",
    output: {
        filePath: path.resolve(__dirname, "./build"),
        filename: "dist.js"
    },
    module: {
        rules: [
            {test: /\.(js | jsx)$/, use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            ]},
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        pulgins: require("autoprefixer")
                    }
                }]
            },
            {
              test: /\.less$/,
              use: ["style-loader", "css-loader", "less-loader", {
                  loader: "postcss-loader",
                  options: {
                      plugins: require("autoprefixer")
                  }
              }]  
            },
            {
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader", {
                    loader: "postcss-loader",
                    options: require("autoprefixer")
                }]  
            },
            {
                test: /\.(png | jpg | gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            outputPath: "imgs/",
                            limit: 1024 * 4
                        }
                    }
                ]
            },
            {
                test: /\.(eot | svg | ttf | woff2)$/i,
                use: {
                    loader: "url-loader",
                    options: {
                        outputPath: "fonts/",
                        limit: 1024 * 4
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            "vue": "vue/dist/vue.esm",
            "@": path.resolve(__dirname, "src")
        }
    }
}