<template>
    <div class="intro-container">
      <div class="wrapper lego-container">
        <div class="element">
          <div class="col col-12-5 intro-col">
            <div class="content">
              <h2 class="reveal-text">Hi, we're Martim. A digital agency that crafts high quality and usable interfaces for both you and its visitors</h2>
            </div>
            <article class="intro-project fade-in">
              <h1>Homepinr</h1>
              <h2>A new way to find homes</h2>
              <ArrowBtn text="View project" link="/project" />
            </article>
          </div>
          <div class="col-12-6 auto-left fade-in">
            <img src="/home-image.png" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ArrowBtn from '~/components/ArrowBtn.vue'

export default {
  data () {
    return {
      last_known_scroll_position: 0,
      ticking: false
    }
  },
  mounted() {
    setTimeout(() => { 
      document.body.classList.add('intro-loaded');
    }, 50);
  },
  destroyed () {
    document.body.classList.remove('intro-loaded');
  },
  components: {
    ArrowBtn
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/css/_variables.scss'
.intro-container
  padding: 90px 0 40px

.fade-in
  opacity: 0
  transition: opacity 1s 0.75s cubic-bezier(0.42, 0, 1, 1)

.intro-loaded .fade-in
  opacity: 1

.intro-project
  padding: 40px 0
  margin-top: 60px
  border-top: 1px solid $light-grey
  &::before
    content: "A selection of our work"
    font-size: 18px
    line-height: 16px
    background: #FFFFFF
    position: absolute
    top: -10px
    left: 0
    padding: 0 19px 0 0
    color: $medium-grey
  h1
    opacity: 0.82;
    font-weight: 500
    font-size: 2em;
    color: #000000;
    letter-spacing: 0;
  h2
    font-weight: 400
    font-size: 1.5em;
    color: #747474;
    letter-spacing: 0;
    margin-bottom: 10px
img
  max-width: 100%
.container
  .element
    display: flex
    flex-wrap: wrap
  .content
    h2
      color: #000
    p
      font-size: 16px
      color: rgba(0,0,10,0.80)
      line-height: 27px
    &:last-child
      padding-left: $gutter / 2
      padding-right: 0
      padding-top: $gutter
    a
      font-size: 0.8125em
      color: #000
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
.content
  padding-top: 80px
.view
  display: flex
  align-items: center
  svg
    margin-left: 10px
</style>
