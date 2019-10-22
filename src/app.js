const express = require('express');
const app = express();

const Task = require('./model/Task');

// setting
app.set('views',__dirname+'/views')
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', async (req,res)=>{
    const tasks = await Task.find();
    res.render('index',{tasks})
})

// Create Task
app.post('/create',async (req,res) => {
    const newtask = new Task({task: req.body.task, description: req.body.description});
    await newtask.save();
    res.redirect('/')
});


// Static File
app.use(express.static(__dirname+'/public'))

module.exports = app;