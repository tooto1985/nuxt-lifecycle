<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import mixins from '@/mixins/mixins-layout.js'
import common from '~/js/common'
const filename = 'layouts/default.vue'
const obj = common(filename)
obj.mixins = [mixins]
export default obj
</script>
