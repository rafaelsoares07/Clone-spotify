let generosMusicais = [
	{
		genero:'Pop Brazuca',
		musicas:[ {titulo:'GAME', banda: 'Duda Beat', src: 'musicas/dudaBeat.mp3', img:'imagens/dudaBeat.jpg',btn:'1'},
				{titulo:'Me Toca', banda: ' Mariana Sena', src: 'musicas/marianaSena.mp3', img:'imagens/marinaSena.jpg',btn:'2'}
		]
	},

	{
		genero:'Mpb Brazil',
		musicas:[ {titulo:'Quando Bate Aquela Saudade', banda: ' Rubel', src: 'musicas/rubel.mp3', img:'imagens/rubel.jpg',btn:'4'},
		{titulo:'Eu não sou boa influência pra você', banda: ' Seu Pereira', src: 'musicas/seuPereira.mp3', img:'imagens/seuPereira.jpg',btn:'5'}
		]

	},

	{
		genero:'Rock Alternativo',
		musicas:[ {titulo:'Quando Bate Aquela Saudade', banda: ' Rubel', src: 'musicas/rubel.mp3', img:'imagens/walfredo.jpg',btn:'4'},
		{titulo:'Eu não sou boa influência pra você', banda: ' Seu Pereira', src: 'musicas/seuPereira.mp3', img:'imagens/seuPereira.jpg',btn:'5'}
		]

	},

	{
		genero:'Psicodelia',
		musicas:[ {titulo:'GAME', banda: 'Duda Beat', src: 'musicas/dudaBeat.mp3', img:'imagens/tameImpala.jpg',btn:'1'},
				{titulo:'Me Toca', banda: ' Mariana Sena', src: 'musicas/marianaSena.mp3', img:'imagens/marinaSena.jpg',btn:'2'}
		]
	}






];



let genero = generosMusicais;

//console.log(genero[0].musicas[1].titulo)

let divRowGeneros = document.querySelector('.row-genero')

let conteudo = '';

for(let i=0 ; i<genero.length;i++){

conteudo += '<div class="colum-genero"> <img src="'+genero[i].musicas[0].img+'"> <p>'+genero[i].genero +'</p> </div>'

}

divRowGeneros.innerHTML = conteudo