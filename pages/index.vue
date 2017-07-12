<template>
  <section class="container">
    <SidePanel :active="showSidePanel" v-on:close="handleSidePanelClose">
      <About />
    </SidePanel>
    <intro />
    <div class="wrapper">
      <ProjectSlider />
    </div>
  </section>
</template>

<script>
import Intro from '~components/Intro.vue'
import SidePanel from '~components/SidePanel.vue'
import About from '~components/About.vue'
import ProjectSlider from '~components/ProjectSlider.vue'

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
    ProjectSlider
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
