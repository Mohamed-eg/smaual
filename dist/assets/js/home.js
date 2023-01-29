var home =document.querySelector('.HomeContaner');
var lodingpag =document.querySelector('.lodingpag');
const homwloadfn =()=>{
    home.style.display="block";
    lodingpag.style.display="none"
}
window.onload=()=>{
    homwloadfn()
}