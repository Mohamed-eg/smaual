var home =document.querySelectorAll('.HomeContaner');
var lodingpag =document.querySelector('.lodingpag');
const homwloadfn =()=>{
    home[0].style.display="block";
    home[1].style.display="block";
    home[2].style.display="block";
    lodingpag.style.display="none"
}
window.onload=()=>{
    homwloadfn()
}