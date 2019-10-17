const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const data = require('./data.json');
const projects = data.projects;


app.use('/static', express.static(path.join(__dirname, 'public')))


app.set('view engine', 'pug');


app.get('/', (req,res,next)=>{
	res.render('index', projects);
});




app.listen(3000, () => {
    console.log('Server listening on port 3000');
});