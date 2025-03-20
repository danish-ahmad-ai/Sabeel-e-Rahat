FROM python:3.9-slim

WORKDIR /app

COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .

ENV PORT=8000

CMD ["/bin/bash", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT}"] 