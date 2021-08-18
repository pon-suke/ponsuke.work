window.onload = () => {
  const observer = new MutationObserver(function () {
    // ページ切り替え時にサブスクボタンをレンダリング
    try {
      window.twttr.widgets.load(document.getElementById("side"));
    } catch (error) {
      console.error(error);
    }
    try {
      gapi.ytsubscribe.go(document.getElementById("side"));
    } catch (error) {
      console.error(error);
    }
    try {
      const fc2cnt = document.getElementById("fc2Counter");
      if (!fc2cnt.childElementCount) _FC2COUNTER89495020_0.disp_js();
    } catch (error) {
      console.error(error);
    }
  });
  observer.observe(document, { childList: true, subtree: true });
};
