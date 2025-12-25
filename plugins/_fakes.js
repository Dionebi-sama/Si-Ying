import pkg from '@whiskeysockets/baileys'
import moment from 'moment-timezone'
const { proto } = pkg

var handler = m => m
handler.all = async function (m) {

  // 🧠 FECHA Y HORA
  global.d = new Date(Date.now() + 3600000)
  global.locale = 'es'
  global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
  global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
  global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })

  // ✅ TUS LINKS FIJOS (SIN RANDOM)
  global.canalOficial = 'https://whatsapp.com/channel/0029Vb6ygDELo4hpelb24M01'
  global.comunidadOficial = 'https://chat.whatsapp.com/HbnT0v3LLpwEX4LH0yis3j'

  // 👉 SOLO SE MOSTRARÁ ESTE
  global.redes = global.canalOficial

  // 🧍 USUARIO
  global.nombre = m.pushName || 'Anónimo'

  // 🎨 STICKER PACK
  global.packsticker =
`〄 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦
✩ᩚ Usuario » ${nombre}
✦ Bot » ${botname}`

  global.packsticker2 = `\n\n${dev}`

  // 📢 CANAL FIJO (ESTE ES EL MÁS IMPORTANTE)
  global.rcanal = {
    key: {
      fromMe: false,
      participant: '0@s.whatsapp.net',
      remoteJid: 'status@broadcast',
      id: 'SiYing',
      forwardingScore: 999,
      isForwarded: true
    }
  }
}

export default handler