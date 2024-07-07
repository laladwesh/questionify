require("dotenv").config();


const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const userRoute = require('./routes/user');
const questionRoute = require('./routes/question');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const { checkForAuthenticationCookie } = require('./middlewares/authentication');
app.use(express.urlencoded({extended:false}));
const Question = require('./models/question');


mongoose.connect(process.env.MONGO_URL).then(e =>{
    console.log("MONGO DB CONNECTED")
});

app.set('view engine' , "ejs");
app.set('views' , path.resolve('./views'));


app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/" , async(req,res) =>{
    const allQuestions = await Question.find({})
    res.render("home" , {
        user: req.user,
        questions: allQuestions
    })
})




app.get('/' , (req , res) =>{
    res.render('home',{
        user:req.user
    })
})
app.use("/user" , userRoute);
app.use("/question" , questionRoute);
app.listen(PORT , ()=>{
    console.log(`SERVER STARTED AT ${PORT}`)
})