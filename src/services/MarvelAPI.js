import axios from 'axios'

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/'
const apiKey = 'd8bc90f7a387932727024d6beabe42be'
const pvtKey = 'a9cbec2e06f0b5aecd712f0a934887f150575b03'

export default {

  getAllComics: (limit, callback) => {
    let timestamp = Date().currentTimeInMillis()

    // eslint-disable-next-line no-undef
    let md5hash = CryptoJS.MD5(timestamp + pvtKey + apiKey)

    const urlComics = urlBaseMarvel + 'comics?apikey=' + apiKey + '&limit=' + limit + '&ts=' + timestamp + '&hash' + md5hash
    axios.get(urlComics).then((comics) => {
      if (callback) {
        callback(comics)
      }
    })
  }
}
