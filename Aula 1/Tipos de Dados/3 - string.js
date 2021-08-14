// Retorna o tamanho de uma string
var tamTexto = "Texto".length;
console.log(`Quantidade de letras: ${tamTexto}`);

// Retorna um array quebrando a string por um delimitador
var textoDividido = "Texto".split("x");
console.log(
    "\nArray com as posiçòes separadas pelo delimitador: ",
    textoDividido
);

// Busca por um valor e substitui por outro
var subTexto = "Texto".replace("Text", "txeT");
console.log("\nSubstituição de valor:", subTexto);

// Retorna a "fatia" de um valor
var ultimaLetra = "Texto".slice(-1);
console.log("\nÚltima letra de uma string:", ultimaLetra);

var semUltimaLetra = "Texto".slice(0, -1);
console.log(
    "\nValor da string da primeira letra menos a última:",
    semUltimaLetra
);

var segundaAUltima = "Texto".slice(1);
console.log("\nValor da string da segunda letra até a última:", segundaAUltima);

// Retorna N caracteres a partir de uma posição
var pedacoTexto = "Texto".substr(0, 2);
console.log("\nAs duas primeiras letras são:", pedacoTexto);