<template>
  <div class="hello">
    <el-row style="background: black;text-align: left">
      <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}"
              :lg="{span: '2',offset:'3'}" :xl="{span: '1',push:'1'}"
              style="font-size: 28px;font-weight: 600;color: #FFFFFF;">
        <div style="height: 61px"></div>
        <div class="hidden-md-and-down">
          <div style="height: 100px">
          </div>
        </div>
        <div style="padding-bottom: 32px">
          <el-link  @click="goArea(0)" :underline="false" class="a-tag-color" style="font-size: 28px;font-weight: 600;color: #FFFFFF;"><span class="a-tag-color">首页</span><span class="hidden-xs-only">&nbsp;+</span>
            <span class="hidden-sm-and-up" style="position: absolute;left: 320px;">+</span></el-link>
        </div>
        <div style="padding-bottom: 32px">
          <el-link  @click="goArea(1)" :underline="false" class="a-tag-color" style="font-size: 28px;font-weight: 600;color: #FFFFFF;"><span class="a-tag-color">技术</span><span class="hidden-xs-only">&nbsp;+</span>
            <span class="hidden-sm-and-up" style="position: absolute;left: 320px;">+</span></el-link>
        </div>
        <div style="padding-bottom: 32px">
          <el-link  @click="goArea(2)" :underline="false" class="a-tag-color" style="font-size: 28px;font-weight: 600;color: #FFFFFF;"><span class="a-tag-color">团队</span><span class="hidden-xs-only">&nbsp;+</span>
            <span class="hidden-sm-and-up" style="position: absolute;left: 320px;">+</span></el-link>
        </div>
        <div style="padding-bottom: 32px">
          <el-link  @click="goArea(3)" :underline="false" class="a-tag-color" style="font-size: 28px;font-weight: 600;color: #FFFFFF;"><span class="a-tag-color">博客</span><span class="hidden-xs-only">&nbsp;+</span>
            <span class="hidden-sm-and-up" style="position: absolute;left: 320px;">+</span></el-link>
        </div>
        <div style="padding-bottom: 32px">
          <el-link  @click="goArea(4)" :underline="false" class="a-tag-color" style="font-size: 28px;font-weight: 600;color: #FFFFFF;"><span class="a-tag-color">关于</span><span class="hidden-xs-only">&nbsp;+</span>
            <span class="hidden-sm-and-up" style="position: absolute;left: 320px;">+</span></el-link>
        </div>
      </el-col>
      <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}"
              :lg="{span: '7',offset:'9'}" :xl="{span: '7',push:'1'}" style="">
        <div style="height: 61px"></div>
        <div class="hidden-md-and-down">
          <div style="height: 100px">
          </div>
        </div>
        <img src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/entyColourLogo.png" style="height: 40px;width: auto;">
        <div style="height: 41px"></div>
        <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
          作为全球性区块链技术平台，EntySquare 致力于推动去中心化的商业运用。
        </div>
        <div style="height: 20px"></div>
        <div style="font-size: 14px;font-weight: 500;color: #FFFFFF;">
          EntySquare着力打造基于BA*-VRF共识的POS高性能公链，提供包括Defi流动性挖矿、去中心化钱包、公链搭建、算力挖矿等一系列产品和服务，助力企业在全球范围内的增长
        </div>
      </el-col>

    </el-row>
    <el-row style="background: black;text-align: left">
      <div style="height: 100px;background: black"></div>
      <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}"
              :lg="{span: '7',offset:'3'}" :xl="{span: '7',push:'1'}" style="">
        <div
          style="font-size: 14px;font-weight: 600;color: #FFFFFF;line-height: 20px;">
          © 2021 EntySquare All rights reserved
        </div>
      </el-col>
      <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}"
              :lg="{span: '9',offset:'4'}" :xl="{span: '7',push:'0'}"
              style="font-size: 14px;font-weight: 600;color: #FFFFFF;padding-top: 20px">
        <el-link href="https://twitter.com/EntySquare"  :underline="false" target="_blank" style="color: #FFFFFF" >
          <span style="margin-right: 20px" class="a-tag-color">+Twitter</span>
        </el-link>
        <el-link href="https://www.facebook.com/profile.php?id=100069820725320"  :underline="false" target="_blank" style="color: #FFFFFF">
          <span style="margin-right: 20px" class="a-tag-color">+Facebook</span>
        </el-link>
        <el-link href="https://wiki.entysquare.io"  :underline="false" target="_blank" style="color: #FFFFFF">
          <span style="margin-right: 20px" class="a-tag-color">+Wiki</span>
        </el-link>
        <el-link href="https://medium.com/@entysquare"  :underline="false"  target="_blank" style="color: #FFFFFF">
          <span style="margin-right: 20px" class="a-tag-color">+Medium</span>
        </el-link>
        <el-link href="https://www.linkedin.com/in/entysquare-entysquare-a86069216/"  :underline="false" target="_blank" style="color: #FFFFFF">
          <span style="margin-right: 20px" class="a-tag-color">+Linkedin</span>
        </el-link>
      </el-col>
      <div style="height: 100px;background: black"></div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    goArea (index) {
      window.location.href = '#/?index=' + index + '&date' + new Date().getTime()
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.a-tag-color:hover {color:#94469B;}  /* 鼠标移动到链接上 */
</style>
