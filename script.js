console.log('connecté'); 

// Je stock & selectione tout les éléments disposant de la class question
const questions = document.querySelectorAll('.question');
console.log(questions);
// selectionner donnée depuis notre tableau
const deux = questions[1];
console.log(deux);

questions.forEach((item)=>{
    console.log('item');
    // Chaque élément du tableau est représenté par item
    // Soumettre chaque item à une action au click
    item.addEventListener('click', function(){
        console.log('item cliqué');
        // Je selectionne & je stocke la div suivante de l'item cliqué
        const next = item.nextElementSibling;
        next.classList.toggle('visible');
        console.log(next); 
    });
});