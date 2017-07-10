<template>
  <div class="container">
    <nuxt-link to="/"><h1 class="logo">Martim</h1></nuxt-link>
    <ul class="menu">
      <li><nuxt-link to="/about">About</nuxt-link></li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/css/_variables.scss'
.logo
  position: fixed
  left: 0
  top: 20px
  z-index: 2
  display: flex
  padding-left: ($gutter / 2)
a .logo
  color: #fff
  font-size: 1em
.menu
  position: fixed
  z-index: 2
  right: 0
  top: 0
  display: flex
  align-items: center
  height: 60px
  padding: 0 ($gutter / 2)
.menu
  padding: 0
  li
    display: inline-block
    margin: 0 ($gutter / 2)
    a
      color: rgba(255, 255, 255, 1)
</style>
