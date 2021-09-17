window.onload = () => {
  const observer = new MutationObserver(function () {
    // ページ切り替え時にサブスクボタンをレンダリング

    if (window.twttr)
      window.twttr.widgets.load(document.getElementById("side"));

    if ((typeof gapi) != "undefined" && gapi.ytsubscribe)
      gapi.ytsubscribe.go(document.getElementById("side"));

    const fc2cnt = document.getElementById("fc2Counter");
    if (fc2cnt && !fc2cnt.childElementCount) _FC2COUNTER89495020_0.disp_js();

  });
  observer.observe(document, { childList: true, subtree: true });
};
