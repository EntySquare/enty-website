<template>
  <div
    style="background: linear-gradient(156deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); opacity: 0.9;">
    <el-row type="flex" align="middle">
      <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
              :xl="{span: 2, push: 4}">
        <el-image :src="require('../assets/entyLogo.png')" style="height: 48px; width: 235px;"></el-image>
      </el-col>
      <el-col class="hidden-md-and-down is-justify-center" :span="8" :push="6">
        <div>
          <el-row :gutter="38" type="flex">
            <el-col>
              <div class="headFont">首页</div>
            </el-col>
            <el-col>
              <div class="headFont">公链</div>
            </el-col>
            <el-col>
              <div class="headFont">代币</div>
            </el-col>
            <el-col>
              <div class="headFont">挖矿</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="3" :push="8">
        <div
          style="font-size: 16px; font-weight: 500; color: #00EAC4; display: inline; margin-bottom: 30px;">
          联系我们
        </div>
      </el-col>
      <el-col class="is-justify-center" :span="3" :push="6">
        <el-image :src="require('../assets/rightArrow.png')"
                  style="height: 60px; width: 60px; margin-top: 3px"></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.headFont {
  color: black;
  white-space: nowrap;
}
</style>
