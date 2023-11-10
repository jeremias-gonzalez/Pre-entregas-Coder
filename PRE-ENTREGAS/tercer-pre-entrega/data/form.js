
const inputNombre = document.querySelector("#nombre")
inputNombre.onchange = ( event ) => {

    if ( event.target.value !== "" || event.target.value !== null ) {
        inputNombre.style.border = "10px solid green"
    }

}   



const inputEdad = document.querySelector("#edad")
const selectPais = document.querySelector("#pais")
const altaPersona = []
document.querySelector("#form-persona").onsubmit = ( event ) => {
    event.preventDefault()
    altaPersona.push({
        nombre: inputNombre.value,
        edad: inputEdad.value,
        correoElectronico: document.querySelector("#email").value,
        pais: selectPais.value
    })

    event.target.reset()
}
window.addEventListener("contextmenu", (event) => {
    event.preventDefault()
})
