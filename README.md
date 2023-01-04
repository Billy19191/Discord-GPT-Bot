
  
# Discord GPT Bot

This is all of the source code of the Discord GPT (OpenAi) bot using Javascript, NodeJS, and ChatGPT to connect and fetch data from the API of ChatGPT. You can type anything to ask the bot in chat and the bot will reply

## ⁉️ Requirement

To use the bot, you need to have all of the necessary tools below.

- Code Editors - [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), ..., etc.
- NodeJS - Download and install here https://nodejs.org/
- Discord - Download and install here https://discord.com/
- OpenAi (ChatGPT) - Get API of your OpenAi here https://beta.openai.com/account/api-keys
- Discord Developer Portal - Create bot and get token here https://discord.com/developers/applications

## 🛠 Installation

First step, install some of the JavaScript libraries by type code below in your terminal, command prompt

    npm install openai discord.js dotenv

Next step, download all of the code above and open folder it in your code editors to edit something in code such as bot token, OpenAi API key.

**.ENV**

Paste the API key and token and replace "Paste your API key here" and "Paste your bot token here" which you can get from above.

    OPENAI_API_KEY=Paste your API key here
    DISCORD_BOT_TOKEN=Paste your bot token here

**index.js**

Paste the channel id in your server which you want this bot working only that channel but if you want it work for all channel, place replace the code that you see here

    if (message.channel.id == 'INPUT_YOUR_CHANNEL_ID')
    {
    message.reply(`${gptResponse.data.choices[0].text.substring(0)}`
    console.log('Answer Reply!')
    prompt += `${gptResponse.data.choices[0].text}\n`
    }
    else
    {
    prompt += `${gptResponse.data.choices[0].text}\n`
    }

with this one below

    message.reply(`${gptResponse.data.choices[0].text.substring(0)}`)
    console.log('Answer Reply!')
    prompt += `${gptResponse.data.choices[0].text}\n` }
After all environments are set, this is finish installation now

## 🖥 Using & Operation

Open terminal, command prompt and get in to the floder that you download (unzip file first) by

    cd Downloads/Discord-GPT-Bot-main
    
or if you don't found you can use `ls` command to show all of floder and `cd floder name` to get in

After get inside the floder, run the code to start the NodeJS and your discord bot by

    node index.js

if you code working properly, it will showing message in terminal ***Bot Start & Login Successful!*** and your bot will be online in the Discord.
