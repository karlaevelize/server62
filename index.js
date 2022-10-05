const express = require("express")
const data = require("./characters.json")

//start an express instance
const app = express()

//give it a port
const PORT = 4000

//endpoint
app.get("/", (request, response, next) => {
  response.send("Hello from my Express API")
})

app.get("/day/:name", (request, response, next) => {
  const name = request.params.name
  console.log("name", name)
  response.send(`Have a great day, ${name}!`)
})

app.get("/characters", (request, response, next) => {
  response.send(data)
})

app.get("/characters/:id", (request, response, next) => {
  const id = request.params.id
  // const { id } = reques.params
  console.log("id", typeof(id))
  const character = data.find(char => char.id === parseInt(id) )
  console.log("my character", character)
  response.send(character)
})

//start listening
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
