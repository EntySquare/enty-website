<template>
  <el-container direction="vertical">
    <el-main style="margin: 0; padding: 0;">
      <div
        style="width: 100%; background-color: #FFFFFF; position: fixed; z-index: 99">
        <el-row type="flex" align="middle" v-show="menuShow" style="height: 96px">
          <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
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
      <el-row>
        <el-col :xs="{span: 22, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 2, push: 1}">
          <div style="height: 96px; width: 235px; padding-top: 48px" @click="scrollAnimation()">
            <el-image :src="require('../assets/entyLogo.png')"></el-image>
          </div>
          <div class="headTitle1">Entysquare</div>
          <div class="headTitle2">安全、简洁、速度。</div>
          <div class="headTitle3">凭借核心技术和专业沉淀，我们高效连接全球市场， 为所有商业创造价值。</div>
          <div style="height: 96px; width: 96px; padding-top: 60px" @click="scrollAnimation()">
            <el-image :src="require('../assets/downArrow.png')"></el-image>
          </div>
        </el-col>
        <el-col :xs="{span: 22, push: 1}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 17, push: 5}">
          <div>
            <el-image :src="require('../assets/background.png')" class="headBackground"></el-image>
          </div>
        </el-col>
      </el-row>
      <el-row style="padding-top: 180px; padding-bottom: 216px">
        <el-col class="hidden-sm-and-down" :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}"
                :lg="{span: 2, push: 2}"
                :xl="{span: 2, push: 1}">
          <div class="bodyMenu">首页</div>
          <div class="bodyMenu">技术</div>
          <div class="bodyMenu">博客</div>
          <div class="bodyMenu">团队</div>
          <div class="bodyMenu">关于</div>
        </el-col>
        <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 13, push: 5}">
          <div class="bodyTitle1">我们以革新性的去中心化产品和服务， 以及覆盖全球的触达能力<br/>不断为客户增值，实现财富增长。</div>
        </el-col>
      </el-row>
      <el-row>
        <div>
          <div class="green-background">
            <el-image :src="require('../assets/background_green.png')"></el-image>
          </div>
          <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 2, push: 4}">
            <div class="bodyTitle2">服务</div>
            <div class="bodyTitle3">我们所做的</div>
            <div class="bodyTitle4">打造商业化<br/>智能合约</div>
          </el-col>
        </div>
      </el-row>
      <el-row>
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 12, push: 11}">
          <div class="enty-background">
            <el-image :src="require('../assets/background_enty.png')"></el-image>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 12, push: 7}">
          <div class="bodyText1">Entysquare网络正在使区块链应用程序变得通用，从而提供无与伦比的用户覆盖率和使用率。Entysquare分散且可持续发展，旨在为所有商业创造价值。</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 2, push: 4}">
          <div class="bodyTitle2">优势</div>
          <div class="bodyTitle3">技术和经验沉淀</div>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 6, push: 11}">
          <div style="text-align: left">
            <el-image :src="require('../assets/advanIcon1.png')" style="width: 120px; height: 120px;"></el-image>
          </div>
          <div class="advance-title">扩展性</div>
          <div class="advance-text">基于BA*-VRF共识的POS高性能公链，匿名选举、交易Proof验证压缩并支持NFT合约扩展，让去中心化应用更加顺畅</div>
        </el-col>
      </el-row>
      <el-row style="width: 115px"></el-row>
      <el-row type="flex" style="padding-top: 112px">
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 6, push: 11}">
          <div style="text-align: left">
            <el-image :src="require('../assets/advanIcon2.png')" style="width: 120px; height: 120px;"></el-image>
          </div>
          <div class="advance-title">多样性</div>
          <div class="advance-text">构建全新金融应用、存储扩展、NFT去中心化执行、数字资产及用户语言聊天等多种应用场景</div>
        </el-col>
      </el-row>
      <el-row style="width: 115px"></el-row>
      <el-row type="flex" style="padding-top: 112px; padding-bottom: 180px">
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 6, push: 11}">
          <div style="text-align: left">
            <el-image :src="require('../assets/advanIcon3.png')" style="width: 120px; height: 120px;"></el-image>
          </div>
          <div class="advance-title">安全性</div>
          <div class="advance-text">基于BA*-VRF的POS共识机制，在协议层增加了安全及攻击保护</div>
        </el-col>
      </el-row>
      <div class="team-person-totalBack">
        <el-row>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="body-title5">核心团队</div>
            <div class="team-text" style="padding-bottom: 80px">来自分布式计算、金融交易、区块链共识设计和跨链等各领域经验丰富的资深人士</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="{span: 8, push: 1}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="team-person-background">
              <el-image :src="require('../assets/zengboyuan.png')" class="team-person-image"></el-image>
              <div class="team-person-name">曾博远</div>
              <div class="team-person-position">创始人 & 首席技术官</div>
            </div>
          </el-col>
          <el-col :xs="{span: 8, push: 1}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="team-person-background">
              <el-image :src="require('../assets/luoyue.png')" class="team-person-image"></el-image>
              <div class="team-person-name">罗越</div>
              <div class="team-person-position">加密算法专家</div>
            </div>
          </el-col>
          <el-col :xs="{span: 8, push: 1}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="team-person-background">
              <el-image :src="require('../assets/zhuanghanchen.png')" class="team-person-image"></el-image>
              <div class="team-person-name">庄寒尘</div>
              <div class="team-person-position">Dapp专家</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="team-person-interval">
          <el-col :xs="{span: 8, push: 1}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="team-person-background">
              <el-image :src="require('../assets/yangyuhang.png')" class="team-person-image"></el-image>
              <div class="team-person-name">杨宇航</div>
              <div class="team-person-position">全栈架构师</div>
            </div>
          </el-col>
          <el-col :xs="{span: 8, push: 1}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="team-person-background">
              <el-image :src="require('../assets/pengjinchang.png')" class="team-person-image"></el-image>
              <div class="team-person-name">彭晋昌</div>
              <div class="team-person-position">首席产品官</div>
            </div>
          </el-col>
          <el-col :xs="{span: 8, push: 1}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="team-person-background">
              <el-image :src="require('../assets/guodayang.png')" class="team-person-image"></el-image>
              <div class="team-person-name">郭大洋</div>
              <div class="team-person-position">矿池顾问 / 后端架构师</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-row>
          <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="body-title5" style="padding-top: 150px; padding-bottom: 120px; color: #000000">博客资讯</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image :src="require('../assets/consult1.png')" class="consult-image"></el-image>
              <div class="consult-date">2021年3月18日</div>
              <div class="consult-text">Entysquare 创始人Terrill Tsang出任韩国 hillstone CTO …</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image :src="require('../assets/consult2.png')" class="consult-image"></el-image>
              <div class="consult-date">2021年5月5日</div>
              <div class="consult-text">Entysquare 创始人Terrill Tsang 担任 CSLA公链技术大使…</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image :src="require('../assets/consult1.png')" class="consult-image"></el-image>
              <div class="consult-date">2021年3月1日</div>
              <div class="consult-text">Entysquare 为韩国Investors交易所提供技术服务…</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image :src="require('../assets/consult4.png')" class="consult-image"></el-image>
              <div class="consult-date">2021年4月19日</div>
              <div class="consult-text">Entysquare 团队为汉唐云提供算法技术和开发服务…</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image :src="require('../assets/consult5.png')" class="consult-image"></el-image>
              <div class="consult-date">2021年4月19日</div>
              <div class="consult-text">Entysquare 团队为E-mu.ai提供技术服务…</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image :src="require('../assets/consult6.png')" class="consult-image"></el-image>
              <div class="consult-date">2021年5月16日</div>
              <div class="consult-text">Entysquare 团队为KB Token提供技术服务…</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-row style="padding-bottom: 120px;" type="flex" align="bottom" justify="start">
          <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="body-title5" style="color: #000000;">合作伙伴</div>
          </el-col>
          <el-col :xs="{span: 20, push: 0}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 9}">
            <div>
              <span class="cooperation-text1">如果您有兴趣和我们合作和探讨，请与</span>
              <span class="cooperation-text2">我们联系</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="{span: 10, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 4, push: 4}">
            <el-image :src="require('../assets/cooperation1.png')" class="cooperation-icon"></el-image>
          </el-col>
          <el-col :xs="{span: 10, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 4, push: 4}">
            <el-image :src="require('../assets/cooperation2.png')" class="cooperation-icon"></el-image>
          </el-col>
          <el-col :xs="{span: 10, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 4, push: 4}">
            <el-image :src="require('../assets/cooperation3.png')" class="cooperation-icon"></el-image>
          </el-col>
          <el-col :xs="{span: 10, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 4, push: 4}">
            <el-image :src="require('../assets/cooperation4.png')" class="cooperation-icon"></el-image>
          </el-col>
        </el-row>
      </div>
      <div class="home-footer-size">
        <el-row>
          <el-col :xs="{span: 10, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="home-footer-title">做全球化的推动者和连接者</div>
            <div class="home-footer-subTitle">在无界的区块链世界持续精进，以前沿技术为全球客户提供价值。</div>
            <div class="home-footer-text">
              联系我们
              <span>
                <el-image :src="require('../assets/grayArrow.png')"
                          class="home-rotter-arrow"></el-image>
              </span>
            </div>
          </el-col>
          <el-col :xs="{span: 20, push: 4}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 8}">
            <div>
              <el-image :src="require('../assets/homeFooter.png')" class="home-footer-image"></el-image>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer style="margin: 0; padding: 0">
      <the-footer/>
    </el-footer>
  </el-container>
</template>

<script>
import Footer from '../layouts/Footer'

export default {
  name: 'Home',
  components: {
    TheFooter: Footer
  },
  data () {
    return {
      menuShow: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    scrollAnimation: function () {
      let currentY = document.documentElement.scrollTop || document.body.scrollTop
      // scrollAnimation(currentY, window.innerHeight)
      scrollAnimationTo(currentY, 1080)
      this.menuShow = true
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      let currentY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.menuShow = currentY > 60 && screen.width >= 750
    }
  }
}

function scrollAnimationTo (currentY, targetY) {
  // 获取当前位置方法
  // const currentY = document.documentElement.scrollTop || document.body.scrollTop
  // 计算需要移动的距离
  let needScrollTop = targetY - currentY
  let _currentY = currentY
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / 50)
    _currentY += dist
    window.scrollTo(0, currentY - 96)
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 1 || needScrollTop < -1) {
      scrollAnimationTo(_currentY, targetY)
    } else {
      window.scrollTo(0, targetY - 96)
    }
  }, 1)
}
</script>

<style lang="scss" scoped>
* {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

/*移动端样式*/
@media screen and (max-width: 749px) {

  .headBackground {
    height: 250px;
    width: 319px;
    padding-top: 120px;
  }
  .headFont {
    color: #000000;
    white-space: nowrap;
  }

  .headTitle1 {
    width: 192px;
    height: 116px;
    font-size: 36px;
    font-weight: 600;
    color: #565A67;
    line-height: 116px;
  }

  .headTitle2 {
    width: 324px;
    height: 56px;
    font-size: 36px;
    font-weight: 600;
    color: #000000;
    line-height: 56px;
  }

  .headTitle3 {
    width: 310px;
    height: 64px;
    font-size: 16px;
    font-weight: 400;
    color: #565A67;
    line-height: 32px;
    text-align: left;
    padding-top: 30px;
  }

  .bodyMenu {
    width: 32px;
    height: 16px;
    font-size: 16px;
    font-weight: 500;
    color: #626262;
    line-height: 16px;
    padding-bottom: 16px;
  }
  .green-background {
    width: 100%;
    position: absolute;
    z-index: -1
  }

  .bodyTitle1 {
    width: 319px;
    height: 114px;
    font-size: 30px;
    font-weight: 500;
    color: #000000;
    line-height: 48px;
    text-align: left;
  }

  .bodyTitle2 {
    width: 48px;
    height: 80px;
    font-size: 24px;
    font-weight: 500;
    color: #A1A1A1;
    line-height: 80px;
    padding-top: 100px;
  }

  .bodyTitle3 {
    width: 319px;
    height: 80px;
    font-size: 42px;
    font-weight: 500;
    color: #000000;
    line-height: 80px;
    text-align: left;
    padding-bottom: 40px;
  }
  .enty-background {
    width: 319px;
    height: 332px;
  }

  .bodyTitle4 {
    width: 319px;
    height: 180px;
    font-size: 48px;
    font-weight: 500;
    color: #000000;
    line-height: 56px;
    text-align: left;
  }

  .bodyText1 {
    width: 319px;
    height: 108px;
    font-size: 18px;
    font-weight: 500;
    color: #000000;
    line-height: 36px;
    text-align: left;
  }

  .advance-title {
    height: 32px;
    width: 96px;
    font-size: 32px;
    font-weight: 500;
    color: #000000;
    line-height: 32px;
    text-align: left;
    padding-top: 32px;
  }

  .advance-text {
    height: 90px;
    width: 220px;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    line-height: 24px;
    text-align: left;
    margin: 0 auto;
    padding-top: 40px;
  }

  .body-title5 {
    width: 320px;
    height: 80px;
    font-size: 48px;
    font-weight: 500;
    line-height: 80px;
    padding-top: 50px;
    padding-bottom: 48px;
    text-align: left;
    color: #FFFFFF;
  }

  .team-text {
    height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
    text-align: left;
  }
  .team-person-totalBack {
    background-color: black;
    width: 100%;
    height: 750px;
  }

  .team-person-background {
    width: 100px;
    height: 180px;
    background: #222222;
  }
  .team-person-image {
    width: 100px;
    height: 130px
  }

  .team-person-name {
    font-size: 12px;
    font-weight: 500;
    color: #FFFFFF;
    text-align: right;
    padding: 5px 10px 8px 0;
  }

  .team-person-position {
    font-size: 8px;
    font-weight: 500;
    color: #FFFFFF;
    text-align: right;
    padding: 0 10px 12px 0;
  }
  .team-person-interval {
    padding-top: 30px;
  }

  .consult-image {
    width: 300px;
    height: 460px
  }
  .consult-size {
    width: 300px;
    padding-bottom: 106px;
  }
  .consult-date {
    width: 300px;
    height: 14px;
    font-size: 14px;
    font-weight: 500;
    color: #808080;
    line-height: 14px;
    padding-top: 36px;
    text-align: left;
  }

  .consult-text {
    width: 300px;
    height: 80px;
    font-size: 24px;
    font-weight: 500;
    color: #000000;
    line-height: 40px;
    padding-top: 21px;
    padding-bottom: 40px;
    text-align: left;
  }

  .consult-line {
    width: 300px;
    height: 6px;
    background: #000000;
  }

  .cooperation-text1 {
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #565A67;
  }

  .cooperation-text2 {
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #00EAC4;
    text-align: left;
    cursor: pointer;
  }
  .cooperation-icon {
    width: 148px;
    height: 88px
  }
  .home-footer-size {
    height: 493px;
    background-color: #FCFDFD;
  }

  .home-footer-title {
    width: 319px;
    height: 78px;
    font-size: 38px;
    font-weight: 500;
    color: #000000;
    line-height: 58px;
    padding-top: 106px;
    text-align: left;
  }

  .home-footer-subTitle {
    width: 319px;
    height: 60px;
    font-size: 16px;
    font-weight: 500;
    color: #565A67;
    line-height: 28px;
    padding-top: 60px;
    text-align: left;
  }

  .home-footer-text {
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    color: #565A67;
    padding-top: 30px;
    padding-bottom: 40px;
    text-align: left;
  }
  .home-rotter-arrow {
    width: 48px;
    height: 48px;
    margin: -35px 20px 1px 70px
  }
  .home-footer-image {
    width: 312px;
    height: 341px;
    padding-bottom: 80px;
  }
}

/*适配web端*/
@media screen and (min-width: 750px) {
  .headBackground {
    height: 100vh;
    width: 1360px;
  }
  .headFont {
    color: #000000;
    white-space: nowrap;
  }

  .headTitle1 {
    width: 192px;
    height: 116px;
    font-size: 36px;
    font-weight: 600;
    color: #565A67;
    line-height: 116px;
  }

  .headTitle2 {
    width: 324px;
    height: 56px;
    font-size: 36px;
    font-weight: 600;
    color: #000000;
    line-height: 56px;
  }

  .headTitle3 {
    width: 368px;
    height: 64px;
    font-size: 16px;
    font-weight: 400;
    color: #565A67;
    line-height: 32px;
    text-align: left;
    padding-top: 30px;
  }

  .bodyMenu {
    width: 32px;
    height: 16px;
    font-size: 16px;
    font-weight: 500;
    color: #626262;
    line-height: 16px;
    padding-bottom: 16px;
  }

  .green-background {
    height: 1720px;
    width: 100%;
    position: absolute;
    z-index: -1
  }

  .bodyTitle1 {
    width: 1096px;
    height: 264px;
    font-size: 64px;
    font-weight: 500;
    color: #000000;
    line-height: 88px;
    text-align: left;
  }

  .bodyTitle2 {
    width: 48px;
    height: 80px;
    font-size: 24px;
    font-weight: 500;
    color: #A1A1A1;
    line-height: 80px;
    padding-bottom: 40px;
    padding-top: 243px;
  }

  .bodyTitle3 {
    width: 560px;
    height: 80px;
    font-size: 80px;
    font-weight: 500;
    color: #000000;
    line-height: 80px;
    text-align: left;
    padding-bottom: 162px;
  }
  .enty-background {
    width: 750px;
    height: 632px;
  }

  .bodyTitle4 {
    width: 650px;
    height: 296px;
    font-size: 130px;
    font-weight: 500;
    color: #000000;
    line-height: 148px;
    text-align: left;
  }

  .bodyText1 {
    width: 573px;
    height: 108px;
    font-size: 24px;
    font-weight: 500;
    color: #000000;
    line-height: 36px;
    text-align: left;
    padding-top: 78px;
  }

  .advance-title {
    height: 32px;
    width: 96px;
    font-size: 32px;
    font-weight: 500;
    color: #000000;
    line-height: 32px;
    text-align: left;
    padding-top: 32px;
  }

  .advance-text {
    height: 90px;
    font-size: 18px;
    font-weight: 500;
    color: #000000;
    line-height: 30px;
    text-align: left;
    margin: 0 auto;
    padding-top: 40px;
  }

  .body-title5 {
    width: 320px;
    height: 80px;
    font-size: 80px;
    font-weight: 500;
    line-height: 80px;
    padding-top: 150px;
    padding-bottom: 48px;
    color: #FFFFFF
  }

  .team-text {
    width: 864px;
    height: 24px;
    font-size: 24px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
  }
  .team-person-totalBack {
    background-color: black;
    width: 100%;
    height: 1712px;
  }

  .team-person-background {
    width: 330px;
    height: 515px;
    background: #222222;
  }
  .team-person-image {
    width: 330px;
    height: 399px
  }
  .team-person-name {
    height: 44px;
    font-size: 32px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 44px;
    text-align: right;
    padding: 20px 32px 12px 0;
  }
  .team-person-position {
    height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 22px;
    text-align: right;
    padding: 0 32px 18px 0;
  }
  .team-person-interval {
    padding-top: 110px;
  }
  .consult-image {
    width: 356px;
    height: 460px
  }
  .consult-size {
    width: 356px;
    padding-bottom: 80px;
  }
  .consult-date {
    height: 14px;
    font-size: 14px;
    font-weight: 500;
    color: #808080;
    line-height: 14px;
    padding-top: 36px;
    text-align: left;
  }
  .consult-text {
    width: 356px;
    height: 80px;
    font-size: 24px;
    font-weight: 500;
    color: #000000;
    line-height: 40px;
    padding-top: 21px;
    padding-bottom: 40px;
    text-align: left;
  }

  .consult-line {
    width: 356px;
    height: 6px;
    background: #000000;
  }

  .cooperation-text1 {
    height: 20px;
    width: 308px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #565A67;
  }

  .cooperation-text2 {
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #00EAC4;
    cursor: pointer;
  }
  .cooperation-icon {
    width: 296px;
    height: 176px
  }
  .home-footer-size {
    height: 493px;
    background-color: #FCFDFD;
    padding-top: 317px;
  }
  .home-footer-title {
    width: 672px;
    height: 78px;
    font-size: 56px;
    font-weight: 500;
    color: #000000;
    line-height: 78px;
    padding-top: 106px;
  }

  .home-footer-subTitle {
    width: 522px;
    height: 28px;
    font-size: 18px;
    font-weight: 500;
    color: #565A67;
    line-height: 28px;
    padding-top: 36px;
  }

  .home-footer-text {
    height: 28px;
    width: 64px;
    font-size: 16px;
    font-weight: 500;
    color: #565A67;
    line-height: 28px;
    padding-top: 82px;
    text-align: left;
  }
  .home-rotter-arrow {
    width: 96px;
    height: 96px;
    margin-right: 200px;
    margin-top: -62px;
  }
  .home-footer-image {
    width: 464px;
    height: 547px;
    margin-top: -157px
  }
}

</style>
