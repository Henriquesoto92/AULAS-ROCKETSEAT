const url = "http://localhost:5600/api";

function getUsers() {
  axios
    .get(url)
    .then((response) => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch((error) => console.error(error));
}

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
}
const newUser = {
  name: "Gabriel farmacion",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de Janeiro",
};

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then((response) => {
      userName.textContent = response.data.name;
      userCity.textContent = response.data.city;
      userID.textContent = response.data.id;
      userAvatar.src = response.data.avatar;
    })
    .catch((error) => console.error(error));
}

function updateUser(id, userUpdated) {
  axios
    .put(`${url}/${id}`, userUpdated)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
}

const userUpdated = {
  name: "maike lindo",
  avatar: "https://picsum.photos/200/300",
  city: "santa catarina",
};

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
}
// deleteUser(3);
// updateUser(3, userUpdated);
addNewUser();
getUsers();
// getUser(3);
