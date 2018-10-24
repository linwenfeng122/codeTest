<template>
  <div>
     <img :src="name == 'checked' ? checked :unchecked" />
  </div>
</template>
<script>
import checked from './images/checked.png'
import unchecked from './images/uncheck.png'
export default {
  props: {
    name: {
      type: String,
      default: 'check'
    }
  },
  data() {
    return {
      checked,
      unchecked
    }
  },
  methods: {
       
  },
}
</script>
<style>

</style>
