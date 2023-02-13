# Discord GPT Bot

This is all of the source code for the Discord GPT (OpenAI) bot using Javascript, NodeJS, and ChatGPT to connect and fetch data from the API of ChatGPT. You can type anything to ask the bot in chat and the bot will reply.

## ⁉️ Requirements

To use the bot, you'll need to have all of the necessary tools below installed

- Code Editor - [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), ..., etc.
- NodeJS - Download and install from https://nodejs.org/
- Discord - Download and install from https://discord.com/

You'll need to have two tokens from OpenAI and Discord
- OpenAI (ChatGPT) - Get the API token for your OpenAI account [here](https://beta.openai.com/account/api-keys) 
- Discord Developer Portal - Create a bot and get the token [here](https://discord.com/developers/applications)

## 🛠 Installation

First, install the required JavaScript libraries by pasting code below in your terminal or command prompt.

```
npm install openai discord.js dotenv
```

Next step, download all of the code as a .zip file and open it in your code editor of choise to put your own bot token and OpenAI API key.

You may also run `git clone`, if you have git installed

```
git clone https://github.com/Billy19191/Discord-GPT-Bot.git
```

**.ENV** file

File name must be `.env`, paste the API key and your Discord bot token by replacing the "Paste your API key here" and "Paste your bot token here"

    OPENAI_API_KEY=Paste your API key here
    DISCORD_BOT_TOKEN=Paste your bot token here

**index.js**

Paste the channel ID in your server which you want this bot to be working only in that channel, if you want it work for all channel, replace the code that you see here:

     if (message.channel.id === 'INPUT_YOUR_CHANNEL_ID') {
       message.reply(gptResponse.data.choices[0].text.substring(0));
       console.log('Answer Reply!');
       prompt += `${gptResponse.data.choices[0].text}\n`;
     } else {
       prompt += `${gptResponse.data.choices[0].text}\n`;
     }

with this one below:

     message.reply(gptResponse.data.choices[0].text.substring(0));
     console.log('Answer Reply!');
     prompt += `${gptResponse.data.choices[0].text}\n`;
After all environments are set, installation is finished!

## 🖥 Usage

Start a terminal session, then cd into the project
```
cd ./Discord-GPT-Bot/
```

Run the `index.js` file using node
```
node index.js
```

If you did everything correctly, the script should be working properly, a message will show up in the terminal:  ***Bot Start & Login Successful!***

Your bot is now online on Discord.

## 🖥 Example
<img width="897" alt="Screenshot 2023-01-10 at 16 44 35" src="https://user-images.githubusercontent.com/27849965/211517040-6c36eb77-7717-4e30-b244-4ee30064984b.png">
