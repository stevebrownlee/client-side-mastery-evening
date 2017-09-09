var CatStore = (function(oldCatStore){
	const cats = [];

	oldCatStore.getCats = function(){
		return cats;
	};

	oldCatStore.setCat = function(newCat){
		cats.push(newCat);
	};

	oldCatStore.setAllCats = function(xhrCats){
		cats = xhrCats;
	};
	
	return oldCatStore;
})(CatStore || {});