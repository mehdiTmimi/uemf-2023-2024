let nomInput=document.getElementById('nomInput')
let prenomInput=document.getElementById('prenomInput')
let ageInput=document.getElementById('ageInput')
let annulerBtn=document.getElementById('annulerBtn')
let ajouterBtn=document.getElementById('ajouterBtn')
let resetBtn=document.getElementById('resetBtn')
let tbody=document.getElementById('tbody')

let vider = ()=>{
    nomInput.value=""
    prenomInput.value=""
    ageInput.value=""
}
annulerBtn.addEventListener('click',()=>{
    vider();
})

let addEtudiant =(nom,prenom,age)=>{
    // creation des elements
    let ligne = document.createElement('tr')
    let nomTd= document.createElement('td')
    let prenomTd= document.createElement('td')
    let ageTd= document.createElement('td')
    let optionTd= document.createElement('td')
    let deleteBtn= document.createElement('button')


    // les valeurs
    nomTd.innerText=nom;
    prenomTd.innerText=prenom;
    ageTd.innerText=age;
    deleteBtn.innerText="X";
    deleteBtn.classList.add('delete')

    tbody.appendChild(ligne);
    ligne.appendChild(nomTd)
    ligne.appendChild(prenomTd)
    ligne.appendChild(ageTd)
    ligne.appendChild(optionTd)
    optionTd.appendChild(deleteBtn)

    deleteBtn.addEventListener('click',()=>{
        ligne.remove()
    })
}
addEtudiant("tmimi",'mehdi',31)
addEtudiant("filali",'hamza',12)