<template>
  <div class="page-container">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>
.page-container
  display: flex
  justify-content: center
  top: 50px
  min-height: calc(100vh - 50px)
  padding-top: 100px
</style>