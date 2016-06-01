#!/usr/bin/env node

var forever = require('forever-monitor'),
	logger = require('../logger/Logger');

var child = new (forever.Monitor)('back/bin/server.js', {
	watch: true,
	watchDirectory: '../'
});

child.on('error', function (err) {
	logger.log('error', err);
});

child.on('exit', function () {
	logger.log('error', 'back/bin/server.js has exited');
});

child.start();

process.stdin.resume();//so the program will not close instantly

function exitHandler(err) {
	if (err)
		logger.log('error', err);

	child.kill(true);

	process.exit();
}

process.on('exit', exitHandler);
process.on('SIGINT', exitHandler);