var nome = prompt("Qual seu nome?");

var idade = prompt ("Quantos anos você tem?");

var linguagem = prompt ("Qual linguaguem de programação você está aprendendo?");

if ( nome != null && idade != null && idade.length !== 0 && linguagem != null) {
  alert ("Olá " + nome +", você tem " + idade + " anos e já está aprendendo " + linguagem +"!")
}

var perguntaFinal = prompt ("Você gosta de estudar R? Responda com o número 1 para SIM ou 2 para NÃO.")

if (perguntaFinal == 1){
  alert ("Muito bom! Continue estudando e você terá muito sucesso.")
} else {
  alert  ("Ahh que pena... Já tentou aprender outras linguagens?")
}