<template>
	<component v-bind="linkProps(to)">
    <slot/>
  </component>
</template>

<script>
export default {
 props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps(to) {
       if (to == "1") {
       	  return {
       	  	 is: 'a',
       	  	 href: 'http://www.baidu.com'
       	  }
       }else{
       	  return {
       	  	is: 'router-link',
       	  	to: '/test'
       	  }
       }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
