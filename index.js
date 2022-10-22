const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.get('/getname',(req,res) => {
    res.send('Trairattanawadee Foythong')
})

app.get('/getprofile',(req,res) => {
    let data = {
        name: 'trairattanawadee Foythong',
        age: 19,
        apocalypse: 'Hope in the dark',
        detail: 'Freelance For Graphics Photography Photoshop And Design \
        And Create Avatars In VrChat Is An Admin Of Cumcums Avatar Page With Many Works To View Currently \
        Studying In The Faculty Of Engineering Multimedia And Entertainment Bangkok Universit'
    }
    res.send(data)
})

app.get('/getabout',(req,res) => {
    let data = {
        name: 'trairattanawadee Foythong',
        age: 19, 
        email: 'trairattanawade.foyt@bumail.net',
        address: 'plum condo alive2' 
    }
    res.send(data)
})

app.get('/getproject',(req,res) => {
    let data = {
        project_name: 'Happy birthday Peera [ขอให้รู้ Cover by Lucky Smile]',
        project_description: 'สุขสันต์วันเกิดนะ นาย พีรพัฒน์ :3',
        project_link: 'https://youtu.be/hlGlnjg6_98' 
    }
    res.send(data)
})

app.get('/getcontact',(req,res) => {
    let data = {
        address: 'plum condo alive2',
        email: 'trairattanawade.foyt@bumail.net',
        phone_number: '063-513-9960'
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})