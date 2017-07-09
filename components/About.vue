<template>
  <div class="about-content">
    <div class="content">
      <p class="intro">Hi we're Martim a team consisting of Martin Risseeuw and Tim Bormans. We create high quality websites and applications. We enjoy developing beautiful, usable and unique interfaces for both you and its visitors.</p>
      <p>Martim is a design and development creative agency. We are specialised in application & web-development. From concept towards realisation. We consists of Martin Risseeuw and Tim Bormans. Martin works as designer & Tim as developer. After working together at Waag Society an organisation for social innovation Martim decided it was time to start on their own. With experience working for small and big companies we have a broad range of knowledge within the creative field.</p>

      <p><strong>Drop us a line</strong></p>
      <h1><a href="mailto:hello@martim.nl">hello@martim.nl</a></h1>
    </div>
    <aside class="sidebar">
      <article>
        <h2>Design</h2>
        <p>Responsive design for mobile apps, e-commerce and web platforms.</p>
        <a href="#">More about design</a>
      </article>
      <article>
        <h2>Development</h2>
        <p>The foundation of digital products is in scalable, clever and sustainable coding.</p>
        <a href="#">More about development</a>
      </article>
      <article>
        <p>Address</p>
        <h2>Overhoeksplein 2, <br />
        1031 KS Amsterdam <br />
        Lab.104</h2>
      </article>
    </aside>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/css/_variables.scss'
.about-content
  display: flex
  justify-content: space-between
.content
  padding: ($gutter * 1.5) ($gutter * 3)
  max-width: 730px
.sidebar
  height: 100vh
  border-left: 1px solid $light-grey
  max-width: 415px
  article
    padding: ($gutter)
    border-bottom: 1px solid $light-grey
    &:first-child
      padding: ($gutter * 1.5) $gutter $gutter
    h2
      font-size: 1.3125em
      color: rgba(0,0,0,0.70)
      margin-bottom: 0.4em
    p
      font-size: 1em
</style>
