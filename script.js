let time = document.getElementById("time");
let count=0;

function increase(){
    count++;
    time.innerText=count;
}
function decrease(){
    if (count > 0){
        --count;
    }
    time.innerText=count;
}

function reset(){
    count=0;
    time.innerText=count;
}