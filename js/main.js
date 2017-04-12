function runRomanConvert() {

	// var number = [1, 5, 10, 50, 100, 500, 1000];
	// var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
	var number = [1000, 500, 100, 50, 10, 5, 1];
	var roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
 	var romanized = '';

 var input = document.querySelector('.rom-input').value;
 
 var string = parseInt(input);
 console.log(string);

  // for (var i = 0; i < number.length; i++) {
  // 	while (number.length[i] <= string) {
  // 		romanized += roman[i]; 
  // 			string -= number[i]; 
  // 	} 
  // 		return romanized; 
  // }; 

 for (var i = 0; i < number.length; i++) {
  while (string % number[i] < string) {
  	romanized += roman[i]; 
  	string -= number[i]; 
  } 
}
  	document.querySelector('.rom-output').textContent=romanized; 
  };
