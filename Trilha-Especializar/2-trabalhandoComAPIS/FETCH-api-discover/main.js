const url = "http://localhost:5600/api";

function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error));
}
function getUser() {
  fetch(`${url}/1`)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch((error) => console.error(error));
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertAPI.textContent = data))
    .catch();
}

const newUser = {
  name: "Gabriel farmacion",
  avatar: "http://lorempixel.com/300/300",
  city: "Rio de Janeiro",
};

addUser(newUser);

getUsers();
getUser();
