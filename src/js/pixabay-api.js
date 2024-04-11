const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43222860-c920ce4922a75b9f5ac3c35c2';

function getData(str) {
  const parameters = new URLSearchParams({
    key: API_KEY,
    q: str,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  });

  return fetch(`${BASE_URL}?${parameters}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
export { getData };
