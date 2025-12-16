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
