document.getElementById("conversionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    var userName = document.getElementById("userName").value;
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    var monedaOrigen = document.getElementById("monedaOrigen").value;
    var cantidad = parseFloat(document.getElementById("cantidad").value);

    // Verificar si la cantidad es un número válido
    if (isNaN(cantidad)) {
        document.getElementById("resultadoConversion").innerText = "Por favor, ingrese una cantidad válida.";
        return;
    }

    // Realizar la conversión según la opción seleccionada
    var resultado;
    if (monedaOrigen === "dolar") {
        // Convertir dólares a bitcoins
        resultado = cantidad * 0.000014;
        document.getElementById("resultadoConversion").innerText = "Hola " + userName + ", " + cantidad + " dólares equivalen a " + resultado.toFixed(6) + " bitcoins.";
    } else if (monedaOrigen === "bitcoin") {
        // Convertir bitcoins a dólares
        resultado = cantidad * 70674.60;
        document.getElementById("resultadoConversion").innerText = "Hola " + userName + ", " + cantidad + " bitcoins equivalen a " + resultado.toFixed(2) + " dólares.";
    } else {
        // Si no se seleccionó ninguna opción válida
        document.getElementById("resultadoConversion").innerText = "Por favor, seleccione una moneda válida.";
    }
});
