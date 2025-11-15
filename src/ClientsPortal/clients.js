const clients_service_framework = require("express")
const clients_router = clients_service_framework.Router()

const clients_payment = require("../ClientsPortal/ClientsBackend/ClientsMPesa/PhonePay.js")

clients_router.get('/', function(clients_service_request, clients_service_respond){
  clients_service_respond.send("Hello Dear Clients")
})

clients_router.use('/mpesapay', clients_payment)

module.exports =  clients_router
