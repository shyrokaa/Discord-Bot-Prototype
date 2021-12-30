module.exports = {
	name: 'bang',
    description: 'piri snyfs all your data',
    args: true,
	cooldown: 60,
	execute(message,args) {

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of perms ,idiot!');

        let deleteAmount;

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }

        if (parseInt(args[0]) > 100) {
            return message.reply('You can only delete 100 messages at a time!')
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`)
	}
}

