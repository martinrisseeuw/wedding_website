<template>
  <navigation>
    <div class="element">
      <ul class="menu">
        <li class="logo"><nuxt-link to="/" exact>D&M</nuxt-link></li>
        <li><nuxt-link to="/schedule">Schedule</nuxt-link></li>
        <li><nuxt-link to="/dresscode">Dresscode</nuxt-link></li>
        <li><nuxt-link to="/what-to-pack">What to pack?</nuxt-link></li>
        <li><nuxt-link to="/registry">Registry</nuxt-link></li>
        <li class="important"><a target="_blank" href="http://www.bodayplaya.com/reservas/dianaymartin">Reservation</a></li>
      </ul>
    </div>
  </navigation>
</template>

<style lang="sass" scoped>
@import '../assets/css/_variables.scss'
navigation
  position: fixed
  z-index: 1
  left: 0
  right: 0
  top: 0
  width: 100vw
  background: #fff
  transition: background 0.1s ease-out
  transition: 0.2s cubic-bezier(.54,0,.33,1)
  border-bottom: 1px solid $light-grey
  height: 50px
  display: flex
  align-items: center
  justify-content: center
  &.active
    background: #fff
  &.projectnav
    position: relative
  &.sticky
    position: fixed
.menu
  .logo
    font-family: Butler
    font-size: 1.2em
    top: 0.1em
  li
    display: inline-block
    margin: 0 ($gutter / 2)
    a
      color: #5D6070
      transition: color 0.3s cubic-bezier(0, 0, 0.58, 1)
      &.nuxt-link-active,
      &:hover
        color: $brand-color

  li.important
    background: $brand-color
    border: 1px solid #fff
    padding: 3px 12px
    border-radius: 40px
    transition: all 0.1s ease-in-out
    a
      color: #fff
    &:hover
      background:  darken($brand-color, 20%)
</style>
