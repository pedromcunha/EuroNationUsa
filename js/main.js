var paypalButtonHtml = 
	'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">' +
		'<input type="hidden" name="cmd" value="_s-xclick">'+
		'<table class="button-selection">' +
		'<tr><td><input type="hidden" name="on0" value="Sizes">Sizes</td></tr><tr><td><select name="os0">' +
			'<option value="Large">Large </option>' +
			'<option value="Medium">Medium </option>' +
			'<option value="Small">Small </option>' +
		'</select> </td></tr> ' +
		'</table>' +
		'<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">' +
		'<button type="submit" class="btn btn-primary" name="BuyNow" alt="PayPal - The safer, easier way to pay online!">Buy Now</button>' +
		'<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">' +
	'</form>';


$(document).ready(function() {
    $('.paypal').html(paypalButtonHtml);
});