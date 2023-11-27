const express = require('express')
const port=6000;

const app = express();

app.use(express.json())
 
app.get('/home',(req,res)=>{
    const response=[{
        name:'revathi',
        course:'mern full stack'
},{name:"avishya",course:'mern full stack'}]
     const another='hello gudmorning'+' guys';
    
    res.send(response)
})

app.listen(port,()=>{
    console.log('server is running');
})