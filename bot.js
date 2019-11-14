const config = require('./config');
const twit = require('twit');
const axios = require('axios');

const Tweet = new twit(config)

let today = new Date().setHours(0,0,0,0);
const hasOneDayPassed = () => {
    let dateCheck = new Date().setHours(0,0,0,0)
    if (today == dateCheck) {
        return false
    }
    today = dateCheck;
    return true;
}

const oncePerDay = () => {
    console.log(formatTime(new Date))
    if (!hasOneDayPassed()) {
        return false
    }

    if (formatTime(new Date) == '12:47 pm') {
        axios.get('https://api.kanye.rest/?format=text')
          .then(response => {
              Tweet.post('statuses/update', {status: `ye once said '${response.data}' but  @stephenasmith I NEED TO KNOW is Russell Westbrook is a TOP5 PG in the league?` }, (err, data, response) => {
                  console.log('success')
              })
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    }
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

setInterval(oncePerDay, 900000);
