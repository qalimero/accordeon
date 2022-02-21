# accordeon

## Stocker plusieurs éléments HTML dans une seule variable

Utilisation de la méthode `document.querySelectorAll('classSélectionnée')`
Le console.log va afficher une liste, en programmation on parle de tableau `array` --> reconnaissable aux crochets d'ouverture.
L'array se compose d'un `index` qui permet d'accéder aux éléments du tableau avec : `const element = nomDuTableau[index]`

## Mise en place de BOUCLE

Agir sur chaque élément du tableau, **soumettre chaque élément à une même action**

La méthode `forEach` permet d'agir sur chaque élément d'un tableau de manière isolée en **affectant un detecteur d'évènement** --> **pour chacun**

`item` == appelation des éléments d'un tableau, élément arbitraire mais obligatoire
`=>` == écriture simplifiée d'une fonction, pas besoin du mot-clé fonction

## Afficher la réponse 

Besoin d'un code dynamique qui s'adapte à tout les cas de figure.
Javascript nous propose une propriété --> `nextElementSibling`
`Accordeon` == élément parent
`Question` == élément de référence
`Réponse` == élément suivant de même niveau
Nous voulons accéder à la div suivante de même niveau
