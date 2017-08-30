<template>
  <nuxt-link :to="link" class="view">{{text}}
    <svg width="24" height="22" viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <g stroke-linecap="round" stroke="#00F">
        <path stroke-linejoin="round" d="M12 21l10.92-10.513L12 .5"/>
        <path d="M22.92 10.5H1.08"/>
      </g>
      <path d="M-1-2h26v25H-1z"/>
      </g>
    </svg>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    link: {
      type: String
    }
  },
  mounted () {
    document.addEventListener('keydown', this.escapeKeyListener)
  },
  destroyed () {
    document.removeEventListener('keydown', this.escapeKeyListener)
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/css/_variables.scss'
a
  font-size: 0.8125em
  color: #0000FF
  letter-spacing: 0
  margin-bottom: 1em
  svg
    transition: 0.25s ease-in
    margin-left: 10px
  &:hover
    opacity: 0.7
    svg
      transform: translateX(3px)
</style>
