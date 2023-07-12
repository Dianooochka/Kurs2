document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const userList = Array.from(users);
      const randomUsers = getRandomItems(userList, 3);

      randomUsers.forEach((user) => {
        const card = createContactCard(user);
        container.appendChild(card);
      });
    });

  function createContactCard(user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const initials = user.name
      .split(" ")
      .map((name) => name[0])
      .join("");
    const randomColor = generateRandomColor();
    const avatarUrl = `https://via.placeholder.com/200/${randomColor}?text=${initials}`;
    const avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = avatarUrl;
    avatar.alt = initials;
    card.appendChild(avatar);

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = user.name;
    card.appendChild(name);

    const phone = createContactLink("Phone", `tel:${user.phone}`);
    const email = createContactLink("Email", `mailto:${user.email}`);
    card.appendChild(phone);
    card.appendChild(email);

    const address = document.createElement("p");
    address.classList.add("address");
    address.textContent = `${user.address.city}, ${user.address.street}, ${user.address.suite}`;
    card.appendChild(address);

    return card;
  }

  function createContactLink(label, href) {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    link.classList.add("contact-info");
    return link;
  }

  function getRandomItems(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  function generateRandomColor() {
    const symbols = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return color;
  }
});
