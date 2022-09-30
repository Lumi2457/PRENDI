let elParrafo = document.getElementById("miParrafo");
let buttonEnviado = document.getElementById("enviado");

const checkeamosElCheckbox = () => {
    if (buttonEnviado.click) {
        elParrafo.style.display = "block";
    }
    else {
        elParrafo.style.display = "none";
    }
}

buttonEnviado.addEventListener("click", checkeamosElCheckbox);