document.querySelector('#mission1').addEventListener('click', () => {
    exp += (rand(3 + 2 * lvl, 7 + 2 * lvl)) / 2 + 5
    gold += (rand(1 + lvl, 5 + 2 * lvl)) / 2 + 5
    renew()
})

document.querySelector('#mission2').addEventListener('click', () => {
    exp += (rand(10 + 2 * lvl, 15 + 2 * lvl))/2 + 5
    renew()
})

document.querySelector('#mission3').addEventListener('click', () => {
    gold += (rand(10 + 2 * lvl, 15 + 2 * lvl)) / 2 + 5
    renew()
})