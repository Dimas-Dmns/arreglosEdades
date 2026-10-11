let edadesIzquierda = [12, 15];
let edadesDerecha = [20, 25];


function agregarEdad() {
    let cajaEdad = document.getElementById("edad");
    let valor = cajaEdad.value;

    // Validar que la caja no esté vacía
    if (valor.trim() === "") {
        alert("Por favor, ingresa una edad.");
        return;
    }

    let edad = Number(valor);

    // Validar que sea un número entero entre 0 y 120
    if (!Number.isInteger(edad) || edad < 0 || edad > 120) {
        alert("Ingresa una edad entera entre 0 y 120.");
        return;
    }

    // Agregar la edad al arreglo izquierdo
    edadesIzquierda.push(edad);

    // Limpiar la caja de texto
    cajaEdad.value = "";

    // Actualizar la tabla izquierda
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
                        class="btn-eliminar"
                        onclick="eliminarIzquierdo(${indice})">
                        Eliminar
                    </button>
                </td>

                <td>
                    <button
                        type="button"
                        class="btn-mover"
                        onclick="moverHaciaDerecha(${indice})">
                        ➜
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
                        class="btn-mover"
                        onclick="moverHaciaIzquierda(${indice})">
                        ⬅
                    </button>
                </td>

                <td>${edadesDerecha[indice]}</td>

                <td>
                    <button
                        type="button"
                        class="btn-eliminar"
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



function moverHaciaDerecha(indice) {
    // Obtener la edad seleccionada
    let edad = edadesIzquierda[indice];

    // Agregarla al arreglo derecho
    edadesDerecha.push(edad);

    // Eliminarla del arreglo izquierdo
    edadesIzquierda.splice(indice, 1);

    // Actualizar ambas tablas
    pintarArregloIzquierda();
    pintarArregloDerecha();
}


function moverHaciaIzquierda(indice) {
    // Obtener la edad seleccionada
    let edad = edadesDerecha[indice];

    // Agregarla al arreglo izquierdo
    edadesIzquierda.push(edad);

    // Eliminarla del arreglo derecho
    edadesDerecha.splice(indice, 1);

    // Actualizar ambas tablas
    pintarArregloIzquierda();
    pintarArregloDerecha();
}

pintarArregloIzquierda();
pintarArregloDerecha();
