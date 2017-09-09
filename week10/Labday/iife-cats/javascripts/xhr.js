var CatStore = (function(oldCatStore){

	oldCatStore.shitBroke = function(){
		console.log("WHAT DID YOU DO?");
	};

	oldCatStore.catLoadWorks = function(){
		var catsData = JSON.parse(this.responseText).cats;
		CatStore.setAllCats(catsData);
		console.log("catsData", catsData);
		CatStore.ownerXHR();
	};


	oldCatStore.ownerLoadWorks = function(){
		var ownersData = JSON.parse(this.responseText).owners;
		console.log("ownersData", ownersData);
		CatStore.setAllOwners(ownersData);
	};

	oldCatStore.ownerXHR = function(){
		var myOwners = new XMLHttpRequest;
		myOwners.addEventListener("load", CatStore.ownerLoadWorks);
		myOwners.addEventListener("error", CatStore.shitBroke);
		myOwners.open("GET", "db/owners.json");
		myOwners.send();
	};

	oldCatStore.catXHR = function(){
		var myCats = new XMLHttpRequest;
		myCats.addEventListener("load", CatStore.catLoadWorks);
		myCats.addEventListener("error", CatStore.shitBroke);
		myCats.open("GET", "db/cats.json");
		myCats.send();
	};
	
	return oldCatStore;
})(CatStore || {});