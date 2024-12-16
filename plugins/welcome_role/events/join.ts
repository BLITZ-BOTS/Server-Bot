import { Client, GuildMember, TextChannel } from "npm:discord.js";
export default {
  event: "guildMemberAdd",
  once: false,
  action: (
    client: Client,
    config: { role_id: string, welcome_channel: string },
    member: GuildMember,
  ) => {
    member.roles.add(config.role_id);
    const channel = client.channels.cache.get(config.welcome_channel) as TextChannel;
    if (!channel) return;
    channel.send(`Welcome to the server <@${member.id}>!`)
  },
};
