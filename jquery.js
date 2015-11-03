$ (document).ready(function() {
	prompt('Enter number 1 - 100', '');
});


var DEBUG_MODE = true;

var debug = function(msg) {
    if (DEBUG_MODE == true) {
        console.log("DEBUG:", msg);
    }
}

for (var i=1; i<=100; i++){
	if (i % 3 ==0 && i % 5==0){
		debug("fizzbuzz",i);
	}
		else if (i % 3==0){
		debug("fizz",i);	
	}
		else if (i % 5==0){
		debug("buzz",i);	
	}

	else {
		debug(i);
	}
}

