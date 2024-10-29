module.exports = {
    // ▼ メインとなるJavaScripファイルを指定
    entry: './main-cjs.cjs',
    // ▼ 結合後のファイルの出力設定
    output: {
      // ▼ ファイルの出力先となるディレクトリ
      path: `${__dirname}/dist`,
      // ▼ ファイルの名前
      filename: 'main.js'
    },
    // ▼ developmentを指定するとソースマップが有効になる
    //   productionを設定すると圧縮されたコードで出力される
    mode: 'development',
  };