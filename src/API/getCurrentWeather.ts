import axios from 'axios'

export default (city: string, country: string) => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.API_KEY}`)


 