const express = require('express');
const app = express();
const port = 8080;
const studentsRoutes = require('./server/routes/students.routes');
require('./server/config/mongoose.config');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

studentsRoutes(app);



app.listen(port, () => console.log('Im listening so cool!'))