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


function pintarArregloIzquierda() {
    let contenido = "";

    for (let indice = 0; indice < edadesIzquierda.length; indice++) {
        contenido += `
            <tr>
                <td>${edadesIzquierda[indice]}</td>

                <td>
                    <button
                        type="button"
                        onclick="eliminarIzquierdo(${indice})">
                        Eliminar
                    </button>
                </td>

                <td>
                    <button
                        type="button"
                        onclick="moverHaciaDerecha(${indice})">
                        Mover ➜
                    </button>
                </td>
            </tr>
        `;
    }

    document.getElementById("tablaIzquierda").innerHTML = contenido;
}


function eliminarIzquierdo(indice) {
    edadesIzquierda.splice(indice, 1);

    pintarArregloIzquierda();
}

function pintarArregloDerecha() {
    let contenido = "";

    for (let indice = 0; indice < edadesDerecha.length; indice++) {
        contenido += `
            <tr>
                <td>
                    <button
                        type="button"
                        onclick="moverHaciaIzquierda(${indice})">
                        ⬅ Mover
                    </button>
                </td>

                <td>${edadesDerecha[indice]}</td>

                <td>
                    <button
                        type="button"
                        onclick="eliminarDerecho(${indice})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    }

    document.getElementById("tablaDerecha").innerHTML = contenido;
}


function eliminarDerecho(indice) {
    edadesDerecha.splice(indice, 1);

    pintarArregloDerecha();
}