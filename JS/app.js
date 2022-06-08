// Ejercicio clase

const inputSerie = document.getElementById('inputSerie') // <input>
const agregarBtn = document.getElementById('agregarBtn') // <button>
const agregarLista = document.getElementById('mostrarLista') // <p>
const eliminarBtn = document.getElementById('eliminarBtn') // <button>

let series = []

function agregarSerie(){
    let nombreSerie = inputSerie.value
    series.push(nombreSerie)

    agregarLista.textContent = series
}

function eliminarSerie (){
    series.pop()
    agregarLista.textContent = series
}


agregarBtn.onclick = agregarSerie
eliminarBtn.onclick = eliminarSerie



