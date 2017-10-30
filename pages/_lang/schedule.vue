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
      title: this.$t('schedule.title'),
      subtitle: this.$t('schedule.subtitle'),
      text: this.$t('schedule.text'),
      icon: '../program.svg'
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
