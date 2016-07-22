var db = require('../models/db')

function getUser(email,password) {
	return new Promise(function(resolve, reject) {
		db.getUserByEmail(email)
			.then(function(user) {
				if (!user[0]){
					reject(false)
				}
				if(user[0].password == password) {
					resolve(user[0])
				}else{
					console.log(user)
					resolve(false)
				}
			})
			.catch(function(error) {
				reject(error)
			})
	})
	// returns user if email and password match db
}

module.exports = {
	getUser
}