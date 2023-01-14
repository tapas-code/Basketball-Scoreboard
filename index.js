let homescore=0
let guestscore=0
let hscore=document.getElementById("hScore")
let gscore=document.getElementById("gScore")
let resetBtn=document.getElementById("resetBtn")

function hadd1(){
    homescore+=1
    hscore.textContent=homescore
}function hadd2(){
    homescore+=2
    hscore.textContent=homescore
}function hadd3(){
    homescore+=3
    hscore.textContent=homescore
}

function gadd1(){
    guestscore+=1
    gscore.textContent=guestscore
}function gadd2(){
    guestscore+=2
    gscore.textContent=guestscore
}function gadd3(){
    guestscore+=3
    gscore.textContent=guestscore
}

function resetScore(){
    homescore=0
    guestscore=0
    hscore.textContent=homescore
    gscore.textContent=guestscore
}