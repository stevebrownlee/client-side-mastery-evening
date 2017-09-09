var CatStore = ((oldCatStore) => {

	oldCatStore.shitBroke = () => {
		console.log("WHAT DID YOU DO?");
	};

	oldCatStore.catLoadWorks = function(){
		let catsData = JSON.parse(this.responseText).cats;
		CatStore.setAllCats(catsData);
		CatStore.ownerXHR();
	};


	oldCatStore.ownerLoadWorks = function(){
		var ownersData = JSON.parse(this.responseText).owners;
		CatStore.setAllOwners(ownersData);
		
		let cats = CatStore.getCats();
		let owners = CatStore.getOwners();
		CatStore.combineArrays(cats, owners);
	};

	oldCatStore.ownerXHR = () => {
		let myOwners = new XMLHttpRequest;
		myOwners.addEventListener("load", CatStore.ownerLoadWorks);
		myOwners.addEventListener("error", CatStore.shitBroke);
		myOwners.open("GET", "db/owners.json");
		myOwners.send();
	};

	oldCatStore.catXHR = () => {
		let myCats = new XMLHttpRequest;
		myCats.addEventListener("load", CatStore.catLoadWorks);
		myCats.addEventListener("error", CatStore.shitBroke);
		myCats.open("GET", "db/cats.json");
		myCats.send();
	};
	
	return oldCatStore;
})(CatStore || {});