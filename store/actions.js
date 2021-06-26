export default {
  nuxtServerInit () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('nuxtServerInit [server] 4')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('nuxtServerInit [client]')
    }
  }
}
