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
const filename = 'pages page2.vue'
export default {
  mixins: [mixins],

  beforeRouteEnter (to, from, next) {
    global.trace(`${filename} beforeRouteEnter`)
    next()
  },

  validate () {
    global.trace(`${filename} validate`)
    return true
  },

  asyncData () {
    global.trace(`${filename} asyncData`)
    return {}
  },

  data () {
    global.trace(`${filename} data`)
    return {}
  },

  fetch () {
    global.trace(`${filename} fetch`)
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
    console.log(`${filename} beforeUpdate`)
  },

  updated () {
    // eslint-disable-next-line no-console
    console.log(`${filename} updated`)
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

</script>
