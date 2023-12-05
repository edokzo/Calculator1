let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
            string = String(eval(string))
            inputBox.value = String
        }
    })
})