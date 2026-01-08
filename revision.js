/**
 * Révision du code javascript
 * Date : 08/01/2026
 * Auteur : Ndovoo
 */

//La déclaration de variable
//1.Je déclare de variable pour enregistrer le nom du village
let nomVillage = "pamandzi";


//2.Je déclare une variable pour enregistrer le nom de chanteur préféré
const chanteurPrefere = "Beyoncé";


//3.J'affiche dans la console le nom de mon chanteur
console.log(chanteurPrefere);


//4.Je crée une variable pour enregistree l'âge de mon chanteur
let ageChanteur = 44 ;


//5.Je crée un tableau qui list les 5 albums de mon chanteur
const albumsChanteur = [
  "Dangerously in Love",
  "B’Day",
  "I Am… Sasha Fierce",
  "Beyoncé",
  "Lemonade"
];


//6.J'affiche dans la console les albume N°1,N°4 et N°5
console.log(albumsChanteur[0]); 
console.log(albumsChanteur[3]); 
console.log(albumsChanteur[4]);

/**7.
 * Je crée un disque CD sous forme d'objet.
 * Le disque contient 1 morceau 
 * Les informations du morceau sont : titre
 * Nom du chanteur
 * Date de sortie
 * Durée
 * Style de musique
 * Compositeur
 * Auteur
 * Prix
 * Lien vers Youtube
 **/
const monCD = {
    titre :"B'Day",
    NomChanteur :"Beyoncé",
    dateSortie :"2006/09/04",
    durée :39 ,
    StyleMusique :"R&B, Pop, Funk",
    compositeur : "Beyoncé Knowles, Swizz Beatz, Rich Harrison",
    auteur: "Beyoncé Knowles, Frank Ocean, Pharrell Williams",
    prix : "5 Grammy Awards (2004)",
    LienYoutube :"https://www.youtube.com/results?search_query=beyonce+dangerously+in+love+album"

    

}

//8.J' affiche dans la console tout l'objet
console.log(monCD);

//9.J'affiche dans la console le lien vers Youtube de l' objet
console.log(monCD.LienYoutube);

//10.J' affiche dans la console tout en MAJISCULE le titre du morceau
console.log(monCD.titre.toUpperCase());

//11.J'affiche dans la console TOUT en minuscule le style du morceau
console.log(monCD.StyleMusique.toLocaleLowerCase());

//12.Je déclare une liste de notes :34,26,86,33,17,68
let notes = [34, 26, 86, 33, 17, 68];


//13.Je récupére le plus grand nombre et je l'affiche dans la console
let noteMax =Math.max(...notes);
console.log("la plus grande note :",noteMax);

//14.J'affiche dans la console le plus petit nombre
let noteMin = Math.min(...notes);
console.log("le plus petit note :",noteMin);

let tableauFruits = ["Mange","Papaya","Fenisi","Tundra", "Sindza"];
let tableauLegumes = ["Demba","Tamati","Dodoki","Bengani","Mafana"];

//15.Je fusion les tableaux de fruits t de légumes
//J'utilise le recopie à l' aide des trois points sucessifs sans espace
let fusionTableauxFruitsLegues = [...tableauFruits,...tableauLegumes];
console.log("fusion dse fruits et légumes : ",...tableauFruits,...tableauLegumes);


//Lanotion de MAP
//Une MAP permet de structurer (code) les information sous forme de couple
//Le couple est formé d'une clé et d'une valeur clée-valeur ou key-valeur (anglais)
//MAP() est un objet 
//Je vais créer une ou plusieurs instances issues de l'objet MAP()
let mapVetements = new Map([
    ["t-shirt",100],
    ["chemise",200],
    ["robes",300],
    ["salouva",250],
]);

console.log("### mapVetements initial : ", mapVetements);

//J'utilise des Getters et Setters pour manipuler la MAP
//Getter (anglais) signifie accesseurs.Il permet d'accéder à la MAP
//Pour accéder , j'utilise la méthode GET
console.log("Il y a" , mapVetements.get("t-shirt"));
console.log(mapVetements.get("salouva"));

//Setter (anglais)signifie modifier
//Il permet de modifier le couple dans la MAP ou d'ajouter un  nouveau couple
//pour modifier , jutilise la méthode SET()
mapVetements.set("pantalon" , 150);//c'est juste 
console.log("### mapVetements modifié : ", mapVetements);
console.log("###mapVetements Taille(size)", mapVetements.size);

//La boucle forEach récupère chaque couple ou pair de la MAP
mapVetements.forEach(function(valeur , key){
    console.log(key , "=>" , valeur);
})

//La methode has() vérifie l'exitence d'une clé dans la MAP 
//Attention à la casse.Il faut respecter la majuscule et la minusule
console.log("T-shirt existe-il ? :",mapVetements.has("T-shsirt"));

let couplMap = mapVetements.entries();
console.log("couplMap : ",couplMap);

for(let couple of couplMap){
    console.log(couple);
}


console.log("=== Deuxième boucle For appliquée à la MAP ===");

for(let c of mapVetements.entries()){
    console.log(c);
}

//La méthode value () récupère uniquement les valeurs de la MAP
let valeur = mapVetements.values();
console.log("valeurs Map : ", valeur);

//La boucle for () récupère chaque valeur individuellement


for (let valeur of mapVetements.values()){
  console.log(valeur);
}


































