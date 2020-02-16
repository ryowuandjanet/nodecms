const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/cms',{ useNewUrlParser: true, useUnifiedTopology: true}).then(db =>{
	console.log("MONGO Connected");
}).catch(error => console.log(error));


app.use(express.static(path.join(__dirname, 'public')));

const {select} = require('./helpers/handlebars-helpers');
app.engine('handlebars',exphbs({defalutLayout:'home', helpers: {select: select}}));
app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

const home = require('./routes/home/index');
const admin = require('./routes/admin/index');
const posts = require('./routes/admin/posts');

app.use('/',home);
app.use('/admin',admin);
app.use('/admin/posts',posts);


app.listen(3000, ()=>{
	console.log('Listening on port 3000');
});
