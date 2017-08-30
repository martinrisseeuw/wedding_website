<template>
  <div class="container intro-container">
    <div class="bg" :class="{active:active}"></div>
    <div class="bg-gradient" :class="{active:active}"></div>
    <div class="wrapper">
      <h1 class="reveal-text center">A new way <br/> to find homes</h1>
      <p class="fade-in-text center">Homepinr</p>
    </div>
    <ScrollIndicator />
  </div>
</template>

<script>
import ScrollIndicator from '~/components/ScrollIndicator.vue'

export default {
  components: {
    ScrollIndicator
  },
  data () {
    return {
      last_known_scroll_position: 0,
      ticking: false,
      active: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    setTimeout(() => {
      this.active = true
    }, 0)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    fadeOut (scroll_pos) {
      document.querySelector('.intro-container h1').style.transform = `translateY(${scroll_pos / 750}px)`
    },
    handleScroll () {
      this.last_known_scroll_position = window.scrollY;
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.fadeOut(this.last_known_scroll_position);
          this.ticking = false;
        });
      }
      this.ticking = true;
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/css/_variables.scss'
.container
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh
  flex-direction: column

.wrapper
  max-width: $wrapper-xsmall

.bg
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  background: #000 url('/hotelgrouper-header.jpg')
  background-size: cover
  opacity: 0
  transition: opacity 0.5s 2.5s ease-in
  &.active
    opacity: 1
.bg-gradient
  position: absolute
  width: 100%
  height: 100%
  left: 0
  top: 0
  background: linear-gradient(-134deg, #9CCEEA 0%, #BD91F3 100%)
  opacity: 0
  transition: opacity 0.75s ease-in
  &.active
    opacity: 1
    mix-blend-mode: multiply


</style>
