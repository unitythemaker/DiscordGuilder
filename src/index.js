const { Client, IntentsBitField, ChannelType, PermissionFlagsBits } = require('discord.js');

const myIntents = new IntentsBitField();
myIntents.add(IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent, IntentsBitField.Flags.GuildMembers);

const client = new Client({ intents: myIntents });

const TOKEN = '';

const setupCategories = async (guild) => {
  const categories = {
    'General': ['welcome', 'general-chat', 'introductions', 'general-voice'],
    'Web Development': ['frontend', 'backend', 'databases', 'devops', 'frameworks', 'development-voice'],
    'Showcase': ['moderator-showcase', 'member-showcase', 'feedback'],
    'Learning & Resources': ['tutorials', 'questions', 'tools', 'forum'],
    'Events & Announcements': ['announcements', 'events', 'stage-events'],
    'Off-Topic': ['random', 'memes', 'off-topic-voice'],
  };

  for (const [categoryName, channels] of Object.entries(categories)) {
    const category = await guild.channels.create({ name: categoryName, type: ChannelType.GuildCategory });
    console.log(category)

    for (const channelName of channels) {
      const channelType = channelName.endsWith('-voice') ? ChannelType.GuildVoice : ChannelType.GuildText;
      await guild.channels.create({ name: channelName, type: channelType, parent: category.id });
    }
  }
};

const setupRoles = async (guild) => {
  const roles = [
    { name: 'Admin', permissions: [PermissionFlagsBits.Administrator] },
    { name: 'Moderator', permissions: [PermissionFlagsBits.ManageChannels, PermissionFlagsBits.ManageRoles, PermissionFlagsBits.KickMembers, PermissionFlagsBits.BanMembers, PermissionFlagsBits.ManageMessages, PermissionFlagsBits.MuteMembers, PermissionFlagsBits.DeafenMembers, PermissionFlagsBits.MoveMembers] },
    { name: 'Web Developer', permissions: [] },
    { name: 'Designer', permissions: [] },
    { name: 'Learner', permissions: [] },
    { name: 'Contributor', permissions: [] },
    { name: 'Event Speaker', permissions: [] },
    { name: 'Muted', permissions: [] },
  ];

  for (const role of roles) {
    await guild.roles.create({
      name: role.name,
      permissions: role.permissions,
    });
  }
};

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

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

client.login(TOKEN);
