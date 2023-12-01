let resetBtn = document.getElementById("resetBtn");
let baliseInput = document.getElementById("baliseInput");
let contenuInput = document.getElementById("contenuInput");
let colorInput = document.getElementById("colorInput");
let hrefInput = document.getElementById("hrefInput");
let validerBtn = document.getElementById("validerBtn");
let resultatListe = document.getElementById("resultatListe");
const url = "http://127.0.0.1:3000/elements"
//traitements
let add = (tag, content, color, hrefAttr) => {
  //creation des elements
  let item = document.createElement("li");
  let balise = document.createElement(tag);
  let deleteBtn = document.createElement("button");

  resultatListe.appendChild(item);
  item.appendChild(balise);
  item.appendChild(deleteBtn);

  balise.innerText = content;
  deleteBtn.innerText = "supprimer";

  balise.setAttribute("style", "color:" + color);
  deleteBtn.classList.add("delete");

  deleteBtn.addEventListener("click", () => {
    item.remove();
  });

  if (tag == "a") {
    balise.setAttribute("target", "_blank");
    balise.setAttribute("href", hrefAttr);
  }
};

validerBtn.addEventListener("click", () => {
  let tag = baliseInput.value;
  let content = contenuInput.value;
  let color = colorInput.value;
  let href = hrefInput.value;

  add(tag, content, color, href);

  //vider le formulaire
  tag.selectedIndex = 0;
  content.value = "";
  color.value = "#000000ff";
  href.value = "";
});
let resetFct = () => {
  [...resultatListe.children].forEach((ele) => ele.remove());
};
resetBtn.addEventListener("click", () => {
  resetFct();
});

baliseInput.addEventListener("change", () => {
  if (baliseInput.value == "a")
    hrefInput.parentElement.classList.remove("hidden");
  else hrefInput.parentElement.classList.add("hidden");
});

contenuInput.addEventListener("keyup", () => {
  console.log(contenuInput.value);
  if (contenuInput.value == "" || contenuInput.value.length<3) {
    validerBtn.setAttribute("disabled", "");
    contenuInput.classList.add("error");
    contenuInput.classList.remove("valid");
  } else {
    validerBtn.removeAttribute("disabled");
    contenuInput.classList.remove("error");
    contenuInput.classList.add("valid");
  }
});
const loadElements = () =>{
  const xhr = new XMLHttpRequest()
  xhr.open("GET",url,true)
  xhr.addEventListener("load",()=>{
    if(xhr.status==200)
    {
      // l'affichage
      let datas = JSON.parse(xhr.response)
      datas.forEach(data=>{
        let {id,balise,contenu,color,href} = data
        add(balise,contenu,color,href)
      })
    }
    else
      alert("error on loading data")
  })
  xhr.addEventListener("error",()=>{
    alert("error on loading data")
  })
  xhr.send()
 
}
loadElements()
