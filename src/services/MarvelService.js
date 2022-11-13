class MarvelService {

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`not fetch ${url}, status ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=200&apikey=1fd8ade1e96af8446fb8bdaba6ce867d`);
    }


    getCharacter = async (id) => {
        const res = await this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?&apikey=1fd8ade1e96af8446fb8bdaba6ce867d`);
        return this._transformCharacter(res);
    }


    _transformCharacter = (res) => {
        return {
            name: res.data.results[0].name,
            description: res.data.results[0].description,
            thumbnail: res.data.results[0].thumbnail.path + "." + res.data.results[0].thumbnail.extension,
            homepage: res.data.results[0].urls[0].url,
            wiki: res.data.results[0].urls[1].url,
        }
    }


}

export default MarvelService;