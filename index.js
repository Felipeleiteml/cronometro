
var sec = 0
var min = 0
var hr = 0
var interval


function doisDigitos(digit) {
    if (digit<10) {
        return ('0' + digit)
    } else {
        return (digit)
    }

}

function start() {
    
    interval = setInterval(watch,1000)
}


function pause() {
    clearInterval(interval)

}


function zero() {
    clearInterval(interval)
    sec = 0
    min = 0
    document.getElementById("whatch").innerText = "00:00:00"
}

function watch() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if (min == 60) {
            min = 0
            hr++
        }

    }
    document.getElementById("whatch").innerText = doisDigitos(hr) + ":" + doisDigitos(min) + ":" + doisDigitos(sec)

}

