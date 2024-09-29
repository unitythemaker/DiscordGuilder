# DiscordGuilder

[Türkçe Kılavuz için tıklayın](README_TR.md)

**IMPORTANT**: This is project is work-in-progress!

Build your dream Discord server effortlessly with DiscordGuilder, a witty bot that conjures up categories, channels, and roles from yaml spells!

## Usage Guide

### Prerequisites

1. Node.js (v18 or higher) - [Download](https://nodejs.org/)
2. pnpm - [Installation Guide](https://pnpm.io/installation)
3. Git - [Download](https://git-scm.com/downloads)
4. A Discord account and a Discord server where you have administrator permissions
5. A Discord bot token (you'll need to create a bot in the Discord Developer Portal)

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/unitythemaker/DiscordGuilder.git
   cd DiscordGuilder
   ```

2. Install dependencies using pnpm:
   ```
   pnpm install
   ```

3. Copy the `.env.example` file to `.env`:
   ```
   # Linux/MacOS
   cp src/.env.example .env
   # Windows
   copy src\.env.example .env
   ```

4. Edit the `src/.env` file and add your Discord bot token:
   ```
   DISCORD_TOKEN=your_discord_bot_token_here
   ```

5. Invite the bot to your Discord server using the OAuth2 URL generated in the Discord Developer Portal. Make sure to give it the necessary permissions (Administrator is recommended for full functionality).

### Configuring Your Server

1. Open the `src/prompts.txt` file in a text editor.

2. Copy the content of "Prompt 1" and paste it into a conversation with an AI assistant (e.g., ChatGPT). Follow the instructions to describe the type of server you want to create.

3. Once you've finished describing your server, the AI will provide you with a "User_Prompt_Server_Type" and a "User_Prompt".

4. Copy the content of "Prompt 2" from `prompts.txt` and paste it into a new conversation with the AI assistant. Replace the placeholders for "User_Prompt_Server_Type" and "User_Prompt" with the values you received from the previous step.

5. The AI will generate a YAML configuration for your server. Copy the entire output between "### START OF OUTPUT ###" and "### END OF OUTPUT ###".

6. Create a new file called `config.yml` in the ``src`` directory and paste the YAML configuration into it.

### Running the Bot

1. Start the bot using pnpm:
   ```
   pnpm start
   ```

2. Once the bot is running and connected to your server, use the command `!auto-generate` in any channel where the bot has access. This will trigger the automatic creation of categories, channels, and roles based on your configuration.

### Notes

- The bot requires administrator permissions to create channels, categories, and roles.
- Be cautious when using the `!auto-generate` command, as it will create new channels and roles. It's recommended to use this on a fresh server or one with minimal existing structure.
- If you need to make changes, modify the `config.yml` file and run the `!auto-generate` command again. Keep in mind that this may create duplicate channels or roles if they already exist.

### Troubleshooting

- If you encounter any permission errors, ensure that the bot has been invited with the correct permissions and that it has the Administrator role in your server.
- If channels or roles are not being created, check the console output for any error messages that might indicate the problem.

For any additional help or to report issues, please visit the [GitHub repository](https://github.com/unitythemaker/DiscordGuilder).
