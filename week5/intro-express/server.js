const express = require('express');
const app = express();
const port = 8080;
const { createData } = require('./controllers');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.get('/api/:string', (req, res) => {
    const { params } = req;
    res.json({msg: `Hola ninjas, soy ${params.string} les hablo desde el server :)`})
});

app.post('/api/user', (req, res) => {
    const { body } = req;
    console.log("🚀 ~ file: server.js ~ line 12 ~ app.post ~ body", body)
    res.json({user: body});
})

app.get('/api/controller', createData);


app.listen(port, () => console.log('Im listening so cool!'))
