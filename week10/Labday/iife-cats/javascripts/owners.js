var CatStore = ((oldCatStore) => {
	let owners = [];

	oldCatStore.getOwners = () => {
		return owners;
	};

	oldCatStore.setOwner = (newOwner) => {
		owners.push(newOwner);
	};

	oldCatStore.setAllOwners = (xhrOwners) => {
		owners = xhrOwners;
	};
	
	return oldCatStore;
})(CatStore || {});