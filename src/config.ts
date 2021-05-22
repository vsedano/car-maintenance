import { config } from 'dotenv'

config();

export default {
    db_user: process.env.db_user,
    db_password: process.env.db_password,
    db_cluster: process.env.db_cluster,
    db_name: process.env.db_name,
}