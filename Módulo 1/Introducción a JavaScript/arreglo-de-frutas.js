const frutas = ['manzana', 'banana', 'naranja', 'manzana', 'pera', 
                'banana', 'kiwi', 'manzana', 'uva', 'pera'];

const conteoWhile = {};
let i = 0;  // Índice para while

// Recorrer con while
while (i < frutas.length) {
    const fruta = frutas[i];
    if (conteoWhile[fruta]) {
        conteoWhile[fruta]++;
    } else {
        conteoWhile[fruta] = 1;
    }
    i++;  // Incrementar índice
}

// Imprimir
console.log('Conteo con while:');
for (const [fruta, cantidad] of Object.entries(conteoWhile)) {
    console.log(`${fruta}: ${cantidad}`);
}