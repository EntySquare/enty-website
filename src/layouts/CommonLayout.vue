<template>
  <el-container>
    <el-header style="padding: 0;margin: 0">
      <the-header/>
    </el-header>
    <el-main style="padding: 0;margin: 0">
      <router-view/>
    </el-main>
    <el-footer style="padding: 0;margin: 0">
      <TheFooter/>
    </el-footer>
  </el-container>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
document.body.scrollTop = document.documentElement.scrollTop = 0
window.scroll(0, 0) // 页面加载置顶
export default {
  name: 'CommonLayout',
  components: {
    TheHeader: Header,
    TheFooter: Footer
  }
}
</script>

<style>
*{
  padding: 0;
}
</style>
