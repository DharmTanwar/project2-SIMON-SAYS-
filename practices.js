 let gameseq =[];
let userseq =[];
let btns= ["red","yellow","green","purple"];
let started =false;
let level =0;
let h2 =document.querySelector("h2");

//if any key press then game will start
document.addEventListener("keypress",function(){
if(started ==false){
    console.log("game started");
    started=true;
    levelup();
}
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250);
}
function levelup(){
    userseq=[];
level++;
    h2.innerText=`Level ${level}`;
    let ranidx=Math.floor(Math.random()*3);
    let rancolor =btns[ranidx];
    let ranbtn =document.querySelector(`.${rancolor}`); 
gameseq.push(rancolor);
console.log(gameseq);
    gameflash(ranbtn);
}

function checkAns(idx){
if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
    }
}else{
    h2.innerHTML=`game is over!your score was<b> ${level}</b> <br> press any key to start `;
    document.querySelector("body").style.backgroundColor="red";

    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
}
}
function btnpress(){ 
    console.log(this);
 let btn = this;
 userflash(btn);
 usercolor= btn.getAttribute("id");
 userseq.push(usercolor); 
checkAns(userseq.length-1); 
}
let allbtns= document.querySelectorAll('.btn')
    for( btn of allbtns){
btn.addEventListener("click",btnpress);
  }
  function reset(){
    started = false; 
    gameseq=[];
    userseq=[];
    level =0;
  }



