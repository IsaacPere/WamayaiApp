const dotenv = require('dotenv')
const dotenv_expand = require('dotenv-expand')
const service_framework = require("express")
const subdomain_framework = require("vhost")
const service_app = service_framework()

const mkulima_service = require("../src/MkulimaPortal/mkulima.js")
const clients_service = require("../src/ClientsPortal/clients.js")
const main_office_service = require("../src/CompanyWorld/company.js")

dotenv_expand.expand(dotenv.config())

const service_portal_details = process.env.SERVICE_PORTAL_DETAILS || 8700 

service_app.use('/mkulima', mkulima_service)
service_app.use('/clients', clients_service)

service_app.use(subdomain_framework('www.mainoffice.local',main_office_service))

service_app.get('/', function(application_request, application_respond) {
  application_respond.send("Hello Wamayai")
})

service_app.listen(service_portal_details)
