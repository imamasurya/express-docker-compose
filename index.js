const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('Hellyeahhhhh....')
})

app.listen(3000, () => console.log('Listen to 0.0.0.0:3000'))
