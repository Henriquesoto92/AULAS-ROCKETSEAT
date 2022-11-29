// fetch("https://api.github.com/users/henriquesoto92")
//   .then((response) => response.json())
//   .then((data) => fetch(data.repos_url))
//   .then((res) => res.json())
//   .then((d) => console.log(d))
//   .catch((err) => console.log(err));

// import axios from "axios";

// axios
//   .get("https://api.github.com/users/henriquesoto92")
//   .then((response) => axios.get(response.data.repos_url))
//   .then((repos) => console.log(repos.data))
//   .catch((error) => console.log(error));

// import axios from "axios";

// Promise.all([
//   axios.get("https://api.github.com/users/henriquesoto92"),
//   axios.get("https://api.github.com/users/henriquesoto92/repos"),
// ])
//   .then((responses) => {
//     console.log(responses[0].data.login);
//     console.log(responses[1].data.length);
//   })
//   .catch((err) => console.log(err.message));

//   const promessa = new Promise(function (resolve, reject) {
//     return resolve("ok");
//   });

//   async function start() {
//     try {
//       const result = await promessa;
//       console.log(result);
//     } catch (e) {
//       console.log(e);
//     } finally {
//       console.log("rodar sempre");
//     }
//   }

//   start();

// import axios from "axios";

// async function fetchRepos() {
//   try {
//     const user = await axios.get("https://api.github.com/users/henriquesoto92");
//     const repos = await axios.get(user.data.repos_url);
//     console.log(repos.data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// fetchRepos();
