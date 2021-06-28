<template>
  <div class="animationBall">
    <div id="js-metaballs" class="hero__canvas">
    </div>
  </div>
</template>

<script>
export default {
  name: 'animationBall',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    App('home')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hero.js-reveal .hero__asset, .hero.js-reveal .hero__canvas, .js-lazy, .map.js-reveal .map__item {
    opacity: 0;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05)
  }
  .hero.js-reveal.is-visible .hero__asset, .hero.js-reveal.is-visible .hero__canvas {
    opacity: 1;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    transition: opacity .3s ease-out, transform .3s cubic-bezier(.25, .46, .45, .94), -webkit-transform .3s cubic-bezier(.25, .46, .45, .94)
  }

  box, .browser__nav, .hero__canvas, .map, .parallax, .section {
    overflow: hidden
  }
  .box__cover, .box__inner, .hero__canvas {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    z-index: -1;
  }
  .hero__canvas {
    height: 100%
  }
</style>
