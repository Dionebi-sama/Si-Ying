import pkg from '@whiskeysockets/baileys'
import moment from 'moment-timezone'
const { proto } = pkg

var handler = m => m
handler.all = async function (m) {

  // 📌 FECHA Y HORA
  const d = new Date(Date.now() + 3600000)
  global.locale = 'es'
  global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
  global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
  global.mes = d.toLocaleDateString('es', { month: 'long' })
  global.año = d.toLocaleDateString('es', { year: 'numeric' })
  global.tiempo = d.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })

  // ✅ ENLACES OFICIALES (FIJOS)
  global.canalOficial = 'https://whatsapp.com/channel/0029Vb6ygDELo4hpelb24M01'
  global.comunidadOficial = 'https://chat.whatsapp.com/HbnT0v3LLpwEX4LH0yis3j'
  global.githubOficial = 'https://github.com/Dionebi-sama/Si-Ying.git'
  global.correoOficial = 'mka98153@gmail.com'

  // ❌ YA NO RANDOM
  global.redes = `
📢 Canal oficial:
${global.canalOficial}

👥 Comunidad:
${global.comunidadOficial}

💻 GitHub:
${global.githubOficial}

✉️ Contacto:
${global.correoOficial}
`

  // 👤 USUARIO
  global.nombre = m.pushName || 'Anónimo'

  // 🎨 STICKERS
  global.packsticker = `〄 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦
✩ Usuario » ${global.nombre}
✦ Bot » ${global.botname}`

  global.packsticker2 = `\n\n${global.dev}`

  // ❌ ELIMINAMOS rcanel reenviado
  // (esto es lo que causaba "Ver canal" incorrecto)

}

export default handler