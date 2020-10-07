module.exports = { 

    //開発用
    mode: 'development',
    devtool: 'inline-source-map',
    //公開用
    //mode: 'production',

    watch: true,

    entry: './game.js', 
    output: {
      path: __dirname + '/public/source',
      filename: 'main.js'
    },
    
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  };