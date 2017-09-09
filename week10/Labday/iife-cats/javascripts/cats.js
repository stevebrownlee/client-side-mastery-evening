var CatStore = ((oldCatStore) => {
	let cats = [];

	oldCatStore.getCats = () => {
		return cats;
	};

	oldCatStore.setCat = (newCat) => {
		cats.push(newCat);
	};

	oldCatStore.setAllCats = (xhrCats) => {
		cats = xhrCats;
	};
	
	return oldCatStore;
})(CatStore || {});