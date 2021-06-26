<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import mixins from '@/mixins/mixins-layout.js'
export default {
  mixins: [mixins],

  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line no-console
    console.log(
      'layout beforeRouteEnter [' + (process.server ? 'server' : 'client') + ']'
    )
    next()
  },

  validate () {
    // eslint-disable-next-line no-console
    console.log(
      'layout validate [' + (process.server ? 'server' : 'client') + ']'
    )
    return true
  },

  asyncData () {
    // eslint-disable-next-line no-console
    console.log(
      'layout asyncData [' + (process.server ? 'server' : 'client') + ']'
    )
    return {}
  },

  data () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('layout data [server] 10')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('layout data [client] 34')
    }
    return {}
  },

  fetch () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('layout fetch [server] 14')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('layout fetch [client]')
    }
  },

  beforeCreate () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('layout beforeCreate [server] 9')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('layout beforeCreate [client] 33')
    }
  },

  created () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('layout created [server] 13')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('layout created [client] 37')
    }
  },

  beforeMount () {
    // eslint-disable-next-line no-console
    console.log('layout beforeMount [client] 39')
  },

  mounted () {
    // eslint-disable-next-line no-console
    console.log('layout mounted [client] 51')
  },

  beforeUpdate () {
    // eslint-disable-next-line no-console
    console.log('layout beforeUpdate')
  },

  updated () {
    // eslint-disable-next-line no-console
    console.log('layout updated')
  },

  beforeDestroy () {
    // eslint-disable-next-line no-console
    console.log('layout beforeDestroy')
  },

  destroyed () {
    // eslint-disable-next-line no-console
    console.log('layout destroyed')
  },

  beforeEnter: (to, from, next) => {
    // eslint-disable-next-line no-console
    console.log(
      'layout beforeEnter [' + (process.server ? 'server' : 'client') + ']'
    )
    next()
  }
}
</script>
