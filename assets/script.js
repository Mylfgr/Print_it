const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments de la page nécessaires pour interagir avec le carrousel
const leftBtn = document.querySelector(".arrow_left");
const rightBtn = document.querySelector(".arrow_right");
const divDots = document.querySelector(".dots");
const slideImage = document.querySelector(".banner-img");
const slideTagLine = document.querySelector("#banner > p");

let currentSlideIndex = 0; // Index du slide actuellement affiché

// Ajout des points (bullets) pour chaque slide
slides.forEach((_, index) => {
    const divDot = document.createElement("div"); // Création d'un élément div pour chaque point
    divDot.classList.add("dot"); // Ajout de la classe CSS "dot" à chaque point
    if (index === 0) divDot.classList.add("dot_selected"); // Ajout de la classe "dot_selected" au premier point
    divDots.appendChild(divDot); // Ajout du point au conteneur divDots
});

const bullets = document.querySelectorAll(".dot"); // Sélection de tous les points (bullets)

// Fonction pour mettre à jour l'affichage en fonction de l'index du slide
function updateSlide(index) {
    const slide = slides[index]; // Récupération du slide correspondant à l'index
    slideImage.src = `./assets/images/slideshow/${slide.image}`; // Mise à jour de la source de l'image
    slideTagLine.innerHTML = slide.tagLine; // Mise à jour du texte de description
    bullets.forEach((dot, i) => dot.classList.toggle("dot_selected", i === index)); // Mise à jour de la classe "dot_selected" pour indiquer le slide actif
}

// Fonction pour changer de slide en fonction de la direction (1 pour droite, -1 pour gauche)
function changeSlide(direction) {
    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length; // Calcul du nouvel index en boucle
    updateSlide(currentSlideIndex); // Mise à jour de l'affichage avec le nouvel index
}

// Ajout des gestionnaires d'événements pour les boutons de navigation
rightBtn.addEventListener("click", () => changeSlide(1)); // Au clic sur la flèche droite, passer au slide suivant
leftBtn.addEventListener("click", () => changeSlide(-1)); // Au clic sur la flèche gauche, passer au slide précédent


