import express from "express";
import { products } from "./products.js";
import { authMiddleware } from "./middleware/auth.middleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = import.meta.dirname;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.send({ msg: "Helloucito" });
});

app.get("/TocToc", (req, res) => {
    res.send("Quien es??");
});

app.get("/products/", (req, res) => {
    res.json(products);
});

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const requerido = products.find((item) => item.id === +id);
    if (!requerido) return res.send("Producto no encontrado");

    return res.json(requerido);
});

app.get("/azar/:numero", (req, res) => {
    const { numero } = req.params;
    const aleatorio = Math.ceil(Math.random() * 3);
    +numero === aleatorio
        ? res.send("<center><h1>Hoy estas de suerte ;)</h1></center>")
        : res.send("<center><h1>Buena suerte para la próxima</h1></center>");
});

app.get("/estudiar", (req, res) => {
    res.redirect("https://desafiolatam.com/");
});

app.get("/tiempo", authMiddleware, (req, res) => {
    const tiempo = Date.now();
    res.json({ tiempo: tiempo });
});

app.use("*", (req, res) => {
    res.send("<center><h1>Sorry, aquí no hay nada :/</h1></center>");
});

app.listen(PORT, () => {
    console.log(`el puerto ${PORT} esta escuchando; http://localhost:${PORT}`);
});
