// console.log("Hello, World!");

const background = document.querySelector(".background");

document.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.clientX) / 40;

    let y = (window.innerHeight / 2 - e.clientY) / 40;

    background.style.transform =
        `translate(${x}px, ${y}px) scale(1.1)`;

});