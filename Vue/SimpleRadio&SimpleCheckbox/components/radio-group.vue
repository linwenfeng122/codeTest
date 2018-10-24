<template>
   <div :class="b()">
    <slot />
  </div>
</template>
<script>
import bem from '../mixins/bem'
export default {
  name: 'radio-group',
  mixins: [bem],
  data() {
    return {
       parent: null
    }
  },
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    // value(value) {
    //     console.log('watch',value)
    //   this.$emit('change', value);
    // }
  }
}
</script>
