const formulario = document.getElementById("formularioEntradas");
const spanTotalAPagar = document.getElementById("total");

function calcular(e)
{
    e.preventDefault();

    let categoria = document.getElementById("categoria").value;
    let cantidad = document.getElementById("cantidad").value;
    let totalAPagar;

    if (categoria === "estudiante")
        totalAPagar = (200 - 200 * 0.8) * cantidad;
    else if (categoria === "trainee")
        totalAPagar = (200 - 200 * 0.5) * cantidad;
    else
        totalAPagar = (200 - 200 * 0.15) * cantidad;

    spanTotalAPagar.innerHTML = totalAPagar;
    console.log(totalAPagar);
}

formulario.onsubmit = calcular;



