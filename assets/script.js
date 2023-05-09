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
];

let currentImageIndex = 0;
const imageElement = document.querySelector(".banner-img");
const dots = document.querySelectorAll(".dot");

// Cette fonction va permettre à l'utilisateur de revenir à la première
// image s'il clique à droite sur la dernière image et à l'inverse revenir
// a la dernière image s'il clique à gauche sur la première image.
// Ceci s'effectue par un +1 ou -1 au numéro d'index en question, réagissant
// en fonction de la valeur de celui-ci.
function slideBanner(direction) {
  if (direction === "left") {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = slides.length - 1;
    }
  } else {
    currentImageIndex++;
    if (currentImageIndex >= slides.length) {
      currentImageIndex = 0;
    }
  }

  // Cette constante donne une nouvelle instance a l'objet "Image", va
  // chercher la source de l'image, enfin le onload permet d'échanger l'image
  // actuelle par autre image en fonction de l'index. [A modifier]
  // const newImage = new Image();
  // newImage.src = `./assets/images/slideshow/${slides[currentImageIndex].image}`;
  // newImage.onload = function () {
  //   imageElement.src = newImage.src;

    imageElement.src = `./assets/images/slideshow/${slides[currentImageIndex].image}`;

    // Cette constante permet d'aller chercher la classe banner-tagline
    // qui sert à identifier le recipient du texte à modifier.
    // Cela va permettre de récupérer le tagline de slides puis l'adapter
    // en fonction de l'index afficher par l'utilisateur.
    const taglineElement = document.querySelector(".banner-tagline");
    taglineElement.innerHTML = slides[currentImageIndex].tagLine;

    for (let i = 0; i < dots.length; i++) {
      if (i === currentImageIndex) {
        dots[i].classList.add("dot_selected");
      } else {
        dots[i].classList.remove("dot_selected");
      }
    }
  };
  
  // Cette fonction détecte et signale les erreurs survenues lors du charhement
  // newImage.onerror = function () {
  //   console.error(`Erreur de chargement de l'image : ${newImage.src}`);
  // };


// Les lignes qui suivent permettent d'ajouter un gestionnaire d'évenements
// En effet, si l'utilisateur clique sur l'une des deux flèches il appel la 
// fonction slideBanner.
// L'argument (left ou right) change en fonction de la flèche sur laquelle 
// clique l'utilisateur.
// Grâce à cela la fonction slideBanner va mettre à jour l'image affichée en
// fonction du sens de défillement. (+1 droite, -1 gauche).
document.querySelector(".arrow_left").addEventListener("click", function () {
  slideBanner("left");
  // Permet de vérifier dans la console que l'utilisateur clique bien sur la 
  // flèche de gauche.
  console.log('Flèche de gauche');
});

document.querySelector(".arrow_right").addEventListener("click", function () {
  slideBanner("right");
  // Permet de vérifier dans la console que l'utilisateur clique bien sur la 
  // flèche de gauche.
  console.log('Flèche de droite');
});