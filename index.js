const express=require("express");
const moment=require("moment");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/",(req,res)=>{
    const {day,month,year} = req.body;
    console.log(day,month,year);
    const centerDate=moment(`${year}-${month}-${day}`,"YYYY-MM-DD");
    res.json({
        previous:centerDate.subtract(1,"day").format("YYYY-MM-DD"),
        next:centerDate.add(2,"days").format("YYYY-MM-DD"),
    });
});

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log("Listening on port",PORT));