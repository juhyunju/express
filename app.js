const express = require('express');
const app = express();
const port = 3000

app.use('/',(req,res,next) => {
    console.log('미들웨어입다')
    next()
})
app.get('/', (req,res) => {
    res.send('Hello, Express!')
})
app.post('/',(req,res) => {
    console.log('post실행')
    res.send('post다')
})

app.listen(port, () => {
    console.log(`${port}번 포트에서 실행중!`)
})