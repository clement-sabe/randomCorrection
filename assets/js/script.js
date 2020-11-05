// effet écriture
const title = document.getElementById('autotext');
const text = 'Alors? Personne ne se décide à faire la correction??? Pas grave je suis là pour le faire à votre place! <i class="fas fa-grin-tongue"></i>';
let index = 0;

function play() {
    title.innerHTML = text.slice(0, index);

    index++;
    //le if permet de rejour l'animation a l'infini.
    // if (index > text.length) {
    //     index = 0;
    // }
}

// setInterval permet d'appeller une fonction tout les x interval
// ici tout les 300 ms, la fonction ply est relancé
let timer = setInterval(play, 50);


//***** TIRAGE AU SORT *****//
// création du array
const btn = document.querySelector('button');
const names = ['ADRIEN', 'LAURIE', 'LAURENCE', 'PHILIPPE', 'THOMAS D.', 'THOMAS L.', 'JAMES', 'HUGO', 'REMY', 'AHMED', 'STANISLAS'];
// fonction random
function random() {
    let random = Math.round(Math.random() * (names.length - 1)); // -1 pour les index qui commence à 0
    let p = document.querySelector('.modal-content > p'); //selection de l'affichage dans le "p"
    p.textContent = 'AND THE WINNER IS... ' + names[random]; // resultat d'affichage dans la modal
    // document.querySelector(names[random]);
    $('#result').modal('show'); // affichage dans la modal
}
btn.addEventListener('click', random); // au clic sur le btn la fonction rentre en jeu