import { Client, IntentsBitField } from 'discord.js';
import { setupRoles, setupCategories } from './setup-guild.js';

const myIntents = new IntentsBitField();
myIntents.add(IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent, IntentsBitField.Flags.GuildMembers);

const client = new Client({ intents: myIntents });

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// TODO: convert this one to a slash command
client.on('messageCreate', async (message) => {
  console.log(message);
  if (message.content === '!auto-generate') {
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      message.reply('You do not have permission to use this command.');
      return;
    }

    await setupCategories(message.guild);
    await setupRoles(message.guild);
    message.reply('Auto-generation of categories, channels, and roles is complete.');
  }
});

client.login(process.env.DISCORD_TOKEN);
