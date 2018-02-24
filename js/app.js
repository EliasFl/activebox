$(document).scroll(() => {
	let scroll_start = ($('#features').offset().top) - 400;
	let document_position = $(this).scrollTop();

	if (document_position >= scroll_start) {
		$('nav .container').removeClass('nav-border');
		$('nav').addClass('bg-purple2').removeClass('bg-purple1');
	} else {
		$('nav .container').addClass('nav-border');
		$('nav').removeClass('bg-purple2').addClass('bg-purple1');
	}
});