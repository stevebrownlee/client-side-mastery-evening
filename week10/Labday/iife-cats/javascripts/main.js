CatStore.catXHR();

document.getElementById("fancyPetStore").addEventListener("click", (event) => {
  if(event.target.id.indexOf("adopt") === 0){
  	console.log("event", event);
  	let id = event.target.id;
  	let idIndex = id.split("-")[1];
  	console.log("idIndex", idIndex);
  	CatStore.adoptCat(idIndex);

  }
})