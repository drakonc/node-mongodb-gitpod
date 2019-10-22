const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://drakonc:Passw0rd!!@cluster0-v5ww7.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('DB is Connected'))
  .catch(e => console.log(e));