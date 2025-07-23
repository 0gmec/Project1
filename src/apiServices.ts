//geo.ipify.org/api/v2/country?apiKey=at_7a0qSVnGB6lWBskosVioOuJ0obMUf&ipAddress=8.8.8.8

const myApiKey = "at_7a0qSVnGB6lWBskosVioOuJ0obMUf"
const fetchIPATData = async (ipat = "") =>{
    const url = `http://geo.ipify.org/api/v2/country?apiKey=at_7a0qSVnGB6lWBskosVioOuJ0obMUf&ipAddress=8.8.8.8`

try {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error ("Network response error")
    }
    const data = await response.json()
    console.log("Fetched IPAT Data:" , data)
    return data
}catch(error) {
    console.error("fetch error:" , error)
    alert("Error fetching IPAT data. Error")
}







}
