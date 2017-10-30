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
      title: this.$t('home.title'),
      subtitle: this.$t('home.subtitle'),
      text: this.$t('home.text'),
      icon: '../home_icon.svg'
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