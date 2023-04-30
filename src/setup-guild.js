import { ChannelType, PermissionFlagsBits } from 'discord.js';

/**
 * Set-up the specified categories and their channels.
 *
 * @param {Guild} guild
 * @param {any} categories
 */
export const setupCategories = async (guild, categories) => {
  // const categories = {
    // 'General': ['welcome', 'general-chat', 'introductions', 'general-voice'],
    // 'Web Development': ['frontend', 'backend', 'databases', 'devops', 'frameworks', 'development-voice'],
    // 'Showcase': ['moderator-showcase', 'member-showcase', 'feedback'],
    // 'Learning & Resources': ['tutorials', 'questions', 'tools', 'forum'],
    // 'Events & Announcements': ['announcements', 'events', 'stage-events'],
    // 'Off-Topic': ['random', 'memes', 'off-topic-voice'],
  // };

  for (const [categoryName, channels] of Object.entries(categories)) {
    const category = await guild.channels.create({ name: categoryName, type: ChannelType.GuildCategory });

    for (const channelName of channels) {
      const channelType = channelName.endsWith('-voice') ? ChannelType.GuildVoice : ChannelType.GuildText;
      await guild.channels.create({ name: channelName, type: channelType, parent: category.id });
    }
  }
};

/**
 * Set-up the specified roles and their permissions.
 *
 * @param {Guild} guild - Guild to create roles in
 * @param {any} roles - Roles and their permissions to create
 */
export const setupRoles = async (guild, roles) => {
  // const roles = [
  //   { name: 'Admin', permissions: [PermissionFlagsBits.Administrator] },
  //   { name: 'Moderator', permissions: [PermissionFlagsBits.ManageChannels, PermissionFlagsBits.ManageRoles, PermissionFlagsBits.KickMembers, PermissionFlagsBits.BanMembers, PermissionFlagsBits.ManageMessages, PermissionFlagsBits.MuteMembers, PermissionFlagsBits.DeafenMembers, PermissionFlagsBits.MoveMembers] },
  //   { name: 'Web Developer', permissions: [] },
  //   { name: 'Designer', permissions: [] },
  //   { name: 'Learner', permissions: [] },
  //   { name: 'Contributor', permissions: [] },
  //   { name: 'Event Speaker', permissions: [] },
  //   { name: 'Muted', permissions: [] },
  // ];

  for (const role of roles) {
    await guild.roles.create({
      name: role.name,
      permissions: role.permissions,
    });
  }
};

