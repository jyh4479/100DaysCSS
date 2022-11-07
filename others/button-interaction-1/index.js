const button = document.querySelector('button');
// const buttonBefore = window.getComputedStyle(button, '::before')

button.addEventListener("mouseover", (e) => {
    const x = e.pageX - button.offsetLeft;
    const y = e.pageY - button.offsetTop;
    button.style.setProperty('--x', x + "px");
    button.style.setProperty('--y', y + "px");
})