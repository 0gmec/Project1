//geo.ipify.org/api/v2/country?apiKey=at_7a0qSVnGB6lWBskosVioOuJ0obMUf&ipAddress=8.8.8.8



const myApiKey = "at_7a0qSVnGB6lWBskosVioOuJ0obMUf"

   var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const fetchIPATData = async (ipat = "") =>{
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${myApiKey}&ipAddress=${ipat}`
    


try {


    const response = await fetch(url)
    if (!response.ok) {
        throw new Error ("Network response error")
    }
    const data = await response.json()
    console.log("Fetched IPAT Data:" , data)

 const iaptform = document.getElementById("ipat-form")
const ipdisplay = document.getElementById("ipdisplay")
const iplocation = document.getElementById("iplocation")
const iptimezone = document.getElementById("iptimezone")
const ipisp = document.getElementById("ipisp")

iaptform!.addEventListener("submit", event => {
event.preventDefault()

}) 

ipdisplay!.textContent = data.ip
iplocation!.textContent = `${data.location.city}, ${data.location.country}`
iptimezone!.textContent = `UTC ${data.location.timezone}`
ipisp!.textContent = data.isp
    
}catch(error) {
    console.error("fetch error:" , error)
    alert("Error fetching IPAT data. Error")
}

}


fetchIPATData("8.8.8.8")

