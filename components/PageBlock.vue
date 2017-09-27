<template>
  <div class="info">
    <header>
      <img :src="icon" />
      <h2 v-if="subtitle">{{subtitle}}</h2>
    </header>
    <div class="main">
      <h1 v-html="title"></h1>
      <div class="content" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'text', 'subtitle', 'icon']
}
</script>

<style lang="sass" scoped>
  @import '../assets/css/_variables.scss'
  header
    display: flex
    flex-wrap: wrap
    flex-direction: column
    text-align: center
    margin-bottom: $gutter / 1.5
    h2
      margin-top: $gutter / 4

  .main
    text-align: center
    max-width: 600px
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

.content
  p
    margin-bottom: 0
  h2
    font-size: 1.2em
    margin-bottom: 0.8em
</style>

