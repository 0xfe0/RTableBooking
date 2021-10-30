/* Add restaurant owners
 * Do not include this file in the main app
 */
var mongoose = require('mongoose');
var config = require('../../config');

var RestaurantOwner = require('../../models/RestaurantOwner');

// Connect database
mongoose.connect(config.mongodb.URL, config.mongodb.option)
.then(function() {
	console.log('\x1b[32m%s\x1b[0m', 'Database Connection Established!');

	var usr = new RestaurantOwner;

	usr.firstName = 'Super';
	usr.lastName = 'Admin';
	usr.email = 'admin@admin.com';
	usr.phone = '1234567890';
	usr.setPassword('password');
	//usr.restaurants = ''; // add ObjectId

	usr.save().then(function() {
		console.log({usr: usr.toAuthJSON()});
	}).catch(function(err) {console.log(err)});
})
.catch(function(err) {
	console.log('\x1b[31m%s\x1b[0m', 'Error in Database Connection!');
	console.log(err);
});
