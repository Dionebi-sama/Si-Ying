import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

  /* ───── FECHA Y HORA ───── */
  global.d = new Date(Date.now() + 3600000)
  global.locale = 'es'
  global.dia = global.d.toLocaleDateString(locale, { weekday: 'long' })
  global.fecha = global.d.toLocaleDateString('es', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  })
  global.mes = global.d.toLocaleDateString('es', { month: 'long' })
  global.año = global.d.toLocaleDateString('es', { year: 'numeric' })
  global.tiempo = global.d.toLocaleTimeString('es', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  /* ───── CANAL Y COMUNIDAD OFICIAL (FIJOS) ───── */
  global.canalOficial = 'https://whatsapp.com/channel/0029Vb6ygDELo4hpelb24M01'
  global.comunidadOficial = 'https://chat.whatsapp.com/HbnT0v3LLpwEX4LH0yis3j'

  /* ───── REDES (SIN RANDOM) ───── */
  global.redes = `${global.canalOficial}\n${global.comunidadOficial}`

  /* ───── DATOS DEL USUARIO ───── */
  global.nombre = m.pushName || 'Anónimo'

  /* ───── PACK STICKERS ───── */
  global.packsticker =
`〄 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦
✩ᩚ Usuario » ${global.nombre}
✦ Bot » ${global.botname || 'Si Ying'}`

  global.packsticker2 = `\n\n👑 dionebi-sama | 開発者`

  /* ───── MENSAJE REENVIADO (CANAL) ───── */
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