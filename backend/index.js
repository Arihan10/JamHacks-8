import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
// import UsersDAO from "./dao/usersDAO.js"
// import EventsDAO from "./dao/eventsDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.DB_URI, 
    {
        maxPoolSize: 150, 
        wtimeoutMS: 2500, 
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    // await UsersDAO.injectDB(client)
    // await EventsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})