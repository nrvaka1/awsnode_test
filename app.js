const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Om Nama Shiva Ya");
});

app.listen(3000, () => {
    console.log("AWS App");
});