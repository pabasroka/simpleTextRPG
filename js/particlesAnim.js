import './style.css'
import gsap from 'gsap'

const strAnim = document.querySelector('#addStr')
const shapes = document.querySelectorAll('.shape')


gsap.to(strAnim, .5, {scale: 1.1, repeat: -1, yoyo: true})

const flicker = () => {
    gsap.fromTo(shapes, 1, {x: 0, y: 0},
        {x: () => `+=${rand(800, -800)}`, y: () => `+=${rand(400, -400)}`, onComplete: () => setTimeout(flicker, 1000)})
    gsap.fromTo(shapes, 1, {autoAlpha:1}, {autoAlpha: 0, ease: "power2.in"})
}

flicker()