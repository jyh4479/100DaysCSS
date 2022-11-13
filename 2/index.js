const lineBox = window.document.querySelector(".line-box");
const lines = window.document.querySelectorAll(".line-box > div");

lineBox.addEventListener("click", () => {
    lines.forEach(line => {
        line.classList.remove("no-animation");
        line.classList.toggle("active");
    });
})

// $('.menu-icon').bind('click', function() {
//     $(this).toggleClass('active');
//     $(this).find('div').removeClass('no-animation');
// });