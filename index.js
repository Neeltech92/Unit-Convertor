/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    let mTf = inputEl.value * 3.281
    let fTm = inputEl.value * 0.304
    let lTg = inputEl.value * 0.264
    let gTl = inputEl.value * 3.787
    let kTp = inputEl.value * 2.204
    let pTk = inputEl.value * 0.453
    lengthEl.innerHTML = `${inputEl.value} meters = ${mTf.toFixed(3)} feet | ${inputEl.value} feet = ${fTm.toFixed(3)} meters`
    volumeEl.innerHTML = `${inputEl.value} liters = ${lTg.toFixed(3)} gallons | ${inputEl.value} gallons = ${gTl.toFixed(3)} liters`
    massEl.innerHTML = `${inputEl.value} kilos = ${kTp.toFixed(3)} pounds | ${inputEl.value} pounds = ${pTk.toFixed(3)} kilos`
})