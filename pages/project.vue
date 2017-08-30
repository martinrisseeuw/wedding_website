<template>
  <section class="container">
    <ProjectHeader v-on:headerheight="setHeaderHeight" />
    <Navigation :projectnav="true" :stickyHeight="headerheight" />
    <div class="content b-t-b">
      <div class="wrapper lego-container">
        <figure class="element">
          <img src="/homepinr-mobile-4.jpg" />
        </figure>
        <div class="element wrapper-small">
          <p>Homepinr wants to make it super easy for you you to find your next home. Show the world where you want to live and homeowners can contact you directly to see if there’s a match. It’s free and simple.</p>
          <p>The Pins you see on the map are from homeseekers showing where they want to live. What you don’t see, are the Alerts of homeowners that want to get updates when someone placed a Pin on their home or close to their home. If homeowners see a Pin that matches their offer, they can start chatting directly!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectHeader from '~/components/ProjectHeader.vue'
import SidePanel from '~/components/SidePanel.vue'
import About from '~/components/About.vue'
import ProjectSlider from '~/components/ProjectSlider.vue'
import Navigation from '~/components/Navigation.vue'


export default {
  data () {
    return {
      showSidePanel: false,
      headerheight: null
    }
  },
  methods: {
    handleSidePanelClose () {
      this.showSidePanel = false
      document.body.classList.remove('no-scroll')
      history.pushState({}, null, '/')
    },
    setHeaderHeight(value){
      this.headerheight = value
    }
  },
  components: {
    ProjectHeader,
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
