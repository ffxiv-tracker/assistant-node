const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Display info about yourself.'),
	async execute(interaction) {
		await interaction.user.send(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
		return interaction.reply({ content: 'Your info was sent to your DMs', ephemeral: true });
	},
};