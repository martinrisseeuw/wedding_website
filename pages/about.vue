<template>
  <section class="container">
    <About />
  </section>
</template>

<script>
import About from '~components/About.vue'

export default {
  components: {
    About
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/css/_variables.scss'
.container
  margin-top: 60px
</style>
