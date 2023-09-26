const { Nuxt } = require('nuxt-start')

const config = require('./nuxt.config.js') // Certifique-se de que o caminho esteja correto
const nuxt = new Nuxt(config)

async function start() {
  await nuxt.ready()
  const { host, port } = nuxt.options.server
  await nuxt.server.listen(port, host)
  console.log(`Server listening on http://${host}:${port}`)
}

start()
