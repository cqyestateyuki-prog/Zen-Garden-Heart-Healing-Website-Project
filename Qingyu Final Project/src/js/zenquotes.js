export async function fetchRandomQuote() {
  try {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const apiUrl = 'https://zenquotes.io/api/random';
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}
