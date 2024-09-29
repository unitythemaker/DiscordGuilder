import { Client, IntentsBitField } from 'discord.js';
import { setupRoles, setupCategories } from './setup-guild.js';
import { config as dotenvConfig } from 'dotenv';
import yaml from 'js-yaml';
import fs from 'fs';

dotenvConfig();

const myIntents = new IntentsBitField();
myIntents.add(IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent, IntentsBitField.Flags.GuildMembers);

const client = new Client({ intents: myIntents });

const configData = yaml.load(fs.readFileSync('config.yml', 'utf8'));

// Parse and format categories
const formattedCategories = configData.categories.map(category => ({
  name: category.name,
  requiredRole: category.requiredRole,
  channels: configData.channels
    .filter(channel => channel.parentOf === category.name)
    .map(channel => ({ name: channel.name, description: channel.description }))
}));

// Parse and format roles
const formattedRoles = configData.roles.map(role => ({
  name: role.name,
  permissions: role.permissions
}));

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

    await setupRoles(message.guild, formattedRoles);
    await setupCategories(message.guild, formattedCategories);
    message.reply('Auto-generation of categories, channels, and roles is complete.');
  }
});

client.login(process.env.DISCORD_TOKEN);
