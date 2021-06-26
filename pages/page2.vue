<template>
  <div>
    <Logo />
    <nuxt-link to="/">
      index
    </nuxt-link>
  </div>
</template>

<script>
import mixins from '~/mixins/mixins-page.js'
export default {
  mixins: [mixins],

  beforeRouteEnter (to, from, next) {
    // eslint-disable-next-line no-console
    console.log('page2.vue beforeRouteEnter [client] 70')
    next()
  },

  validate () {
    // eslint-disable-next-line no-console
    console.log('page2.vue validate [client] 67')
    return true
  },

  asyncData () {
    // eslint-disable-next-line no-console
    console.log('page2.vue asyncData [client] 68')
    return {}
  },

  data () {
    // eslint-disable-next-line no-console
    console.log('page2.vue data [client] 81')
    return {}
  },

  fetch () {
    // eslint-disable-next-line no-console
    console.log('page2.vue fetch [client] 87')
  },

  beforeCreate () {
    // eslint-disable-next-line no-console
    console.log('page2.vue beforeCreate [client] 80')
  },

  created () {
    // eslint-disable-next-line no-console
    console.log('page2.vue created [client] 84')
  },

  beforeMount () {
    // eslint-disable-next-line no-console
    console.log('page2.vue beforeMount [client] 86')
  },

  mounted () {
    // eslint-disable-next-line no-console
    console.log('page2.vue mounted [client] 100')
  },

  beforeUpdate () {
    // eslint-disable-next-line no-console
    console.log('page2.vue beforeUpdate')
  },

  updated () {
    // eslint-disable-next-line no-console
    console.log('page2.vue updated')
  },

  beforeDestroy () {
    // eslint-disable-next-line no-console
    console.log('page2.vue beforeDestroy [client] 107')
  },

  destroyed () {
    // eslint-disable-next-line no-console
    console.log('page2.vue destroyed [client] 113')
  },

  beforeEnter: (to, from, next) => {
    // eslint-disable-next-line no-console
    console.log('page2.vue beforeEnter [' + (process.server ? 'server' : 'client') + ']')
    next()
  }

}

</script>
