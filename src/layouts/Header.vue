<template>
  <div
    style="width: 100%; background-color: #ffffff; position: fixed; z-index: 99"
  >
    <el-row
      type="flex"
      align="middle"
      style="height: 96px"
      class="hidden-sm-and-down"
    >
      <el-col
        :xs="{ span: 2, push: 2 }"
        :sm="{ span: 2, push: 2 }"
        :md="{ span: 2, push: 2 }"
        :lg="{ span: 2, push: 2 }"
        :xl="{ span: 2, push: 1 }"
      >
        <router-link to="/">
          <img
            src="../assets/entyLogo.png"
            style="height: 48px; width: 235px"
          />
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
      <el-col
        :xs="{ span: 2, push: 2 }"
        :sm="{ span: 2, push: 2 }"
        :md="{ span: 3, push: 7 }"
        :lg="{ span: 3, push: 7 }"
        :xl="{ span: 3, push: 8 }"
      >
        <div
          style="
            font-size: 16px;
            font-weight: 500;
            color: #00eac4;
            display: inline;
            margin-bottom: 30px;
          "
        >
          联系我们
        </div>
      </el-col>
      <el-col class="is-justify-center" :span="3" :push="6">
        <img
          src="../assets/rightArrow.png"
          style="height: 60px; width: 60px; margin-top: 3px"
        />
      </el-col>
    </el-row>
    <el-col :xs="12" :sm="12" :md="0" :lg="0" :xl="0">
      <div
        class=""
        style="
          height: 66px;
          width: 100%;
          background: #ffffff;
          position: fixed;
          z-index: 99;
        "
      >
        <router-link to="/" style="float: left">
          <img
            src="../assets/entyLogo.png"
            style="
              height: auto;
              width: 150px;
              margin-top: 17px;
              margin-left: 20px;
            "
          />
        </router-link>
        <el-button
          type="primary"
          style="
            height: 100%;
            width: 80px;
            float: right;
            font-size: 45px;
            color: black;
            background: transparent;
            outline: none;
            border: none;
          "
          @click="drawer = true"
        >
          =
        </el-button>
      </div>
    </el-col>
    <el-drawer
      v-model:visible="drawer"
      :modal="false"
      title=""
      :direction="direction"
      :before-close="handleClose"
      size="40%"
      style=""
    >
      <el-row>
        <router-link to="/" @click.native="drawer = false">
          <el-col
            span="12"
            class="drawer-left-text"
            style="padding: 10px 10px 10px 20px"
            align="left"
            >首页</el-col
          >
          <el-col
            span="12"
            class="drawer-left-text"
            style="padding: 10px 20px 10px 0px"
            align="right"
            >+</el-col
          >
        </router-link>
      </el-row>
      <el-row>
        <router-link to="/publicChain" @click.native="drawer = false">
          <el-col
            span="12"
            class="drawer-left-text"
            style="padding: 10px 10px 10px 20px"
            align="left"
            >公链</el-col
          >
          <el-col
            span="12"
            class="drawer-left-text"
            style="padding: 10px 20px 10px 0px"
            align="right"
            >+</el-col
          >
        </router-link>
      </el-row>
      <el-row>
        <router-link to="/token" @click.native="drawer = false">
          <el-col
            span="12"
            class="drawer-left-text"
            style="padding: 10px 10px 10px 20px"
            align="left"
            >代币</el-col
          >
          <el-col
            span="12"
            class="drawer-left-text"
            style="padding: 10px 20px 10px 0px"
            align="right"
            >+</el-col
          >
        </router-link>
      </el-row>
      <el-row>
        <router-link to="/coinMining" @click.native="drawer = false">
          <el-col
            span="12"
            class="drawer-left-text"
            style="padding: 10px 10px 10px 20px"
            align="left"
            >挖矿</el-col
          >
          <el-col
            span="12"
            class="drawer-left-text"
            style="padding: 10px 20px 10px 0px"
            align="right"
            >+</el-col
          >
        </router-link>
      </el-row>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    window.scroll(0, 0); // 页面加载置顶
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
};
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
  color: #00eac4;
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
