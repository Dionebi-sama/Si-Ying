import fs from 'fs'

const DB = './database/register.json'

// crear DB si no existe
if (!fs.existsSync('./database')) fs.mkdirSync('./database')
if (!fs.existsSync(DB)) fs.writeFileSync(DB, JSON.stringify({}))

let handler = async (m, { args }) => {
  let users = JSON.parse(fs.readFileSync(DB))
  let id = m.sender

  if (users[id]) {
    return m.reply('❌ Ya estás registrado.')
  }

  if (!args[0] || !args[0].includes('.')) {
    return m.reply(
`❌ Formato incorrecto

📌 Ejemplo:
.register Dionebi-sama.18`
    )
  }

  let [nombre, edad] = args[0].split('.')

  if (!nombre || !edad || isNaN(edad)) {
    return m.reply('❌ Nombre o edad inválidos.')
  }

  users[id] = {
    nombre,
    edad: Number(edad),
    fecha: new Date().toLocaleDateString()
  }

  fs.writeFileSync(DB, JSON.stringify(users, null, 2))

  m.reply(
`✅ REGISTRO COMPLETADO

👤 Nombre: ${nombre}
🎂 Edad: ${edad}

🤖 Bot: Si Ying`
  )
}

handler.command = ['register']
export default handler