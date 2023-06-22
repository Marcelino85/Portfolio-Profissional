let linkProjetos = [

	 {
		linkProjeto: "https://marcelino85.github.io/Snake/",
		title: "Jogo Snake",
		like: 0
	},
	{
		linkProjeto: "https://marcelino85.github.io/Sistema-de-Financas/",
		title: "Sistema de Finanças",
		like: 0
	},
	{
		linkProjeto: "https://marcelino85.github.io/HiperBookApp/",
		title: "HiperBook",
		like: 0
	},
	{
		linkProjeto: "https://marcelino85.github.io/Calculadora-IMC/",
		title: "Calculadora IMC",
		like: 0
	},
	{
		linkProjeto: "https://marcelino85.github.io/Projeto-The-Chosen/",
		title: "LandPag - The Chosen",
		like: 0
	},
  	{
		linkProjeto: "https://marcelino85.github.io/Game-Luck-Number/",
		title: "Game Luck Numbe",
		like: 0
	},
  {
		linkProjeto: "https://marcelino85.github.io/Jogo-da-velha/",
		title: "Jogo da velha",
		like: 0
	},

 
];


  
 

function Projetos() {
	let elementProjetos = document.getElementById("projetos");
	let elemento = "";
	console.log(linkProjetos.length);

	for (let i = 0; i < linkProjetos.length; i++) {
		const projeto = linkProjetos[i];

		elemento += '<div class="container-projeto">';
		elemento += '<a href="' + projeto.linkProjeto + '" target="_blanck">';
		
		elemento += "<div>";
		
		elemento += "<h1>" + projeto.title + "</h1>";
		
		
		elemento += "</div>";
		elemento += "</a>";
		elemento += '<div class="like" onclick="like(' + i + ')">';
		elemento += '<i class="far fa-heart"></i>';
		elemento += '<p id="like' + i + '">' + projeto.like + "</p>";
		elemento += "</div>";
		elemento += "</div>";
	}

	elementProjetos.innerHTML = elemento;
}

function like(i) {
	document.getElementById("like" + i).innerHTML = linkProjetos[i].like += 1;
}

function mudaTema() {
	let elementButton = document.getElementById("clear");
	document.body.classList.toggle("clear");

	if (document.body.classList == "clear") {
		elementButton.innerHTML = "Trocar Tema";
	} else {
		elementButton.innerHTML = "Trocar Tema";
	}
}