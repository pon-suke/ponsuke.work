(window.onload = () => {
    const observer = new MutationObserver(function () {
        // ページ切り替え時にサブスクボタンをレンダリング
        window.twttr.widgets.load(document.getElementById("side"))
        gapi.ytsubscribe.go(document.getElementById("side"))
    })
    observer.observe(document, { childList: true, subtree: true })
})
