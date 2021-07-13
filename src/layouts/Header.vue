<template>
  <div
    style="width: 100%; background-color: #FFFFFF; position: fixed; z-index: 99">
    <el-row type="flex" align="middle" style="height: 96px" class="hidden-sm-and-down">
      <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
              :xl="{span: 2, push: 1}">
        <router-link to="/">
          <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/entyLogo.png" style="height: 48px; width: 235px;"></el-image>
        </router-link>
      </el-col>
      <el-col class="is-justify-center" :span="8" :push="6">
        <div>
          <el-row :gutter="38" type="flex">
            <el-col>
              <router-link to="/">
                <div class="headFont">首页</div>
              </router-link>
            </el-col>
            <el-col>
              <router-link to="/publicChain">
                <div class="headFont">公链</div>
              </router-link>
            </el-col>
            <el-col>
              <router-link to="/token">
                <div class="headFont">代币</div>
              </router-link>
            </el-col>
            <el-col>
              <router-link to="/coinMining">
                <div class="headFont">挖矿</div>
              </router-link>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 3, push: 7}" :lg="{span: 3, push: 7}"
              :xl="{span: 3, push: 8}">
        <div
          style="font-size: 16px; font-weight: 500; color: #00EAC4; display: inline; margin-bottom: 30px;">
          联系我们
        </div>
      </el-col>

      <el-col class="is-justify-center" :span="3" :push="6">
        <el-popover
          placement="bottom-end"
          width="220"
          v-model="visible1">
          <p>企业邮箱: terilscaub@gmail.com</p>
          <!--                <p>联系电话: 15361445990</p>-->
          <div style="text-align: right; margin: 0">
            <el-button style="color: #94469B" size="mini" @click="visible1 = false">确定</el-button>
          </div>
          <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/rightArrow.png"
                    slot="reference"
                    style="height: 60px; width: 60px; margin-top: 3px"></el-image>
        </el-popover>
      </el-col>
    </el-row>
    <el-col :xs="12" :sm="12" :md="0" :lg="0" :xl="0">
    <div class="" style="height: 66px;width: 100%;background: #FFFFFF;position: fixed; z-index: 99">
      <router-link to="/" style="float: left">
        <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/entyLogo.png"
                  style="height: auto; width: 150px;margin-top: 17px;margin-left: 20px"></el-image>
      </router-link>
      <el-button @click="drawer = true" type="primary"
                 style="height: 100%;width: 80px;float: right;font-size: 45px;color: black;background: transparent;outline: none; border: none;">
        =
      </el-button>
    </div>
    </el-col>
    <el-drawer
      :modal="false"
      title=""
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      size="40%"
      style=""
    >
      <el-row>
        <router-link @click.native="drawer = false" to="/">
          <el-col :span="12" class="drawer-left-text" style=";padding: 10px 10px 10px 20px" align="left">首页</el-col>
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 20px 10px 0px" align="right">+</el-col>
        </router-link>
      </el-row>
      <el-row>
        <router-link  @click.native="drawer = false" to="/publicChain">
          <el-col :span="12" class="drawer-left-text" style=";padding: 10px 10px 10px 20px" align="left">公链</el-col>
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 20px 10px 0px" align="right">+</el-col>
        </router-link>
      </el-row>
      <el-row>
        <router-link  @click.native="drawer = false"  to="/token">
          <el-col :span="12" class="drawer-left-text" style=";padding: 10px 10px 10px 20px" align="left">代币</el-col>
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 20px 10px 0px" align="right">+</el-col>
        </router-link>
      </el-row>
      <el-row>
        <router-link  @click.native="drawer = false"  to="/coinMining">
          <el-col :span="12" class="drawer-left-text" style=";padding: 10px 10px 10px 20px" align="left">挖矿</el-col>
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 20px 10px 0px" align="right">+</el-col>
        </router-link>
      </el-row>

    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      drawer: false,
      visible1: false,
      direction: 'rtl' // right to left 由右向左
    }
  },
  mounted () {
    window.scroll(0, 0) // 页面加载置顶
    document.body.scrollTop = document.documentElement.scrollTop = 0
  },
  methods: {
    handleClose (done) {
      done()
    }
  }
}
</script>

<style lang="scss" scoped>
.headFont {
  white-space: nowrap;
}

a {
  text-decoration: none;
  color: #000000;
}

.router-link-exact-active {
  text-decoration: none;
  color: #00EAC4;
}

.router-link-active {
  text-decoration: none;
}

.drawer-left-text {
  font-size: 24px;
  font-weight: 500;
  color: #000000;
}
</style>
