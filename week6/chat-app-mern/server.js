const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const cookieParser = require('cookie-parser');

const { socketEvents } = require('./server/controllers/sockets.controllers');

app.use(cookieParser())
app.use(cors()) 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const usersRoutes = require('./server/routes/user.routes');
require('./server/config/mongoose.config');


usersRoutes(app);



const server = app.listen(port, () => console.log('Im listening so cool!'));

socketEvents(server, cors); 