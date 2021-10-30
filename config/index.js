/*
 * General configuration for RTableBooking
 */

// Container for all the envs
var envs = {};

// dev (default) envs
envs.dev = {
	'port' : 3000,
	'envName' : 'dev',
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

// Production envs
envs.production = {
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
var curEnv =
	typeof(process.env.NODE_ENV) == 'string'
	? process.env.NODE_ENV.toLowerCase()
	: '';

// Check curEnv is defined
var envToExport =
	typeof(envs[curEnv]) == 'object'
	? envs[curEnv]
	: envs.dev;

// Export the module
module.exports = envToExport;
