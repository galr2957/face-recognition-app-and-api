const handleRegister = (req, res, database, bcrypt) =>{
	const {email, name, password} = req.body;
	const hash = bcrypt.hashSync(password, 10);
	database.transaction(trx => {
		trx('login')
		.insert({
			email: email,
			hash: hash
		})
		.returning('email')
		.then(data =>{
			return trx('users')
			.insert({
		        name: name,
		        email: data[0],
		        joined: new Date()
		    })
		    .returning('*')
		    .then(user => {
	 	        res.json(user);
	        })
		})
		.then(trx.commit)
		.catch(trx.rollback)
	}).catch(err=> res.status(400).json('unable to register'))
}

module.exports = {
	handleRegister: handleRegister
}