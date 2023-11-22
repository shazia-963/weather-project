//npm i axios
import axios from "axios"
const URL="https://api.openweathermap.org/data/2.5/weather"
const API_KEY="761c633f9a966e1bc4e9b7c1621f6c35"
 
const Backend=async (query)=>{
let {data}= await axios.get(URL,{
   params:{
           q:query,
           APPID:API_KEY,
           units:"metric"
        }
    })
    return data
    
}
export default Backend;