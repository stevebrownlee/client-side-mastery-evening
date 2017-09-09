var CatStore = (function(oldCatStore){
	const owners = [];

	oldCatStore.getOwners = function(){
		return owners;
	};

	oldCatStore.setOwner = function(newOwner){
		owners.push(newOwner);
	};

	oldCatStore.setAllCats = function(xhrOwners){
		owners = xhrOwners;
	};
	
	return oldCatStore;
})(CatStore || {});