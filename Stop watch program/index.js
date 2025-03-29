
const myDisplay = document.getElementById("myDisplay");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if (!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
function stop(){
    if (isRunning){
        clearInterval(timer);
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    myTime.textContent = "00:00:00:00";
}

function update(){
    elapsedTime = Date.now() - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000 )% 60);  
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    myTime.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}




//(elapsedTime / (1000 * 60 * 60));
//(elapsedTime / (1000 * 60)) % 60)
//elapsedTime / 1000) % 60);
//(elapsedTime % 1000) / 10);

