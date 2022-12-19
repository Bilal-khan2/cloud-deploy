import express from 'express';
import path from 'path';
import cors from 'cors';
import { timeStamp } from 'console';
console.log("server file here")
const app = express()
const port = process.env.PORT || 3000

app.use(cors());

app.get('/abc', (req, res) => {

    console.log("request ip", req.ip)
  res.send('Hello World!' + new Date().toString())

})
app.get('/time', (req, res) => {

  console.log("request ip", req.ip)
res.send('Hello World!' + new Date().toString())

})
app.get('/weather', (req, res) => {

  console.log("request ip", req.ip)
  
  res.send({
    temp:20,
    min:10,
    max:21,
    humidaity:30,
    expected:15,
    serverTime:new Date().toString()
  });


})
const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname,'./web/build')))
app.use('*', express.static(path.join(__dirname,'./web/build')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 