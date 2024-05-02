import express from 'express'

const app = express()
const port = 3003


app.get('/', (req, res) => {
  res.send('I am a Express Server')
})

app.get('/desert', (req, res) => {
    res.send('here is your desert 🎈')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})









//concatenation

// let first_Name= 'ariba'
// let second_Name = 'memon'
// console.log(first_Name + second_Name)


//template literals

// let first_Name = 'ariba'
// let second_Name = 'memon'
// console.log(`my name is ${first_Name} ${second_Name}`)
