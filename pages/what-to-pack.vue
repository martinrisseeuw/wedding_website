<template>
  <PageContainer>
    <PageBlock 
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :icon="icon"
    />
  </PageContainer>
</template>

<script>
import PageBlock from '~/components/PageBlock.vue'
import PageContainer from '~/components/PageContainer.vue'

export default {
  data () {
    return {
      title: 'What <br/>to pack?',
      text: `<p>Ofcourse we are going to a warm area so don't forget: Sunscreen, mosquito repellent</p>`,
      icon: 'suitcase.svg'
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
  }
}
</script>

<style lang="sass" scoped>
  .container
    display: flex
    justify-content: center
    align-items: center
    top: 50px
    min-height: calc(100vh - 50px)
</style>

