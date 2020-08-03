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
}
renew()




document.querySelector('#addStr').addEventListener('click', () => {
    if (gold >= 10) {
        str++; gold -= 10
    } renew()
})
document.querySelector('#addHp').addEventListener('click', () => {
    if (gold >= 5) {
        hp += Math.round(Math.random(2, 4))
        console.log(Math.floor(Math.random(2, 4))
)
        gold -= 5
    } renew()
})
document.querySelector('#addLuck').addEventListener('click', () => {
    if (gold >= 20) {
        luck++; gold -= 20
    } renew()
})

function lvlUp() {
    expR += 10
    lvl++; 
    document.querySelector('#lvl').innerHTML = `Lvl: ${lvl}`
    document.querySelector('#exp').innerHTML = `Exp: ${exp} / ${expR}`
}







/*for (let i = 0; i < 6; i++) {
    const interface = document.createElement('div')
    document.body.appendChild(interface)
}*/