const refs = {
    btnstart: document.querySelector('.btnStart'),
    btnstop: document.querySelector('.btnStop'),
    clockface: document.querySelector('.js-clockface')
}

refs.clockface.textContent = `00:00:00`
// class Timer {
//     constructor() {
//     this.intervalId = null,
//     this.isActive = false
//     // this.face = refs.clockface.textContent = `00:00:00`
//     }
//     face() {
//         refs.clockface.textContent = `00:00:00`
//     }
//     start() {
//         if (this.isActive) {
//             return
//         }
//         this.isActive = true
//         const startTime = Date.now()

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now()

//             const deltaTime = currentTime - startTime
//             const { hours, mins, secs } = this.getTimeComponents(deltaTime)
//             updateClockFace({ hours, mins, secs })
//             // const clockk = `${hours}:${mins}:${secs}`
//             // console.log(clockk)
//         }, 1000)
//     }
//     stop() {
//         clearInterval(this.intervalId)
//         this.isActive = false
//         refs.clockface.textContent = `00:00:00`
//     }
//     pad(value) {
//     return String(value).padStart(2, '0')
//     }
// getTimeComponents(time) {
// const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
// const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
// const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//     return { hours, mins, secs}
//     }
    
// }
// const timer = new Timer({
//     onTick: updateClockFace({ hours, mins, secs })
//     // ({ hours, mins, secs })
// })
const timer = {
    intervalId: null,
    isActive: false,
    face: refs.clockface.textContent = `00:00:00`,
    
    
    start() {
        if (this.isActive) {
            return
        }
        this.isActive = true
        const startTime = Date.now()

        this.intervalId = setInterval(() => {
            const currentTime = Date.now()

            const deltaTime = currentTime - startTime
            const { hours, mins, secs} = getTimeComponents(deltaTime)
            updateClockFace({ hours, mins, secs })

        }, 1000)
        },
    stop() {
        clearInterval(this.intervalId)
        this.isActive = false
        refs.clockface.textContent = `00:00:00`
    }
}

refs.btnstart.addEventListener('click', () => {
    timer.start()
})

refs.btnstop.addEventListener('click', () => {
    timer.stop()
})
function updateClockFace({ hours, mins, secs }) {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`
}

function pad(value) {
    return String(value).padStart(2, '0')
}
function getTimeComponents(time) {
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { hours, mins, secs}
}
