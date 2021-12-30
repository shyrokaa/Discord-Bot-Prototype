module.exports = {
	name: 'consoom',
	description: 'coom command.',
	cooldown: 5,
	execute(message) {

		message.channel.bulkDelete(1, true);
		message.channel.send('I, EvaX, humbly submit, a toast, to Nikolas Alexander, for successfully managing to pirate Warcraft 3, so that he may play Defense of The Ancients. Congratulations, Nik. Enjoy your dota.');

	}
};
