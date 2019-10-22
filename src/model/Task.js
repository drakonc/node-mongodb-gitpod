const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    task: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports =  model('Task', TaskSchema);