rquire('dotenv').config()

const { Pool } = require('pg')

const clients_main_database = new Pool({
  user_username_details = process.env.EATERS_USERNAME_DETAILS 
  user_hostname_details = process.env.EATERS_USERNAME_DETAILS
  user_database_name_details = process.env.EATERS_DATABASE_DETAILS 
  user_password_details = process.env.EATERS_PASSWORD_DETAILS 
  user_database_port_details = process.env.EATERS_PORT_DETAIL
})

module.exports = clients_main_database

