(() => {
    'use strict';

    let form = document.getElementById('lessonForm');
    form.addEventListener('submit', function (event) {
        // Utilisation de Array.from au lieu de Array.form pour créer un tableau à partir des éléments du formulaire
        Array.from(form.elements).forEach((input) => { 
            if (input.type !== "submit") {
                if (!validateFields(input)) {
                    // Utilisation de "event" au lieu de "Event"
                    event.preventDefault();
                    event.stopPropagation();
                    
                    input.classList.remove("is-valid");
                    input.classList.add("is-invalid");
                    input.nextElementSibling.style.display = 'block';
                } else {
                    input.nextElementSibling.style.display = 'none';
                    input.classList.remove("is-invalid");
                    input.classList.add("is-valid");
                }
            }
        });
    }, false)
})()

function validateRequired(input) {
    // Vérifie si la valeur de l'input est nulle ou une chaîne vide
    return !(input.value == null || input.value == "");
}

function validateLenght (input, minLenght, maxLenght){
    return ! (input.value.length < minLenght || input.value.lenght > maxLenght);
}

function validateFields(input) {

    let fieldName = input.name;

    if (fieldName == "firstName") {
        // Appel à la fonction validateRequired pour vérifier si le champ est requis
        if (!validateRequired(input)) {
            return false;
        }
        if (!validateLenght(input, 2, 20)){
            return false;
        }
    }
    // Si le champ n'est pas "firstName", vous pouvez ajouter d'autres vérifications ici
    // Par exemple, pour d'autres champs du formulaire.
    return (true);
}



