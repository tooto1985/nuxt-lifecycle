
let count
const trace = (name) => {
  if (process.server) {
    if (!global._count) {
      global._count = { n: 0 }
    }
    count = global._count
  } else if (!window._count) {
    window._count = { n: 0 }
    count = window._count
  }
  count.n++
  // eslint-disable-next-line no-console
  console.log(name + ' [' + (process.server ? 'server' : 'client') + '] ' + count.n)
}
global.trace = trace

export default () => {
  trace('plugins')
}
