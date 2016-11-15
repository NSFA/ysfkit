module.exports = {
  "entry": "/Users/matrix/Documents/Netease/NSFA/ysfkit/.docs/entry.js",
  "output": {
    "path": "/Users/matrix/Documents/Netease/NSFA/ysfkit/test/unit",
    "filename": "ap11p.js"
  },
  "resolveLoader": {
    "root": "/Users/matrix/Documents/Netease/NSFA/ysfkit/node_modules"
  },
  "module": {
    "loaders": [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test : /\.html/,
        loader : 'html'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  "resolve": {
    "alias": {
      "vue": "vue/dist/vue.js"
    }
  },
  "vue": {
    "loaders": {
      "scss": "vue-style-loader!css-loader!sass"
    }
  }
};