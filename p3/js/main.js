const tbody = document.getElementById('tbody')

const addEtudiantToTable = (etudiant)=>{
    const tr = document.createElement("tr")
    const tdId = document.createElement("td")
    const tdNom = document.createElement("td")
    const tdAge = document.createElement("td")
    const tdOptions = document.createElement("td")
    const btnDelete = document.createElement("button")
    const btnUpdate= document.createElement("button")
    tbody.appendChild(tr)
    tr.appendChild(tdId)
    tr.appendChild(tdNom)
    tr.appendChild(tdAge)
    tr.appendChild(tdOptions)
    tdOptions.appendChild(btnDelete)
    tdOptions.appendChild(btnUpdate)
    tdId.innerText = etudiant.id
    tdNom.innerText = etudiant.nom
    tdAge.innerText = etudiant.age
    btnDelete.innerText="X"
    btnUpdate.innerText="U"
}
const loadEtudiants = ()=>{
    const ajax = new XMLHttpRequest()
    ajax.open("GET","http://10.12.48.240:3000/etudiants",false)
    ajax.send()
    let etudiants = JSON.parse(ajax.response)
    etudiants.forEach(etudiant => {
        addEtudiantToTable(etudiant)
    });
}
loadEtudiants()