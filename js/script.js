/**
 * Created by EveRin on 15.05.2018.
 */
window.onload = function() {
    var links = document.getElementById("links");
    var hiddenLink = document.getElementById("hidden-link");
    links.onclick = function () {
        if (links.style.display !== "none") {
            links.style.display = "none";
            hiddenLink.style.display = "block";
        } else {
            links.style.display = "inline-block";
        }
    }
};