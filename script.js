var promoStripEl = document.querySelector(".promo-strip")

document.getElementById("promo-dismiss").addEventListener("click",

function(){
    promoStripEl.style.display="none"
}
)

var drawerOpenBtn=document.getElementById("drawer-open")
var drawerEl = document.querySelector(".drawer-menu")
drawerOpenBtn.addEventListener("click",function(){
    drawerEl.style.marginLeft="0px"
})

document.getElementById("drawer-close").addEventListener("click",()=>{
    document.querySelector(".drawer-menu").style.marginLeft = "-60%"
})



var prevBtn = document.getElementById("carousel-go-prev")
var nextBtn =document.getElementById("carousel-go-next")
var trackEl= document.querySelector(".carousel-track")
var trackOffset=0

console.log(prevBtn)

nextBtn.addEventListener("click",

function(){
    trackOffset=trackOffset+100

    if(trackOffset>200)
    {
        trackOffset=0
        trackEl.style.marginLeft=0;
    }
    else{
        trackEl.style.marginLeft="-"+trackOffset+"vw";
    }
    
   

}
)

prevBtn.addEventListener("click",

function(){

    if(trackOffset==0)
    {
       
        trackOffset=200
        trackEl.style.marginLeft="-"+trackOffset+"vw";
    }
    else{

        trackOffset=trackOffset-100
    trackEl.style.marginLeft="-"+trackOffset+"vw";
    }
    
    
}
)





var heartBtns=document.querySelectorAll(".heart-toggle")

heartBtns.forEach((heartEl)=>{
    heartEl.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="img/icons/redheart.png"
        }
        else{
            e.target.src="img/icons/blackheart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    var nodes = this.document.querySelectorAll(".fade-start")
    nodes.forEach((node)=>{
        viewH = window.innerHeight
     var rect = node.getBoundingClientRect()
   

     console.log(viewH)
     console.log(rect.top)
     if(viewH>rect.top-100){
        console.log("Hi")
    node.classList.remove("fade-hidden")

    }
    
})
    
})


//Collections
