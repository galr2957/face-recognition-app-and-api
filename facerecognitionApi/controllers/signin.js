
const handleSignin = (req, res, database, bcrypt) => { 
	const {email, password} = req.body;
	database('login').select('hash')
	.where('email', '=', email)
	.then(hash => {
		if (bcrypt.compareSync(password, hash[0].hash)) {
			return database('users').select('*')
			.where('email', '=', email)
			.then(user => {
				res.json(user[0]);
			})
		} else {
			res.status(400).json('wrong username or password');
		}
	})
	.catch(err => res.status(400).json('wrong username or password'))
}

module.exports = {
	handleSignin: handleSignin
}