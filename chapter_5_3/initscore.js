const fs = require('fs')

const createScore = function(score) {
	fs.writeFileSync('./score.json', JSON.stringify(score))
	return score;
}

const date = createScore([
	{
		nama: 'Budi',
		score: 0
	},
	{	
		nama: 'Computer',
		score: 0
	}
])
