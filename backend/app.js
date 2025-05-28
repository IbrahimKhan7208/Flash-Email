require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const nodemailer = require('nodemailer')
const fs = require('fs')
const bodyParser = require('body-parser')
const { error, count } = require('console')

app.use(express.static(path.join(__dirname, '..', 'frontend')))
app.use(express.static('frontend'));
app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})

app.post('/api/send-flash-email', async (req, res)=>{
    let {emails} = req.body

    if (!emails || !Array.isArray(emails)){
        return res.status(400).json({error: "Invalid Email List"})
    }

    let emailHtml = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'raw-email.html'), "utf-8")

    let setCount = 0

    for (const email of emails){
        await transporter.sendMail({
            from:process.env.EMAIL_USER,
            to:email,
            subject:'48-HOUR FLASH BOOST: Only $7 - Gain 50% More Votes!',
            html: emailHtml
        })
        setCount++
    }

    res.json({sent: true, count: setCount})
})

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'))
})

app.get('/flash-boost', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'frontend', 'flash-boost.html'))
})

app.listen(3000, ()=>{
    console.log("Server is Running")
})