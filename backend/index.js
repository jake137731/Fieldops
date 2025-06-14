require('dotenv').config(); // Load .env variables

const express = require('express');
const Procore = require('@procore/js-sdk');
const axios = require('axios');

const app = express();
const PORT = 8000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

app.get('/auth', (req, res) => {
  const client = new Procore.Client({
    client_id: process.env.PROCORE_CLIENT_ID,
    client_secret: process.env.PROCORE_CLIENT_SECRET,
    redirect_uri: process.env.PROCORE_REDIRECT_URI,
  });

  const authUrl = client.getAuthorizationUrl(['openid', 'profile', 'email', 'offline_access']);
  res.redirect(authUrl);
});

app.get('/oauth/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const response = await axios.post('https://login.procore.com/oauth/token', {
      grant_type: 'authorization_code',
      code,
      client_id: process.env.PROCORE_CLIENT_ID,
      client_secret: process.env.PROCORE_CLIENT_SECRET,
      redirect_uri: process.env.PROCORE_REDIRECT_URI,
    });

    const accessToken = response.data.access_token;

    res.json({ message: 'OAuth Success!', token: accessToken });
  } catch (error) {
    console.error('OAuth error:', error.message);
    res.status(500).json({ error: 'OAuth failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});