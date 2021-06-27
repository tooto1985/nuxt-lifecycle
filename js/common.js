export default (filename) => {
  return {

    key (route) {
      global.trace(`${filename} key`)
    },

    beforeRouteUpdate (to, from, next) {
      global.trace(`${filename} beforeRouteUpdate`)
      next()
    },

    beforeRouteLeave (to, from, next) {
      global.trace(`${filename} beforeRouteLeave`)
      next()
    },

    beforeRouteEnter (to, from, next) {
      global.trace(`${filename} beforeRouteEnter`)
      next()
    },

    layout (context) {
      global.trace(`${filename} layout`)
      return 'default'
    },

    validate () {
      global.trace(`${filename} validate`)
      return true
    },

    transition (to, from) {
      global.trace(`${filename} transition`)
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

    head () {
      global.trace(`${filename} head`)
    },

    watchQuery () {
      global.trace(`${filename} watchQuery`)
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
      global.trace(`${filename} beforeUpdate`)
    },

    updated () {
      global.trace(`${filename} updated`)
    },

    beforeDestroy () {
      global.trace(`${filename} beforeDestroy`)
    },

    destroyed () {
      global.trace(`${filename} destroyed`)
    },

    activated () {
      global.trace(`${filename} activated`)
    },

    deactivated () {
      global.trace(`${filename} deactivated`)
    },

    errorCaptured () {
      global.trace(`${filename} errorCaptured`)
    },

    serverPrefetch () {
      global.trace(`${filename} serverPrefetch`)
    },

    beforeEnter (to, from, next) {
      global.trace(`${filename} beforeEnter`)
      next()
    },

    beforeResolve (to, from, next) {
      global.trace(`${filename} beforeResolve`)
      next()
    },

    afterEach  (to, from, next) {
      global.trace(`${filename} afterEach`)
      next()
    }

  }
}
