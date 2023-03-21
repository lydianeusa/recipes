

// // on cible le button et on le met dans une constante
const myButton = document.querySelector("button");
// // j'écoute le bouton addlistener pour détecter un clic
// // et déclencher une fonction anonymme
//     myButton.addEventListener("click", () => { 
//         // au clic du bouton je crée un H1
//     const myH1 = document.createElement("h1");
//     myH1.textContent = "Super je cree un h1"
// // je cible l'endroit dans le DOM ou le h1 sera intégré
// // en l'occurence la div vide
//     const divVide = document.querySelector(".container")
// // je demande l'integration dans cette div de mon h1 crée
//     divVide.appendChild(myH1)
// })











const recipes = [
    {title: "ma recette1",
     image: "https://picsum.photos/200/300",
     content:"ingredients recette1"},
    {title: "ma recette2",
     image: "https://picsum.photos/300/300",
     content:"ingredients recette2"},
     {title: "ma recette3",
     image: "https://picsum.photos/400/300",
     content:"ingredients recette3"}
]


const displayRecipe = () => {
    // sélectionne la div recettes
    const recipesContainer = document.querySelector("#recipes");
  
    // affiche une div sans contenu pour éviter que plusieurs recettes s'affichent en même temps
    recipesContainer.innerHTML = "";
  
    // génére une chiffre aléatoire dans le tableau recipes
    const randomIndex = Math.floor(Math.random() * recipes.length);
  
    // créé un titre h1
    const titleToCreate = document.createElement("h1");
    titleToCreate.textContent = recipes[randomIndex].title;
  
    // créé un paragraphe
    const paragraphToCreate = document.createElement("p");
    paragraphToCreate.textContent = recipes[randomIndex].content;
  
    // créé une image
    const imgToCreate = document.createElement("img");
    imgToCreate.src = recipes[randomIndex].image;
  
    // insère les éléments
    recipesContainer.append(titleToCreate, paragraphToCreate, imgToCreate);
  };
  
  myButton.addEventListener("click", () => {
    displayRecipe();
  });