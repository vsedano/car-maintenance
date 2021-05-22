import express from 'express'
import cors from 'cors'
import mongoose, { ConnectOptions } from 'mongoose'

import config from './config'

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

(async () => {
    try {
        const databaseOptions: ConnectOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        const db = await mongoose.connect(`mongodb+srv://${config.db_user}:${config.db_password}@${config.db_cluster}.luhms.mongodb.net/${config.db_name}?retryWrites=true&w=majority`, databaseOptions)
        console.log('Db is connnected to ', db.connection.name)
    } catch (error){
        console.error(error)
    }
})()

app.listen(8000, () =>{
    console.log('server on port 8000')
})