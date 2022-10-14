$(function () {

	var ancho = $(window).width(),
		enlaces = $('#enlaces'),
		btnMenu = $('#btn-menu')

	if (ancho < 780) {
		enlaces.hide();

	}
	btnMenu.on('click', function (e) {
		enlaces.slideToggle();
	});

	$(window).on('resize', function () {
		if ($(this).width() > 780) {
			enlaces.show();

		} else {
			enlaces.hide();
		}

	});
});