document.querySelector('#addStr').addEventListener('click', () => {
    if (gold >= 10) {
        str++; gold -= 10; 
    } renew()
})
document.querySelector('#addHp').addEventListener('click', () => {
    if (gold >= 5) {
        hp += rand(2,5)
        gold -= 5
    } renew()
})
document.querySelector('#addLuck').addEventListener('click', () => {
    if (gold >= 20) {
        luck++; gold -= 20
    } renew()
})