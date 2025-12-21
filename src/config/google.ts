// Google API Configuration
// Replace these with your own Google API credentials from https://console.cloud.google.com/

export const GOOGLE_CONFIG = {
  // OAuth 2.0 Client ID (for Google Sign-In and Calendar access)
  clientId: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com",
  
  // API Key (for public calendar access)
  apiKey: "YOUR_GOOGLE_API_KEY",
  
  // Scopes needed for Google Calendar
  scopes: [
    "https://www.googleapis.com/auth/calendar.readonly",
    "https://www.googleapis.com/auth/calendar.events.readonly",
  ].join(" "),
};
