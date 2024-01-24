let counterArray = document.querySelectorAll('.animation')
let isAnimation = false

document.addEventListener('scroll', scrollDetect(counterArray))

function scrollDetect(obj) {
    if (typeof(obj) === 'string') {
        if (obj.getBoundingClientRect().top < window.innerHeight * .75 && !isAnimation) {
            isAnimation = !isAnimation
            if (obj.innerText >= 100) {
                counterAnimation(obj, obj.innerText, 20)
            }
            else {
                counterAnimation(obj, obj.innerText, 80)
            }
        }
    }
    else  {
        if (obj[0].getBoundingClientRect().top < window.innerHeight * .75 && !isAnimation) {
            isAnimation = !isAnimation
            obj.forEach((item) => {
                if (item.innerText >= 100) {
                    counterAnimation(item, item.innerText, 20)
                }
                else {
                    counterAnimation(item, item.innerText, 80)
                }
            })
        }
    }
    
}
function counterAnimation(item, limit, speed = 150) {
    let counter = 1
    let intervalVar = setInterval(() => {
        item.innerText = counter
        counter++
        if (counter > limit) {
            clearInterval(intervalVar)
        }
    }, speed)
}