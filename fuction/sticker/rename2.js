// Funciones alternativas para stickers
const sendVideoAsSticker2 = async (sock, from, videoPath, quoted) => {
  try {
    await sock.sendMessage(from, {
      sticker: { url: videoPath }
    }, { quoted })
  } catch (error) {
    console.error('Error sending video sticker:', error)
  }
}

const sendImageAsSticker2 = async (sock, from, imagePath, quoted) => {
  try {
    await sock.sendMessage(from, {
      sticker: { url: imagePath }
    }, { quoted })
  } catch (error) {
    console.error('Error sending image sticker:', error)
  }
}

module.exports = {
  sendVideoAsSticker2,
  sendImageAsSticker2
}
