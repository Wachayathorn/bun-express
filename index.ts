import express from 'express';
import  bodyParser  from "body-parser";
import { usersRouter } from "./src/routes/users";

const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/users', usersRouter)

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})