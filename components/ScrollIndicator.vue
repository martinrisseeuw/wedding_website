<template>
  <div class="scroll-indicator">
    <span>
      <i>↓</i>
    </span>
  </div>
</template>

<style lang="sass" scoped>
  .scroll-indicator
    border-radius: 100%
    position: absolute
    width: 50px
    height: 50px
    opacity: 1
    left: calc(50% - 25px)
    bottom: 20px
    cursor: pointer
    opacity: 0
    animation: opacity 0.75s 3s ease-in
    animation-fill-mode: forwards
    span
      display: flex
      align-items: center
      justify-content: center
      background: rgba(255,255,255,0.9)
      width: 30px
      height: 30px
      background-size: 12px
      border-radius: 100%
      position: absolute
      left: 10px
      top: 10px
      z-index: 100
      i
        color: rgba(0, 0, 10, 0.6)

    &::after
      content: ""
      background-color: #fff
      width: 50px
      height: 50px
      border-radius: 50%
      animation-fill-mode: both
      position: absolute
      opacity: 0
      animation: pulse 2.8s 0.6s ease-out infinite
    &::before
      content: ""
      top: 0
      left: 0
      background-color: #fff
      width: 50px
      height: 50px
      border-radius: 50%
      animation-fill-mode: both
      position: absolute
      opacity: 0
      animation: pulse 2.8s 0.3s ease-out infinite

      @keyframes pulse
        15%
          opacity: 0
          transform: scale(0)
        18%
          opacity: 0.8
          transform: scale(0.6)
        50%
          opacity: 0.2
          transform: scale(1)

      @keyframes opacity
        from
          opacity: 0
        to
          opacity: 1



</style>
