let countHome=0;
let countAway=0;
let scoreHome=document.querySelector("#scoreHome");
let scoreAway=document.querySelector("#scoreAway");

/* ===home=== */
function addOne(){  
    countHome+=1;
    console.log(countHome);
    scoreHome.innerHTML=countHome;
}
function addTwo(){
    countHome+=2;
    console.log(countHome);
    scoreHome.innerHTML=countHome;
}
function addThree(){
    countHome+=3;
    scoreHome.innerHTML=countHome;
}

/* ===away=== */
function addOne1(){  
    countAway+=1;
    console.log(countAway);
    scoreAway.innerHTML=countAway;
}
function addTwo2(){
    countAway+=2;
    scoreAway.innerHTML=countAway;
}
function addThree3(){
    countAway+=3;
    scoreAway.innerHTML=countAway;
}


/* ===reset=== */
function reset(){
    countHome=0;
    countAway=0;
    scoreHome.innerHTML="00";
    scoreAway.innerHTML="00";
}