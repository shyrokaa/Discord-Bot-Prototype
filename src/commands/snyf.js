module.exports = {
	name: 'snyf',
	description: 'Snyf command.',
	cooldown: 5,
	execute(message) {

		message.channel.bulkDelete(1, true);
		message.channel.send('Snyf!!!');

	}
};
