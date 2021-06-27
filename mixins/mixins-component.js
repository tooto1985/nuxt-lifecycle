const filename = 'mixins-component'
export default {
  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line no-console
    console.log(`${filename} beforeRouteEnter [' + (process.server ? 'server' : 'client') + ']`)
    next()
  },

  validate () {
    // eslint-disable-next-line no-console
    console.log(`${filename} validate [' + (process.server ? 'server' : 'client') + ']`)
    return true
  },

  asyncData () {
    // eslint-disable-next-line no-console
    console.log(`${filename} asyncData [' + (process.server ? 'server' : 'client') + ']`)
    return {}
  },

  data () {
    global.trace(`${filename} data`)
    return {}
  },

  fetch () {
    // eslint-disable-next-line no-console
    console.log(`${filename} fetch [' + (process.server ? 'server' : 'client') + ']`)
  },

  beforeCreate () {
    global.trace(`${filename} beforeCreate`)
  },

  created () {
    global.trace(`${filename} created`)
  },

  beforeMount () {
    global.trace(`${filename} beforeMount`)
  },

  mounted () {
    global.trace(`${filename} mounted`)
  },

  beforeUpdate () {
    // eslint-disable-next-line no-console
    console.log(`${filename} beforeUpdate [' + (process.server ? 'server' : 'client') + ']`)
  },

  updated () {
    // eslint-disable-next-line no-console
    console.log(`${filename} updated [' + (process.server ? 'server' : 'client') + ']`)
  },

  beforeDestroy () {
    global.trace(`${filename} beforeDestroy`)
  },

  destroyed () {
    global.trace(`${filename} destroyed`)
  },

  beforeEnter: (to, from, next) => {
    // eslint-disable-next-line no-console
    console.log(`${filename} beforeEnter [' + (process.server ? 'server' : 'client') + ']`)
    next()
  }
}
