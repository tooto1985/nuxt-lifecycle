export default () => {
  if (process.server) {
    // eslint-disable-next-line no-console
    console.log('middleware common [server] 5')
  }
  if (process.client) {
    // eslint-disable-next-line no-console
    console.log('middleware common [client] 66 101')
  }
}
