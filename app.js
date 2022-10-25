// const { saludarHolaMundo, saludar } = require("./saludos")

// console.log(saludar(' freeCodeCamp'));
// console.log(saludarHolaMundo());

//Console
// console.log('Hola, mundo!');
// console.warn('Ocurrio un error')
// console.error('Error!!!')
// console.error(new Error('Ocurrio un error!'))

//Process

// console.log(process);
// console.log(process.env);
// console.log(process.argv[2]);

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

console.log(process.memoryUsage());

// OS

const os = require('os')
console.log(os.userInfo())

// Timers

function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 2000, 'Node.js')