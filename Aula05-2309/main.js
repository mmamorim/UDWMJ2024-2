
let contador = 0
let timer = null

function parar() {
    console.log("parar");
    clearInterval(timer)
    timer = null
    let elem = document.getElementById('segundos')
    elem.style = 'color: red'
}

function iniciar() {
    if (!timer) {
        timer = setInterval(() => {
            contador++
            let elem = document.getElementById('segundos')
            if (contador <= 9) {
                elem.innerText = '0' + contador
            } else {
                elem.innerText = contador
            }
        }, 1000)
    }
}

function passeiPeloH1() {
    console.log("passeiPeloH1");

}



