const formulario = document.querySelector(".Formulario")
const mascara = document.querySelector(".Mascara-formulario")




function cliqueiNoBotao() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderform() {
    formulario.style.left = "-233px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"


}