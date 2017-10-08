<template>
  <div class="page-container">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
.page-container
  background: #fafafe
  display: flex
  justify-content: center
  top: 50px
  height: 100%
  min-height: calc(100vh - 50px)
  padding-top: 100px
  width: 100%
</style>