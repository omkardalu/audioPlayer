# Spotify Authentication Backend

This backend service handles Spotify OAuth authentication for the Audio Player application.

## Environment Variables

Before running the API, create a `.env` file with the following variables:

```env
CLIENT_ID=your_spotify_client_id
CLIENT_SECRET=your_spotify_client_secret
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:8000
```

## Authentication Flow

The authentication process follows these steps:

1. **Initial Login**
   - Frontend should redirect users to: `GET /login`
   - This will redirect to Spotify's login page
   - After login, Spotify redirects to our callback URL

2. **Token Management**
   - After successful login, the backend sets two HTTP-only cookies:
     - `accessToken`: Valid for 1 hour
     - `refreshToken`: Used to get new access tokens
   - Cookies are secure and can't be accessed via JavaScript

3. **Making API Requests**
   - Use the `/spotify/*` endpoint for all Spotify API requests
   - Example: `/spotify/me` to get user profile
   - The backend automatically includes the access token

4. **Token Refresh**
   - When a 401 status is received, call: `GET /refresh`
   - The backend will handle token refresh automatically
   - New tokens will be set in cookies

## API Endpoints

### GET /login
- Initiates the Spotify OAuth flow
- No parameters required
- Redirects to Spotify login page

### GET /callback
- Handled by backend
- Sets authentication cookies
- Redirects to frontend

### GET /refresh
- Refreshes expired access token
- Automatically handles token refresh
- Returns new token data

### GET /spotify/*
- Proxy for Spotify Web API
- Requires valid access token in cookies
- Returns Spotify API response

## Error Handling

- 401: Unauthorized (invalid/expired token)
- 400: Bad Request (missing parameters)
- 429: Rate Limit Exceeded
- 500: Server Error

## Security Notes

- Tokens are stored in HTTP-only cookies
- CORS is enabled only for specified frontend URL
- All requests must include credentials

