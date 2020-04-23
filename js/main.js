//<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>

// Выберите при помощи селекторов DOM
// — все HTML-элементы strong и окрасьте их в зеленый цвет
// — найдите все HTML-элементы em и добавьте им класс .selected
// — Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected
// — Найдите все гиперссылки и удалите у них подчеркивания
// — Найдите все HTML-элементы, который содержат слово «Задания» и находятся в
// элементе с классом .container
// — Переключите элементы strong с классом some в состояние без этого класса, а
// тем элементам (strong), у которых небыло этого класса — добавьте.
// — среди набора элементов с классом .row удалите класс у второго элемента
// — прочитайте CSS-свойство color у второй гиперсылки в тексте


//zad1
// let elem = document.querySelectorAll('strong');
// for(let i = 0; i < elem.length; i++){
//     elem[i].style.color = 'green';
// }



//zad2
// let sel = document.getElementsByTagName('em');
// for(let i = 0; i < sel.length; i++){
//     sel[i].classList.add('selected');
// }



//zad3
// let row = document.querySelectorAll('.row mark');
// for(let i = 0; i < row.length; i++){
//      row[i].classList.add('selected');
// } 



//zad4
// let hyperLink = document.querySelectorAll('a');
// for(let i = 0; i < hyperLink.length; i++){
//     hyperLink[i].style.textDecoration = 'none';
// }



//zad5
// let regExp = /Задания/gi;
// let containerClass = document.querySelector('.container').innerHTML;
// let result = Array.from(containerClass.matchAll(regExp));
// console.log(result);


//zad6
// let elem = document.querySelectorAll('strong');
// for(let i = 0; i < elem.length; i++){
//     elem[i].classList.toggle('some');
// }



//zad7
// let elem = document.getElementsByClassName('row')[1];
// elem.classList.remove('row');




//zad8
// let hyperLink = document.getElementsByTagName('a');
// let css = window.getComputedStyle(hyperLink[1]).getPropertyValue('color');
// console.log(css);







//#Tasks#2
//zad8
window.addEventListener('DOMContentLoaded', function(){
    
    alert('Добро пожаловать');
    
})


//zad9

let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    if(document.body.style.backgroundColor == 'red')
        document.body.style.backgroundColor = 'white';
    else  document.body.style.backgroundColor = 'red';    
})


//zad10
let inpEmail = document.querySelector('.inp-email');
let inpText = document.querySelector('.inp-text');
let btn2 = document.querySelector('#btn-2');
let name = document.querySelector('.name');
let email = document.querySelector('.email');

inpEmail.addEventListener('input', e => {
    email.innerText = e.target.value;
})

inpText.addEventListener('input', e => {
    name.innerText = e.target.value;
})

let k = document.createElement('h2');
btn2.addEventListener('click', e => {
    if(inpText.value == '' || inpEmail.value == ''){
    e.preventDefault();
    form.after(k);
    k.innerText = 'Все поля обьязательны к заполнению';
    }
})



//zad11
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let img = document.querySelector('img');
let i = 0;

right.addEventListener('click', () =>{
    i+=100;
    img.style.marginLeft = `${i}px`;
    img.style.transition = '0.3s';
})

left.addEventListener('click', () =>{
    i-=100;
    img.style.marginLeft = `${i}px`;
    img.style.transition = '0.3s';
})


//zad12
document.addEventListener('mousemove', (e) => {
    console.log(`X = ${e.clientX} Y = ${e.clientY}`);
    
})
