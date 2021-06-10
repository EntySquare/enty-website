<template>
  <div>
    <div class="container"  style="height:1116px">
      <el-row :gutter="10" align="middle" justify="center">
        <el-col :xs="1" :sm="1" :md="2" :lg="4" :xl="5">
          <div style="min-height: 36px;"></div>
        </el-col>
        <el-col :xs="22" :sm="22" :md="20" :lg="16" :xl="14">
          <div>
            <p style="margin: 348px 0px 36px 0px " class="title-text1">Entysquare</p>
            <p style="margin: 57px 0px;" class="title-text-color">去中心化标准算力协议</p>
            <p class="title-text2">购买算力凭证以</p>
            <p class="title-text2">赚取挖矿收益和代币奖励</p>
          </div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="2" :lg="4" :xl="5">
          <div  style="min-height: 36px;"></div>
        </el-col>
      </el-row>
    </div>
    <div class="container"  style="height:500px;margin-top: 46px">
      <el-row :gutter="10">
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:8,push:2}" :xl="{span:6,push:4}">
          <div style="margin-top:50px" class="title-text3">Entysquare
            <div style="width: 108px;height: 16px;background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);z-index: -1;margin-top:-10px;position:relative;"></div>
          </div>
          <div class="title-text3">是将矿机算力标准化
            <div style="width: 246px;height: 16px;background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);z-index: -1;margin-top:-10px;position:relative;"></div>
          </div>
          <div class="title-text3">的DeFi挖矿协议
            <div style="width: 188px;height: 16px;background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);z-index: -1;margin-top:-10px;position:relative;"></div>
          </div>
        </el-col>
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:8,push:6}" :xl="{span:6,push:8}">
          <div style="margin:70px 0px" class="content-text">Entysquare是去中心化云算力交易平台，提供具有不同规模的加密货币挖矿能力，让您无需处理复杂的硬件和软件设置，无需任何矿池费用。为用户、投资人、企业及大型投资机构能简单、智能、快速地获取加密货币</div>
        </el-col>
      </el-row>
    </div>
    <div class="container" >
    <el-row :gutter="10">
      <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:8,push:2}" :xl="{span:6,push:4}">
        <div class="title-text4" style="margin-top:50px">我们的</div>
        <div class="title-text4" style="margin-bottom: 50px;">优势</div>
      </el-col>
      <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:12,push:2}" :xl="{span:12,push:4}">
        <el-row :gutter="20">
          <el-col :span="11" :push="1" >
            <div style="height:300px; margin-top: 50px;">
              <div style="height:120px;text-align: left">
                <el-image style="width: 80px;height: 80px;" :src="require('../assets/icon1.png')"></el-image>
              </div>
              <div class="sub-title-text1">
                每日挖矿产出
              </div>
              <div class="content-text1">
                您的挖矿产出将每天自动添加到您的账户中
              </div>
            </div>
          </el-col>
          <el-col :span="11" :push="2" >
            <div style="height:300px;margin-top: 50px;">
              <div style="height:120px;text-align: left">
                <el-image style="width: 80px;height: 80px;" :src="require('../assets/icon1.png')"></el-image>
              </div>
              <div class="sub-title-text1">
                先进的挖矿技术
              </div>
              <div class="content-text1">
                对于我们支持的每个区块链算法，我们都提供现有性能最高的挖矿系统
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11" :push="1">
            <div style="height:300px;">
              <div style="height:120px;text-align: left">
                <el-image style="width: 80px;height: 80px;" :src="require('../assets/icon1.png')"></el-image>
              </div>
              <div class="sub-title-text1">
                多币种挖矿
              </div>
              <div class="content-text1">
                超过10种可挖取的加密货币供您选择
              </div>
            </div>
          </el-col>
          <el-col :span="11" :push="2">
            <div style="height:300px;">
              <div style="height:120px;text-align: left">
                <el-image style="width: 80px;height: 80px;" :src="require('../assets/icon1.png')"></el-image>
              </div>
              <div class="sub-title-text1">
                安全透明
              </div>
              <div class="content-text1">
                算力实时显示，Entysquare安全团队，为您的资产保驾护航
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="11" :push="1">
            <div style="height:300px;">
              <div style="height:120px;text-align: left">
                <el-image style="width: 80px;height: 80px;" :src="require('../assets/icon1.png')"></el-image>
              </div>
              <div class="sub-title-text1">
                自由交易
              </div>
              <div class="content-text1">
                随时随地的查看您需要的所有加密货币挖矿数据和图表
              </div>
            </div>
          </el-col>
          <el-col :span="11" :push="2">
            <div style="height:300px;">
              <div style="height:120px;text-align: left">
                <el-image style="width: 80px;height: 80px;" :src="require('../assets/icon1.png')"></el-image>
              </div>
              <div class="sub-title-text1">
                真实算力
              </div>
              <div class="content-text1">
                我们的数据中心产生高性能的算法能力，安全稳定的运维
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    </div>
    <div class="container usageBackground">
      <el-image class="usageBackgroundImg" :src="require('../assets/usageBackground.png')"></el-image>
      <el-image class="usageBackgroundImgH5" :src="require('../assets/usageBackgroundH5.png')"></el-image>
      <el-row :gutter="10">
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:8,push:1}" :xl="{span:6,push:4}">
          <div style="margin-top:148px;">
            <el-image class="coinCardSet" :src="require('../assets/coinCardSet.png')"></el-image>
          </div>
        </el-col>
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:8,push:6}" :xl="{span:8,push:8}">
          <div style="margin-top: 215px;overflow: hidden" class="title-text5">我们通过算法能
            <div style="width: 312px;height: 16px;background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);z-index: -1;margin-top: -10px;position: relative;left: 140px;"></div>
          </div>
          <div style="" class="title-text5">挖什么币
            <div style="width: 188px;height: 16px;background: linear-gradient(90deg, #94469B 0%, #D32254 100%);position:relative;z-index: -1;margin-top: -10px"></div>
          </div>
          <div style="margin-top: 114px" class="content-text2">我们的挖矿专家和算法交易框架拥有对加密货币的专业性。您可以通过我们的挖矿页面直接挖取SHA-256合约-BTC、Ethash合约-ETH和各种代币。可以挖取的加密货币取决于您选择的合约。</div>
          <div style="height: 140px;margin-top: 96px;">
            <div style="height: 74px;width: 74px;position: absolute;margin-top: 13px;">
              <el-image style="width: 74px;height:74px;" :src="require('../assets/icon2.png')"></el-image>
            </div>
            <div class="sub-title-text2" style="position: relative;left:118px;">
              自动计算
            </div>
            <div style="position: relative;left:118px;" class="content-text3">
              让您无需处理复杂的硬件和软件设置，无需任何矿池费用。
            </div>
          </div>
          <div style="height: 140px;position:relative;margin-top:60px">
            <div style="height: 74px;width: 74px;position: absolute;margin-top: 13px;">
              <el-image style="width: 74px;height:74px;" :src="require('../assets/icon3.png')"></el-image>
            </div>
            <div class="sub-title-text2"  style="position: relative;left:118px;">
              算力凭证
            </div>
            <div style="position: relative;left:118px;" class="content-text3">
              购买算力ERC-20 Token或者ESE Token,每一个Token可苗定各自精准的算力
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-bottom: 100px">
      <el-row :gutter="10">
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:8,push:2}" :xl="{span:6,push:4}">
        <div style="margin-top: 160px" class="title-text4">常见</div>
        <div class="title-text4">问题</div>
      </el-col>
      <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:12,push:4}" :xl="{span:12,push:4}">
        <div style="margin-top: 200px;" class="content-text4"><span class="plusSymble">+</span>&nbsp;&nbsp;&nbsp;&nbsp;如何通过Entysquare赚钱？</div>
        <div class="content-text4"><span class="plusSymble">+</span>&nbsp;&nbsp;&nbsp;&nbsp;详细了解我们的技术？</div>
        <div class="content-text4"><span class="plusSymble">+</span>&nbsp;&nbsp;&nbsp;&nbsp;我们能为您做什么？</div>
        <div class="content-text4"><span class="plusSymble">+</span>&nbsp;&nbsp;&nbsp;&nbsp;更深入的了解我们？</div>
        <div class="content-text4"><span class="plusSymble">+</span>&nbsp;&nbsp;&nbsp;&nbsp;购买算力的好处？</div>
        <div class="content-text4"><span class="plusSymble">+</span>&nbsp;&nbsp;&nbsp;&nbsp;我们如何挖矿？</div>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'coinMining'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (min-width: 1200px) {
    .title-text-color {
      font-size: 72px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #00EAC4;
      line-height: 72px;
      text-align: center;
      background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .title-text1 {
      font-size: 72px;
      font-family: Skycoin-Regular, Skycoin;
      font-weight: 400;
      color: #000000;
      line-height: 72px;
      text-align: center;
    }

    .title-text2 {
      font-size: 48px;
      font-family: PingFang-SC-Light, PingFang-SC;
      font-weight: 300;
      color: #000000;
      line-height: 48px;
      text-align: center;
      margin: 24px 0px;
    }

    .title-text3 {
      width: 576px;
      height: auto;
      font-size: 64px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #000000;
      line-height: 88px;
      text-align: left;
    }

    .title-text4 {
      width: 168px;
      height: auto;
      font-size: 56px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #000000;
      line-height: 78px;
      text-align: left;
    }

    .title-text5 {
      width: 448px;
      height: auto;
      font-size: 64px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 88px;
      text-align: left;
    }

    .sub-title-text1 {
      width: 224px;
      height: auto;
      font-size: 32px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #000000;
      line-height: 32px;
      text-align: left;
    }

    .sub-title-text2 {
      width: 96px;
      height: auto;
      font-size: 24px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 33px;
      text-align: left;
    }

    .content-text {
      width: 458px;
      height: auto;
      font-size: 18px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #1F1F1F;
      line-height: 28px;
      text-align: left;
    }

    .content-text1 {
      width: 260px;
      font-size: 16px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #1E1E1E;
      line-height: 22px;
      margin-top: 24px;
      text-align: left;
    }

    .content-text2 {
      width: 450px;
      height: auto;
      font-size: 18px;
      font-family: PingFang-SC-Regular, PingFang-SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 32px;
      text-align: left;
    }

    .content-text3 {
      width: 320px;
      height: auto;
      font-size: 18px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 32px;
      text-align: left;
      margin-top: 23px;
    }

    .content-text4 {
      height: auto;
      font-size: 28px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #4D4D4D;
      line-height: 28px;
      text-align: left;
      margin-top: 80px;
    }
    .usageBackgroundImg {
      height:1285px;
      width: 100%;
      z-index: -1;
      position:absolute;
      left:0px;
      top:0px;
      display: block;
    }
    .usageBackgroundImgH5 {
      height:2156px;
      width: 100%;
      z-index: -1;
      position:absolute;
      left:0px;
      top:0px;
      display: none;
    }

    .usageBackground {
      height: 1285px;
    }

    .plusSymble {
      width: 17px;
      height: 28px;
      font-size: 28px;
      font-family: PingFang-SC-Semibold, PingFang-SC;
      font-weight: 600;
      color: #00EAC4;
      line-height: 28px;
    }
    .coinCardSet{
      width: 590px;
      height:954px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    .title-text-color {
      font-size: 68px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #00EAC4;
      line-height: 68px;
      text-align: center;
      background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .title-text1 {
      font-size: 68px;
      font-family: Skycoin-Regular, Skycoin;
      font-weight: 400;
      color: #000000;
      line-height: 68px;
      text-align: center;
    }

    .title-text2 {
      font-size: 42px;
      font-family: PingFang-SC-Light, PingFang-SC;
      font-weight: 300;
      color: #000000;
      line-height: 42px;
      text-align: center;
      margin: 24px 0px;
    }

    .title-text3 {
      width: 576px;
      height: auto;
      font-size: 60px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #000000;
      line-height: 84px;
      text-align: left;
    }

    .title-text4 {
      width: 168px;
      height: auto;
      font-size: 52px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #000000;
      line-height: 75px;
      text-align: left;
    }

    .title-text5 {
      width: 448px;
      height: auto;
      font-size: 60px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 82px;
      text-align: left;
    }

    .sub-title-text1 {
      width: 224px;
      height: auto;
      font-size: 32px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #000000;
      line-height: 32px;
      text-align: left;
    }

    .sub-title-text2 {
      width: 96px;
      height: auto;
      font-size: 24px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 33px;
      text-align: left;
    }

    .content-text {
      height: auto;
      font-size: 18px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #1F1F1F;
      line-height: 28px;
      text-align: left;
    }

    .content-text1 {
      width: 240px;
      font-size: 16px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #1E1E1E;
      line-height: 22px;
      margin-top: 24px;
      text-align: left;
    }
    .content-text2 {
      width: 450px;
      height: auto;
      font-size: 18px;
      font-family: PingFang-SC-Regular, PingFang-SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 32px;
      text-align: left;
    }
    .content-text3 {
      width: 320px;
      height: auto;
      font-size: 18px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 32px;
      text-align: left;
      margin-top: 23px;
    }
    .content-text4 {
      height: auto;
      font-size: 28px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #4D4D4D;
      line-height: 28px;
      text-align: left;
      margin-top: 80px;
    }
    .usageBackgroundImg {
      display: none;
    }
    .usageBackgroundImgH5 {
      height:2156px;
      width: 100%;
      z-index: -1;
      position:absolute;
      left:0px;
      top:0px;
      display: block;
    }
    .usageBackground {
      height: 2500px;
      background: black;
      z-index: -2;
    }
    .coinCardSet{
      width: 100%;
      height:auto;
    }
    .plusSymble {
      width: 17px;
      height: 28px;
      font-size: 28px;
      font-family: PingFang-SC-Semibold, PingFang-SC;
      font-weight: 600;
      color: #00EAC4;
      line-height: 28px;
    }
  }

  @media screen  and (max-width: 767px) {
    .title-text-color {
      font-size: 48px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #00EAC4;
      line-height: 72px;
      background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }

    .title-text1 {
      font-size: 48px;
      font-family: Skycoin-Bold, Skycoin;
      font-weight: bold;
      color: #000000;
      line-height: 48px;
      text-align: center;
    }

    .title-text2 {
      font-size: 32px;
      font-family: PingFang-SC-Light, PingFang-SC;
      font-weight: 300;
      color: #000000;
      line-height: 45px;
      text-align: center;
      margin: 24px 0px;
    }

    .title-text3 {
      height: auto;
      font-size: 32px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #000000;
      line-height: 45px;
      text-align: left;
    }

    .title-text4 {
      width: 192px;
      height: auto;
      font-size: 36px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #000000;
      line-height: 40px;
      text-align: left;

    }

    .title-text5 {
      height: auto;
      font-size: 36px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 45px;
      text-align: left;
    }

    .sub-title-text1 {
      width: 120px;
      height: auto;
      font-size: 22px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #000000;
      line-height: 24px;
      text-align: left;
    }

    .sub-title-text2 {
      width: 96px;
      height: auto;
      font-size: 24px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 33px;
      text-align: left;
    }

    .content-text {
      height: auto;
      font-size: 18px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #1F1F1F;
      line-height: 28px;
      text-align: left;
    }

    .content-text1 {
      width:120px;
      font-size: 16px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #1E1E1E;
      line-height: 20px;
      margin-top: 24px;
      text-align: left;
    }

    .content-text2 {
      height: auto;
      font-size: 18px;
      font-family: PingFang-SC-Regular, PingFang-SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 32px;
      text-align: left;
    }

    .content-text3 {
      width: 180px;
      height: auto;
      font-size: 18px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 32px;
      text-align: left;
      margin-top: 23px;
    }

    .content-text4 {
      height: auto;
      font-size: 20px;
      font-family: PingFang-SC-Medium, PingFang-SC;
      font-weight: 500;
      color: #4D4D4D;
      line-height: 20px;
      text-align: left;
      margin-top: 80px;
    }

    .usageBackgroundImg {
      display: none;
    }

    .usageBackgroundImgH5 {
      width: 100%;
      height:2000px;
      z-index: -1;
      position:absolute;
      left:0px;
      top:0px;
      display: block;
    }

    .usageBackground {
      height: 2000px;
    }
    .plusSymble {
      width: 17px;
      height: 28px;
      font-size: 28px;
      font-family: PingFang-SC-Semibold, PingFang-SC;
      font-weight: 600;
      color: #00EAC4;
      line-height: 28px;
    }
  }
  .container {
    position: relative;
    width: 100%;
  }
</style>
