<template>
  <div class="info">
    <header>
      <img :src="icon" />
      <h2 v-if="subtitle">{{subtitle}}</h2>
    </header>
    <div class="main">
      <h1 v-html="title"></h1>
      <div v-if="text" class="content" v-html="text"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'text', 'subtitle', 'icon']
}
</script>

<style lang="sass" scoped>
  .info
    margin: auto
  @import '../assets/css/_variables.scss'
  header
    display: flex
    flex-wrap: wrap
    flex-direction: column
    text-align: center
    margin-bottom: $gutter / 1.5
    img
      max-width: 150px
      max-height: 120px
      margin: auto
    h2
      margin-top: $gutter / 4

  .main
    text-align: center
    max-width: 600px
    margin: auto
  h1
    font-family: Butler
    font-size: 82px
    color: #F0316A
    letter-spacing: 0
    line-height: 71px
    margin-bottom: $gutter / 4
    font-weight: 400

  h2
    font-size: 1.125em
    color: #363638
    letter-spacing: 0
    font-weight: 700
</style>

<style lang="sass">

ul
  text-align: left
  padding: 30px 0
  li
    margin-bottom: 10px
    color: #777
    list-style: circle

.content
  p
    margin-bottom: 0.2em
  h2
    font-size: 1.2em
    margin-bottom: 20px
</style>

