const User = require('./bd');
(async () => {
	let newUser = {login: 'Maria Shibaeva'};
	newUser = new User(newUser);
	await newUser.save();
	process.exit(0);
})();