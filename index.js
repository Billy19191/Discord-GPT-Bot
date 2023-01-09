require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const { Configuration, OpenAIApi } = require('openai');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

client.once('ready', () => {
  console.log('Bot Start & Login Successful!');
});

const openai = new OpenAIApi(configuration);
let prompt = '';

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  prompt += `You: ${message.content}\n`;

  openai.createCompletion({
    model: 'text-davinci-002',
    prompt,
    max_tokens: 3000,
    temperature: 0.3,
    top_p: 0.3,
    presence_penalty: 0,
    frequency_penalty: 0.5,
  }).then((gptResponse) => {
    if (message.channel.id === 'INPUT_YOUR_CHANNEL_ID') {
      message.reply(gptResponse.data.choices[0].text.substring(0));
      console.log('Answer Reply!');
      prompt += `${gptResponse.data.choices[0].text}\n`;
    } else {
      prompt += `${gptResponse.data.choices[0].text}\n`;
    }
  });
});

client.login(process.env.DISCORD_BOT_TOKEN);
