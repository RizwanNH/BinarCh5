const fs = require('fs')

const createPerson = function(person) {
	fs.writeFileSync('./person.json', JSON.stringify(person))
	return person;
}

const Budi = createPerson({
	nama: 'Budi',
	age: 22,
	address: 'BSD'
})
