// URL -> http://localhost:8756
// IP -> 127.0.0.1:8756
const express = require('express');
const app = express();
const PORT = 8756;

const data = ["BEE"]

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`
        <body style="background-color: pink; color: blue;">
            <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
    `);
});

app.get('/chill', (req, res) => {
    console.log("Chilling", req.method);
    res.send('Hello World');
})

app.get('/api/data', (req, res) => {
    console.log("data was send");
    res.status(599).send(data);
})

app.post('/api/data', (req, res) => {
    const new_entry = req.body
    data.push(new_entry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    const name = data.pop()
    console.log(`${name} was deleted.`)
    res.sendStatus(203)
})

app.listen(PORT, () => 
    console.log(`Server started on port: ${PORT}`)
);