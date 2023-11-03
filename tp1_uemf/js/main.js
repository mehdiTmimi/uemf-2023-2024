let nomInput = document.getElementById("nomInput");
let prenomInput = document.getElementById("prenomInput");
let ageInput = document.getElementById("ageInput");
let annulerBtn = document.getElementById("annulerBtn");
let ajouterBtn = document.getElementById("ajouterBtn");
let resetBtn = document.getElementById("resetBtn");
let tbody = document.getElementById("tbody");
let errorFormulaire = document.getElementById("errorFormulaire");

let vider = () => {
  nomInput.value = "";
  prenomInput.value = "";
  ageInput.value = "";
};
annulerBtn.addEventListener("click", () => {
  vider();
});

let addEtudiant = (nom, prenom, age) => {
  // creation des elements
  let ligne = document.createElement("tr");
  let nomTd = document.createElement("td");
  let prenomTd = document.createElement("td");
  let ageTd = document.createElement("td");
  let optionTd = document.createElement("td");
  let deleteBtn = document.createElement("button");

  // les valeurs
  nomTd.innerText = nom;
  prenomTd.innerText = prenom;
  ageTd.innerText = age;
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("delete");

  tbody.appendChild(ligne);
  ligne.appendChild(nomTd);
  ligne.appendChild(prenomTd);
  ligne.appendChild(ageTd);
  ligne.appendChild(optionTd);
  optionTd.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    ligne.remove();
  });
};

ajouterBtn.addEventListener("click", () => {
  let nom = nomInput.value;
  let prenom = prenomInput.value;
  let age = ageInput.value;
  if (!nom || !prenom || !age)
    return errorFormulaire.innerText = "please fill all the inputs";
  if(age>120 || age<=1)
    return errorFormulaire.innerText = "age must be between 1 and 120";
  
  addEtudiant(nom,prenom,age)
  vider()
  errorFormulaire.innerText=""
});

resetBtn.addEventListener('click',()=>{
    tbody.innerHTML=""
})