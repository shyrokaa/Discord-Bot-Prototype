module.exports = {
	name: 'ecksdee',
	description: 'xd',
	cooldown: 5,
	execute(message) {


		Promise.all([
			message.react(':chadizuka:735380059850014832'),
			message.react(':ECKSDEE:737479464308441178'),
			message.react(':sansizuka:735647519954173964'),
		]).catch(() => console.error('One of the emojis failed to react.'));



	}
};
