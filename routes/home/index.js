const express = require('express');
const router = express.Router();

router.all('/*',(req,res,next)=>{
	req.app.locals.layout='home';
	next();
});

router.get('/',(req,res)=>{
	res.render('home/index',{layout: 'home'});
});

router.get('/about',(req,res)=>{
	res.render('home/about',{layout: 'home'});
});

router.get('/login',(req,res)=>{
	res.render('home/login',{layout: 'home'});
});

router.get('/register',(req,res)=>{
	res.render('home/register',{layout: 'home'});
});

module.exports = router;