var CatStore = (function(oldCatStore){
	const owners = [];

	oldCatStore.catXHR = function(){
		return owners;
	};
	
	return oldCatStore;
})(CatStore || {});