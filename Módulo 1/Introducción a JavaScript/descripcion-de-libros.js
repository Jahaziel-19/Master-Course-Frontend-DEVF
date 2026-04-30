//objeto usando clases ES6

class Libro {
    constructor(titulo, autor, anio, estado){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
    }
    describirLibro() {
        return `El libro titulado ${this.titulo} fue escrito por ${this.autor} en el año ${this.anio}. Este libro está actualmente ${this.estado}`;
    }
}

const Libro1 = new Libro("El principito", "Antoine de Saint-Exupéry", 1943, "Prestado");
const Libro2= new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605, "Disponible");


console.log(Libro1.describirLibro());
console.log("----------------------------")
console.log(Libro2.describirLibro());