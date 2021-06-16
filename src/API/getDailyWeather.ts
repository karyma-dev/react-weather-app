import axios from 'axios'

export default (lat: number, lon: number) => axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`)


 