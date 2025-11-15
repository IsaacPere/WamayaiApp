require('dotenv').config()

const { Pool } = require('pg')

const main_office_database = new Pool({
  main_office_username_details = process.env.MAIN_OFFICE_USERNAME_DETAILS 
  main_office_hostname_details = process.env.MAIN_OFFICE_HOSTNAME_DETAILS 
  main_office_database_details = process.env.MAIN_OFFICE_DATABASE_DETAILS 
  main_office_password_details = process.env.MAIN_OFFICE_PASSWORD_DETAILS 
  main_office_port_details = process.env.MAIN_OFFICE_PORT_DETAILS 
})

module.exports = main_office_database
