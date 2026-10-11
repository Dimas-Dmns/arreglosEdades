// PARTE 3: CREAR LOS ARREGLOS

let edadesIzquierda = [];
let edadesDerecha = [];



function agregarEdad() {
    let cajaEdad = document.getElementById("txtEdad");
    let edad = Number(cajaEdad.value);

    if (cajaEdad.value.trim() === "") {
        alert("Ingresa una edad.");
        return;
    }

    if (!Number.isInteger(edad) || edad < 0 || edad > 120) {
        alert("Ingresa una edad entera entre 0 y 120.");
        return;
    }

    edadesIzquierda.push(edad);

    cajaEdad.value = "";

    pintarArregloIzquierda();
}