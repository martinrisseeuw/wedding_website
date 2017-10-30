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
          title="Tefal Master Kledingstomer"
          image="steamer.jpg"
        />
        <Card 
          title="Tefal Express Broodrooster"
          image="toaster.jpg"
        />
        <Card 
          title="Inventum Frituurpan"
          image="frituurpan.jpg"
        />
        <Card 
          title="Philips Avance blender"
          image="blender.jpg"
        />
        <Card 
          title="Bartscher Slowcooker "
          image="slowcooker.jpg"
        />
        <Card 
          title="OXO Good Grips Knoflookpers "
          image="knoflook.jpg"
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
      title: this.$t('gifts.title'),
      subtitle: this.$t('gifts.subtitle'),
      text: this.$t('gifts.text'),
      icon: '../present.svg'
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
  padding: 60px 0
  width: 100%
  display: flex
  justify-content: space-around
  flex-wrap: wrap
.wrapper
  width: 100%

</style>

