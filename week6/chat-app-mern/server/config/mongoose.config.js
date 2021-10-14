const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chat_app_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
} ).then(() => console.log('We are making connection!'))
    .catch(err => console.log(err));