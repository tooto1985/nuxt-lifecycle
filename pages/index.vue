<template>
  <div>
    <Logo />
    <nuxt-link to="/page2">
      page2
    </nuxt-link>
  </div>
</template>

<script>
import mixins from '~/mixins/mixins-page.js'
export default {
  mixins: [mixins],

  beforeRouteEnter (to, from, next) {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('index.vue beforeRouteEnter [server] 3')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('index.vue beforeRouteEnter [client] 31 105')
    }
    next()
  },

  validate () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('index.vue validate [server] 6')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('index.vue validate [client] 102')
    }
    return true
  },

  asyncData () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('index.vue asyncData [server] 7')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('index.vue asyncData [client] 103')
    }
    return {}
  },

  data () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('index.vue data [server] 17')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('index.vue data [client] 42 116')
    }
    return {}
  },

  fetch () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('index.vue fetch [server] 21')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('index.vue fetch [client] 122')
    }
  },

  beforeCreate () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('index.vue beforeCreate [server] 16')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('index.vue beforeCreate [client] 41 115')
    }
  },

  created () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('index.vue created [server] 20')
    }
    if (process.client) {
      // eslint-disable-next-line no-console
      console.log('index.vue created [client] 45 119')
    }
  },

  beforeMount () {
    // eslint-disable-next-line no-console
    console.log('index.vue beforeMount [client] 47 121')
  },

  mounted () {
    // eslint-disable-next-line no-console
    console.log('index.vue mounted [client] 49 135')
  },

  beforeUpdate () {
    // eslint-disable-next-line no-console
    console.log('index.vue beforeUpdate [client] 53')
  },

  updated () {
    // eslint-disable-next-line no-console
    console.log('index.vue updated [client] 65')
  },

  beforeDestroy () {
    // eslint-disable-next-line no-console
    console.log('index.vue beforeDestroy [client] 72')
  },

  destroyed () {
    // eslint-disable-next-line no-console
    console.log('index.vue destroyed [client] 78')
  },

  beforeEnter: (to, from, next) => {
    // eslint-disable-next-line no-console
    console.log('index.vue beforeEnter [' + (process.server ? 'server' : 'client') + ']')
    next()
  }

}

</script>
