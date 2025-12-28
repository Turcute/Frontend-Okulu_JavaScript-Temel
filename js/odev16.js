//Birden Fazla Kullanıcı Girdisini Diziye Ekleme (push)
let task = [];

let userTask = Number(prompt("How many tasks would you like to add?"));

for (let i = 0; i < userTask; i++) {
  let input = prompt("Enter task name");
  task.push(input);
}

console.log(`Your tasks: ${task}`);