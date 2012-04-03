
var t;
var count = 0;

function startWork() {
    postMessage("Message " + (++count) + " (each 3 scnds)");
    t = setTimeout("startWork()", 3000);
}

function stopWork() {
    clearTimeout(t);
    timer_is_on=0;
}


this.startWork();