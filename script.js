let linkProjetos = [

	 {
		linkProjeto: "https://marcelino85.github.io/Praey/",
		title: "Site Empresarial - Oliveira Remodelação",
		like: 0
	},
	{
		linkProjeto: "https://marcelino85.github.io/Site-Consultoria-Simples/",
		title: "Site Empresarial - Consultoria Simples",
		like: 0
	},
	{
		linkProjeto: "https://marcelino85.github.io/Star-Wars-Characters/",
		title: "Landing Page - Consumindo uma API/Star-Wars",
		like: 0
	},
	{
		linkProjeto: "https://marcelino85.github.io/API-Rick-and-Morty/",
		title: "Projeto academico / em desenvolvimento",
		like: 0
	},
	{
		linkProjeto: "https://marcelino85.github.io/Projeto-The-Chosen/",
		title: "Landing Page - The Chosen",
		like: 0
	},
	{
		linkProjeto: "https://marcelino85.github.io/Site-Consuntoria-Simples-CS/",
		title: "Projeto em desenvolvimento",
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