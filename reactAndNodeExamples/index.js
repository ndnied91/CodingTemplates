//this is the server



const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

let idVal = 5;

let blogs = [
  {id: 1 , todo : 'clean room' , date: '09/14/21' },
  {id: 2 , todo : 'wash sheets' , date: '09/14/21'},
  {id: 3, todo : 'feed dog' , date: '09/14/21'},
  {id: 4, todo : 'take out trash' , date: '09/14/21'}
]

app.get('/api/todos' , (req,res)=>{
  res.send(blogs)
})


app.post('/api/todos' , async (req, res) => {
    let todo = {id: idVal,  todo: req.body.todo , date: req.body.date}
    blogs.push(todo)
    res.send(blogs)
    idVal++
})


app.delete('/api/todos' , (req,res)=>{
  console.log(req.body.id)

  blogs.forEach((item, i) => {
    if(item.id === req.body.id){
      blogs.splice(i, 1);
    }
  });

  res.send(blogs)
})




const PORT = process.env.PORT || 5000
app.listen(PORT , ()=> console.log('starting server on port 5000'))
