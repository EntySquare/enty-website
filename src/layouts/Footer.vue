<template>
  <div class="hello">
    <el-row style="background: black;text-align: left">
      <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}"
              :lg="{span: '2',offset:'3'}" :xl="{span: '1',push:'1'}"
              style=";font-size: 28px;font-family: Nunito-SemiBold, Nunito;font-weight: 600;color: #FFFFFF;">
        <div style="height: 61px"></div>
        <div class="hidden-md-and-down">
          <div style="height: 100px">
          </div>
        </div>
        <div style="padding-bottom: 32px">
          <span>首页</span><span style="float:right">+</span>
        </div>
        <div style="padding-bottom: 32px">
          <span>技术</span><span style="float:right">+</span>
        </div>
        <div style="padding-bottom: 32px">
          <span>博客</span><span style="float:right">+</span>
        </div>
        <div style="padding-bottom: 32px">
          <span>团队</span><span style="float:right">+</span>
        </div>
        <div style="padding-bottom: 32px">
          <span>关于</span><span style="float:right">+</span>
        </div>
      </el-col>
      <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}"
              :lg="{span: '7',offset:'9'}" :xl="{span: '7',push:'1'}" style="">
        <div style="height: 61px"></div>
        <div class="hidden-md-and-down">
          <div style="height: 100px">
          </div>
        </div>
        <img src="@/assets/entyColourLogo.png" style="height: 40px;width: auto;">
        <div style="height: 41px"></div>
        <div style="font-size: 14px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
          作为全球性区块链技术平台，Entysquare 致力于推动去中心化的商业运用。公司于 2020 年在中国深圳成立。
        </div>
        <div style="height: 20px"></div>
        <div style="font-size: 14px;font-family: PingFang-SC-Medium, PingFang-SC;font-weight: 500;color: #FFFFFF;">
          Entysquare着力打造基于BA*-VRF共识的POS高性能公链，提供包括Defi流动性挖矿、去中心化钱包、公链搭建、算力挖矿等一系列产品和服务，助力企业在全球范围内的增长
        </div>
      </el-col>

    </el-row>
    <el-row style="background: black;text-align: left">
      <div style="height: 100px;background: black"></div>
      <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}"
              :lg="{span: '7',offset:'3'}" :xl="{span: '7',push:'1'}" style="">
        <div
          style="font-size: 14px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;line-height: 20px;">
          © 2021 Entysquare All rights reserved
        </div>
      </el-col>
      <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}"
              :lg="{span: '9',offset:'4'}" :xl="{span: '7',push:'0'}"
              style="font-size: 14px;font-family: PingFang-SC-Semibold, PingFang-SC;font-weight: 600;color: #FFFFFF;padding-top: 20px">
        <span style="margin-right: 20px">+Twitter</span>
        <span style="margin-right: 20px">+Facebook</span>
        <span style="margin-right: 20px">+Reddit</span>
        <span style="margin-right: 20px">+Medium</span>
        <span style="margin-right: 20px">+Linkedin</span>
      </el-col>
      <div style="height: 100px;background: black"></div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
