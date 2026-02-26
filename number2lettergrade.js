//input
let nGrade = 75;
let letterGrade = "";
//processing

//select among letter grades
if (nGrades < 50) {
    letterGrade = "F";
}else if (nGrade < 60) {
    letterGrade = "D";
}else if (nGrade <70) {
    letterGrade = "C";
}else if (nGrade <80) {
    letterGrade = "B";
} else if (nGrade < 90) {
    letterGrade = "A";
}else {
    letterGrade = "A+";
}

//output

console.log (letterGrade)