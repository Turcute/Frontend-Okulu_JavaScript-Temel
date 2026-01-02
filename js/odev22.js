// Kullanıcı Girdileriyle Öncelikli Liste Oluşturma (unshift)

let tasks = []

let userTask = Number(prompt("How many tasks would you like to add?"));

for (let i = 0; i < userTask; i++) {
  let input = prompt(`Enter task name`)
  tasks.unshift(input)
}

console.log(`Tasks: ${tasks}`)


