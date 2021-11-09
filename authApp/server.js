const express = require('express');
const app = express();
const port = 8000; 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./server/routes/user.routes');
require('dotenv').config();
require('./server/config/mongoose.config');

console.log("🚀 ~ file: server.js ~ line 9 ~ process.env", process.env.SECRET_KEY)

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

userRoutes(app);


app.listen(port, () => console.log(`Ey ninjas the server is running in the port ${port}`));
