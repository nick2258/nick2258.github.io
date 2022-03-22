var viewsize = document.querySelector('.view-size')
let windowBottom = window.innerHeight

function scroll() {
    let windowTop = window.scrollY
    if (windowTop > windowBottom) {
        viewsize.classList.add("hide");
    } else {
        viewsize.classList.remove("hide");
    }
}
window.addEventListener('scroll', scroll)