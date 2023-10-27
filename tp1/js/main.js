let f1=()=>{
    // creations des elements
let div = document.createElement("div")
let h1 = document.createElement("h1")
let p = document.createElement("p")

// liaison
div.appendChild(h1)
div.appendChild(p)

//modifier le contenu
h1.innerText="salut"
p.innerText="  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo obcaecati, tenetur, quibusdam ipsa facere necessitatibus voluptatibus, similique exercitationem tempore rerum at harum voluptatum commodi quasi! Veritatis tempore commodi in aliquam?"

// lier avec l'arbre Dom
let content=document.getElementById('content')
content.innerHTML=""
content.appendChild(div)
}
let f2=()=>{
    let x =10;
    console.log(x)
}

//en utilisant les attributs (statique) ajouter un 
// evenement click au H1
let h1=document.getElementById("title")
h1.setAttribute('onclick','alert("salut")')

//---------
let btn2=document.getElementById('btn2')
let callback1=()=>{
    console.log('click dynamique');
}
btn2.addEventListener('click',callback1)
btn2.addEventListener('click',()=>{
    console.log('click dynamique personnaalisee');
})
btn2.addEventListener('click',()=>{
    f1()
})

btn2.removeEventListener('click',callback1)