<template>
  <div class="container">
    <div class="gradient purple"></div>
    <div class="gradient green"></div>
    <div class="wrapper">
      <h1 class="reveal-text display">Martim</h1>
      <p class="reveal-text-fade">Hi, we're Martim. A digital agency that crafts high quality, usable, and unique interfaces.</p>
    </div>
    <ScrollIndicator />
  </div>
</template>

<script>
import ScrollIndicator from '~components/ScrollIndicator.vue'

export default {
  components: {
    ScrollIndicator
  }
}
</script>

<style lang="sass" scoped>
.container
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh
  padding: 80px
  flex-direction: column

.wrapper
  max-width: 600px

.reveal-text,
.reveal-text:after
  animation-delay: 0.5s
  animation-iteration-count: 1
  animation-duration: 0.6s
  animation-fill-mode: both
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1)


h1.reveal-text
  font-size: 120px
  color: #FFFFFF
  letter-spacing: 0
  display: inline-block
  white-space: nowrap
  margin: 0
  line-height: 120px
  left: -0.05em
  text-transform: uppercase

p.reveal-text-fade
  font-size: 21px
  color: #FFFFFF
  letter-spacing: 0.4px
  animation-name: fade-in
  animation-delay: 1.1s
  animation-iteration-count: 1
  animation-duration: 2s
  animation-fill-mode: both
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1)
  opacity: 0

.reveal-text
  position: relative
  display: block
  user-select: none
  animation-name: reveal-text
  cursor: default

.reveal-text:after
  content: ""
  position: absolute
  z-index: 999
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: #9CCEEB
  transform: scaleX(0)
  transform-origin: 0 50%
  pointer-events: none
  animation-name: revealer-text

.gradient
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
  &.purple
    background-color: #BE91F4
    background-image: linear-gradient(-134deg, #9CCEEB 0%, #BE91F4 100%)
  &.green
    background-color: #9CEAA2
    background-image: linear-gradient(-134deg, #9CEAA2 0%, #91C6F3 100%)
    animation: fade-in 20s linear infinite
    animation-direction: alternate

@keyframes fade-in
  from
    opacity: 0
  to
    opacity: 1

@keyframes reveal-text
  from
    clip-path: inset(0 100% 0 0)
  to
    clip-path: inset(0 0 0 0)

@keyframes revealer-text
  0%, 50%
    transform-origin: 0 50%
  60%, 100%
    transform-origin: 100% 50%
  50%
    transform: scaleX(1)
  60%
    transform: scaleX(1)
  100%
    transform: scaleX(0)
</style>
