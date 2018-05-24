const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const newController = require('./controller/new.controller');
const detailsController = require('./controller/details.controller');
const articlesController = require('./controller/articles.controller');
const addPostController = require('./controller/addPost.controller');

app.use(express.static('src/styles'));  

app.use(bodyParser.urlencoded({     
  extended: true
})); 


app.get('/', articlesController);

app.get('/details/:id', detailsController);

app.get('/new', newController);

app.post('/add-post', addPostController);

app.listen(3000, () => console.log('App is listening on port 3000'));