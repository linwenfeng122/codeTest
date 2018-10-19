<template>
    <div>
       <app-link to="1" >a链接</app-link>
       <app-link to="2" >router-link</app-link>
    </div>
</template>

<script>
import appLink from './link'
export default {

  components: {
    appLink
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
