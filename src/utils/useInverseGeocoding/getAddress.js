export function getAddress (lat, lng) {
    const GEOCODING_APIKEY = import.meta.env.VITE_GEOCODING_APIKEY;
    const GEOCODING_URL = import.meta.env.VITE_GEOCODING_API_REQUEST;
    const FULL_URL_REQUEST = `${GEOCODING_URL}${lat},${lng}&key=${GEOCODING_APIKEY}`;

    return fetch(FULL_URL_REQUEST)
        .then(res => res.json())
        .then(data => { return data.results[0].formatted_address.split(',')[0]; });

}