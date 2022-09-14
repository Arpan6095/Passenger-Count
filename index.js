let count =0;
let countEL= document.getElementById("count-el")
let welcomeEl=document.getElementById("welcome-el")
let saveEl=document.getElementById("save-el")

function increament(){
    count=count+1;
    countEL.innerText=count;
}

function save(){
    let per = count+" - ";
    saveEl.textContent+=per;
    countEL.textContent=0;
    count=0;
}
