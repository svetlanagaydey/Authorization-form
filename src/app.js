const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const cors = require("cors")
const path = require("path")



const app = express();

const publicPath = path.join(__dirname, "../client/build")

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors())
app.use(express.static(publicPath))
app.use(userRouter);

app.use("*", (req ,res) =>{
  res.send("didnt find route that match you request")
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }
//"heroku-postbuild": "npm install --prefix client && npm run build --prefix client",

// myFunction()