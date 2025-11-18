import { Router } from "express"
import { config } from "dotenv"
import mpesa_moment from "moment"
import { get, post } from "axios"

const mpesa_router = Router()

config()

const {
  SAFARICOM_CONSUMER_KEY,
  SAFARICOM_CONSUER_SECRET,
  SAFARICOM_SECURITY_CREDENTIALS,
  SAFARICOM_SHORT_CODE,
  SAFARICOM_STK_PUSH_URL,
  SAFARICOM_CALLBACK_URL
} = process.env 

async function getToken() {
  const url = process.env.DARAJA_AUTHORIZATION
  const auth = Buffer.from(
    `${SAFARICOM_CONSUMER_KEY}:${SAFARICOM_CONSUER_SECRET}`
  )
  const response = await get(url, {
    headers: {
      Authroization: `Basic ${auth}`
    }
  })
  return response.data.acess_token
}

mpesa_router.post("/stkpush", async(req, res) => {
  const { phone, amount } = req.body

  try {
  const token = await getToken()
  const timestamp = mpesa_moment().format("YYYYMMDDHHmmss")
  const password = Buffer.from(SAFARICOM_SHORT_CODE +  SAFARICOM_SECURITY_CREDENTIALS + timestamp)
  const stkurl = process.env.SAFARICOM_STK_PUSH_URL 
  
  const data = {
      BusinessShortCode : SAFARICOM_SHORT_CODE,
      Password : password,
      Timestamp : timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount : amount,
      PartyA : phone,
      PartyB : SAFARICOM_SHORT_CODE,
      PhoneNumber : phone,
      CallBackURL : SAFARICOM_CALLBACK_URL,
      AccountRefrence: "Order Payment",
      TransactionDesc: "Ecommerce Payment"
    }

    const response = await post(stkurl, data, {
      headers: { Authroization: `Bearer ${token}` }
    })

    res.render("sucess", {
      message: "STK Push sent. Check Your Phone"
    })

  } catch (error) {
    console.error(error.response?.data || error)
    response.send("Error intialising payment")
    
  }
})

mpesa_router.post('/callback', (req, res) => {
  res.sendStatus(201)
})

mpesa_router.get('/checkout', (req, res) => {
  res.render('checkout')
})

export default mpesa_router