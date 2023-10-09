var timer = 60;
var score = 0;
var hitrun = 0;

function bubblebnao(){
    var clutter = "";

    for(var i = 1; i <=168; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#panelbottom").innerHTML = clutter;

}

function scoreincrease(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

function getnewhit(){
    hitrun = Math.floor(Math.random()*10)
    document.querySelector("#hitvalue").textContent = hitrun;
}

function runtimer(){
    var timestop = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerkivalue").textContent = timer;
        } else{
            clearInterval(timestop);
            document.querySelector("#panelbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector("#panelbottom").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrun){
        scoreincrease();
        bubblebnao();
        getnewhit();
    }

})

runtimer();
bubblebnao();
getnewhit();