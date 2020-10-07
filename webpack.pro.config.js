module.exports = { 

    //開発用
    // mode: 'development',
    // devtool: 'inline-source-map',
    //公開用
    mode: 'production',

    //watch: true,
    watchOptions: {
        ignored: /node_modules/
      },
    entry: './src/main.js', 
    output: {
      path: __dirname + '/public/source',
      filename: 'main.js'
    }
  };