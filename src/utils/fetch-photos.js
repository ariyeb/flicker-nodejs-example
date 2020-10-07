const axios = require('axios')

const fetchPhotos = async (url) => {
    try {
        let res = await axios.get(url)
        if (res.data.photos.photo.length > 0) {
            let imagesSrc = []
            for (let photo of res.data.photos.photo) {
                imagesSrc.push(photo.url_m)
            }
            return imagesSrc
        } else {
            throw {
                status: 404,
                message: 'Not found'
            }
        }
    } catch (err) {
        throw err
    }
}

// fetchPhotos(
//     "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=862cf7564786b5f8ea2e217171509942&format=json&nojsoncallback=1&extras=url_m&safesearch=1&text=" + "tre888e"
// ).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

module.exports = fetchPhotos