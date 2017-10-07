const express = require('express')
/*const=ประกาศตัวแปร(constant-เปลี่ยนไม่ได้ ใช้ทั้งหน้า)*/
/*express=ชื่อตัวแปร*/

const {twig} = require('twig')

const app = express()
/*ชื่อตัวแปร() = เรียกฟังก์ชั่น เก็บในตัวแปร app*/

app.set('view engine','twig')
/*เรียกใช้ twig*/

const homeController = require('./controllers/home.controller')
/* './' .1ตัวคืออยู่ที่โฟลเดอร์นั้น วิ่งไปcontrollers แล้วต่อไปที่home.controller*/
const newsController = require('./controllers/news.controller')

app.get('/', homeController.index)
app.get('/news', newsController.index)

app.use('/assets',express.static(__dirname + '/static/assets',{
	maxAge: 86400000
}))

app.listen(8000, function(err) {
	/*listen = ทำserver 
	8000=port localhost*/
	console.log('Server is running on port 8000')
	/*console.log = แสดงค่าตัว run cmd*/
})

/*app.get('/', function(req, res) {
	res.send('Hello')
})
/*รันappด้วยฟังก์ชันget*/
/* / = call back*/

/*app.get('/home', function(req,res){
	res.send('Home')
})*/