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
// app.use(express.json());

// let author = " sotinho";

// app.route("/").get((req, res) => res.send(author));

// // pode se escrever assim tambem
// // app.get("/", (req, res) => res.send(author));

// app.route("/").put((req, res) => {
//   author = req.body.author;
//   res.send(author);
// });

//## delete
// let author = "Henrique Soto";

// app.route("/:identificador").delete((req, res) => {
//   author = "";
//   res.send(req.params.identificador);
// });

// ## body params

//middlerware
// app.use(express.json());
// app.route("/").post((req, res) => {
//   const { nome, cidade } = req.body;
//   // console.log(req.body);
//   res.send(`meu nome é ${nome} e minha cidade é ${cidade}`);
// });

// ## Route Params

// app.route("/").get((req, res) => res.send("oi"));
// app.route("/:variavel").get((req, res) => res.send(req.params.variavel));
// app.route("/identidade/:nome").get((req, res) => res.send(req.params.nome));

// ## Route Params

// app.route("/").get((req, res) => res.send(req.query.nome));
// //localhost:3000/?nome=henrique&cidade=guaiba usar no insomnia

// app.route("/about/user").get((req, res) => res.send(req.query.id));
// // localhost:3000/about/user?nome=henrique&cidade=guaiba&id=911992  usar no insomnia

// ## consumindo api do github
