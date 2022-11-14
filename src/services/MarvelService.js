class MarvelService {

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`not fetch ${url}, status ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`https://gateway.marvel.com:443/v1/public/characters?limit=12&offset=210&apikey=1fd8ade1e96af8446fb8bdaba6ce867d`);
        return res.data.results;
        // return res.data.results.map(this._transformCharacter);
    }


    getCharacter = async (id) => {
        const res = await this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?&apikey=1fd8ade1e96af8446fb8bdaba6ce867d`);
        return this._transformCharacter(res);
    }


    _transformCharacter = (res) => {

        return {
            name: res.data.results[0].name,
            description: res.data.results[0].description.length === 0 ? "Character description not available" : res.data.results[0].description,
            thumbnail: res.data.results[0].thumbnail.path + "." + res.data.results[0].thumbnail.extension,
            homepage: res.data.results[0].urls[0].url,
            wiki: res.data.results[0].urls[1].url,
            style: res.data.results[0].thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' ? true : false,
        }
    }


}

export default MarvelService;