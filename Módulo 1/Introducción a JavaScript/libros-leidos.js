let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
};

function mostrarLibrosLeidos() {
    console.log(librosLeidos);
};

agregarLibro("Cien años de soledad");
agregarLibro("Don Quijote de la Mancha");
mostrarLibrosLeidos();