const express = require('express');
const app = express();
const projectData = require('./data.json');
const port = process.env.PORT || 3000;
let projects = require('./data.json');

app.listen(port, () => console.log(` app listening on port ${port}!`))

app.use(express.static(__dirname +'/public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', projects.projects[0] )
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project', (req, res) => {
    res.render('project', projects)
});