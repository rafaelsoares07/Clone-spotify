let listaArtistas = [
	
	{nome: ' Boogarins', img:'imagens/boogarins.jpg'},

	{nome: 'Duda Beat',  img:'imagens/dudaBeat.jpg'},

	{ nome: ' Mariana Sena',  img:'imagens/marinaSena.jpg'},

	{nome:'Tagore', img:'imagens/tagore.jpg'},

	{nome:'Luísa', img:'imagens/luisa.jpg'},

	{nome:'Rubel', img:'imagens/rubel.jpg'},

	{nome:'Half Alive', img:'imagens/halfAlive.jpg'},

	{nome:'Walfredo em busca da simbiose', img:'imagens/walfredo.jpg'},

	{nome:'Tame Impala', img:'imagens/tameImpala.jpg'}


];

let artistas = listaArtistas;
let scrollArtista = document.querySelector('.scroll-h')

let text= '';

for(let i=0; i<artistas.length;i++){
	text += '<div class="item quadrado"><img src="'+artistas[i].img +'"> <p>'+artistas[i].nome+'</p></div>'


}

scrollArtista.innerHTML = text;







//CODIGO PRIMEIRA VERSÃO 
//let artistas = listaArtistas;
//let divRowArtistas = document.querySelector('.row-artistas')
//console.log(divRowArtistas)

//let conteudoArtista = '';

//for(let i=0; i<artistas.length;i++){

//	conteudoArtista += '<div class="colum-artistas"> <img src="'+artistas[i].img +'"> <p>'+artistas[i].banda+'</p> </div>';

//}

//divRowArtistas.innerHTML = conteudoArtista;