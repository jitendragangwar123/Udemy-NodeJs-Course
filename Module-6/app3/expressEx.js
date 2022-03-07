//Using Express Router and adding 404 error page 
const path=require("path");
const express=require("express");
const bodyParser = require("body-parser");


const expressEx=express();
expressEx.set('view engine','pug');
expressEx.set('views','views');

const adminData=require("./routes/admin");
const shopRoutes=require("./routes/shop");
const { appendFile } = require("fs");

//by default request can not be parsed
expressEx.use(bodyParser.urlencoded({extended:true}));
//serving files statically
expressEx.use(express.static(path.join(__dirname,'public')));

expressEx.use('/admin',adminData.routes);
expressEx.use(shopRoutes);

//to handle the error page 
expressEx.use((req,res,next)=>{
     res.status(404).render('404',{pagetitle:'Page Not Found!'});
});

// const server=http.createServer(expressEx);
// server.listen(2000);

expressEx.listen(2000);

//Output:-(2nd middleware is not execute because the path set to /add-product anly 1st and 2nd will execute.)
// Its always runs
// Its a another middleware
// Its always runs
// Its a another middleware