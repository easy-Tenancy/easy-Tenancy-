require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.GROK_API_KEY;
const apiUrl = 'https://api.anthropic.com/v1/messages';

async function connectToGrok() {
  try {
    const response = await axios.post(apiUrl, {
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [
        { role: 'user', content: 'Hello, how can you help with tenancy management?' }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01'
      }
    });

    console.log('Response from Claude:', response.data.content[0].text);
  } catch (error) {
    console.error('Error connecting to Claude:', error.response ? error.response.data : error.message);
  }
}

connectToGrok();