export const getGifs = async ( category ) => {
    const apiKey = 'fx5pzMP634lV9x1iqcJN4XhwZFecgGGp';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

    const resp = await fetch( url );
    const { data } = await resp.json()

    const gifs = data.map( img => ({

        id: img.id,
        title: img.title,
        img: img.images.downsized_medium.url,           
    }))

    return gifs;
};