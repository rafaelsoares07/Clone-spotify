let listaRecomendacoes = [
	
	{nome: ' Boogarins', img:'imagens/day1.jpg'},

	{nome: 'Duda Beat',  img:'imagens/day2.jpg'},

	{ nome: ' Mariana Sena',  img:'imagens/day3.jpg'},

	{nome:'Tagore', img:'imagens/day4.jpg'},

	{nome:'Rubel', img:'imagens/day6.jpg'}

];

let recomendacoes = listaRecomendacoes;
let scrollRecomendacoes = document.querySelector('.scroll-recomendacoes')

let textConteudo= '';

for(let i=0; i<recomendacoes.length;i++){
	textConteudo += '<div class="itemRecomendacao recomendacao"><img src="'+recomendacoes[i].img +'" </div>'


}

console.log(textConteudo)
scrollRecomendacoes.innerHTML = textConteudo;