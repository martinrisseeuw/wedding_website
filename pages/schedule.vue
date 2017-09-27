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
      title: 'Schedule',
      subtitle: '19 May 2018',
      text: '<p>16:00 - 17:00</p> <h2>⛪️ Church ceremony</h2> <p>16:00 - 17:00</p> <h2>🍸Celebratory cocktail</h2> <p>19:00 - 24:00</p> <h2>💃🏻 Reception</h2>',
      icon: 'program.svg'
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
