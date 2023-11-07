var timer=60;//global variable
var score=0
var hitrn;

function cntScore(){
score += 10;
document.querySelector("#cntscore").textContent=score;

}
function makeBubbble(){
    var clutter = "";
    for(var i=1 ; i<=175; i++)
    {
        var Rno=Math.floor(Math.random()*10);
        clutter +=`<div class="bubble">${Rno}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer()
{
    var Itimer=setInterval(function(){ //run the code in every sec 
        if(timer>0){
        timer--
        document.querySelector("#clk").textContent=timer;
        }
        else{
            clearInterval(Itimer);
            document.querySelector("#pbtm").innerHTML=`<h2>GAME OVER<h2>`;
        }
    },1000);
}

function hitCount(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn;

}
document.querySelector("#pbtm").addEventListener("click",function(variable){
var bb = Number(variable.target.textContent);
    if(bb === hitrn)
    {
        cntScore();
        hitCount();
        makeBubbble();
    }

});

makeBubbble();
runTimer();
hitCount();
cntScore();
