export const firebaseConfig = {
  apiKey: "AIzaSyCDGeYkkWBkaIeEIj2j9Di1-QIco2nNBX8",
  authDomain: "matcher-api.firebaseapp.com",
  storageBucket: "matcher-api.appspot.com"
}

// export const apiEndpoint = "https://us-central1-matcher-api.cloudfunctions.net/api" // For production
export const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || "http://localhost:8080"
export const apiEndpointOf = (path: string) => `${apiEndpoint}${path}`