import {useHttp} from "../hooks/http.hook";

const MarvelService = () => {

    const {loading, request, error, process, clearError, setProcess} = useHttp();
    // const _baseOffset = 210;
    const _baseOffset = Math.floor(Math.random() * (1300 - 4)) + 4;;
    // const _baseOffsetComics = 8;
    const _baseOffsetComics = Math.floor(Math.random() * (200 - 4)) + 4;

    const getCharacterByName = async (name) => {
        const res = await request(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=1fd8ade1e96af8446fb8bdaba6ce867d`);
        return _transformCharacter(res);

    }

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`https://gateway.marvel.com:443/v1/public/characters?limit=6&offset=${_baseOffset}&apikey=1fd8ade1e96af8446fb8bdaba6ce867d`);
        return res.data.results;
    }


    const getCharacter = async (id) => {
        const res = await request(`https://gateway.marvel.com:443/v1/public/characters/${id}?&apikey=1fd8ade1e96af8446fb8bdaba6ce867d`);
        return _transformCharacter(res);
        // return res;
    }

    const getAllComics = async () => {
        const res = await request(`https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=${_baseOffsetComics}&apikey=1fd8ade1e96af8446fb8bdaba6ce867d`);
        return res.data.results;
    }

    const getComics = async (id) => {
        const res = await request(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=1fd8ade1e96af8446fb8bdaba6ce867d`);
        return _transformComics(res.data.results[0]);

    }

    const _transformCharacter = (res) => {
        return {
            name: res.data.results[0].name,
            description: res.data.results[0].description.length === 0 ? "Character description not available" : res.data.results[0].description,
            thumbnail: res.data.results[0].thumbnail.path + "." + res.data.results[0].thumbnail.extension,
            homepage: res.data.results[0].urls[0].url,
            wiki: res.data.results[0].urls[1].url,
            style: res.data.results[0].thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' ? true : false,
            comics: res.data.results[0].comics.items.splice(10)
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'There is no description',
            pageCount: comics.pageCount ? `${comics.pageCount} $.` : 'No information about the number of pages',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            price: comics.prices.price ? `${comics.prices.price}$` : 'not available'
        }
    }

    return {loading, error, process, setProcess, getAllCharacters, getCharacter, getAllComics, getComics, getCharacterByName}
}

export default MarvelService;