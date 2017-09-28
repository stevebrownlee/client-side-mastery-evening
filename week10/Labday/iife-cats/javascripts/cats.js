var CatStore = ((oldCatStore) => {
	let cats = [];

	oldCatStore.getCats = () => {
		return cats;
	};

	oldCatStore.adoptCat = (catIndex) => {
		cats[catIndex].ownerId = 1;
		let myCats = CatStore.getCats();
		let owners = CatStore.getOwners();
		CatStore.combineArrays(myCats, owners)
	};

	oldCatStore.setAllCats = (xhrCats) => {
		cats = xhrCats;
	};
	
	return oldCatStore;
})(CatStore || {});