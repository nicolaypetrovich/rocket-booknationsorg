window.addEventListener('DOMContentLoaded', init);

function init() {
	$('.accordion .wrap_message').hide();
    $('.accordion .block_discus').on('click', function (e) {
	    e.stopPropagation();
	    e.preventDefault();

	    var $text = $(this).next('.wrap_message');
	    
	    if ( $text.is(':hidden') ) {
	        $('.accordion').each(function () {
	            $(this).find('.wrap_message').slideUp();
	            $(this).removeClass('open_discus');
	        });

	        $(this).addClass('open_discus');
	        $text.slideDown();	        
	    } else {
	        $(this).removeClass('open_discus');
	        $text.slideUp();	        
	    }

    });

   
    
}	