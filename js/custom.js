
// switcher for the header section. when the user clicks on the current item, it will activate the current item
$('#activator li ').on('click', function(){
	$(this).css({
		'background-color':'#1e88e5'
	}).siblings().css({
		'background-color':'#0096ff'
	});
});