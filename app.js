let score = prompt("Please enter your score:");

score = Number(score);

if (score >= 90) {
    console.log("Grade: Excellent");
} else if (score >= 80) {
    console.log("Grade: Good");
} else if (score >= 70) {
    console.log("Grade: Fair");
} else {
    console.log("Grade: Needs Improvement");
}
