function Student(grades){
	this.grades = grades;
	this.average = average;
}

function average(){
	return this.grades.reduce(function(l, r){return l + r}) / this.grades.length;
}

function Grades(){
	this.storedGrades = [];
	this.addGrade = addGrade;
	this.gradeAverage = gradeAverage;
}

function addGrade(student){
	this.storedGrades.push(student);
}

function gradeAverage(studentIndex){
	return this.storedGrades[studentIndex].average();
}

var grades = new Grades();
grades.addGrade(new Student([61, 73, 69]));
grades.addGrade(new Student([68, 78, 81]));
grades.addGrade(new Student([82, 69, 73]));

print(grades.gradeAverage(0).toFixed(2));
print(grades.gradeAverage(1).toFixed(2));
print(grades.gradeAverage(2).toFixed(2));
