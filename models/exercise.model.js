const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const exerciseSchema = new Schema({
    

description: { type: String,
            unique: true,    
            required: true,
            sparse:true },

first: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minLength: 3,
    sparse:true
},
last: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minLength: 3
},
gender: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minLength: 3
},
age: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
},
city: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minLength: 3
},
stateregion: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minLength: 3
},
country: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minLength: 3
},
yourname: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minLength: 3
},
email: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
},
condition: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true,
    minLength: 3
},



});


const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;