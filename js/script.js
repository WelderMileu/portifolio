const $ = e => document.querySelector(e);

const linguagens = ["HTML","CSS","Javascript","Figma","PHP","GitHub","Git","Node JS","MongoDb","SQL","React Native","React JS","SCRUM","Bootstrap","Logica de P."]
const projetos = [
	{
		"image":"https://github.com/WelderMileu/site_balao/raw/master/assets/template.png",
		"imgW" : "500",
		"imgh" : "500",
		"description" : "Banner de site do balão da turquia responsivo.",
        "link" : "https://weldermileu.github.io/site_balao/index.html"
	},
	{
		"image":"https://github.com/WelderMileu/site-casa/raw/main/public/template.png",
		"imgW" : "500",
		"imgh" : "500",
		"description" : "Site desenvolvido com Rect JS usando o Next.",
        "link" : "https://sitecasa.netlify.app/"
	},	
	{
		"image":"https://github.com/WelderMileu/ecommerce-static/raw/master/assets/template.png",
		"imgW" : "500",
		"imgh" : "500",
		"description" : "E-commerce responsivo feito em html, css e javascript puro.",
        "link" : "https://weldermileu.github.io/ecommerce-static/index.html"
	},
	{
		"image":"https://github.com/WelderMileu/tela_login_blog/raw/master/template.png",
		"imgW" : "500",
		"imgh" : "500",
		"description" : "Tela de login responsiva, feita para altenticação de usuario apenas estatica.",
        "link" : "https://weldermileu.github.io/tela_login_blog/."
	},
	{
		"image":"./dist/images/influencer.png",
		"imgW" : "500",
		"imgh" : "500",
		"description" : "Clone e otimização do site influencer studio responsivo.",
        "link" : "https://weldermileu.github.io/clone-influencer/index.html"
	},
	{
		"image":"https://github.com/WelderMileu/animacao_com_jquery/raw/master/template.png",
		"imgW" : "500",
		"imgh" : "500",
		"description" : "Animação usando a biblioteca jquery e estilizada com tailwindcss, não responsivo.",
        "link" : "https://weldermileu.github.io/animacao_com_jquery/."
	},
	{
		"image":"./dist/images/mobile_first.png",
		"imgW" : "115",
		"imgh" : null,
		"description" : "Aplicativo de musica de forma statica desenvolvido com React Native.",
        "link" : "https://github.com/WelderMileu/app_de_musica_react-native/raw/master/assets/video.gif"
	}
]


// montando nossas linguagens na tela
function writeLinguagens() {
    linguagens.map(elem => {
        const li = document.createElement('li');
        li.classList.add("text-lg","m-2","w-32","text-gray-600", "text-center","p-2","flex","justify-center","items-center", "border", "border-gray-600", "rounded")
        li.innerHTML = elem;

        $('#linguagens').appendChild(li)
    })
}

// montando nosso projetos na tela
function projectsItems() {
	projetos.map(elem => {
		// container
		const container = document.createElement('div');
		container.classList.add("sm:w-2/6","m-3","flex","flex-col","justify-center","items-center","mt-10","p-2");

		// imagem
		const img = new Image();
		img.width = elem.imgW;
		img.height = elem.imgh;
		img.src = elem.image;
		img.classList.add('mb-3');

		// ---------------------- descricão e direcionamento --------------------
		const descricao = document.createElement('div');
		descricao.classList.add("p-2","flex","flex-col", 'relative');

		// descricao
		const p = document.createElement('p');
		p.classList.add("text-gray-600","text-lg","text-left","p-5","h-20");
		p.innerHTML = elem.description;

		const botao = document.createElement('a');
		botao.classList.add("btn-link");
		botao.innerHTML = `<i class="fas fa-search"></i>`
		botao.href = elem.link;
		botao.target = "__blank";

		// adicionando elementos a descricao
		descricao.append(p);
		descricao.append(botao);

		// -----------------------------------------------------------------------

		// adicionando os elementos ao container
		container.appendChild(img);
		container.appendChild(descricao);


		$('#projetos').appendChild(container);
	})
}

// chamando as funções
writeLinguagens()
projectsItems()
