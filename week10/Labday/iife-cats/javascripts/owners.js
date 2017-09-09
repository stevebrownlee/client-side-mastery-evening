var CatStore = (function(oldCatStore){
	let owners = [];

	oldCatStore.getOwners = function(){
		return owners;
	};

	oldCatStore.setOwner = function(newOwner){
		owners.push(newOwner);
	};

	oldCatStore.setAllOwners = function(xhrOwners){
		owners = xhrOwners;
	};
	
	return oldCatStore;
})(CatStore || {});