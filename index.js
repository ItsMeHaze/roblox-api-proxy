const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/v1/*", async (req, res) => {
    try {
        const robloxUrl = "https://apis.roblox.com/" + req.originalUrl.replace("/v1/", "");
        const response = await fetch(robloxUrl);
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener datos de Roblox" });
    }
});

app.listen(PORT, () => console.log(`Proxy activo en puerto ${PORT}`));
