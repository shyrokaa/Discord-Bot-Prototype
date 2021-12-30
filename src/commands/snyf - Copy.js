module.exports = {
	name: 'wakemeupinside',
	description: 'troll command.',
	cooldown: 5,
	execute(message) {

		message.channel.bulkDelete(1, true);
		message.channel.send('@everyone');
		message.channel.bulkDelete(1, true);
		message.channel.send('@everyone');
		message.channel.bulkDelete(1, true);
		message.channel.send('@everyone');
		message.channel.bulkDelete(1, true);

	}
};
