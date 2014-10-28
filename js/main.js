//Navigation Logic
var pages = ['#home', '#about', '#apparel', '#accessories', '#contact'];
var navigationListItems = $('.navbar-nav').children('li');
var hideAllPages = function(speed) {
	var transSpeed = speed || null;
	for(var i = 0, l = pages.length; i < l; i++) {
		$(pages[i]).hide(transSpeed);
	}
};

//Show the default page
hideAllPages();
$('#home').show();

navigationListItems.click(function() {
	var navigationLI = $(this).parent().children(),
		nextPage = $(this).children('a').attr('href');
	
	navigationLI.removeClass('activated');
	$(this).addClass('activated');

	hideAllPages(600);

	$(nextPage).show(600);
});