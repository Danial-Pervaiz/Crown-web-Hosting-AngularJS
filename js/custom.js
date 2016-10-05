
// Language DropDown on the top of the menu

$('.languageDropdown').hide();
// $('#Lang').click(function(){
// 	$('.languageDropdown').fadeToggle();
// });
// $('.languageDropdown li').on('click', function(){
// 	var reg = /^\s*|\s*$/g;  
// 	var text = $(this).text().replace(reg, "");
// 	if( text === 'ENGLISH'){
// 		$('.language a').text('ENG');
// 		$('.languageDropdown').fadeOut();
// 	}
// 	if( text === 'SPANISH'){
// 		$('.language a').text('SPN');
// 		$('.languageDropdown').fadeOut();
// 	}
// 	if( text === 'ARABIC'){
// 		$('.language a').text('ARB');
// 		$('.languageDropdown').fadeOut();
// 	}
// 	if( text === 'TELUGU'){
// 		$('.language a').text('TLG');
// 		$('.languageDropdown').fadeOut();
// 	}
// });


//Please change this to complete the language section
$('.header').click(function(){
	$('.languageDropdown').fadeToggle();
});

// angular JS form validation 

angular.module('LoginForm', [])
.controller('mainController', [function(){}]);

$('.loginForm').hide();
$('#Lang').on('click', function(){
	$('.loginForm').fadeToggle();
});