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