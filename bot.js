const config = require('./config');
const twit = require('twit');

const Tweet = new twit(config)

let today = new Date().setHours(0,0,0,0);
console.log(today)
const hasOneDayPassed = () => {
    let dateCheck = new Date().setHours(0,0,0,0)
    console.log(dateCheck)
    if (today == dateCheck) {
        return false
    }

    today = dateCheck;
    return true;
}
 let value = !hasOneDayPassed()

const oncePerDay = () => {
    console.log(formatTime(new Date))
    if (!hasOneDayPassed()) {
        return false
    }
    console.log('ha ha')

    // Tweet.post('statuses/update', {status: '@jamesjholee hello world!'}, (err, data, response) => {
    //     console.log(data)
    // })
}

const formatTime = (date) => {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let dayAndNight = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? `0${minutes}` : minutes
    let time = `${hours}:${minutes} ${dayAndNight}`
    return time;
}

console.log(formatTime(new Date))

setInterval(oncePerDay, 3000);
