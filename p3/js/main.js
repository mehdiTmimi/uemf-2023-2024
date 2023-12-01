const tbody = document.getElementById('tbody')
const urlApi ="http://127.0.0.1:3000/etudiants"
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
    ajax.open("GET",urlApi,false)
    //ajax.setRequestHeader("Content-Type","application/json")
    ajax.send()
    let etudiants = JSON.parse(ajax.response)
    etudiants.forEach(etudiant => {
        addEtudiantToTable(etudiant)
    });
}
loadEtudiants()

const sendDataToServer =(nom,age)=>{
    //ajax
    const xhr = new XMLHttpRequest()
    xhr.open("POST",urlApi,false)
    xhr.setRequestHeader("Content-Type","application/json")
    const data = {
        nom,
        age
    }
    const jsonData= JSON.stringify(data)
    xhr.send(jsonData)
    if(xhr.status==201)
    {
       alert("insertion reussi")
    }
    else alert("error")
}