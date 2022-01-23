const carousel =document.querySelector('.carousel')

let counter = 1
const imageCount = 5
const imageSize= 760

window.onload = startCarousel()

function startCarousel(){
    if(counter >= imageCount){
    counter=0
    }
    setTimeout(()=>{
        carousel.style.transform = 'translateX(' + (imageSize * counter) + 'px)'
        counter++
        startCarousel()
    }, 3000)
}