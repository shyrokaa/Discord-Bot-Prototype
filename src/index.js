require('dotenv').config();
const { readdirSync } = require('fs');
const { join } = require('path');
const MusicClient = require('./struct/Client');
const { Collection } = require('discord.js');
const client = new MusicClient({ token: "NDM1ODc1MTg5NTExNjg0MTA2.WtZCZw.Pp3UT4sCDGuYMjLiw_QzdTrAvuE", prefix: "/"});

const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(join(__dirname, 'commands', `${file}`));
	client.commands.set(command.name, command);
}



client.once('ready', () => console.log('ALLAH AKBAAAR!'));


//not tested yet

client.on('guildMemberAdd', member => {

	const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
	if (!channel) return;

	channel.send('Welcome to the Openhypt developement Discord server!!!')
});



// not tested yet

client.on('message', message => {
	if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;

	const args = message.content.slice(client.config.prefix.length).split(/ +/);

	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));


	if (!command) return;
	if (command.guildOnly && message.channel.type !== 'text') return message.reply('I can\'t execute that command inside DMs!');
	if (command.args && !args.length) {
		let reply = `:warning:You didn't provide any arguments, ${message.author}!`;
		if (command.usage) reply += `\nThe proper usage would be: \`${client.config.prefix}${command.name} ${command.usage}\``;
		return message.channel.send(reply);
	}
	if (!client.cooldowns.has(command.name)) {
		client.cooldowns.set(command.name, new Collection());
	}
	const now = Date.now();
	const timestamps = client.cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`:warning:please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply(':warning:there was an error trying to execute that command!');
	}
});

client.login(client.config.token);
