<template>
  <div class="container intro-container">
    <div class="bg"></div>
    <div class="wrapper">
      <p class="reveal-text">Hi, we're Martim. A digital agency that crafts high quality usable and unique interfaces for both you and its visitors.</p>
    </div>
    <ScrollIndicator />
  </div>
</template>

<script>
import ScrollIndicator from '~components/ScrollIndicator.vue'

export default {
  components: {
    ScrollIndicator
  },
  data () {
    return {
      last_known_scroll_position: 0,
      ticking: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    fadeOut (scroll_pos) {
      document.querySelector('.intro-container .bg').style.backgroundColor = `rgb(${scroll_pos - 30}, ${scroll_pos - 60}, ${scroll_pos - 20})`
      document.querySelector('.intro-container p.reveal-text').style.color = `rgb(${255 - scroll_pos}, ${355 - scroll_pos}, ${355 - scroll_pos})`
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
  padding: 80px
  flex-direction: column

.wrapper
  max-width: 600px

.reveal-text,
.reveal-text:after
  animation-delay: 0.5s
  animation-iteration-count: 1
  animation-duration: 0.6s
  animation-fill-mode: both
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1)

p.reveal-text
  font-size: 3em
  font-weight: 500
  line-height: 1.6
  color: #fff
  letter-spacing: 0
  display: inline-block
  margin: 0
  left: -0.05em
  @include breakpoint(s)
    font-size: 1.5em

// p.reveal-text
//   font-size: 3em
//   color: rgba(0, 0, 20, 0.6)
//   letter-spacing: 0.4px
//   animation-name: fade-in
//   animation-delay: 1.1s
//   animation-iteration-count: 1
//   animation-duration: 2s
//   font-weight: 500
//   animation-fill-mode: both
//   animation-timing-function: cubic-bezier(0, 0, 0.2, 1)
//   opacity: 0

.reveal-text
  position: relative
  display: block
  user-select: none
  animation-name: reveal-text
  cursor: default

.reveal-text:after
  content: ""
  position: absolute
  z-index: 999
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: #fff
  transform: scaleX(0)
  transform-origin: 0 50%
  pointer-events: none
  animation-name: revealer-text

.bg
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  background-color: #000

@keyframes fade-in
  from
    opacity: 0
  to
    opacity: 1

@keyframes reveal-text
  from
    clip-path: inset(0 100% 0 0)
  to
    clip-path: inset(0 0 0 0)

@keyframes revealer-text
  0%, 50%
    transform-origin: 0 50%
  60%, 100%
    transform-origin: 100% 50%
  50%
    transform: scaleX(1)
  60%
    transform: scaleX(1)
  100%
    transform: scaleX(0)
</style>
