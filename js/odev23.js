// Belirli Bir Index’ten Eleman Silme (splice)

let lessons = ["JavaScript", "HTML", "CSS", "React"];

let deleteLesson = Number(prompt(`What is the number of the course you want to delete?`))

  if(deleteLesson >= 0 && deleteLesson < lessons.length) {
    lessons.splice(deleteLesson, 1);

  }else 
    console.log(`Invalid index`)


console.log(lessons)