<template>
  <div class="container">
    <div class="col">
      <div class="content">
        <h1>Homepinr</h1>
        <p>A story of one of the biggest electronic dance festivals in the world.</p>
        <nuxt-link to="/about" class="view">View project
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
      </div>
    </div>
    <div class="col image-col">
      <img src="/homepinr.jpg" />
    </div>
  </div>
</template>

<script>
import ScrollIndicator from '~components/ScrollIndicator.vue'

export default {
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
      document.querySelector('.image-col').style.transform = `translateY(${155 - (scroll_pos / 3)}px)`
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
  padding: 80px 0
  .col
    width: 100%
    max-width: 30%
    display: flex
    align-items: center
    img
      max-width: 100%
    &:first-child
      padding: $gutter
    &:last-child
      align-items: flex-end
    .content
      max-width: 380px
    a
      font-size: 0.8125em
      color: #0000FF
      letter-spacing: 0

  .image-col
    max-width: 70%
.view
  display: flex
  align-items: center
  svg
    margin-left: 10px
// .image-col::after
//   animation-delay: 0.5s
//   animation-iteration-count: 1
//   animation-duration: 0.6s
//   animation-fill-mode: both
//   animation-timing-function: cubic-bezier(0, 0, 0.2, 1)
//
// .image-col
//   position: relative
//   display: block
//   user-select: none
//   animation-name: reveal-text
//   cursor: default
//
// .image-col::after
//   content: ""
//   position: absolute
//   z-index: 999
//   top: 0
//   left: 0
//   right: 0
//   bottom: 0
//   background-image: linear-gradient(-134deg, #9CCEEA 0%, #BD91F3 100%);
//   transform: scaleX(0)
//   transform-origin: 0 50%
//   pointer-events: none
//   animation-name: revealer-text
//
// @keyframes fade-in
//   from
//     opacity: 0
//   to
//     opacity: 1
//
// @keyframes reveal-text
//   from
//     clip-path: inset(0 100% 0 0)
//   to
//     clip-path: inset(0 0 0 0)
//
// @keyframes revealer-text
//   0%, 50%
//     transform-origin: 0 50%
//   60%, 100%
//     transform-origin: 100% 50%
//   50%
//     transform: scaleX(1)
//   60%
//     transform: scaleX(1)
//   100%
//     transform: scaleX(0)
</style>
