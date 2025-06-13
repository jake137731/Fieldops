
# FieldOps360 Monorepo

This repository contains the full monorepo setup for FieldOps360, including both frontend and AI backend services.

## Structure

- `frontend/` – React/Next.js frontend application
- `backend/` – FastAPI/Flask backend for AI assistant
- `docker-compose.yml` – Orchestrates both services for local or cloud deployment

## Deployment

```bash
docker-compose up --build
```

## Notes

- You can use this for DigitalOcean App Platform or any Docker-compatible cloud hosting.
