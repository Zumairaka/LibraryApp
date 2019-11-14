const express = require('express');
const chalk = require('chalk');
const path = require('path');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = new express();

app.set('views','./src/views');
app.use(express.static(path.join(__dirname,"/public")));

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
app.set('view engine','ejs');

//app.get('/',function(request,response){          //using normal html 
    //response.sendFile(path.join(__dirname,"/src/views/index.html"));
//});
var nav=[
            {link:'/',title:'Home'},
            {link:'/signUp',title:'Sign Up'},
            {link:'/login',title:'Login'},
            {link:'/books',title:'Books'},
            {link:'/authors',title:'Authors'},
            {link:'/books/addBooks',title:'Add Books'}
        ];


const booksRouter = require('./src/routes/bookRoutes')(nav); //Passing nav to booksRouter
const authorRouter = require('./src/routes/authorRoutes')(nav); 

app.use('/books',booksRouter);
app.use('/authors',authorRouter);


app.get('/',function(req,res){
    res.render('index',
    {
        nav,
        title:"Library"
    });        //using ejs view engine
});



app.listen(3020,function(){
    console.log("Listeing to Port"+chalk.blue(" 3020"));
});
