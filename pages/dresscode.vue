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
      title: 'Dresscode',
      text: `<p><strong>Beach formal</strong></p> <p>Think of things such as chinos, shirts etc</p> <p><strong>Remember white is reserved for the bride</strong></p>`,
      icon: 'dresscode.svg',
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