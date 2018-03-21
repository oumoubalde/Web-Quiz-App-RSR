

//  This function  is using JQuerry and read only the button that are selected and do the sum
function check() {
	
	// declare a variable responses to read only the radio button that are clicked
	var $responses = $('.response:checked');

	var sum = 0;

	for (var i = 0; i < $responses.length; i++) {
		// console.log attribute for each i
		var points = parseInt($responses[i].getAttribute('data-points'));
		
		sum += points;
		
		
		//the next line is to show all the value of data-points
		//console.log(points);
		
	};
	//the next line is to show the sum of all the value in a console
	//console.log("Your total score is " + sum);
	//the next line is to show the result in a differrent page using JavaScript 
	//document.write("Your total score is " + sum);
	// The next line is to show the result in the same page on the bottom of the submit button using Jquerry
	$("#after_submit").html("Your total score is " + sum).show();
	//Math.max(10, 20);
	
	//the code below is to have the maximum scrore for each section
	
	// The code below show the result in percencentage, it will give the result to 2 decimal place eand will round to the nearest integer
	var percentage = Math.round((sum/36)*100).toFixed(2);
	$("#score_Percentage").html("Your scrore in percentage is " + percentage  + " %").show();
	
	// the next code will use a if statement to show the stage for example if the company is crawling (need a lot help), walking(need little help) or Running(good standing)
	
	var stage;
	if ((percentage >0) && (percentage <60)) {
		$("#stage").html("You are crawling. You really need help to improve your business. Contact us today").show();
		//document.write("You are crawling. You really need help. Contact us today");
	} else if ((percentage >60) && (percentage <85)) {
		$("#stage").html("You are Walking. You need a little help Contact us").show();
		
	} else {
		$("#stage").html("You are Running. You are doing great, however if you want to inprove your business to reach 100%, Contact us today").show();
	}
		
	
}

