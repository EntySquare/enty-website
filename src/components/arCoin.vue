<template>
  <div style="overflow-x: hidden;">
    <div class="container" style="background-color: black">
      <div id="netWave" style="position: relative;  left: 0; width: 100%; height:0px;top: -300px"></div>
      <el-row :gutter="10" align="middle" justify="center">
        <!--        <canvas style="height: 100%;width: 100%;position:absolute;left:0px;top:0px;z-index:-1;"></canvas>-->
        <!--        <animationBall></animationBall>-->
        <el-col :xs="1" :sm="1" :md="2" :lg="4" :xl="4">
          <div style="min-height: 36px;"></div>
        </el-col>
        <el-col :xs="22" :sm="22" :md="20" :lg="16" :xl="16" style="height: 800px">
          <div class="hidden-md-and-down" style="font-size: 24px;;font-weight: 300;color: #000000;margin-top: 100px">
          </div>
          <div style="height: 100px"></div>
          <div class="title-text1" style="color: #FFFFFF;">EntySquare x Arweave</div>
          <div style="margin: 57px 0;" class="title-text-color"><span>全球唯一领先的</span> <span style="white-space: nowrap">Arweave算法提供商</span>
          </div>
          <div class="title-text2" style="color: #D1D1D1">EntySquare即将成为Arweave</div>
          <div class="title-text2" style="color: #D1D1D1">第一大矿池和算力</div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="2" :lg="4" :xl="4">
          <div style="min-height: 36px;"></div>
        </el-col>
      </el-row>
    </div>

    <div class="container" style="background-color: black">
      <div style="height: 50px"></div>
      <div class="hidden-lg-and-up" style="float:left;width: 100%">
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:12,push:2}"
                :xl="{span:8,push:4}" style="text-align: left;">
          <img src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/ar_Group_1312.png"
               style="width: 20vw;height: auto;">
          <div style="height: 50px"></div>
        </el-col>
      </div>
      <el-row :gutter="10">
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:4,push:3}"
                :xl="{span:4,push:5}" style="">
          <div class="hidden-sm-and-down" style="height: 60px"></div>
          <div class="hidden-md-and-down">
            <img src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/ar_Group_1312.png"
                 style="width: 100%;height: auto;max-width: 300px">
          </div>
        </el-col>
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:12,push:6}"
                :xl="{span:8,push:8}" style="text-align: left">
          <!--          <div style="margin:70px 0" class="content-text">Entysquare是去中心化云算力交易平台，提供具有不同规模的加密货币挖矿能力，让您无需处理复杂的硬件和软件设置，无需任何矿池费用。为用户、投资人、企业及大型投资机构能简单、智能、快速地获取加密货币</div>-->
          <div style="height: 10px"></div>
          <div style="font-weight: 400;color: rgba(255, 255, 255, 0.6);font-size: 24px;">高效率</div>
          <div style="height: 10px"></div>
          <div style="text-align: left" class="title-text-color">
            <span>EntySquare</span>
            <span style="white-space: nowrap">比官方单台效率</span>
            <span style="white-space: nowrap">提升1.5X</span>
          </div>
          <div style="height: 50px"></div>
          <div style="font-size: 32px;font-weight: 400;color: #DCDCDC;">我们让每个人都可以参与到挖矿中。</div>
          <div style="height: 5px"></div>
          <div style="color: #DCDCDC;font-size: 20px;">Entysquare是全球唯一领先的Arweave算法提供商，我们将开展高效加密货币挖矿所需的所有关键因素。
            从构建分布式计算+分布式存储的技术，到为用户提供简化的挖矿系统——我们的用户能够简单、智能、快速地获取AR代币。
          </div>
        </el-col>
      </el-row>
      <div style="height: 100px"></div>
    </div>

    <div class="container" style="background-color: black">
      <div style="height: 50px"></div>
      <div class="hidden-lg-and-up" style="float:left;width: 100%">
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:12,push:2}"
                :xl="{span:8,push:4}" style="text-align: left;">
          <img src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/ar_Group_1313.png"
               style="width: 20vw;height: auto;">
          <div style="height: 50px"></div>
        </el-col>
      </div>
      <el-row :gutter="10">
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:12,push:2}"
                :xl="{span:8,push:4}" style="text-align: left;">
          <!--          <div style="margin:70px 0" class="content-text">Entysquare是去中心化云算力交易平台，提供具有不同规模的加密货币挖矿能力，让您无需处理复杂的硬件和软件设置，无需任何矿池费用。为用户、投资人、企业及大型投资机构能简单、智能、快速地获取加密货币</div>-->
          <div style="height: 10px"></div>
          <div style="font-weight: 400;color: rgba(255, 255, 255, 0.6);font-size: 24px;">革命性挖矿技术</div>
          <div style="height: 10px"></div>
          <div style="text-align: left" class="title-text-color">
            <span>首创分布式计算</span>
            <span style="white-space: nowrap">+分布式存储</span>
          </div>
          <div style="height: 50px"></div>
          <div style="color: #DCDCDC;font-size: 20px;">
            EntySquare突破官方挖矿方式，通过对存储集群方式复制存储尽可能多的数据，促进了数据的存储和分享效率，同时具有更佳的可扩展性架构，并通过RSA密码学累加器降低了对存储的需求。
          </div>
        </el-col>

        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:4,push:5}"
                :xl="{span:4,push:6}" style="">
          <div class="hidden-sm-and-down" style="height: 60px"></div>
          <div class="hidden-md-and-down">
            <img src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/ar_Group_1313.png"
                 style="width: 100%;height: auto;max-width: 300px">
          </div>
        </el-col>
      </el-row>
      <div style="height: 100px"></div>
    </div>

    <div style="background-color: black;width: 100%;">
      <el-row :gutter="10">
        <el-col :xs="{span:22,push:1}" :sm="{span:20,push:4}" :md="{span:20,push:4}" :lg="{span:20,push:2}"
                :xl="{span:20,push:4}" style="">
          <div style="color: #DCDCDC;font-size: 20px;text-align: left">挖矿优势</div>
          <div style="text-align: left" class="title-text-color">
            <span>极速、</span>
            <span style="white-space: nowrap">可扩展、</span>
            <span style="white-space: nowrap">集群化挖矿</span>
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="height: 50px;background-color: black"></div>
    <div style="background-color: black;width: 100%;">
      <el-row :gutter="10">
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:6,push:2}"
                :xl="{span:4,push:4}" style="">
          <div
            style="background: #0F0F0F;border-radius: 40px 40px 40px 40px;opacity: 1;border: 1px solid #000000;text-align: left;padding: 56px">
            <div style="height: 22px"></div>
            <img src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/doubleSphere.png"
                 style="height: 90px;width: auto">
            <div style="height: 50px"></div>
            <div style="font-size: 32px;font-weight: 500;color: #FFFFFF;">可扩展性</div>
            <div style="height: 24px"></div>
            <div style="font-size: 20px;font-weight: 400;color: #DCDCDC;">
              EntySquare具备高吞吐量的分布式计算和分布式存储技术，矿工们仅需存储部分历史区块，就可以立即开始挖矿，同时具有绝佳的可扩展性架构。
            </div>
          </div>
          <div style="height: 50px"></div>
        </el-col>

        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:6,push:3}"
                :xl="{span:4,push:6}" style="">
          <div
            style="background: #0F0F0F;border-radius: 40px 40px 40px 40px;opacity: 1;border: 1px solid #000000;text-align: left;padding: 56px">
            <div style="height: 22px"></div>
            <img src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/doubleSphere.png"
                 style="height: 90px;width: auto">
            <div style="height: 50px"></div>
            <div style="font-size: 32px;font-weight: 500;color: #FFFFFF;">创新的算法</div>
            <div style="height: 24px"></div>
            <div style="font-size: 20px;font-weight: 400;color: #DCDCDC;">
              通过我们的算法从而提高整个网络中的有效数据，扩大网络规模，加入集群，降低了单台的门槛的同时大大提升了矿池算力。
            </div>
          </div>
          <div style="height: 50px"></div>
        </el-col>

        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:6,push:4}"
                :xl="{span:4,push:8}" style="">
          <div
            style="background: #0F0F0F;border-radius: 40px 40px 40px 40px;opacity: 1;border: 1px solid #000000;text-align: left;padding: 56px">
            <div style="height: 22px"></div>
            <img src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/doubleSphere.png"
                 style="height: 90px;width: auto">
            <div style="height: 50px"></div>
            <div style="font-size: 32px;font-weight: 500;color: #FFFFFF;">低门槛</div>
            <div style="height: 24px"></div>
            <div style="font-size: 20px;font-weight: 400;color: #DCDCDC;">
              突破需要高性能 GPU的模式，发挥极致性能，在科学计算表现中挖矿效率能比官方单台效率提高 1.5 倍。具有高并行、高吞吐、低时延等特点
            </div>
          </div>
          <div style="height: 50px"></div>
        </el-col>

      </el-row>
    </div>

    <div style="height: 100px;background-color: black"></div>
    <div id="wave" style="position: relative;  left: 0; width: 100%; height:0px;top: -500px"></div>

    <div style="background-color: black;width: 100%;">
      <el-row :gutter="10">
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:20,push:2}"
                :xl="{span:16,push:4}" style="">
          <div style="text-align: left" class="title-text-color">
            <span>我们使Arweave</span>
            <span style="white-space: nowrap"> 挖矿变得容易</span>
          </div>
          <div style="height: 60px"></div>
          <div style="font-size: 20px;font-weight: 400;color: #DCDCDC;text-align: left;">现在要有竞争力地挖矿，就必须在设施中投入大量资源、时间和精力。
            我们的团队打造出最有效的挖矿系统，为您排忧解难。 这样您就可以全身心专注于跟踪市场，享受挖矿奖励的同时保持竞争力。
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="height: 200px;background-color: black"></div>
    <div style="background-color: black;width: 100%;">
      <el-row :gutter="10">
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:20,push:2}"
                :xl="{span:16,push:4}" style="">
          <div style="text-align: left" class="title-text-color">
            <span>常见问题</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="height: 100px;background-color: black"></div>
    <div style="background-color: black;width: 100%;text-align: left;font-size: 28px;font-weight: 400;color: #DCDCDC;">
      <el-row :gutter="10">
        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:8,push:2}"
                :xl="{span:6,push:4}" style="">
          <div style="height: 100px;width: 100%;">
            <span style="font-weight: 400;color: #00EAC4;padding-right: 10px">+</span> 如何通过Entysquare赚钱？
          </div>
        </el-col>

        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:16,push:2}"
                :xl="{span:16,push:4}" style="">
          <div style="height: 100px;width: 100%;">
            <span style="font-weight: 400;color: #00EAC4;padding-right: 10px">+</span> 我们能为您做什么？
          </div>
        </el-col>

        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:8,push:2}"
                :xl="{span:6,push:4}" style="">
          <div style="height: 100px;width: 100%;">
            <span style="font-weight: 400;color: #00EAC4;padding-right: 10px">+</span> 详细了解我们的技术？
          </div>
        </el-col>

        <el-col :xs="{span:22,push:1}" :sm="{span:16,push:4}" :md="{span:16,push:4}" :lg="{span:16,push:2}"
                :xl="{span:16,push:4}" style="">
          <div style="height: 100px;width: 100%;">
            <span style="font-weight: 400;color: #00EAC4;padding-right: 10px">+</span> 我们如何挖矿？
          </div>
        </el-col>

      </el-row>
    </div>
    <div style="height: 100px;background-color: black"></div>
  </div>
</template>

<script>
import animationBall from './animationBall'
import wave from '../assets/js/wave.js'
import netWave from '../assets/js/net_wave.js'
document.body.scrollTop = document.documentElement.scrollTop = 0
export default {
  name: 'coinMining',
  mounted () {
    window.scroll(0, 0) // 页面加载置顶
    document.body.scrollTop = document.documentElement.scrollTop = 0
    window.onresize = () => {
      wave.onWindowResize()
    }

    wave.initWave('wave')
    wave.animate()

    netWave.init('netWave')
    netWave.animate()
  },
  data () {
    return {}
  },
  components: {
    'animationBall': animationBall,
    'wave': wave
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

@media screen and (min-width: 1200px) {
  .title-text-color {
    font-size: 72px;
    font-weight: 500;
    color: #00EAC4;
    line-height: 72px;
    text-align: center;
    background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 29%, #94469B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title-text1 {
    font-size: 72px;
    height: auto;
    font-weight: 400;
    color: #000000;
    line-height: 72px;
    text-align: center;
  }

  .title-text2 {
    font-size: 38px;
    font-weight: 300;
    color: #000000;
    line-height: 40px;
    text-align: center;
    margin: 24px 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  .title-text-color {
    font-size: 68px;
    font-weight: 500;
    color: #00EAC4;
    line-height: 68px;
    text-align: center;
    background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 29%, #94469B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title-text1 {
    font-size: 68px;
    font-weight: 400;
    color: #000000;
    line-height: 68px;
    text-align: center;
  }

  .title-text2 {
    font-size: 42px;
    font-weight: 300;
    color: #000000;
    line-height: 42px;
    text-align: center;
    margin: 24px 0;
  }
}

@media screen  and (max-width: 767px) {
  .title-text-color {
    font-size: 38px;
    font-weight: 500;
    color: #00EAC4;
    line-height: 72px;
    background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 29%, #94469B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }

  .title-text1 {
    font-size: 48px;
    font-weight: bold;
    color: #000000;
    line-height: 48px;
    text-align: center;
  }

  .title-text2 {
    font-size: 32px;
    font-weight: 300;
    color: #000000;
    line-height: 45px;
    text-align: center;
    margin: 24px 0;
  }
}

.container {
  position: relative;
  width: 100%;
}

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
</style>
