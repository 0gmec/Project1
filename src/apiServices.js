"use strict";
//geo.ipify.org/api/v2/country?apiKey=at_7a0qSVnGB6lWBskosVioOuJ0obMUf&ipAddress=8.8.8.8
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const myApiKey = "at_7a0qSVnGB6lWBskosVioOuJ0obMUf";
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
const fetchIPATData = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (ipat = "") {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${myApiKey}&ipAddress=${ipat}`;
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error("Network response error");
        }
        const data = yield response.json();
        console.log("Fetched IPAT Data:", data);
        const ipdisplay = document.getElementById("ipdisplay");
        const iplocation = document.getElementById("iplocation");
        const iptimezone = document.getElementById("iptimezone");
        const ipisp = document.getElementById("ipisp");
        ipdisplay.textContent = data.ip;
        iplocation.textContent = `${data.location.city}, ${data.location.country}`;
        iptimezone.textContent = `UTC ${data.location.timezone}`;
        ipisp.textContent = data.isp;
    }
    catch (error) {
        console.error("fetch error:", error);
        alert("Error fetching IPAT data. Error");
    }
});
fetchIPATData("8.8.8.8");
