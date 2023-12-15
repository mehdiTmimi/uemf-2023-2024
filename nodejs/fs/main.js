const fs = require("fs");

/*console.log("avant ecriture");
//fs.writeFileSync("./data.txt","bonjour uemf")
fs.writeFile("./data2.txt","bonjour uemf 2",()=>{
    console.log("apres ecriture");
})
console.log("fin fichier");*/
/*console.log("avant");
fs.promises.writeFile("./data.txt","salut").then(()=>{
    console.log("apres ecriture reussi");
}).catch(err=>console.log(err))
console.log("fin");*/
let main = async () => {
  console.log("avant");
  await fs.promises.writeFile("./data.txt", "salut");
  console.log("apres ecriture reussi");
  console.log("fin");
};
main();
