const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('public'))
// it will keep it up too you  and no one can see your code

app.get('/', (req, res) => {
  res.send('Hello World2 hi dp!')
})
// app.get or app.post or app.put or app.delet(path,handler)

// by default get request on browser
// if html file the post request

app.get('/about', (req, res) => {
    res.send('Hello  about')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact')
})

app.get('/blog/:slug', (req, res) => {
    res.send(`hello ${req.params.slug}`)
    console.log(req.params)
    // will output {slug:'intro-to-js'}
    // it will give output before ?
    console.log(req.querry)
    // will output {mode:'dark',region:'in'}
    // it will give output after ?


    // FOR URL:http:http://localhost:3000/blog/intro-to-js?mode==dark&region=in
    
})
// /blog/:slug/:second is call URL parameters


// app.get('/blog/intro-to-js', (req, res) => {
//     // log to fetch into to js from the database
//     res.send('Hello javascript')
// })


// app.get('/blog/intro-to-python', (req, res) => {
//     // log to fetch into to python from the database
//     res.send('Hello python')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})