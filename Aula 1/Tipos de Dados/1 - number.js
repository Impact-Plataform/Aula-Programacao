var meuNumero = 12.4032;

// Transformar número para string
var minhaString = meuNumero.toString();
console.log("Número transformado em string: ", typeof minhaString);

// Retorna número com um número de casas decimais
var doisDecimais = meuNumero.toFixed(2);
console.log("\nNúmero com duas casas decimais:", doisDecimais);

// Transforma uma string em float
console.log("\nString parseada para float: ", parseFloat("13.22"));

// Transforma uma string em int
console.log("\nString parseada para int:", parseInt("13.20"));