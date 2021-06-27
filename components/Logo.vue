<template>
  <div />
</template>

<script>
import mixins from '~/mixins/mixins-component.js'
import common from '~/js/common'
const filename = 'components/Logo.vue'
const obj = common(filename)
obj.mixins = [mixins]
export default obj
</script>
