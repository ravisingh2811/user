let btnAdd = document.querySelector('#add');
let btnsub= document.querySelector('#sub');
let input = document.querySelector('input');

btnAdd.addEventListener('click',()=>{
    input.value=parseInt(input.value)+1;
});

btnsub.addEventListener('click',()=>{
    input.value=parseInt(input.value)-1;
});