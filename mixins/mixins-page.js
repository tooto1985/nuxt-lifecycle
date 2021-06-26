export default {
  beforeRouteEnter (to, from, next) {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('mixins-page beforeRouteEnter [server] 2')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('mixins-page beforeRouteEnter [client] 30 69 104')
    }
    next()
  },

  validate () {
    // eslint-disable-next-line no-console
    console.log('mixins-page validate [' + (process.server ? 'server' : 'client') + ']')
    return true
  },

  asyncData () {
    // eslint-disable-next-line no-console
    console.log('mixins-page asyncData [' + (process.server ? 'server' : 'client') + ']')
    return {}
  },

  data () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('mixins-page data [server] 18')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('mixins-page data [client] 43 82 117')
    }
    return {}
  },

  fetch () {
    // eslint-disable-next-line no-console
    console.log('mixins-page fetch [' + (process.server ? 'server' : 'client') + ']')
  },

  beforeCreate () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('mixins-page beforeCreate [server] 15')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('mixins-page beforeCreate [client] 40 79 114')
    }
  },

  created () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('mixins-page created [server] 19')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('mixins-page created [client] 44 83 118')
    }
  },

  beforeMount () {
    // eslint-disable-next-line no-console
    console.log('mixins-page beforeMount [client] 46 85 120')
  },

  mounted () {
    // eslint-disable-next-line no-console
    console.log('mixins-page mounted [client] 48 99 134')
  },

  beforeUpdate () {
    // eslint-disable-next-line no-console
    console.log('mixins-page beforeUpdate [client] 52')
  },

  updated () {
    // eslint-disable-next-line no-console
    console.log('mixins-page updated [client] 64')
  },

  beforeDestroy () {
    // eslint-disable-next-line no-console
    console.log('mixins-page beforeDestroy [client] 71 106')
  },

  destroyed () {
    // eslint-disable-next-line no-console
    console.log('mixins-page destroyed [client] 77 112')
  },

  beforeEnter: (to, from, next) => {
    // eslint-disable-next-line no-console
    console.log('mixins-page beforeEnter [' + (process.server ? 'server' : 'client') + ']')
    next()
  }
}
