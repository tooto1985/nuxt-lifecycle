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
import common from '~/js/common'
const filename = 'pages/index.vue'
const obj = common(filename)
obj.mixins = [mixins]
export default obj
</script>
