export default {
  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line no-console
    console.log('mixins-layout beforeRouteEnter [' + (process.server ? 'server' : 'client') + ']')
    next()
  },

  validate () {
    // eslint-disable-next-line no-console
    console.log('mixins-layout validate [' + (process.server ? 'server' : 'client') + ']')
    return true
  },

  asyncData () {
    // eslint-disable-next-line no-console
    console.log('mixins-layout asyncData [' + (process.server ? 'server' : 'client') + ']')
    return {}
  },

  data () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('mixins-layout data [server] 11')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('mixins-layout data [client] 35')
    }
    return {}
  },

  fetch () {
    // eslint-disable-next-line no-console
    console.log('mixins-layout fetch [' + (process.server ? 'server' : 'client') + ']')
  },

  beforeCreate () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('mixins-layout beforeCreate [server] 8')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('mixins-layout beforeCreate [client] 32')
    }
  },

  created () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('mixins-layout created [server] 12')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('mixins-layout created [client] 36')
    }
  },

  beforeMount () {
    // eslint-disable-next-line no-console
    console.log('mixins-layout beforeMount [client] 38')
  },

  mounted () {
    // eslint-disable-next-line no-console
    console.log('mixins-layout mounted [client] 50')
  },

  beforeUpdate () {
    // eslint-disable-next-line no-console
    console.log('mixins-layout beforeUpdate [' + (process.server ? 'server' : 'client') + ']')
  },

  updated () {
    // eslint-disable-next-line no-console
    console.log('mixins-layout updated [' + (process.server ? 'server' : 'client') + ']')
  },

  beforeDestroy () {
    // eslint-disable-next-line no-console
    console.log('mixins-layout beforeDestroy [' + (process.server ? 'server' : 'client') + ']')
  },

  destroyed () {
    // eslint-disable-next-line no-console
    console.log('mixins-layout destroyed [' + (process.server ? 'server' : 'client') + ']')
  },

  beforeEnter: (to, from, next) => {
    // eslint-disable-next-line no-console
    console.log('mixins-layout beforeEnter [' + (process.server ? 'server' : 'client') + ']')
    next()
  }
}
