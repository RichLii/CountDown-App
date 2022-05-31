const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")
const btn = document.querySelector(".submit")
const timers = document.querySelectorAll(".timer")
const main = document.querySelector(".main")
console.log(timers)


function countdown(date) {
    const getDate = new Date(date)
    const currentDate = new Date()

    const totalseconds = (getDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / (3600 * 24))
    const hours = Math.floor(totalseconds / 3600) % 24
    const mins = Math.floor(totalseconds / 60) % 60
    const seconds = Math.floor(totalseconds) % 60

    daysEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
    
    // console.log(seconds)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

function checkDate(date) {
    const currentDate = new Date()
    const getDate = new Date(date)

    return getDate > currentDate ? true : false
}

btn.addEventListener("click", () => {
    const getDate = document.getElementById("inputs").value

    if (checkDate(getDate)) {
        countdown(getDate)

        for(let i=0; i<timers.length; i++){
            timers[i].classList.toggle('show')
        }
    
        main.classList.toggle("noshow")
    
        setInterval(() => countdown(getDate), 1000)

    } else {
        window.alert("請輸入正確的日期")
    }

})



