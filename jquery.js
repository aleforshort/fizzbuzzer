$ (document).ready(function() {

function FizzBuzzer() {

var userInput= parseInt(prompt('Enter number 1 - 100', ''));



for (userInput; userInput<=100; userInput++){
	if (userInput % 3 ==0 && userInput % 5==0){
		$(".numberinput").append("<li>fizzbuzz</li>");
	}
		else if (userInput % 3==0){
		$(".numberinput").append("<li>fizz</li>");	
	}
		else if (userInput % 5==0){
		$(".numberinput").append("<li>buzz</li>");	
	}

	else {
		$(".numberinput").append("<li>" + userInput + "</li>");
	}


}
}

FizzBuzzer ();

});
