const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => res.render('index.html'))

app.get('/getscore', (req, res) => {
	var score = require('./score.json')
	res.json(score)
})

app.post('/postscore', (req, res) => {
	const {nama, score} = req.body
	console.log(nama, score)
	res.redirect('/')
})

app.listen(port, () => console.log('server telah berjalan di port ${port}'))
