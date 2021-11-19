let counter = 0;

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementsByTagName('a')[0];
const number = document.getElementById('number');

function resetCounter(e){
    counter = 0;
    number.innerHTML = counter;
    e.preventDefault();
}

function incrementCounter(e){
    counter++;
    number.innerHTML = counter;
    e.preventDefault();
}

function decrementCounter(e){
    counter--;
    number.innerHTML = counter;
    e.preventDefault();
}

plus.addEventListener('click', incrementCounter);
minus.addEventListener('click', decrementCounter);
reset.addEventListener('click',resetCounter);
