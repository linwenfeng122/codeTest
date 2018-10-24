<template>
   <div :class="b()">
    <slot />
  </div>
</template>
<script>
import bem from '../mixins/bem'
export default {
  name: 'checkbox-group',
  mixins: [bem],
   props: {
    value: Array,
    disabled: Boolean,
    max: {
      default: 0,
      type: Number
    }
  },
  // watch: {
  //   value(value) {
  //       console.log('watch',value)
  //     this.$emit('change', value);
  //   }
  // }
}
</script>
