<template>
  <div class="container">
    <div class="lego-container b-t-b project-container">
      <div class="wrapper lego-container">
        <div class="col col-12-5 item">
          <header>
            <img src="/homepinr-thumb.png" />
          </header>
          <div class="content">
            <h2>Homepinr</h2>
            <p>A new way for people to find homes</p>
            <ArrowBtn text="View project" link="/project" />
          </div>
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
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  components: {
    ArrowBtn,
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/css/_variables.scss'
.container
  padding-top: 60px
  .project-container
    width: 100%
    border-top: 1px solid $light-grey
  .wrapper
    display: flex
    flex-wrap: wrap
    &::before
      content: "A selection of our work"
      font-size: 18px
      line-height: 16px
      background: #FFFFFF
      position: absolute
      top: -90px
      left: 0
      padding: 0 19px
      color: $medium-grey
  .col
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
    .content
      width: 100%
      text-align: center
      padding: 20px

    a
      font-size: 0.8125em
      color: #0000FF
      letter-spacing: 0
      margin-bottom: 1em
      justify-content: center
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
