// Funciones de descarga
const fetch = require('node-fetch')
const axios = require('axios')

const fetchJson = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Error fetching JSON:', error)
    return null
  }
}

const getBuffer = async (url) => {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' })
    return Buffer.from(response.data)
  } catch (error) {
    console.error('Error getting buffer:', error)
    return null
  }
}

const fetchBuffer = async (url) => {
  return getBuffer(url)
}

module.exports = {
  fetchJson,
  getBuffer,
  fetchBuffer
}
