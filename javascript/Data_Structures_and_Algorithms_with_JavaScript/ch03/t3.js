// node js
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
var List = require('./List2');

function createArr(file){
	var content = fs.readFileSync(file);
	var arr = content.toString().split(/\s*\n\s*/);
	return arr;
}

var movies = createArr('./films.txt');
var movieList = new List();

movies.forEach(function(movie){
	if(movie) movieList.append(movie.replace(/^\d{1,2}\.\s*/, ''));
});

function displayList(list){
	for(list.front(); list.inRange(); list.next()){
		console.log(list.getElement());
	}
}

//displayList(movieList);

function displayList2(list){
	var i = 0;
	for(list.front(); list.inRange(); list.next()){
		i++;
		var ele = list.getElement();
		if(ele instanceof Customer){
			console.log(ele.name + ', ' + ele.movie);
		}
		else {
			console.log(i + '. ' + ele);
		}
	}
}

var customers = new List();

function Customer(name, movie){
	this.name = name;
	this.movie = movie;
}

function checkOut(name, movie, filmList, customerList){
	if(movieList.contains(movie)){
		var c = new Customer(name, movie);
		customerList.append(c);
		filmList.remove(movie);
	}
	else{
		 console.log(movie + " is not available.");
	}
}

console.log("Available movies: ");
displayList2(movieList);

rl.question("Enter your name: ", function(name){
	rl.question("What movie would you like?", function(movie){
		checkOut(name, movie, movieList, customers);
		console.log("Customer Rentals: ");
		displayList(customers);	
		console.log("Movie Now Available");
		displayList2(movieList);
		rl.close();
	});
});

