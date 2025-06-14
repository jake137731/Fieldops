const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
const express = require('express');
const Procore = require('@procore/js-sdk');

const app = express();
const PORT = 8000;

app.get('/auth', (req, res) => {
  const client = new Procore.Client({
    clientID: tvTY_UFuDzFNhucSI
    clientSecret: QwOiCgzPYYQxqvB
    redirectUri: https://fieldops360.com/oauth/callback
  });

  const authUrl = client.getAuthorizationUrl(['openid']);
  res.redirect(authUrl);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});