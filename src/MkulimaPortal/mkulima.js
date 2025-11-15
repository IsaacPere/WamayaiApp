const mkulima_service_framework = require("express")
const mkulima_router = mkulima_service_framework.Router()

mkulima_router.get('/', function(mkulima_service_request, mkulima_service_respond){
  mkulima_service_respond.send("Hello Mkulima Portal")
})

module.exports = mkulima_router
