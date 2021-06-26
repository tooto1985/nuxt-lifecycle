<template>
  <div />
</template>

<script>
import mixins from '~/mixins/mixins-component.js'
export default {
  mixins: [mixins],

  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line no-console
    console.log('component beforeRouteEnter [' + (process.server ? 'server' : 'client') + ']')
    next()
  },

  validate () {
    // eslint-disable-next-line no-console
    console.log('component validate [' + (process.server ? 'server' : 'client') + ']')
    return true
  },

  asyncData () {
    // eslint-disable-next-line no-console
    console.log('component asyncData [' + (process.server ? 'server' : 'client') + ']')
    return {}
  },

  data () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('component data [server] 24')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('component data [client] 56 90 125')
    }
    return {}
  },

  fetch () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('component fetch [server] 28')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('component fetch [client] 96 131')
    }
  },

  beforeCreate () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('component beforeCreate [server] 23')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('component beforeCreate [client] 55 89 124')
    }
  },

  created () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('component created [server] 27')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('component created [client] 59 93 128')
    }
  },

  beforeMount () {
    // eslint-disable-next-line no-console
    console.log('component beforeMount [client] 61 95 130')
  },

  mounted () {
    // eslint-disable-next-line no-console
    console.log('component mounted [client] 63 98 133')
  },

  beforeUpdate () {
    // eslint-disable-next-line no-console
    console.log('component beforeUpdate')
  },

  updated () {
    // eslint-disable-next-line no-console
    console.log('component updated')
  },

  beforeDestroy () {
    // eslint-disable-next-line no-console
    console.log('component beforeDestroy [client] 74 109')
  },

  destroyed () {
    // eslint-disable-next-line no-console
    console.log('component destroyed [client] 76 111')
  },

  beforeEnter: (to, from, next) => {
    // eslint-disable-next-line no-console
    console.log('component beforeEnter [' + (process.server ? 'server' : 'client') + ']')
    next()
  }

}

</script>
