// Frontend

jQuery(document).ready(function( $ ) {

	$('[data-pafe-font-awesome-5]').each(function(){
		var iconClass = $(this).data('pafe-font-awesome-5');
		$(this).find('.madxartwork-icon i').attr('class', iconClass);
		$(this).addClass('active');
	});

});