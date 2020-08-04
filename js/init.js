let lvl = 1
let exp = 0
let gold = 1000
let expR = 100
let str = 10
let hp = 10
let luck = 5

function renew() {
    const lvlUI = document.querySelector('#lvl').innerHTML = `Lvl: ${lvl}`
    const expUI = document.querySelector('#exp').innerHTML = `Exp: ${exp} / ${expR}`
    const goldUI = document.querySelector('#gold').innerHTML = `Gold: ${gold}`
    const strUI = document.querySelector('#str').innerHTML = `Strength: ${str}`
    const hpUI = document.querySelector('#hp').innerHTML = `Health Points: ${hp}`
    const luckUI = document.querySelector('#luck').innerHTML = `Luck: ${luck}`
    lvlUp()
}
renew()


function lvlUp() {
    if(exp >= expR){
        expR += 10
        exp = 0
        lvl++;
        document.querySelector('#lvl').innerHTML = `Lvl: ${lvl}`
        document.querySelector('#exp').innerHTML = `Exp: ${exp} / ${expR}`
    }
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





/*for (let i = 0; i < 6; i++) {
    const interface = document.createElement('div')
    document.body.appendChild(interface)
}*/