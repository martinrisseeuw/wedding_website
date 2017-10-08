<template>
  <div class="item">
    <header v-bind:style="{ 'background-image': `url(/${image})` }">
      <img src="/citrus.jpg" />
    </header>
    <div class="content">
      <h2>{{title}}</h2>
      <div class="form-row">
        <input v-model="amount" placeholder="€00.00" />
        <a :href="payLink" class="buy" :class="{active: isActive}">Contribute</a>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    amount: Number,
    title: String,
    image: String
  },
  computed: {
    payLink(){
      return `https://paypal.me/Risseeuw/${this.amount}`
    },
    isActive(){
      if(this.amount > 0) return true
    }
  }
}
</script>



<style lang="sass" scoped>
input
  border: 1px solid rgb(243,243,243)
  display: inline-block
  font-size: 16px
  color: #777
  letter-spacing: 0.3px
  border-radius: 8px
  padding: 10px
  margin-top: 10px
  width: 100%
  margin-right: 10px
.form-row
  display: flex
  align-items: center
.item
  width: 320px
  overflow: hidden
  background: #FFFFFF
  box-shadow: 0 2px 4px 0 rgba(0,0,30,0.10)
  border-radius: 18px
  margin: 20px
  header
    height: 200px
    overflow: hidden
    background-size: cover
    img
      display: none
  .content
    padding: 20px
    h2
      font-size: 16px
      color: #586C73
      letter-spacing: 0
      line-height: 24px
      margin-bottom: 0
    p
      font-size: 16px
      color: #A3B3B8
      letter-spacing: 0
      line-height: 24px
  .buy
    text-wrap: no-wrap
    display: inline-block
    font-weight: 600
    font-size: 16px
    background: #f2f2f2
    color: #FFFFFF
    letter-spacing: 0.3px
    border-radius: 8px
    padding: 10px
    margin-top: 10px
    transition: 0.2s ease-in-out
    pointer-events: none
    &.active
      background: #0587FF
      pointer-events: initial
      box-shadow: 0 1px 3px rgba(0, 0, 0.20, 0.20)
    &:hover
      transform: translateY(-2px)
      box-shadow: 0 2px 12px rgba(0, 0, 0.20, 0.30)
      background: #f0316a
    &:focus
      box-shadow: 0 1px 3px rgba(0, 0, 0.20, 0.20)
      transform: none

</style>

