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