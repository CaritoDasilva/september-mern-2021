const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
app.use(cors()) 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const usersRoutes = require('./server/routes/user.routes');
require('./server/config/mongoose.config');


usersRoutes(app);



app.listen(port, () => console.log('Im listening so cool!'))