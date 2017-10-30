<template>
  <PageContainer>
    <PageBlock 
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :icon="icon"
    />
    <Navigation />
  </PageContainer>
</template>

<script>
import PageBlock from '~/components/PageBlock.vue'
import PageContainer from '~/components/PageContainer.vue'

export default {
  data () {
    return {
      title: this.$t('contact.title'),
      text: this.$t('contact.text'),
      icon: '../dresscode.svg'
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
    PageContainer
  },
}
</script>