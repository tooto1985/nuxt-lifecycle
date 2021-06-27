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
import common from '~/js/common'
const filename = 'pages/page2.vue'
const obj = common(filename)
obj.mixins = [mixins]
export default obj
</script>
