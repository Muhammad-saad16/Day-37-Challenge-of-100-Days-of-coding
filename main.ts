//           🚀 Day 37 Challenge: Start Coding! 🚀

// Question 109: 
// Write an if statement that logs "Good Morning" if the current time is before 12 PM.

let time = new Date().getHours();

if (time < 12) {
    console.log("Good Morning");
}
console.log(time);



// Question 110: 
// Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function assignGrade(score: number) {
    if (score >= 90){
        return "A";
    } else if (score >= 80){
        return "B";
    }else if (score >= 70){
        return "C";
    } else if (score >= 60){
        return "D";
    }else{
        return "F";
    }
}

console.log(assignGrade(77));  //output is C
console.log(assignGrade(91));  //output is A



// Question 111: 
// Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

function personAgeGroup(age:number): string {
    if (age < 13) {
        return "child";
    } else if (age <= 19) {
        return "teenager";
    } else {
        return "adult";
    }
}

console.log(personAgeGroup(12));  //output is child
console.log(personAgeGroup(77));  //Adult
