(function () {
    const loading = document.createElement('span');
    loading.className = 'loading';
    loading.appendChild(document.createTextNode('コメント送信中...'));

    const request = document.getElementById('comment_form');
    const response = document.getElementById('response');
    const commentLoading = document.getElementById("commentLoading");
    const name = document.getElementById("commentName");
    const comment = document.getElementById("comment");

    request.onsubmit = function () {
        if (!name.value || !comment.value) {
            alert("空白です");
            return false;
        }
        const date = document.getElementById("commentDate");
        date.value = new Date().toISOString();
        //this.parentNode.insertBefore(loading, this.nextSibling);
        commentLoading.style.display = "flex";
        return true;
    }

    window.onload = () => {
        response.onload = () => {
            //request.parentNode.removeChild(loading);
            request.elements[0].value = ""
            request.elements[1].value = ""
            commentLoading.style.display = "none";
        }
    }
})();
