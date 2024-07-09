const express=require('express');

const app=express();
const PORT=1800;

app.use((req,res,next)=>{
    console.log("hello from middleware !");
    next();
});

app.get("/" ,(req,res)=>{
    try {
        return res.json({
            success:true,
            message:"request succesfull "
        })
    } catch (error) {
        console.log("some issue:-",error);
    }
})


app.listen(PORT,()=>{
    console.log("Sarver Stared:-",PORT);
});