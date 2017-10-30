<template>
  <PageContainer>
    <PageBlock 
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :icon="icon"
    >
    <a href="http://www.haciendatresrios.com/riviera-maya-all-inclusive/" class="btn">
      {{$t('hotel.moreinfo')}}
    </a>
    <nuxt-link :to="path('/contact')" class="btn">
      {{$t('contact.contact')}}
    </nuxt-link>
    </PageBlock>
  </PageContainer>
</template>
<script>
import PageBlock from '~/components/PageBlock.vue'
import PageContainer from '~/components/PageContainer.vue'

export default {
  data () {
    return {
      title: this.$t('hotel.title'),
      subtitle: this.$t('hotel.subtitle'),
      text: this.$t('hotel.text'),
      icon: '../suitcase.svg'
    }
  },
  methods: {
    path (url) {
      return (this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url)
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

  .info
    .main
      .content
        p
          margin-bottom: 1em
  .container
    display: flex
    justify-content: center
    align-items: center
    top: 50px
    min-height: calc(100vh - 50px)
</style>

