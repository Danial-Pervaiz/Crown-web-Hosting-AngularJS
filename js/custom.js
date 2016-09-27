
// Language DropDown on the top of the menu

var dropDownHiddenLanguage = $('.languageDropdown').hide();

$('.language').mouseenter(function(){
	dropDownHiddenLanguage.fadeIn();
});
$('.language').mouseleave(function(){
	dropDownHiddenLanguage.fadeOut();
});