<template>
  <div class="modal-container" :class="{active:active}" @click="closeHandler">
    <div class="overlay"></div>
    <div class="panel">
      <header>
        <span class="close" @click="closeHandler">⨯</span>
      </header>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inpanel: {
      type: String
    },
    active: {
      type: Boolean
    }
  },
  methods: {
    closeHandler () {
      setTimeout(function () {
        console.log(this)
      }, 3000)
      this.$emit('close')
    },
    escapeKeyListener (event) {
      if (event.keyCode === 27) {
        this.$emit('close')
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', this.escapeKeyListener)
  },
  destroyed () {
    document.removeEventListener('keydown', this.escapeKeyListener)
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/css/_variables.scss'
header
  width: 100%
  height: 61px
  border-bottom: 1px solid $light-grey
.close
  position: absolute
  left: $gutter / 2
  top: $gutter / 3
  color: $dark-grey
  font-size: 2em
  line-height: 1
  cursor: pointer
.modal-container
  position: fixed
  right: 0
  top: 0
  bottom: 0
  left: 0
  z-index: 1
  pointer-events: none
  &.active
    pointer-events: initial
    .overlay
      opacity: 1
    .panel
      transform: none
  .overlay
    position: absolute
    left: 0
    top: 0
    height: 100%
    width: 100%
    background: rgba(0, 0, 10, 0.6)
    transition: opacity 0.3s ease-in
    opacity: 0
  .panel
    height: 100%
    position: absolute
    right: 0
    top: 0
    width: 1140px
    background: #fff
    transform: translateX(100%)
    transition: transform 0.5s cubic-bezier(.54,0,.33,1)
  .modal-content
    height: calc(100vh - 61px)
    overflow: auto
    &::-webkit-scrollbar-track
      background-color: #F5F5F5
    &::-webkit-scrollbar
      width: 10px
      background-color: #F5F5F5
    &::-webkit-scrollbar-thumb
      background-color: rgba(0, 0, 10, 0.9)
</style>
