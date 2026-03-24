// Öğrenci ve Eğitmen Verilerini DOM ile Listeleme (mini-pratik)

let manStudents = document.getElementById(`male-student-list`);
let womanStudents = document.getElementById(`female-student-list`);
let frontendInstructor = document.getElementById(`frontend-instructors-list`);
let backendInstructor = document.getElementById(`backend-instructors-list`);


let maleStudentsArray = students.filter(student => student.gender === "Erkek" && student.role === "Öğrenci");
let femaleStudentsArray = students.filter(student => student.gender === `Kadın` && student.role === `Öğrenci`);
let instructorsArray = students.filter(student => student.role === "Eğitmen");


let maleTitle = document.getElementById("male-student-title");
maleTitle.textContent = `Erkek Öğrenciler (${maleStudentsArray.length})`;

let femaleTitle = document.getElementById("female-student-title");
femaleTitle.textContent = `Kadın Öğrenciler (${femaleStudentsArray.length})`;

let frontendTitle = document.getElementById("frontend-instructors-title");
frontendTitle.textContent = `Frontend Eğitmenler (${instructorsArray.filter(i => i.section === "Frontend").length})`;

let backendTitle = document.getElementById("backend-instructors-title");
backendTitle.textContent = `Backend Eğitmenler (${instructorsArray.filter(i => i.section === "Backend").length})`;




maleStudentsArray.forEach(herStudent => {
  let li = document.createElement(`li`);
  li.textContent = `${herStudent.name} - ${herStudent.section} - ${herStudent.gender}`;
  manStudents.appendChild(li);
});


femaleStudentsArray.forEach(herStudent => {
  let li = document.createElement(`li`);
  li.textContent = `${herStudent.name} - ${herStudent.section} - ${herStudent.gender}`;
  womanStudents.appendChild(li);
});


instructorsArray.forEach(instructor => {
  let li = document.createElement("li");
  li.textContent = instructor.name;

  if (instructor.section === "Frontend") {
    frontendInstructor.appendChild(li);
  } else if (instructor.section === "Backend") {
    backendInstructor.appendChild(li);
  }

});