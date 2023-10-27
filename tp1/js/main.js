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
content.appendChild(div)