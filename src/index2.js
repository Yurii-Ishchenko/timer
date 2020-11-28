
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]')
}

class CountdownTimer {
    constructor({targetDate}) {
        this.targetDate = targetDate
    }

    getTimeFrom() {
        
        setInterval(() => {
            const currentDate = Date.now()
            const deltaDate = this.targetDate.getTime() - currentDate
            const { days, hours, mins, secs } = this.getTimeComponents(deltaDate)
            console.log(`${days}:${hours}:${mins}:${secs}`)
            refs.days.textContent = days
            refs.hours.textContent = hours
            refs.mins.textContent = mins
            refs.secs.textContent = secs

        }, 1000)
    }

    pad(value) {
    return String(value).padStart(2, '0')
    }
    
    getTimeComponents(time) {
const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
return { days, hours, mins, secs}    
}
}





const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.getTimeFrom()




