
const h2 = document.querySelector("h2");
let value = 0;

const increment = document.querySelector(".increment");
increment.addEventListener("click", () => {
    value += 1;
    h2.textContent = value;
    h2.style.color = 'blue';
}
)

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    value = 0;
    h2.textContent = 0; 
    h2.style.color = 'white';
})

const decrement = document.querySelector(".decrement");
decrement.addEventListener("click", () => {
    value -= 1;
    h2.textContent = value;
    h2.style.color = 'red';
    
})



   
