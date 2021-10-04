//Elemento ol que vamos inserir Li's com o innerHTML
let listaOl = document.querySelector('.lista-ol')
//

//Atribuimos o vetor de objetos a uma variavel, para poder manipular
//Nao precisaria nessecariamente fazer isso, poderia trabalhar direto com o vetor
let listaDeMusicas = listaMusicas;


let formacaoDoTemplate = '';

for(let i=0; i<listaDeMusicas.length;i++){

	formacaoDoTemplate += '<li class="elementos-li"><div class="foto-infos"><img class="foto" src="'+listaDeMusicas[i].img+'"><span> <h3>'+listaDeMusicas[i].titulo+'</h3> <i>'+ listaDeMusicas[i].banda+'</i> </span></div><div class="icone"><img src="imagens/btn-play1.png"></div></div></li>'

}
listaOl.innerHTML = formacaoDoTemplate;




console.log(listaOl);
console.log(listaDeMusicas)

console.log(listaDeMusicas.length)