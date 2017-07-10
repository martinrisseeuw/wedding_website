<template>
  <div class="container">
    <div class="col">
      <div class="content">
        <h1>Homepinr</h1>
        <p>A story of one of the biggest electronic dance festivals in the world.</p>
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
      </div>
    </div>
    <div class="col">
      <img src="/homepinr.jpg" />
    </div>
  </div>
</template>

<script>
// import ScrollIndicator from '~components/ScrollIndicator.vue'
//
// export default {
//   components: {
//     ScrollIndicator
//   }
// }
</script>

<style lang="sass" scoped>
@import '../assets/css/_variables.scss'
.container
  display: flex
  padding: 80px
  .col
    width: 100%
    max-width: 50%
    display: flex
    align-items: center
    img
      max-width: 100%
    &:first-child
      padding: $gutter
    &:last-child
      align-items: flex-end
    .content
      max-width: 380px
    a
      font-size: 0.8125em
      color: #0000FF
      letter-spacing: 0
.view
  display: flex
  align-items: center
  svg
    margin-left: 10px
</style>
