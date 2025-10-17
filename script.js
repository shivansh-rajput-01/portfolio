let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
let ul = document.querySelector("ul");
let links = document.getElementsByClassName("links");
let close = document.querySelector(".close");
const m = window.matchMedia("(min-width: 769px)");

menu.addEventListener("click", () => {
    nav.classList.remove("nav1");
    nav.classList.add("nav2");
    ul.classList.remove("ul1");
    ul.classList.add("ul2");
    menu.style.display = "none";
    close.style.display = "block";
    for (e of links) {
        e.style.visibility = "visible";
    }
});

close.addEventListener("click", () => {
    nav.classList.remove("nav2");
    nav.classList.add("nav1");
    ul.classList.remove("ul2");
    ul.classList.add("ul1");
    menu.style.display = "block";
    close.style.display = "none";
    for (e of links) {
        e.style.visibility = "hidden";
    }
});

m.addEventListener("change", (e) => {
    if (e.matches) {
        menu.style.display = "none";
        close.style.display = "none";
        for (e of links) {
            e.style.visibility = "visible";
        }
        nav.classList.remove("nav2");
        nav.classList.add("nav1");
        ul.classList.remove("ul2");
        ul.classList.add("ul1");
    } else {
        menu.style.display = "block";
        for (e of links) {
            e.style.visibility = "hidden";
        }
    }
});



// Run once when the page loads
if (m.matches) {
    menu.style.display = "none";
    close.style.display = "none";
    for (let link of links) {
        link.style.visibility = "visible";
    }
} else {
    menu.style.display = "block";
    for (let link of links) {
        link.style.visibility = "hidden";
    }
}