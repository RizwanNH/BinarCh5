const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.static(__dirname))

app.get('/',(req, res) => {
	res.sendFile(__dirname + '/index.html')
//	console.log(__dirname)
})

app.get('/getscore', (req, res) => {
	var score = fs.readFileSync('./score.json', 'utf-8')
//	console.log(score)
	res.json(JSON.parse(score))
})

app.use(express.json());

app.post('/postscore', (req, res) => {
	const data = req.body
//	console.log(data)
	fs.writeFileSync('./score.json', JSON.stringify(data))
	res.redirect('/')
})
		
app.listen(3000, () => console.log('server telah berjalan di port 3000'))
