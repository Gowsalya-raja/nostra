

var drawerOpenBtn=document.getElementById("drawer-open")
var drawerEl = document.querySelector(".drawer-menu")
drawerOpenBtn.addEventListener("click",function(){
    drawerEl.style.marginLeft="0px"
})

document.getElementById("drawer-close").addEventListener("click",()=>{
    document.querySelector(".drawer-menu").style.marginLeft = "-60%"
})








