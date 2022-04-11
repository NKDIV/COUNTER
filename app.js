let plus = document.getElementById('plus');
let reset = document.getElementById('reset');
let minus = document.getElementById('minus');
let output = document.getElementById('number');
let number = 0;

plus.addEventListener('click', () =>{
    number++;
    output.innerHTML = number;
    if(number >= 1){
        output.style.color = 'green';
    }else if(number == 0){
        output.style.color = 'white';
    }
});

minus.addEventListener('click', () =>{
    number--;
    output.innerHTML = number;
    if(number < 1){
        output.style.color = 'red';
    }else if(number == 0){
        output.style.color = 'white';
    }
});

reset.addEventListener('click', () =>{
    number = 0;
    output.innerHTML = number;
    output.style.color = 'white';
});


