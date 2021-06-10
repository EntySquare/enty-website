<template>
  <div
    style="width: 100%; background-color: #FFFFFF; position: fixed; z-index: 99">
    <el-row type="flex" align="middle" style="height: 96px">
      <el-col :xs="{span: 2, push: 1}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
              :xl="{span: 2, push: 1}">
        <el-image :src="require('../assets/entyLogo.png')" style="height: 48px; width: 235px;"></el-image>
      </el-col>
      <el-col class="hidden-sm-and-down is-justify-center" :span="8" :push="6">
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
      <el-col class="hidden-md-and-down" :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}"
              :lg="{span: 2, push: 2}"
              :xl="{span: 3, push: 8}">
        <div
          style="font-size: 16px; font-weight: 500; color: #00EAC4; display: inline; margin-bottom: 30px;">
          联系我们
        </div>
      </el-col>
      <el-col class="is-justify-center hidden-md-and-down" :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}"
              :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
              :xl="{span: 3, push: 6}">
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
  color: #000000;
  white-space: nowrap;
}
</style>
