<template>
  <div class="container">
    <nuxt-link to="/"><img class="logo" src="/logo.svg" /></nuxt-link>
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
.menu
  position: fixed
  z-index: 2
  right: 0
  top: 0
  display: flex
  align-items: center
  background: #fff
  height: 60px
  padding: 0 ($gutter / 2)
.menu
  padding: 0
  li
    display: inline-block
    margin: 0 ($gutter / 2)
    a
      color: rgba(0, 0, 10, 0.8)
</style>
