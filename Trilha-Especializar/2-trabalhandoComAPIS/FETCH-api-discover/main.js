const url = "http://localhost:5600/api";

function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error));
}

function getUser(id) {
  fetch(`${url}/${id}`)
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
    .catch((error) => console.error(error));
}

function updateUser(updateUserOld, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateUserOld),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertAPI.textContent = data))
    .catch((error) => console.error(error));
}

const newUser = {
  name: "Gabriel farmacion",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de Janeiro",
};

const updateUserOld = {
  name: "Henrique Soto",
  avatar: "https://picsum.photos/200/300",
  city: "guaiba",
};

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => (alertAPI.textContent = data))
    .catch((error) => console.error(error));
}

getUsers();
getUser(1);
deleteUser(5);
// updateUser(updateUserOld, 1);
// addUser(newUser);
