import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

  global.canalIdM = [
    "120363403739366547@newsletter",
    "120363403739366547@newsletter"
  ]

  global.canalNombreM = [
    "Dios Dionebi-sama",
    "Dionebi-sama CHNL"
  ]

  global.channelRD = await getRandomChannel()

  global.d = new Date(Date.now() + 3600000)
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

  const canal = 'https://whatsapp.com/channel/0029Vb6ygDELo4hpelb24M01'
  const comunidad = 'https://chat.whatsapp.com/HbnT0v3LLpwEX4LH0yis3j'
  const git = 'https://github.com/Dionebi-sama/Si-Ying.git'
  const github = 'https://github.com/Dionebi-sama/Si-Ying.git'
  const correo = 'mka98153@gmail.com'

  global.redes = pickRandom([canal, comunidad, git, github, correo])

  global.nombre = m.pushName || 'Anónimo'

  // ✅ PACK STICKER CORREGIDO
  global.packsticker = `〄 𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗦
✩ᩚ Usuario » ${global.nombre}
✦ Bot » ${global.botname || 'Bot'}`

  global.packsticker2 = `

${global.dev || ''}`

  global.rcanal = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      id: "Halo",
      forwardingScore: 999,
      isForwarded: true
    }
  }
}

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

async function getRandomChannel() {
  let randomIndex = Math.floor(Math.random() * global.canalIdM.length)
  let id = global.canalIdM[randomIndex]
  let name = global.canalNombreM[randomIndex]
  return { id, name }
}