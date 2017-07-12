<template>
  <div class="container" :class="{active: menuActive}">
    <nuxt-link to="/"><h1 class="logo">Martim</h1></nuxt-link>
    <ul class="menu">
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      last_known_scroll_position: 0,
      menuActive: false,
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
    changeNav (scroll_pos) {
      (scroll_pos > 200 ? this.menuActive = true : this.menuActive = false)
    },
    handleScroll () {
      this.last_known_scroll_position = window.scrollY;
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.changeNav(this.last_known_scroll_position);
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
  position: fixed
  z-index: 2
  left: 0
  top: 0
  width: 100%
  height: 60px
  padding: 0 ($gutter / 2)
  display: flex
  align-items: center
  box-shadow: 0 10px 20px 0 rgba(0,0,20,0.05)
  transition: background 0.1s ease-out
  &.active
    background: #fff
    .logo,
    a
      color: rgba(0, 0, 20, 1)
.logo
  color: #fff
  font-size: 1em
  transition: color 0.5s ease-out
.menu
  margin-left: auto
  li
    display: inline-block
    margin-left: ($gutter)
    a
      color: rgba(255, 255, 255, 1)
      transition: color 0.5s ease-out
</style>
