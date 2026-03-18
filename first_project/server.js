// URL -> http://localhost:8756
// IP -> 127.0.0.1:8756
const express = require('express');
const app = express();
const PORT = 8756;

app.get('/', (req, res) => {
    console.log("Endpoint was hit.", req.method);
    res.sendStatus(200);
});

app.get('/chill', (req, res) => {
    console.log("Chilling", req.method);
    res.send('Hello World');
})

app.listen(PORT, () => 
    console.log(`Server started on port: ${PORT}`)
);