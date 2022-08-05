document.getElementById("welcome").textContent = "Bienvenido " + sessionStorage.getItem('nombre')

let saldo = parseFloat(sessionStorage.getItem("saldo"))

function depositar() {
    let monto = parseFloat(document.getElementById("monto").value);
    let depositoF = monto + saldo
    if (depositoF >= 2000) {
        alert("No puedes depositar mas de $2000")
    }
    else {
        saldo += monto
        let h3 = document.getElementById("consultaS")
        h3.textContent = saldo
    }
}
function retirar() {
    let retiro = parseFloat(document.getElementById("retiro").value);
    let retiroF = saldo - retiro
    if (retiroF < 10) {
        alert("No puedes realizar el retiro, tienes que tener mas de $10")
    }
    else {
        saldo -= retiro
        let h3 = document.getElementById("consultaS")
        h3.textContent = saldo
    }
}

function consultaS() {
    let h3 = document.getElementById("consultaS")
    h3.textContent = saldo
}