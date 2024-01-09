// ACTIF A LA PARTIE 2

// DOM Générateur d'analogies 

document.addEventListener("DOMContentLoaded", () => {  // Récupération des éléments du DOM
  const container = document.getElementById("analogies");  
  const modal = document.getElementById("modalMentionLegale");  
  const btnOpenModal = document.getElementById("btnMentionLegale");  
  const spanCloseModal = document.querySelector(".close");  

// Bouton pour les MentionLegale 
  
  btnOpenModal.addEventListener("click", () => {  // Affiche la modal lorsque le bouton est cliqué
    modal.style.display = "block";
  });

  spanCloseModal.addEventListener("click", () => {  // Masque la modal lorsque le bouton de fermeture est cliqué
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {  // Ferme la modal si l'utilisateur clique en dehors de celle-ci
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  modal.addEventListener("click", (e) => {  // Empêche la propagation du clic à l'intérieur de la modal
    e.stopPropagation(); 
  });


  // récupération des information du DATA pour les imtégrés en HTML

    data.forEach((item, i) => {
      const idSuivant = i < data.length - 1 ? data[i + 1].id : "DATA";
      const isEven = i % 2 === 0;
  
  // Génération du contenu HTML en fonction des données du tableau 'DATA'

     container.innerHTML += 
      '<section id="' + item.id + '" class="' + '">' +
          '<article class="bloc">' +
              '<h2>Si j\'étais ' + item.analogies + ', je serais ' + item.valeurAnalogies + '</h2>' +
              '<h3>' + item.text + '</h3>' +
          '</article>' +
          '<div class="img-desc" style="background-image :url(' + item.url + ')"></div>' +
      '</section>';
    });
  });
  
// bouton qui fait remonter en haut de la page

document.getElementById("btnRemonterHaut").addEventListener("click", function() {  // Fait remonter la page en haut lorsqu'on clique sur le bouton
  document.documentElement.scrollTop = 0; 
    });

//création du formulaire

    console.log(document.querySelector("#VALIDER"))
    document.querySelector("#VALIDER").addEventListener("click", function (e) {  // Empêche le comportement par défaut du formulaire
      e.preventDefault();

// Ajout d'une nouvelle section dans le conteneur '#customAnalogie' avec les valeurs du formulaire

      document.querySelector("#customAnalogie").innerHTML += `<section id="`
        + `"><article class="bloc"><h2>Si j\'étais `
        + document.querySelector("#analogie").value
        + ', je serai ' + '' + document.querySelector("#valeur").value
        + '</h2><h3>'
        + document.querySelector("#desc").value + '</h3></article><div class="img-desc" style="background-image:url('
        + document.querySelector("#URL").value + ')"></div>';
console.log("perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=tison&courriel=dorian.tison@u-pem.fr&message=")
    });

// attachement du formulaire aux php du serv

fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=tison&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeur").value + " Parce que " + document.querySelector("#desc").value + " Image : " + document.querySelector("#URL").value ).then(function (response) {
})