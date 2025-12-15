// Funciones auxiliares
const mime = require('mime-types')

const getExtension = (url) => {
  try {
    const urlParts = url.split('?')[0]
    const ext = urlParts.split('.').pop()
    return ext || 'jpg'
  } catch (error) {
    return 'jpg'
  }
}

const getRandom = (arr) => {
  if (!Array.isArray(arr)) return null
  return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = {
  getExtension,
  getRandom
}
