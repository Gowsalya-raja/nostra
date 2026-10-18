import {products} from "./products.js";


var promoStripEl = document.querySelector(".promo-strip")

document.getElementById("promo-dismiss").addEventListener("click",

function(){
    promoStripEl.style.display="none"
}
)

var drawerOpenBtn=document.querySelector(".topbar-burger")
var drawerEl = document.querySelector(".drawer-menu")
drawerOpenBtn.addEventListener("click",function(){
   
    drawerEl.style.marginLeft="0px"
})

document.getElementById("drawer-close").addEventListener("click",()=>{
    document.querySelector(".drawer-menu").style.marginLeft = "-60%"
})


var listEl=document.querySelector(".catalog-list")
products.forEach((entry)=>{
    var cardEl = document.createElement("div")
    cardEl.classList.add("catalog-card")
    cardEl.innerHTML=` <img style="width: 20vw;" src="img/${entry.src}">
    <h1>${entry.name}</h1>
    <p>₹${entry.price}</p>
    <tagbox style="visibility:hidden;">${entry.tags}</tagbox>`

    listEl.append(cardEl)
})

var activeFilters =[]
var searchText = ""
var filterBoxes = document.getElementsByName("tags")

filterBoxes.forEach((filterBox)=>{
    filterBox.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
            activeFilters.push(e.target.value)
        }
        else{
            activeFilters = activeFilters.filter(item => item !== e.target.value);
        }

        applyFilters()
    })
})

var searchInput = document.getElementById("searchInput")

// stop the search form from reloading the page when Enter is pressed
searchInput.closest("form").addEventListener("submit",function(e){
    e.preventDefault()
})

// live search while typing
searchInput.addEventListener("input",function(){
    searchText = searchInput.value.trim().toLowerCase()
    applyFilters()
})

function applyFilters()
{
    var cardList = document.querySelectorAll(".catalog-card")

    for(var i=0;i<cardList.length;i++){
        var card = cardList[i]

        var cardName = card.querySelector("h1").textContent.toLowerCase()
        var cardTags = card.querySelector("tagbox").innerHTML.split(',')

        // checkbox filters
        var matchesTags = false
        if(activeFilters.length === 0){
            matchesTags = true
        }
        else{
            activeFilters.forEach((f)=>{
                if(cardTags.includes(f)){
                    matchesTags = true
                }
            })
        }

        // search by product name or tag
        var matchesSearch = false
        if(searchText === ""){
            matchesSearch = true
        }
        else if(cardName.includes(searchText)){
            matchesSearch = true
        }
        else{
            cardTags.forEach((t)=>{
                if(t.includes(searchText)){
                    matchesSearch = true
                }
            })
        }

        if(matchesTags && matchesSearch){
            card.style.display="block"
        }
        else{
            card.style.display="none"
        }
    }
}