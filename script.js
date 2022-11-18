//Função com variáveis para atualizar o tempo.
function atualizarTempo (){

//Variável que mostra a hora atual na tela.
var display = document.querySelector('.display');

//Variável que exibe o horário de hoje na tela.
var agora = new Date();

//Variável que corrige o horário, fazendo com que acrescente um zero na frente dos numeros menores que 10.
var horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds());


//Mostra o conteudo no corpo da página.
display.textContent = horario;

}
//Função com uma condição "Se", caso o número for menor que 10, irá acrescentar um zero.
function corrigirHorario(numero){
  if (numero < 10){
    numero = '0' + numero;
  }
  return numero;
}

//Só é executada após um segundo.
atualizarTempo();

//Atualiza o horário atual após um segundo.
setInterval(atualizarTempo, 1000);

console.log(horario)



