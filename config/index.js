/*
 * General configuration for RTableBooking
 */

// Container for all the environments
var environments = {};

// Staging (default) environments
environments.staging = {
	'port' : 3000,
	'envName' : 'staging',
	'secret' : 'JWTLONGSECRET',
	'mongodb' : {
		'URL' : 'mongodb://localhost:27017/',
		'option' : {
			'dbName' : 'RTableBooking_DEV',
			'use_new_url_parser' : true
		}
	},
	'default_booking_duration': 0100 // HHMM format
};

// Production environments
environments.production = {
	'port' : 5000,
	'envName' : 'production',
	'secret' : process.env.JWT_SECRET || 'JWTLONGSECRET',
	'mongodb' : {
		'URL' : process.env.MONGO_URL || 'mongodb://localhost:27017/',
		'option' : {
			'dbName' : 'RTableBooking',
			'use_new_url_parser' : true
		}
	},
	'default_booking_duration': 0100 // HHMM format
};

// Check command-line arguments for environment
var currentEnvironment =
	typeof(process.env.NODE_ENV) == 'string'
	? process.env.NODE_ENV.toLowerCase()
	: '';

// Check currentEnvironment is defined
var environmentToExport =
	typeof(environments[currentEnvironment]) == 'object'
	? environments[currentEnvironment]
	: environments.staging;

// Export the module
module.exports = environmentToExport;
