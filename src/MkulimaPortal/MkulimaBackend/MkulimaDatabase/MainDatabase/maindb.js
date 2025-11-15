reqauire('dotenv').config()

const { Pool } = require('pg')

const mkulima_database = new Pool({
  mkulima_username_details = process.env.MKULIMA_USERNAME_DETAILS 
  mkulima_host_details = process.env.MKULIMA_HOSTNAME_DETAILS  
  mkulima_database_details = process.env.MKULIMA_DATABASE_NAME 
  mkulima_password_details = process.env.MKULIMA_PASSWORD_DETAILS
  mkulima_port_details = process.env.MKULIMA_PORT_DETAILS
})

module.exports = mkulima_database
