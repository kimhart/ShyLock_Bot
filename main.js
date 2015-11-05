$(document).ready(function(){ 


// The indentation/organization of this code is heinous and I apologize! 


var purse = 10000
var $log = $('#log');
var $prompt = $('#prompt').val();
var $logContainer = $('#logContainer');

var handleInput = function(event){
	var $prompt = $('#prompt').val();
	
	if(event.keyCode===13){
	
		var $li = $('<li>');
			if ($prompt === 'purse') {
				$log.append($li);
				$li.text('Yo! I\'m Shylock and I have ' + purse + ' ducats up for grabs.');
				$('#prompt').val("");
	} else if ($prompt.split(' ')[0] === 'loan' || 'Loan') {
		var customerName = $prompt.split(' ')[1];
		var loanAmount = $prompt.split(' ')[2];
		var ledger = purse - loanAmount;
				$log.append($li);
				$li.text(customerName + ' now owes me ' + loanAmount + ' ducats. New ledger: ' + ledger + ' ducats.');
				$('#prompt').val(""); // should make a sequence that makes it so you can't borrow more than 10,000 ducats...but ran out of time
	} else if ($prompt) {
				$log.append($li);
				$li.text('Yikes... that\'s not a legit request. Try again.');
				$('#prompt').val("");
	}
}
};

$(document).on('keypress', handleInput);

});
 