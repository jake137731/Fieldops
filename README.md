# FieldOps360

**AI-Powered Construction Service Platform for Procore**

FieldOps360 is an integrated platform built to enhance field service workflows, leveraging AI tools and seamless Procore API integrations.

---

## 🏗️ Structure

```
├── frontend/               # React/Next.js frontend application
├── backend/                # FastAPI backend for AI assistant
├── docker-compose.yml      # Orchestrates frontend and backend for deployment
```

---

## 🚀 Deployment

To build and deploy locally or to DigitalOcean App Platform:

```bash
docker-compose up --build
```

---

## 📦 Requirements

### Frontend
- Node.js 18+
- React / Next.js

### Backend
- Python 3.9+
- FastAPI
- OpenAI SDK

---

## ☁️ Cloud Hosting

- Works out-of-the-box with [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)
- Also compatible with Heroku, Render, and other Docker-ready services

---

## 🔐 Environment Variables

Create a `.env` file for secrets like API keys (if applicable):

```
OPENAI_API_KEY=your_key_here
PROCORE_CLIENT_ID=your_id_here
PROCORE_CLIENT_SECRET=your_secret_here
```

---

## 📖 License

MIT License © 2025 Jake McDonough
