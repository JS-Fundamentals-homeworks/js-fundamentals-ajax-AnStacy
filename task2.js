// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

document
  .getElementById("getUserButton")
  .addEventListener("click", async function () {
    const userName = document.getElementById("userNameInput").value;
    const userCitySpan = document.getElementById("userCity");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();

      const user = users.find(
        (u) => u.name.toLowerCase() === userName.toLowerCase()
      );

      if (user) {
        userCitySpan.textContent = user.address.city;
      }
    } catch (error) {
      userCitySpan.textContent = "Error fetching user data.";
      console.error("Fetch error:", error);
    }
  });
