const handleImage = (req,res, database) =>{
	const {id} = req.body;
	database('users')
	.where('id', '=', id)
	.returning('enteries')
	.increment('enteries', 1)
	.then(entries => {
		res.json(entries)
	}).catch(err => res.status(404).json('unable to register'));
}

module.exports = {
	handleImage: handleImage
}