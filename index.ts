import express from 'express';
import { usersRouter } from "./src/routes/users";

const app = express()

app.use('/users', usersRouter)

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})