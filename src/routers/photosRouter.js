const {
    Router
} = require('express');
const express = require('express')
const fetchPhotos = require('../utils/fetch-photos')

const key = process.env.FLICKR_KEY
const interestingPhotosURL = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${key}&format=json&nojsoncallback=1&extras=url_m&safesearch=1`;
const searchPhotoUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&format=json&nojsoncallback=1&extras=url_m&safesearch=1&text=`;

const router = new express.Router()

router.get('/interesting-photos', async (req, res) => {
    try {
        const photos = await fetchPhotos(interestingPhotosURL)
        res.send(photos)
    } catch (err) {
        res.status(500).send()
    }
})

router.get("/search-photos/:search", async (req, res) => {
    const search = req.params.search
    try {
        const photos = await fetchPhotos(searchPhotoUrl + search)
        res.send(photos)
    } catch (err) {
        if (err.status === 404) {
            res.status(404).send(err)
        }
        res.status(500).send()
    }
})

module.exports = router

// 1) צרו קישור לדטהבייס של תמונות שבו תאכסנו קישורים לתמונות שלכם
// כל תמונה כוללת מקור ואלטרנטיבה
// 2) צרו שני ראוטים אחד להכנסת דוקומנט של תמונה והשני לשאיבת כל התמונות
// 3) עדכנו את האתר בשדות של הכנסת תמונה וכפתור להצגת כל התמונות מהדטה בייס שלכם

{
    src: 'https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-cat-names-nationalgeographic_1525054.jpg?w=1900&h=1267',
    alt:'cat'
}