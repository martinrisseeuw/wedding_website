<template>
  <div class="container">
    <div class="intro-container">
      <div class="wrapper">
        <div class="col image-col">
          <img src="/homepinr-thumb.png" />
        </div>
        <div class="col">
          <div class="content">
            <h2>Homepinr</h2>
            <p>A new way for people to find homes</p>
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
            <nuxt-link to="/about" class="view">View more projects
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
      </div>
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
      // document.querySelector('.image-col').style.transform = `translateY(${155 - (scroll_pos / 3)}px)`
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
  padding-top: 60px
  .intro-container
    width: 100%
    padding: 80px 0
    border-top: 1px solid $light-grey
  .wrapper
    display: flex
    flex-wrap: wrap
    &::before
      content: "Last project"
      font-size: 18px
      line-height: 16px
      background: #FFFFFF
      position: absolute
      top: -90px
      left: 0
      padding: 0 19px
      color: $medium-grey
  .col
    width: 100%
    max-width: 30%
    display: flex
    align-items: flex-start
    padding-right: $gutter / 2
    h2
      font-size: 21px
      color: rgba(0,0,10,0.80)
      letter-spacing: 0
    p
      font-size: 16px
      color: rgba(0,0,10,0.80)
      line-height: 27px
    img
      max-width: 100%
    &:last-child
      padding-left: $gutter / 2
      padding-right: 0
      padding-top: $gutter
    .content
      max-width: 380px
    a
      font-size: 0.8125em
      color: #0000FF
      letter-spacing: 0
      margin-bottom: 1em
      svg
        transition: 0.25s ease-in
      &:hover
        opacity: 0.7
        svg
          transform: translateX(3px)

  .image-col
    max-width: 70%
.view
  display: flex
  align-items: center
  svg
    margin-left: 10px
</style>
