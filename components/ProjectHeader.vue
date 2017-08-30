<template>
  <div class="container project-header">
    <div class="wrapper">
      <div class="content">
        <h2 class="reveal-text">Homepinr. Dream. Pin. Move.</h2>
        <p class="fade-in-text">What if we change the way people look for a new place? This was the idea of René from Homepinr. Together with René we teamed up to create a new platform, Homepinr, to chane the way people find a place to live.</p>
      </div>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      last_known_scroll_position: 0,
      ticking: false,
      active: false
    }
  },
  mounted () {
    this.$emit('headerheight', document.querySelector('.project-header').offsetHeight)
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
      // document.querySelector('.intro-container h1').style.transform = `translateY(${scroll_pos / 750}px)`
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
.loaded .container
  background: $light-grey
  transition: all 1.4s cubic-bezier(0.42, 0, 1, 1)
.container
  padding: 80px 0
  width: 100%
  display: flex
  justify-content: flex-end
  align-items: center
.wrapper
  width: 100%
  padding-right: 140px
  margin: auto
  display: flex
  justify-content: flex-end
  align-items: center
  .content
    max-width: 640px
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
