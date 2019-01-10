const router = require('express').Router()
const axios = require('axios')

router.get('/', async (req, res, next) => {
  const bookData = await axios.get(
    'https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420&format=json'
  )

  res.json(bookData.data)
})

module.exports = router
