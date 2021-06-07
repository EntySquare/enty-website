<template>
  <el-container>
    <el-header>
      <the-header/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer class="black">
      <the-footer/>
    </el-footer>
  </el-container>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'CommonLayout',
  components: {
    TheHeader: Header,
    TheFooter: Footer
  }
}
</script>

<style></style>
