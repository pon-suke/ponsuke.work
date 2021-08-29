import React, { useEffect } from "react";
import { AppProps } from "next/app";
import nprogress from "nprogress"; // NProgressインポート
import "nprogress/nprogress.css"; // バーのデフォルトスタイルのインポート

// バーの設定
//    showSpinner: バーと一緒にローディングスピナーを表示するかどうか
//    speed: バーが右端に到達し消えるまでの時間 (msec)
//    minimum: バーの開始地点
nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  if (process.browser) {
    // バーの表示開始
    nprogress.start();
  }

  useEffect(() => {
    // バーの表示終了
    nprogress.done();
  });

  return <Component {...pageProps} />;
};

export default App;
