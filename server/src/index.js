import app from './app.js'
import { getConnection } from './database/connection.js'

getConnection()

const port = 3000

app.listen(port, () => {
    console.log(`server listen on http://localhost:${port}`)
})