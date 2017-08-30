<template>
  <div class="container" :class="{active: menuActive, projectnav: projectnav, sticky: menuSticky}">
    <div class="wrapper no-bottom-top">
      <div class="element">
        <nuxt-link to="/" class="logo">
          <h1 hidden>Martim</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32">
            <g fill-rule="evenodd" fill="currentColor">
              <rect width="8" height="32"/>
              <rect width="8" height="32" x="12"/>
              <rect width="8" height="20" x="24" y="12"/>
              <rect width="16" height="8" x="24" y="12"/>
              <rect width="8" height="8" x="24"/>
            </g>
          </svg>      
        </nuxt-link>
        <ul class="menu">
          <li><nuxt-link to="/about">About</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      last_known_scroll_position: 0,
      menuActive: false,
      ticking: false,
      menuSticky: false
    }
  },
  props: ['projectnav', 'stickyHeight'],
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    changeNav (scroll_pos) {
      if(scroll_pos > 70) {
        this.menuActive = true;
      } else {
        this.menuActive = false
      }
      if(scroll_pos > this.stickyHeight) {
        this.menuSticky = true;
        document.body.classList.add('sticky-header');
      } else {
        this.menuSticky = false;
        document.body.classList.remove('sticky-header');
      }
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

<style  lang="sass">
</style>

<style lang="sass" scoped>
@import '../assets/css/_variables.scss'
.container
  position: fixed
  z-index: 1
  left: 0
  right: 0
  top: 0
  width: 100vw
  transition: background 0.1s ease-out
  transition: 0.2s cubic-bezier(.54,0,.33,1)
  .wrapper
    .element
      display: flex
      align-items: center
  &.active
    background: #fff
  &.projectnav
    position: relative
  &.sticky
    position: fixed
.logo
  color: rgba(0, 0, 20, 1)
  font-size: 1em
  transition: color 0.3s cubic-bezier(0.000, 0.000, 0.580, 1.000)
  line-height: 0
  &:hover
    color: $brand-color
.menu
  margin-left: auto
  li
    display: inline-block
    margin-left: ($gutter)
    a
      color: rgba(0, 0, 20, 1)
      transition: color 0.3s cubic-bezier(0, 0, 0.58, 1)
      &:hover
        color: $brand-color
</style>
