<template>
  <div />
</template>

<script>
import mixins from '~/mixins/mixins-component.js'
const filename = 'components'
export default {
  mixins: [mixins],

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
