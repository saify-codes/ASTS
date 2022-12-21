var dropdown = document.querySelector('.request__service__section .dropdown')
var select = dropdown.querySelector('.select')
var selected = dropdown.querySelector('.selected')
var caret = dropdown.querySelector('.caret')
var menu = dropdown.querySelector('.menu')
var options = dropdown.querySelectorAll('ul li')
var input = dropdown.querySelector('input')


select.addEventListener('click',()=>{
    menu.classList.toggle('menu__open')
    caret.classList.toggle('caret__rotate')
})

for(let x of options){
    x.addEventListener('click',()=>{
        input.value = selected.innerText = x.innerText;
        menu.classList.remove('menu__open')
        options.forEach(element=>{
            element.classList.remove('active')
        })
        x.classList.add('active')
    })
}