var CatStore = (function(oldCatStore){
	let owners = [];

	oldCatStore.combineArrays = function(cats, owners){
		cats.forEach(function(cat){
			owners.forEach(function(owner){
				if(cat.ownerId === owner.id){
					cat.owner = owner.name;
				}
			})
		})
		CatStore.domString(cats)
	};

	oldCatStore.domString = function(inputArray){
		let catz = '';
		for(let i=0; i<inputArray.length; i++){
			let newCat = "";
			newCat+=`<div class="col-xs-3">`
			newCat+=`<div class="catBox col-xs-12 text-center noPad"  id="catBox-${i}">`;
			newCat+=`<div class="catName">${inputArray[i].name}</div>`;
			newCat+=`<img class="catImage" src="${inputArray[i].imageUrl}">`;
			if(inputArray[i].owner !== "None"){
				newCat+= `<button class="btn btn-default owner">${inputArray[i].owner}</button>`
			} else {
				newCat+= `<button class="btn btn-danger owner">Adopt Me!</button>`
			}
			newCat+= `</div>`
			newCat+= `</div>`
			catz += newCat;
		}
		CatStore.writeToDom(catz);
	};

	oldCatStore.writeToDom = function(strang){
		let fancyPetStore = document.getElementById("fancyPetStore");
		fancyPetStore.innerHTML = strang;
	};

	return oldCatStore;
})(CatStore || {});