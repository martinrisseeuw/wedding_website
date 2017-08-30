<template>
  <section class="container">

    <Navigation />
    <SidePanel :active="showSidePanel" v-on:close="handleSidePanelClose">
      <About />
    </SidePanel>
    <intro />
    <ProjectSlider />
  </section>
</template>

<script>
import Intro from '~/components/Intro.vue'
import SidePanel from '~/components/SidePanel.vue'
import About from '~/components/About.vue'
import ProjectSlider from '~/components/ProjectSlider.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  data () {
    return {
      showSidePanel: false
    }
  },
  methods: {
    handleSidePanelClose () {
      this.showSidePanel = false
      document.body.classList.remove('no-scroll')
      history.pushState({}, null, '/')
    }
  },
  components: {
    Intro,
    SidePanel,
    About,
    ProjectSlider,
    Navigation
  },
  beforeRouteLeave (to, from, next) {
    // Show a modal whenever we navigate to an auth page
    if (['about'].indexOf(to.name) > -1) {
      this.showSidePanel = true
      document.body.classList.add('no-scroll')
      history.pushState({}, null, to.path)
    } else {
      next()
    }
  }
}
</script>
