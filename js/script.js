function ingreseNombre (){
    let nombre = prompt ("Ingrese su nombre: ");
    return (nombre);
}
function ingreseEdad (){
    let edad = prompt ("Ingrese su edad: ");
    while (edad < 0 || edad > 99) {
        edad = prompt ("Valor de edad erroneo, por favor ingreselo nuevamente: ")
    }
    return (edad);
}
function mostrar (nombre,edad){
    while (edad < 0 || edad > 99) {
        edad = prompt ("Valor de edad erroneo, por favor ingreselo nuevamente: ")
    }
    if (edad>=18){
        alert("Hola "+nombre+", tenés "+edad+" años. Sos mayor.");
    } else {
        console.log("Hola "+nombre+", tenés "+edad+" años. Sos menor.");
    }
}
let nombre = ingreseNombre ();
let edad = ingreseEdad ();
mostrar (nombre,edad);
const arrayVacio=[]
let a1 = prompt("Ingrese los nombres para el array (valor cero para salir):")
while (a1 != 0){
    arrayVacio.push(a1)
    a1 = prompt("Ingrese los nombres para el array (valor cero para salir):")
}
for (i=0;i<arrayVacio.length;i++){
    alert ("El nombre es: "+arrayVacio[i])
}
alert ("Ingresando datos para entradas")
let datosEntradas = []
let nombreEntrada = prompt("Ingrese el nombre para la entrada del recital (valor cero para salir):")
while (nombreEntrada != 0){
    let apellidoEntrada = prompt("Ingrese el apellido para el entrada del recital:")
    let fechaEntrada = prompt("Ingrese la fecha para el entrada del recital (1, 2 o 3, segun el dia):")
    while (fechaEntrada <1 || fechaEntrada > 3){
        fechaEntrada = prompt("Fecha erronea, por favor ingrese nuevamente:")
    }
    let objetoEntrada = {nombre: nombreEntrada, apellido: apellidoEntrada,fecha: fechaEntrada}
    datosEntradas.push (objetoEntrada)
    nombreEntrada = prompt("Ingrese los nombres para la entrada del recital (valor cero para salir):")
}

for (i=0;i<datosEntradas.length;i++){
    alert ("El cliente "+ datosEntradas[i].nombre +" con apellido "+ datosEntradas[i].apellido +" saco entrada para la fecha "+ datosEntradas[i].fecha)
}