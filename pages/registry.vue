<template>
  <PageContainer>
    <div class="wrapper">
      <PageBlock 
        :title="title"
        :text="text"
        :icon="icon"
      />
      <div class="products">
        <Card 
          title="Honeymoon Bali"
          image="bali.jpg"
        />
        <Card 
          title="Honeymoon Afrika"
          image="bali.jpg"
        />
        <Card 
          title="Honeymoon Bali"
          image="bali.jpg"
        />
      </div>
    </div>
  </PageContainer>
</template>

<script>
import PageBlock from '~/components/PageBlock.vue'
import PageContainer from '~/components/PageContainer.vue'
import Card from '~/components/Card.vue'

export default {
  data () {
    return {
      title: `Want to give us a present?`,
      icon: 'present.svg',
      text: '<p>Because it will be difficult to bring 🎁 back to Holland by ✈️, we kindly request not to bring any gifts to the wedding. If you want to gift something you can make a contribution for the below ⬇️.</p>'
    }
  },
  mounted() {
    document.body.classList.add('loaded');
  },
  destroyed () {
    document.body.classList.remove('loaded');
  },
  components: {
    PageBlock,
    PageContainer,
    Card,
  }
}
</script>

<style lang="sass" scoped>
.products
  padding: 100px 0
  width: 100%
  display: flex
  justify-content: space-around
  flex-wrap: wrap
.wrapper
  width: 100%

</style>

