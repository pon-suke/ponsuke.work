(function () {

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
        commentLoading.style.display = "flex";
        return true;
    }

    window.onload = () => {
        response.onload = () => {
            request.elements[0].value = ""
            request.elements[1].value = ""
            commentLoading.style.display = "none";
            location.reload()
        }
    }
})();
