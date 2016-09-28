
// Language DropDown on the top of the menu

$('.languageDropdown').hide();
$('.language').click(function(){
	$('.languageDropdown').fadeToggle();
});
$('.languageDropdown li').on('click', function(){
	if( $(this).text() === 'ENGLISH'){
		alert('english');
	}
	else{
		alert('wrong value');
	}
	
});



//Please change this to complete the language section
$('.header').click(function(){
	$('.languageDropdown').fadeToggle();
});
