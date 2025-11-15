const main_office_portal = require("express")
const office_server_router = main_office_portal.Router()

office_server_router.get('/', function(office_server_router, office_server_respond) {
  office_server_respond,send("Hello Main Office")
})

module.exports = office_server_router
