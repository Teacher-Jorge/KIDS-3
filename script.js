const letter1 = document.getElementById('letter1')
const letter2 = document.getElementById('letter2')
const letter3 = document.getElementById('letter3')
const letter4 = document.getElementById('letter4')
const letter5 = document.getElementById('letter5')
const letter6 = document.getElementById('letter6')

const pic = document.getElementById('banana-img')

const misslet1 = document.getElementById('misslet1')
const misslet2 = document.getElementById('misslet2')

const check1 = document.getElementById('check1')
const check2 = document.getElementById('check2')

const video = document.getElementById('rabbit-video')

video.addEventListener('click', function() {
    video.play()
})

pic.addEventListener('click', function() {
    const imgSound = document.getElementById('pic-sound')
    imgSound.play()
})

letter1.addEventListener('keyup', (e) => {
    if (letter1.value === "C" || letter1.value === "c") {
        letter1.style.backgroundColor = 'lime'
        letter1.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter2.focus()
    }
    else { letter1.style.backgroundColor = 'red'
           letter1.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
        }
})



letter2.addEventListener('keyup', (e) => {
    if (letter2.value === "A" || letter2.value === "a") {
        letter2.style.backgroundColor = 'lime'
        letter2.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter3.focus()
    }
    else { letter2.style.backgroundColor = 'red'
           letter2.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
        }
})

letter3.addEventListener('keyup', (e) => {
    if (letter3.value === "R" || letter3.value === "r") {
        letter3.style.backgroundColor = 'lime'
        letter3.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter4.focus()
    }
    else { letter3.style.backgroundColor = 'red'
           letter3.style.color = 'yellow' 
           const audio = document.getElementById('wrong')
           audio.play()
        }
})

letter4.addEventListener('keyup', (e) => {
    if (letter4.value === "R" || letter4.value === "r") {
        letter4.style.backgroundColor = 'lime'
        letter4.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter5.focus()
    }
    else { letter4.style.backgroundColor = 'red'
           letter4.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
        }
})

letter5.addEventListener('keyup', (e) => {
    if (letter5.value === "O" || letter5.value === "o") {
        letter5.style.backgroundColor = 'lime'
        letter5.style.color = 'fuchsia'
        const audio = document.getElementById('right')
        audio.play()
        letter6.focus()
    }
    else { letter5.style.backgroundColor = 'red'
           letter5.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
        }
})

letter6.addEventListener('keyup', (e) => {
    if (letter6.value === "T" || letter6.value === "t") {
        letter6.style.backgroundColor = 'lime'
        letter6.style.color = 'fuchsia'
        const audio = document.getElementById('right2')
        audio.play()
        letter6.focus()
    }
    else { letter6.style.backgroundColor = 'red'
           letter6.style.color = 'yellow'
             const audio = document.getElementById('wrong')
           audio.play()
           letter6.disbled = true
        }
})

misslet1.addEventListener('keyup', (e) => {
    if (misslet1.value === "C" || misslet1.value === "c") {
        check1.style.visibility = 'visible'
        const audio = document.getElementById('right2')
        audio.play()
        misslet2.focus()
    }
})

misslet2.addEventListener('keyup', (e) => {
    if (misslet2.value === "A" || misslet2.value === "a") {
        check2.style.visibility = 'visible'
        const audio = document.getElementById('right2')
        audio.play()
    }
})
