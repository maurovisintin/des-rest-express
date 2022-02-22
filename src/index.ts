import express from 'express'

const app = express()

import problems from './api/problems'

app.use(express.json())

app.use('/api/problems', problems)

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>
  console.log(`
🚀 Server ready at: PORT: ${PORT}
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
