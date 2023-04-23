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


//Functions
convertBtn.addEventListener("click", function() {
    let meter = Math.round((3.281*inputEl.value*100))/100
    let uMeter = "meter" 
    let feet = Math.round((0.3048*inputEl.value*100))/100
    let uFeet = "feet"
    let liter = Math.round(0,264172*inputEl.value*100)/100
    let uLiter = "liter"
    let gallon = Math.round(3.78541*inputEl.value*100)/100
    let uGallon = "gallon"
    let kilogram = Math.round(2.204*inputEl.value*100)/100
    let uKilogram = "kilogram"
    let pound = Math.round(0,453592*inputEl.value*100)/100
    let uPound = "pound"
    convert(lengthEl, uMeter, meter, uFeet, feet)
    convert(volumeEl, uLiter, liter, uGallon, gallon)
    convert(massEl, uKilogram, kilogram, uPound, pound)


})

function convert(el, unitM, metric, unitI, imperial) {
        if (inputEl.value === "1") {
        el.textContent = `${inputEl.value} ${unitM} = ${metric} ${unitI}s  |  ${inputEl.value} ${unitI} = ${imperial} ${unitM}s `
        } else {
        el.textContent = `${inputEl.value} ${unitM}s = ${metric} ${unitI}s  |  ${inputEl.value} ${unitI}s = ${imperial} ${unitM}s `
        }
}

function units() {
    
}