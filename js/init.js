let lvl = 1
let exp = 0
let gold = 100
let str = 10
let hp = 10
let luck = 5

const lvlUI = document.querySelector('#lvl').innerHTML = lvl
const expUI = document.querySelector('#exp').innerHTML = exp
const goldUI = document.querySelector('#gold').innerHTML = gold
const strUI = document.querySelector('#str').innerHTML = str
const hpUI = document.querySelector('#hp').innerHTML = hp
const luckUI = document.querySelector('#luck').innerHTML = luck






document.querySelector('button').addEventListener('click', () => {
    lvl++; document.querySelector('#lvl').innerHTML = lvl
})








/*for (let i = 0; i < 6; i++) {
    const interface = document.createElement('div')
    document.body.appendChild(interface)
}*/