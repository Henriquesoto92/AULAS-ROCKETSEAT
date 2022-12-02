const express = require("express");

const app = express();

app.listen("3000");

//## GET
// app.route("/").get((req, res) => res.send("hello"));
// app.route("/sobre").get((req, res) => res.send("sobre"));

//## POST
//middlerware
// app.use(express.json());

// app.route("/").post((req, res) => ress.send(res.body));

//## PUT - editar
//middlerware
app.use(express.json());

let author = " sotinho";

app.route("/").get((req, res) => res.send(author));

// pode se escrever assim tambem
// app.get("/", (req, res) => res.send(author));

app.route("/").put((req, res) => {
  author = req.body.author;
  res.send(author);
});
