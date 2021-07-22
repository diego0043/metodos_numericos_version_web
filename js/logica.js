var boton = document.getElementById("calcular")

boton = addEventListener("click" , function(e) {
    e.preventDefault
    var funcion = document.getElementById("funcion").value
    var valor1 = document.getElementById("valor1").value
    var valor2 = document.getElementById("valor2").value
    var valor3 = document.getElementById("valor3").value
    var cifras = document.getElementById("cifras").value

    if (funcion == "" || valor1 == "")
        console.log("error...")
    else
        console.log(funcion)
        console.log(valor1)

    
})
    
