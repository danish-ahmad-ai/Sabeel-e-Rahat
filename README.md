# Sabeel-e-Rahat

A charity organization website built with Next.js and FastAPI.

## Project Structure

- `frontend/` - Next.js frontend application
- `backend/` - FastAPI backend application

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate virtual environment:
   ```bash
   # Windows
   .\venv\Scripts\activate
   
   # Linux/Mac
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the development server:
   ```bash
   uvicorn main:app --reload
   ```
   The API will be available at http://localhost:8000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   The website will be available at http://localhost:3000

## Development

- Backend API documentation will be available at http://localhost:8000/docs
- Frontend uses Next.js 14 with App Router
- TypeScript is used throughout the project
- Tailwind CSS is used for styling 