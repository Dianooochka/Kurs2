let name = prompt("Введіть ваше ім'я:");
while (!name) {
  name = prompt("Будь ласка, введіть ваше ім'я:");
}

let age = prompt("Введіть ваш вік:");
while (!age || isNaN(age) || age < 1 || age > 100) {
  age = prompt("Будь ласка, введіть коректний вік (від 1 до 100):");
}

let smokingChoice = prompt("Ви курите? (введіть 'так' або 'ні')").toLowerCase();

while (smokingChoice !== "так" && smokingChoice !== "ні") {
  smokingChoice = prompt("Будь ласка, введіть 'так' або 'ні':").toLowerCase();
}

if (age < 18) {
  if (smokingChoice === "ні") {
    alert(`Молодець ${name}! Гарний приклад для своїх однолітків.`);
  } else {
    let parentsAware = confirm(`${name}, а твої батьки знають про це?`);
    if (parentsAware) {
      alert(`Можливо, варто розповісти батькам, ${name}.`);
    }
  }
} else {
  if (smokingChoice === "ні") {
    alert(`Супер ${name}! Мабуть ще й спортом займаєшся!`);
  } else {
    alert(`Що ж ${name}, це твій вибір. Але я не радив би курити.`);
  }
}
