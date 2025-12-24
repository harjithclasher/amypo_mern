const s1 = document.getElementById("onb")
const s2 = document.getElementById("offb")
const bulb = document.getElementById("bulb")

s1.onclick =()=>
{
    bulb.src = "../html/assests/images/BULB_ON.jpg"
    
}
s2.onclick = () =>
{
    bulb.src ="../html/assests/images/BULB_OFF.jpg"
}