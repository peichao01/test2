//node js

var Stack = require('./Stack');

function isPalindrome(word){
	var s = new Stack();
	for(var i = 0; i < word.length; i++){
		s.push(word[i]);
	}
	var rword = '';
	while(s.length() > 0){
		rword += s.pop();
	}
	return word == rword;
}

function logIsPalindrome(word){
	console.log(word + " " + (isPalindrome(word) ? "is" : "is not") + " a palindrome.");
}

logIsPalindrome("hello");
logIsPalindrome("racecar");
