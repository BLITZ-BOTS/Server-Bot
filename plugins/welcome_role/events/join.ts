import { Client, GuildMember } from "npm:discord.js";
export default {
  event: "guildMemberAdd",
  once: false,
  action: (
    _client: Client,
    config: { role_id: string },
    member: GuildMember,
  ) => {
    member.roles.add(config.role_id);
  },
};
