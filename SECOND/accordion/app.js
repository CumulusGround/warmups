const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('button');
const menu = document.querySelector('.menu');


menu.addEventListener('click', e => {
    console.log(e.target.name);

    document.querySelector(`.${e.target.name}-content`).classList.toggle("show");
});