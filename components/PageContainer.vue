<template>
  <div class="page-container">
    <slot></slot>
    <slot name="button"></slot>
  </div>
</template>

<style lang="sass" scoped>
.page-container
  background: #fafafe
  text-align: center
  display: flex
  top: 50px
  height: 100%
  min-height: calc(100vh - 50px)
  padding: 50px 20px 40px
  width: 100%
</style>