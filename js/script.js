/**
 * Created by EveRin on 15.05.2018.
 */
window.onload = function () {
    var apple = document.getElementById("apple");
    var android = document.getElementById("android");
    var windows = document.getElementById("windows");
    var links = document.getElementById("links");
    var hiddenLink = document.getElementById("hidden-link");
    var download = document.getElementById("download");
    apple.onclick = function () {
        if (links.style.display !== "none") {
            links.style.display = "none";
            hiddenLink.style.display = "block";
            download.href = "https://www.apple.com";
        } else {
            links.style.display = "inline-block";
            hiddenLink.style.display = "none";
        }
    };
    android.onclick = function () {
        if (links.style.display !== "none") {
            links.style.display = "none";
            hiddenLink.style.display = "block";
            download.href = "https://play.google.com/store";
        } else {
            links.style.display = "inline-block";
            hiddenLink.style.display = "none";
        }
    };
    windows.onclick = function () {
        if (links.style.display !== "none") {
            links.style.display = "none";
            hiddenLink.style.display = "block";
            download.href = "https://www.microsoft.com/store";
        } else {
            links.style.display = "inline-block";
            hiddenLink.style.display = "none";
        }
    };
};
