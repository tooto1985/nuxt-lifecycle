export default () => {
  if (process.server) {
    // eslint-disable-next-line no-console
    console.log('plugins [server] 1')
  }
  if (process.client) {
    // eslint-disable-next-line no-console
    console.log('plugins [client] 29')
  }
}
