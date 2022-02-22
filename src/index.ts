import express from 'express'

import problems from './api/problems'

const app = express()

app.use(express.json())

app.use('/api/problems', problems)

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>
  console.log(`Server ready at: PORT: ${PORT}`)
)
