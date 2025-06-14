require('dotenv').config();
const express = require('express');
const Procore = require('@procore/js-sdk');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8000;
let accessToken = '';

app.get('/auth', (req, res) => {
  const client = new Procore.Client({
    client_id: process.env.PROCORE_CLIENT_ID,
    client_secret: process.env.PROCORE_CLIENT_SECRET,
    redirect_uri: process.env.PROCORE_REDIRECT_URI,
  });
  const authUrl = client.getAuthorizationUrl(['openid']);
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
    accessToken = response.data.access_token;
    res.redirect('/'); // send back to homepage
  } catch (err) {
    console.error('OAuth error:', err.response?.data || err.message);
    res.status(500).json({ error: 'OAuth failed' });
  }
});

// Example authenticated route
app.get('/projects', async (req, res) => {
  try {
    const apiRes = await axios.get('https://api.procore.com/rest/v1.0/projects', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    res.json(apiRes.data);
  } catch (err) {
    console.error('API error:', err.response?.data || err.message);
    res.status(500).json({ error: 'API failure' });
  }
});

app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));