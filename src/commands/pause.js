module.exports = {
	name: 'zawarudo',
	description: 'You expected a pause command,but it was me,DIO!!!',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ Paused the snog for you!');
		}
		return message.channel.send('There is no snog playing???');
	}
};
