let cliente1 = {
    nombre: "joel",
    correo: "joel@gmail.com",
    password: "12345",
    saldo: 1566
}
let cliente2 = {
    nombre: "Migue",
    correo: "migue@gmail.com",
    password: "321321",
    saldo: 1255
}

let cliente3 = {
    nombre: "Eduardo",
    correo: "eduardo@gmail.com",
    password: "asa11",
    saldo: 950
}

let clientes = [cliente1, cliente2, cliente3];


function login() {
    let correo = document.getElementById('mail').value;
    let contrasena = document.getElementById('password').value;
    evaluar(correo, contrasena);
}

let stateLogin = true

function evaluar(mail, contrasena) {
    let clienteOk = clientes.find((persona) => persona.correo == mail)
    if (clienteOk != undefined) {
        if (clienteOk.password == contrasena) {
            console.log("Welcome mr. ", clienteOk.nombre)
            sessionStorage.setItem("nombre", clienteOk.nombre)
            sessionStorage.setItem("correo", clienteOk.correo)
            sessionStorage.setItem("saldo", clienteOk.saldo)
            window.location.href = "banca.html";

        } else {
            alert("tu contraseña no coincide")
        }
    } else {
        alert("no existe tu correo")
    }
}