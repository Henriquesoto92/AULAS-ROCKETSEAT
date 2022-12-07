const express = require("express");
const axios = require("axios");

const app = express();

app.listen("3000");

// ## consumindo api do github
app.route("/").get((req, res) => {
  axios
    .get("https://api.github.com/users/henriquesoto92")
    .then((result) => res.send(`<img src="${result.data.avatar_url}" />`))
    .catch((error) => console.log(error));
});
