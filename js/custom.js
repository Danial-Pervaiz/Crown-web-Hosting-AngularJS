
// switcher for the header section. when the user clicks on the current item, it will activate the current item
$('#activator li ').on('click', function(){
	$(this).css({
		'background-color':'#1e88e5'
	}).siblings().css({
		'background-color':'#0096ff'
	});
});

$('#activator li a').on('click', function(){
	if($(this).text().trim() === 'Amazing controls'){
		$('#price').html('$3.30/<span>mo</span>')
	}
	if($(this).text().trim() === 'Web hosting'){
		$('#price').html('$8.30/<span>mo</span>');
	}
	if($(this).text().trim() === 'Reseller hosting'){
		$('#price').html('$12.30/<span>mo</span>');
	}
	if($(this).text().trim() === 'VPS web hosting'){
		$('#price').html('$6.30/<span>mo</span>');
	}
});