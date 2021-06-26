export default {
  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line no-console
    console.log('mixins-component beforeRouteEnter [' + (process.server ? 'server' : 'client') + ']')
    next()
  },

  validate () {
    // eslint-disable-next-line no-console
    console.log('mixins-component validate [' + (process.server ? 'server' : 'client') + ']')
    return true
  },

  asyncData () {
    // eslint-disable-next-line no-console
    console.log('mixins-component asyncData [' + (process.server ? 'server' : 'client') + ']')
    return {}
  },

  data () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('mixins-component data [server] 25')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('mixins-component data [client] 57 91 126')
    }
    return {}
  },

  fetch () {
    // eslint-disable-next-line no-console
    console.log('mixins-component fetch [' + (process.server ? 'server' : 'client') + ']')
  },

  beforeCreate () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('mixins-component beforeCreate [server] 22')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('mixins-component beforeCreate [client] 54 88 123')
    }
  },

  created () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('mixins-component created [server] 26')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('mixins-component created [client] 58 92 127')
    }
  },

  beforeMount () {
    // eslint-disable-next-line no-console
    console.log('mixins-component beforeMount [client] 60 94 129')
  },

  mounted () {
    // eslint-disable-next-line no-console
    console.log('mixins-component mounted [client] 62 97 132')
  },

  beforeUpdate () {
    // eslint-disable-next-line no-console
    console.log('mixins-component beforeUpdate [' + (process.server ? 'server' : 'client') + ']')
  },

  updated () {
    // eslint-disable-next-line no-console
    console.log('mixins-component updated [' + (process.server ? 'server' : 'client') + ']')
  },

  beforeDestroy () {
    // eslint-disable-next-line no-console
    console.log('mixins-component beforeDestroy [client] 73 108')
  },

  destroyed () {
    // eslint-disable-next-line no-console
    console.log('mixins-component destroyed [client] 75 110')
  },

  beforeEnter: (to, from, next) => {
    // eslint-disable-next-line no-console
    console.log('mixins-component beforeEnter [' + (process.server ? 'server' : 'client') + ']')
    next()
  }
}
