const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const data = require('./data');
const projects = data.projects;


app.use('/static', express.static(path.join(__dirname, 'public')))


app.set('view engine', 'pug');


app.get('/', (req,res,next)=>{
	res.locals.projects = projects;
	res.render('index', projects);
});

app.get('/about', (req,res,next)=>{
	res.render('about');
});

app.get('/projects/:id', (req,res,next)=>{
	const id = req.params.id;
	res.locals.projects = projects[id];
	res.render('project');
});

app.use((req,res,next) =>{
	const err = new Error('Something went wrong');
	res.locals.error = err;
	err.status = 404;
	res.render('error');
});

app.use((err, req, res, next) => {
    res.locals.error = err
    console.log(`An error has occured: ${err.status}`.red);
    res.render('error') 
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});