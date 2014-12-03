/*=====================HTML TEMPLATES (extrapolate later) ============================*/
var paypalAddToCart = 
	'<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >' +
	'<input type="hidden" name="cmd" value="_s-xclick">'+
	'<input type="hidden" name="hosted_button_id" value="TZBLPK2D37UUE">'+
	'<table class="button-selection">' +
	'<tr><td><input type="hidden" name="on0" value="Size">Size</td></tr><tr><td><select name="os0">' +
		'<option value="Large">Large </option>'+
		'<option value="Medium">Medium </option>'+
		'<option value="Small">Small </option>'+
	'</select> </td></tr>'+
	'<tr><td><input type="hidden" name="on1" value="T-shirt Color">T-shirt Color</td></tr><tr><td><select name="os1">' +
		'<option value="Grey">Grey </option>' +
		'<option value="Black">Black </option>' +
		'<option value="White">White </option>' +
		'<option value="Teal">Teal </option>' +
	'</select> </td></tr>' +
	'<tr><td><input type="hidden" name="on2" value="Design Color">Design Color</td></tr><tr><td><select name="os2">' +
		'<option value="Grey">Grey </option>' +
		'<option value="Black">Black </option>' +
		'<option value="White">White </option>' +
		'<option value="Teal">Teal </option>' +
	'</select> </td></tr>' +
	'<tr style="display: none;"><td><input class="designInput" type="hidden" name="on3" value="Design">Design</td></tr><tr style="display: none;"><td><input type="text" name="os3" maxlength="200"></td></tr>'+
	'</table>'+
	'<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">'+
	'<button type="submit" class="btn btn-primary paypal" name="submit" alt="PayPal - The safer, easier way to pay online!"><i class="fa fa-shopping-cart"></i> Add to cart </button>'+
	'<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">'+
	'</form>';

var viewCartButton = 
	'<form target="paypal" class="cart" action="https://www.paypal.com/cgi-bin/webscr" method="post" >'+
		'<input type="hidden" name="cmd" value="_s-xclick">'+
		'<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">'+
		'<button class="btn btn-primary" type="submit" name="submit" alt="PayPal - The safer, easier way to pay online!"><i class="fa fa-shopping-cart"></i> View Cart</button>' +
		'<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">' +
	'</form>';


$(document).ready(function() {
    $('.paypal-cart').html(paypalAddToCart);
    $('.paypal-view-cart').html(viewCartButton);
    //sections on the webpage
    var sections = $('.container').children('section');
    sections.hide();
    $('#home').show();

    //Change the design value on the fly
    $('.paypal').bind('click', function() {
    	var design = $(this).closest('.paypal-cart').attr('value');
    	var designInput = $(this).parent().find('.designInput');

    	designInput.val('Design' + design);
    });

    //pagination
    $('.nav').children('li').children('a').bind('click', function(event) {
    	event.preventDefault();
    	var clickedTab = $(this).attr('href');

		$('.nav').children('li').removeClass('activated'); 	
		$(this).parent().addClass('activated');
		sections.hide('slow');
		$(clickedTab).show('slow');
    });
    //shirt modal
    $('.shirt-image').bind('click', function(event) {
    	var imageUrl = $(this).attr('src');
    	$('#tshirt-modal-image').attr('src', imageUrl);
    	$('#tshirt-modal').modal('show');
    });
});


