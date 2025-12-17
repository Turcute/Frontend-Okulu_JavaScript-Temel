// Öğrenci Sınav Notu Hesaplama (if / else)

let grade = Number(prompt(`Please enter your grade:`));


if (grade < 0 || grade > 100) {
  console.log(`Please enter a value between 0 and 100`);
} else if (grade >= 100) {
  console.log(`You passed, well done!`)
} else if (grade >= 80) {
  console.log(`You passed, good job`)
} else if (grade >= 70) {
  console.log(`You passed, very well`) 
} else if (grade >= 60) {
  console.log(`You passed, nice`) 
} else if (grade >= 50) {
  console.log(`You passed, not bad`) 
} else{
  console.log(`You failed the exam.`)
}