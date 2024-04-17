# Proyecto con Node.js

## Primeros pasos

Paso 1: Inicialización de package.json

```sh
npm init -y
```

Paso 2: Instalación de express

```sh
npm i express
```

Paso 3: Inicializacion de nodemon

```sh
npm i -D nodemon
```

Paso 4: Configuración de módulos

```json
"type": "module",
```

Paso 5: Configuración de scripts

```json
"scripts": {
        "start": "node app.js",
        "watch": "node --watch app.js",
        "dev": "nodemon app.js"
    },
```

Paso 6: Creación de index.js

```sh
index.js
```

Paso 7: Creación de .gitignore

```sh
.gitignore
```

## Middleware

```js
const authMiddleware = (req, res, next) => {
    const user = req.headers.authorization;

    user ? next() : res.status(404).send("quien es??");
};
```

Alternativa

```js
app.use("/Tiempo", (req, res, next) => {
    const Auth = req.header("Authorization");
    Auth ? next() : res.send("¿Quién es?");
});

app.get("/Tiempo", (req, res) => {
    const tiempo = { time: Date.now() };
    res.send(tiempo);
});
```

## Devolver sitios web

Crear carpeta public

```sh
public
```

Dentro de carpeta public crear index.html, style.css y app.js

```sh
index.html
```

```sh
style.css
```

```sh
app.js
```

Configurar la ruta a la carpeta public

```js
const __dirname = import.meta.dirname;

app.use(express.static(__dirname + "/public"));
```
