require('dotenv').config()

const PORT = process.env.PORT
const password = process.env.ATLAS_PASS
const user = process.env.ATLAS_USER
const dbname = process.env.NODE_ENV === 'test' ? 'auti-api-test':'auti-api'

const url = `mongodb+srv://${user}:${password}@cluster0.qsuk5.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = {PORT, url}