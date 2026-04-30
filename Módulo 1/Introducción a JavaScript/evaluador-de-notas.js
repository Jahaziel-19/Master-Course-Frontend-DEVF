let nota = 86;

if (nota >= 90 && nota <=100) {
    console.log("Excelente");
} else if (nota <= 89 && nota >= 75) {
    console.log("Bien");
} else if (nota <= 74 && nota >= 60) {
    console.log("Suficiente");
} else if (nota <= 59 && nota >= 0) {
    console.log("Insuficiente, el alumno no aprueba");
} else {
    console.log("Calificacion inválida");   
}