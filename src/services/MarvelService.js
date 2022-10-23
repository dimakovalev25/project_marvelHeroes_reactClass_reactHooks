

class MarvelService {
    _apiBase= 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=1fd8ade1e96af8446fb8bdaba6ce867d';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`not fetch ${url}, status ${res.status}`);

        }
        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=200&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`);
    }
    
}

export default MarvelService;