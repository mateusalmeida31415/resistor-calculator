const color = [{
    "black": "0",
    "brow": "1",
    "red": "2",
    "orange": "3",
    "yellow": "4",
    "green": "5",
    "blue": "6",
    "violet": "7",
    "grey": "8",
    "white": "9",
},{
    "black": "",
    "brow": "0",
    "red": "00",
    "orange": "000",
    "yellow": "0000",
    "green": "00000",
    "violet": "000000",
    "grey": "0000000",
    "white": "00000000",
},{
    "gold": "5",
    "silver": "10"
}
]

const inp = document.querySelectorAll('input[type="text"]')
const resistence = document.querySelector('.val')
const erro = document.querySelector('.erro')
const btn = document.querySelector('input[type="button"]')

inp[0].addEventListener('keydown', function(e){
    inp[0].value = e.target.value.toLowerCase() 
})

inp[1].addEventListener('keydown', function(e){
    inp[1].value = e.target.value.toLowerCase() 
})

inp[2].addEventListener('keydown', function(e){
    inp[2].value = e.target.value.toLowerCase() 
})

inp[3].addEventListener('keydown', function(e){
    inp[3].value = e.target.value.toLowerCase() 
})

btn.addEventListener('click', function(){
    let val1 = inp[0].value
    let val2 = inp[1].value
    let val3 = inp[2].value
    let val4 = inp[3].value
    resistence.innerHTML = `${color[0][val1]+color[0][val2]+color[1][val3]}`
    erro.innerHTML = `${color[2][val4]}`
})

