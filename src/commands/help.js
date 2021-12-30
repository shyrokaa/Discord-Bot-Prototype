module.exports = {
	name: 'help',
	description: 'help command',
	cooldown: 5,
	execute(message) {

		message.channel.send(" here is a brief list of my commands: /help /snyf /snog /np /queue /resume /zawarudo /stop /resume /volume /bang /ecksdee ");

	}
};
