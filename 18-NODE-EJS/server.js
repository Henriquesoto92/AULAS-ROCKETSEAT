const express = require('express');
const app = express();

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    const items = [
        {
            title: "S",
            message: "ofisticado"
        },
        {
            title: "O",
            message: "bjetivo"
        },
        {
            title: "T",
            message: "ransparente"
        },
        {
            title: "O",
            message: "riginal"
        }
    ];

    const subtitle = " Uma linguagem de modelagem para criação de páginas HTML utilizando Javascript";

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function (req, res) {
    res.render("pages/about")
})

app.listen(8080);
console.log("Rodando");