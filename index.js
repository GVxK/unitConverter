/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//Elements
const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let test = document.getElementById("test-el")
let lengthEl = document.getElementById("result-length")
let volumeEl = document.getElementById("result-volume")
let massEl = document.getElementById("result-mass")

//Variables
let meter = 3.281*inputEl.value
let feet = 3.281/inputEl.value
let liter = 0.264*inputEl.value
let gallon =0.264/inputEl.value
let kilogram = 2.204*inputEl.value
let pound = 2.204/inputEl.value

//Functions
convertBtn.addEventListener("click", function() {
    let meter = (3.281*inputEl.value)*100/100
    let feet = (3.281/inputEl.value)*100/100
    let liter = 0.264*inputEl.value
    let gallon =0.264/inputEl.value
    let kilogram = 2.204*inputEl.value
    let pound = 2.204/inputEl.value
    convert(lengthEl, meter, feet)
    convert(volumeEl, liter, gallon)
    convert(massEl, kilogram, pound)

})

function convert(el,metric,imperial) {
   
    el.textContent = `${inputEl.value} metric = ${metric} imperial | ${inputEl.value} imperial = ${imperial} metric `
}