<template>
<div class="landing">
	<hello></hello>
	<info></info>
</div>
</template>
<script>
import Hello from "./Hello.vue"
import Info from "./info.vue"
export default {
  name: 'landing',
  data() {
    return {}
  },
  components: {  Hello, Info }
}
</script>
<style>
</style>