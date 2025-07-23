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
const fetchIPATData = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (ipat = "") {
    const url = `http://geo.ipify.org/api/v2/country?apiKey=at_7a0qSVnGB6lWBskosVioOuJ0obMUf&ipAddress=8.8.8.8`;
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error("Network response error");
        }
        const data = yield response.json();
        console.log("Fetched IPAT Data:", data);
        return data;
    }
    catch (error) {
        console.error("fetch error:", error);
        alert("Error fetching IPAT data. Error");
    }
});
