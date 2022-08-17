const colors =['#f1f5f8','pink','orange','yellow','skyblue','aqua','white','black','purple','green','aqua',
'wine','gray'];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const random = getRandomColor();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
    console.log(random)
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}