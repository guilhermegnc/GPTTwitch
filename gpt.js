const axios = require('axios');

module.exports = async (req, res) => {
  const userMessage = req.query.text;

  // Replace 'YOUR_API_KEY' with your OpenAI API key
  const apiKey = 'sk-proj-9538MO9NIk64B6JLgCdyT3BlbkFJRHedlcHhTwmFuCwjZjwO';

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: userMessage,
        max_tokens: 50,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );

    const gptResponse = response.data.choices[0].text.trim();
    res.send(gptResponse);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error querying GPT-3');
  }
};
