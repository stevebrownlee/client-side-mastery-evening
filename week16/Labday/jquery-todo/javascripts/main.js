$(document).ready(function(){
	console.log(FbAPI);
	$('#new-item').click(()=>{
		$('.list-container').addClass("hide");
		$('.new-container').removeClass("hide");
		
	});

	$('#list-items').click(()=>{
		$('.new-container').addClass("hide");
		$('.list-container').removeClass("hide");
	});
});


