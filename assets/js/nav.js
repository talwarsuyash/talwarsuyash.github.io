function setNavActive(id, name) {
    var tabs = document.getElementById("tabs").getElementsByTagName("li");

    for (let element of tabs) {
        element.classList.remove("active");
    }
    var posts = document.getElementsByClassName("post");
    for (let post of posts) {
        post.style.display = "none";
    }
    id.classList.add("active");
    document.getElementById(name).style.display = "flex";
};