//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

const nome = prompt("Insira um nome");

console.log(nome === "José" ? `Oi, Zé!` : `Olá, ${nome}`);

const idade = +prompt("Insira um número");

console.log(idade >= 18 ? "Pode tirar carteira de motorista!" : "Ainda não pode tirar carteira de motorista");