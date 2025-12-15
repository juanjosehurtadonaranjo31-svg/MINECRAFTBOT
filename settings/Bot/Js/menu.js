// Menú principal del bot
const Menu = (greeting, botName, sender, groupName, groupMembers) => {
  return `
╔═══════════════════════════════════╗
║   🎮 ${botName.toUpperCase()} 🎮
║
║ ${greeting}
║
╚═══════════════════════════════════╝

👤 Usuario: @${sender.split('@')[0]}
📱 Grupo: ${groupName}
👥 Miembros: ${groupMembers}

═══════════════════════════════════

🎮 JUEGOS
#jugar - Acceder a todos los juegos
#ruleta - Jugar a la ruleta
#tragaperras - Jugar tragaperras
#minar - Minería

👤 PERFIL
#registro - Registrarse
#perfil - Ver perfil
#balance - Ver dinero
#ranking - Ver rankings

🛠️ UTILIDADES
#menu - Este menú
#ayuda - Obtener ayuda
#ping - Latencia del bot
#sticker - Crear sticker

═══════════════════════════════════

✨ Para más info: #ayuda
`
}

module.exports = Menu
