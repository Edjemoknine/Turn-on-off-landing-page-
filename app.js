let toggle = document.getElementById('btn');
let light = document.querySelector('.light');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    light.classList.toggle('hide');
})