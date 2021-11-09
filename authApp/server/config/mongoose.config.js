const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/auth-app-bd",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('conectado'))
.catch(err => console.log("error al conectar", err));