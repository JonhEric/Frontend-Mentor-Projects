const label = document.querySelectorAll('label');
const input = document.querySelectorAll('input');
const inputDay = document.querySelector(".day");
const inputMonth = document.querySelector(".month");
const inputYear = document.querySelector(".year");
const submit = document.querySelector(".btn");
const invalid = document.querySelectorAll(".invalid");
const resultDays = document.querySelector(".resultDays");
const resultMonths = document.querySelector(".resultMonths");
const resultYears = document.querySelector(".resultYears");

// ========================================================================
console.log(label);
// ========================================================================

// Écouteur d'événement lors du clic sur le bouton "submit"
submit.addEventListener("click", (event) => {
  event.preventDefault();

  let month = parseInt(inputMonth.value);
  let year = parseInt(inputYear.value);
  let day = parseInt(inputDay.value);

  
  // Valider la date de naissance
  if (validateDate(day, month, year)) {
      console.log("La date est valide.");
      const currentDate = new Date(); // Date actuelle
      const birthDate = new Date(year, month - 1, day);
    
      // Calcul de la différence en millisecondes
      const difference = currentDate - birthDate;
    
      // Conversion de la différence en années, mois et jours
      const ageDate = new Date(difference); // Utilisez une nouvelle instance de Date pour éviter d'interférer avec les autres valeurs
      const ages = ageDate.getUTCFullYear() - 1970; // Obtenez l'année à partir de la différence en utilisant getUTCFullYear() et soustrayez 1970
      const months = ageDate.getUTCMonth(); // Obtenez le mois à partir de la différence en utilisant getUTCMonth()
      const days = ageDate.getUTCDate() - 1; // Obtenez le jour à partir de la différence en utilisant getUTCDate() et soustrayez 1
    
      console.log(ages, months, days);
      resultDays.innerText = days;
      resultMonths.innerText = months;
      resultYears.innerText = ages;
      
    // Réinitialiser les messages d'erreur
    for (let i = 0; i < invalid.length; i++) {
      invalid[i].innerText = "";
    }
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = "#716f6f";
        input[i].style.outline = "1px solid #716f6f";
    }
  } else {
    console.log("La date est invalide.");

    // style rouge des messages
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = "#ff5757";
        input[i].style.outline = "1px solid #ff5757";
    }

    // Réinitialiser les messages d'erreur
    for (let i = 0; i < invalid.length; i++) {
      invalid[i].innerText = "";
    }

    resultDays.innerText = "--";
    resultMonths.innerText = "--";
    resultYears.innerText = "--";

    // Afficher les messages d'erreur appropriés

    // Afficher les messages d'erreur appropriés pour le jour
    if (isNaN(day) || day === "") {
        invalid[0].innerText = "This field is required.";
    } else if (
        day <= 0 ||
        day > 31 ||
        validateDate(day, month, year) === false
        ) {
            invalid[0].innerText = "Must be a valid day";
        }
        
    // Afficher les messages d'erreur appropriés pour le mois
    if (isNaN(month) || month === "") {
      invalid[1].innerText = "This field is required.";
    } else if (month <= 0 || month > 12) {
      invalid[1].innerText = "Must be a valid month.";
    }

    // Afficher les messages d'erreur appropriés pour l'année
    if (isNaN(year) || year === "") {
      invalid[2].innerText = "This file is required.";
    } else if (year <= 0 || year > currentDate.getFullYear()) {
      invalid[2].innerText = "Must be in the past.";
    }
  }
});

function validateDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  if (date.getDate() !== day) {
    return false;
  }
  return (
    date.getDate() === day &&
    date.getMonth() === month - 1 &&
    date.getFullYear() === year
  );
}
