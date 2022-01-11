const handleProfile = (req,res, database) =>{
	const {id} = req.params;
	database.select('*').from('users').where({id: id})
	.then(user=> {
		if (user.length) {
			res.json(user);
		} else{
			res.status(400).json('user not found');
		}
	})

}

module.exports = {
	handleProfile: handleProfile
}