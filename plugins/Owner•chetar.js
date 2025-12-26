const handler = async (m, { conn }) => {
  if (!global.db.data.users[m.sender]) return

  global.db.data.users[m.sender].money = Infinity
  global.db.data.users[m.sender].coin = Infinity
  global.db.data.users[m.sender].level = Infinity
  global.db.data.users[m.sender].exp = Infinity

  await conn.sendMessage(
    m.chat,
    {
      text: `🚩 *@${m.sender.split('@')[0]} ahora tiene recursos ilimitados*`,
      mentions: [m.sender]
    },
    { quoted: m }
  )
}

handler.help = ['cheat']
handler.tags = ['owner']
handler.command = ['cheat', 'ilimitado', 'infinity', 'chetar']
handler.rowner = true

export default handler