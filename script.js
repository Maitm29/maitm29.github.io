function main() {
	$('.jumbotron').hide();
	$('.jumbotron').fadeIn(10000);
    
	
	$('.col-sm-3').hide();
	$('.col-sm-6').hide();
	$('#myDecoder').hide();
	$('.choice').click(function(){
	$('.col-sm-6').toggle();
	$('.col-sm-3').toggle();
	$('#myDecoder').toggle();
	});

}
$(document).ready(main);
