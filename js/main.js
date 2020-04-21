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