<template>
  <el-container direction="vertical">
    <el-main style="margin: 0; padding: 0; overflow-x: hidden;">
      <div
        style="width: 100%; background-color: #FFFFFF; position: fixed; z-index: 99">
        <el-row type="flex" align="middle" v-show="menuShow" style="height: 96px" class="hidden-sm-and-down">
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
                <el-col>
                  <router-link to="/arCoin">
                    <div class="headFont">Arweave算法提供商</div>
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
      </div>
      <div v-show="sideNaviShow" class="sideNavi hidden-sm-and-down">
        <el-link class="a-tag-color" @click="jump(0)" :underline="false">首页</el-link>
        <br/>
        <el-link class="a-tag-color" @click="jump(1)" :underline="false">技术</el-link>
        <br/>
        <el-link class="a-tag-color" @click="jump(2)" :underline="false">团队</el-link>
        <br/>
        <el-link class="a-tag-color" @click="jump(3)" :underline="false">博客</el-link>
        <br/>
        <el-link class="a-tag-color" @click="jump(4)" :underline="false">关于</el-link>
        <br/>
      </div>
      <el-col :xs="12" :sm="12" :md="0" :lg="0" :xl="0" v-show="menuShow">
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
      <el-row class="section">
        <el-col :xs="{span: 22, push: 2}" :sm="{span: 22, push: 2}" :md="{span: 3, push: 1}" :lg="{span: 3, push: 1}"
                :xl="{span: 3, push: 2}">
          <div style="height: 96px; width: 235px; padding-top: 48px" @click="scrollAnimation()">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/entyLogo.png"></el-image>
          </div>
          <div class="headTitle1">EntySquare</div>
          <div class="headTitle2">安全、简洁、速度。</div>
          <div class="headTitle3">凭借核心技术和专业沉淀，我们高效连接全球市场， 为所有商业创造价值。</div>
          <div style="height: 96px; width: 96px; padding-top: 60px" @click="scrollAnimation()">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/downArrow.png"></el-image>
          </div>
        </el-col>
        <el-col :xs="{span: 22, push: 0}" :sm="{span: 15, push: 2}" :md="{span: 14, push: 7}" :lg="{span: 14, push: 7}"
                :xl="{span: 17, push: 5}">
          <div style="text-align: right">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/background.png" class="headBackground"></el-image>
          </div>
        </el-col>
      </el-row>
      <el-row style="padding-top: 180px; padding-bottom: 216px">
        <el-col class="hidden-sm-and-down" :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}"
                :lg="{span: 2, push: 2}"
                :xl="{span: 2, push: 1}">
          <div style="min-height: 36px;"></div>
        </el-col>
        <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 12, push: 7}" :lg="{span: 12, push: 7}"
                :xl="{span: 13, push: 5}">
          <div class="bodyTitle1">我们以革新性的去中心化产品和服务， 以及覆盖全球的触达能力<br/>不断为客户增值，实现财富增长。</div>
        </el-col>
      </el-row>
      <el-row>
        <div>
          <div class="green-background">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/background_green.png"></el-image>
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
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 6, push: 12}" :md="{span: 10, push: 12}"
                :lg="{span: 10, push: 14}"
                :xl="{span: 12, push: 11}">
          <div class="enty-background">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/background_enty.png"></el-image>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 12, push: 6}" :lg="{span: 2, push: 2}"
                :xl="{span: 12, push: 7}">
          <div class="bodyText1">EntySquare网络正在使区块链应用程序变得通用，从而提供无与伦比的用户覆盖率和使用率。EntySquare分散且可持续发展，旨在为所有商业创造价值。</div>
        </el-col>
      </el-row>
      <el-row class="section">
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                :xl="{span: 2, push: 4}">
          <div class="bodyTitle2">优势</div>
          <div class="bodyTitle3">技术和经验沉淀</div>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 6, push: 12}"
                :xl="{span: 6, push: 11}">
          <div style="text-align: left">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/advanIcon1.png" style="width: 120px; height: 120px;"></el-image>
          </div>
          <div class="advance-title">扩展性</div>
          <div class="advance-text">基于BA*-VRF共识的POS高性能公链，匿名选举、交易Proof验证压缩并支持NFT合约扩展，让去中心化应用更加顺畅</div>
        </el-col>
      </el-row>
      <el-row style="width: 115px"></el-row>
      <el-row type="flex" style="padding-top: 112px">
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 6, push: 12}"
                :xl="{span: 6, push: 11}">
          <div style="text-align: left">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/advanIcon2.png" style="width: 120px; height: 120px;"></el-image>
          </div>
          <div class="advance-title">多样性</div>
          <div class="advance-text">构建全新金融应用、存储扩展、NFT去中心化执行、数字资产及用户语言聊天等多种应用场景</div>
        </el-col>
      </el-row>
      <el-row style="width: 115px"></el-row>
      <el-row type="flex" style="padding-top: 112px; padding-bottom: 180px">
        <el-col :xs="{span: 20, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 6, push: 12}"
                :xl="{span: 6, push: 11}">
          <div style="text-align: left">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/advanIcon3.png" style="width: 120px; height: 120px;"></el-image>
          </div>
          <div class="advance-title">安全性</div>
          <div class="advance-text">基于BA*-VRF的POS共识机制，在协议层增加了安全及攻击保护</div>
        </el-col>
      </el-row>
      <!--      <div class="team-person-totalBack">-->
      <!--        <el-row class="section">-->
      <!--          <el-col :xs="{span: 20, push: 1}" :sm="{span: 2, push: 2}" :md="{span: 8, push: 2}" :lg="{span: 8, push: 2}"-->
      <!--                  :xl="{span: 6, push: 4}">-->
      <!--            <div class="body-title5">核心团队</div>-->
      <!--            <div class="team-text" style="padding-bottom: 80px">来自分布式计算、金融交易、区块链共识设计和跨链等各领域经验丰富的资深人士</div>-->
      <!--          </el-col>-->
      <!--        </el-row>-->
      <!--        <el-row>-->
      <!--          <el-col :xs="{span: 8, push: 1}" :sm="{span: 5, push: 2}" :md="{span: 5, push: 2}" :lg="{span: 5, push: 2}"-->
      <!--                  :xl="{span: 4, push: 4}">-->
      <!--            <div class="team-person-background">-->
      <!--              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/zengboyuan.png" class="team-person-image"></el-image>-->
      <!--              <div class="team-person-name">曾博远</div>-->
      <!--              <div class="team-person-position">创始人 & 首席技术官</div>-->
      <!--            </div>-->
      <!--          </el-col>-->
      <!--          <el-col :xs="{span: 8, push: 1}" :sm="{span: 5, push: 4}" :md="{span: 5, push: 4}" :lg="{span: 5, push: 4}"-->
      <!--                  :xl="{span: 4, push: 4}">-->
      <!--            <div class="team-person-background">-->
      <!--              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/luoyue.png" class="team-person-image"></el-image>-->
      <!--              <div class="team-person-name">佳宝</div>-->
      <!--              <div class="team-person-position">加密算法专家</div>-->
      <!--            </div>-->
      <!--          </el-col>-->
      <!--          <el-col :xs="{span: 8, push: 1}" :sm="{span: 5, push: 4}" :md="{span: 5, push: 4}" :lg="{span: 5, push: 4}"-->
      <!--                  :xl="{span: 4, push: 4}">-->
      <!--            <div class="team-person-background">-->
      <!--              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/luoyue.png" class="team-person-image"></el-image>-->
      <!--              <div class="team-person-name">罗越</div>-->
      <!--              <div class="team-person-position">加密算法专家</div>-->
      <!--            </div>-->
      <!--          </el-col>-->
      <!--          <el-col :xs="{span: 8, push: 1}" :sm="{span: 5, push: 6}" :md="{span: 2, push: 6}" :lg="{span: 5, push: 6}"-->
      <!--                  :xl="{span: 4, push: 4}">-->
      <!--            <div class="team-person-background">-->
      <!--              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/zhuanghanchen.png" class="team-person-image"></el-image>-->
      <!--              <div class="team-person-name">庄寒尘</div>-->
      <!--              <div class="team-person-position">Dapp专家</div>-->
      <!--            </div>-->
      <!--          </el-col>-->
      <!--          <el-col :xs="{span: 8, push: 1}" :sm="{span: 5, push: 2}" :md="{span: 5, push: 2}" :lg="{span: 5, push: 2}"-->
      <!--                  :xl="{span: 4, push: 4}">-->
      <!--            <div class="team-person-background">-->
      <!--              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/yangyuhang.png" class="team-person-image"></el-image>-->
      <!--              <div class="team-person-name">杨宇航</div>-->
      <!--              <div class="team-person-position">首席架构师</div>-->
      <!--            </div>-->
      <!--          </el-col>-->
      <!--          <el-col :xs="{span: 8, push: 1}" :sm="{span: 5, push: 4}" :md="{span: 5, push: 4}" :lg="{span: 5, push: 4}"-->
      <!--                  :xl="{span: 6, push: 4}">-->
      <!--            <div class="team-person-background">-->
      <!--              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/pengjinchang.png" class="team-person-image"></el-image>-->
      <!--              <div class="team-person-name">彭晋昌</div>-->
      <!--              <div class="team-person-position">首席产品官</div>-->
      <!--            </div>-->
      <!--          </el-col>-->
      <!--          <el-col :xs="{span: 8, push: 1}" :sm="{span: 5, push: 6}" :md="{span: 5, push: 6}" :lg="{span: 5, push: 6}"-->
      <!--                  :xl="{span: 6, push: 4}">-->
      <!--            <div class="team-person-background">-->
      <!--              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/guodayang.png" class="team-person-image"></el-image>-->
      <!--              <div class="team-person-name">郭大洋</div>-->
      <!--              <div class="team-person-position">技术顾问 / 后端架构师</div>-->
      <!--            </div>-->
      <!--          </el-col>-->
      <!--          <el-col :xs="{span: 8, push: 1}" :sm="{span: 5, push: 2}" :md="{span: 5, push: 2}" :lg="{span: 5, push: 2}"-->
      <!--                  :xl="{span: 6, push: 4}">-->
      <!--            <div class="team-person-background">-->
      <!--              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/wangxiaopeng.png" class="team-person-image"></el-image>-->
      <!--              <div class="team-person-name">汪晓鹏</div>-->
      <!--              <div class="team-person-position">金融解决方案架构师</div>-->
      <!--            </div>-->
      <!--          </el-col>-->
      <!--          <el-col :xs="{span: 8, push: 1}" :sm="{span: 5, push: 4}" :md="{span: 5, push: 4}" :lg="{span: 5, push: 4}"-->
      <!--                  :xl="{span: 6, push: 4}">-->
      <!--            <div class="team-person-background">-->
      <!--              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/yuchongliang.png" class="team-person-image"></el-image>-->
      <!--              <div class="team-person-name">余崇亮</div>-->
      <!--              <div class="team-person-position">高级合伙人</div>-->
      <!--            </div>-->
      <!--          </el-col>-->
      <!--          <el-col :xs="{span: 8, push: 1}" :sm="{span: 5, push: 6}" :md="{span: 5, push: 6}" :lg="{span: 5, push: 6}"-->
      <!--                  :xl="{span: 6, push: 4}">-->
      <!--            <div class="team-person-background">-->
      <!--              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/wangyi1.png" class="team-person-image"></el-image>-->
      <!--              <div class="team-person-name">王易</div>-->
      <!--              <div class="team-person-position">全球研究中心主任</div>-->
      <!--            </div>-->
      <!--          </el-col>-->
      <!--        </el-row>-->
      <!--      </div>-->
      <div style="background: black">
        <el-row class="section">
          <el-col :xs="{span: 20, push: 1}" :sm="{span: 2, push: 2}" :md="{span: 8, push: 2}" :lg="{span: 8, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="body-title5">核心团队</div>
            <div class="team-text" style="padding-bottom: 80px">来自分布式计算、金融交易、区块链共识设计和跨链等各领域经验丰富的资深人士</div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :xs="{span: 24, push: 1}" :sm="{span: 20, push: 2}" :md="{span: 20, push: 2}" :lg="{span: 20, push: 2}" :xl="{span: 16, push: 4}" style="margin-left: -48px;">
            <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 6,}" style="padding: 48px 0px 0px 48px">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E6%9B%BE%E5%8D%9A%E8%BF%9C.png" style="height: auto;width: 100%"></el-image>
              <div style="height: 80px;width: 100%;background: #222222;margin-top: -4px;">
                <div style="height: 13px"></div>
              <div style="color: #FFFFFF;margin-left: 7%;font-size: 16px;" align="left">Terrill Tsang</div>
              <div style="color: #FFFFFF;margin-left: 7%;margin-top: 6px;font-size: 20px;" align="left">曾博远</div>
              </div>
            </el-col>
            <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 6,}" style="padding: 48px 0px 0px 48px">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E4%BD%B3%E5%AE%9D.png" style="height: auto;width: 100%"></el-image>
              <div style="height: 80px;width: 100%;background: #222222;margin-top: -4px;">
                <div style="height: 13px"></div>
                <div style="color: #FFFFFF;margin-left: 7%;font-size: 16px;" align="left">Jiabao</div>
                <div style="color: #FFFFFF;margin-left: 7%;margin-top: 6px;font-size: 20px;" align="left">佳宝</div>
              </div>
            </el-col>
            <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 6,}" style="padding: 48px 0px 0px 48px">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E7%8E%8B%E4%BD%B3%E8%8D%A3.png" style="height: auto;width: 100%"></el-image>
              <div style="height: 80px;width: 100%;background: #222222;margin-top: -4px;">
                <div style="height: 13px"></div>
                <div style="color: #FFFFFF;margin-left: 7%;font-size: 16px;" align="left">Wang Jiarong</div>
                <div style="color: #FFFFFF;margin-left: 7%;margin-top: 6px;font-size: 20px;" align="left">王佳荣</div>
              </div>
            </el-col>
            <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 6,}" style="padding: 48px 0px 0px 48px">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E7%BD%97%E8%B6%8A.png" style="height: auto;width: 100%"></el-image>
              <div style="height: 80px;width: 100%;background: #222222;margin-top: -4px;">
                <div style="height: 13px"></div>
                <div style="color: #FFFFFF;margin-left: 7%;font-size: 16px;" align="left">Luo Yue</div>
                <div style="color: #FFFFFF;margin-left: 7%;margin-top: 6px;font-size: 20px;" align="left">罗越</div>
              </div>
            </el-col>
            <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 6,}" style="padding: 48px 0px 0px 48px">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E5%BA%84%E5%AF%92%E5%B0%98.png" style="height: auto;width: 100%"></el-image>
              <div style="height: 80px;width: 100%;background: #222222;margin-top: -4px;">
                <div style="height: 13px"></div>
                <div style="color: #FFFFFF;margin-left: 7%;font-size: 16px;" align="left">Zhuang Hanchen</div>
                <div style="color: #FFFFFF;margin-left: 7%;margin-top: 6px;font-size: 20px;" align="left">庄寒尘</div>
              </div>
            </el-col>
            <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 6,}" style="padding: 48px 0px 0px 48px">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E6%9D%A8%E5%AE%87%E8%88%AA.png" style="height: auto;width: 100%"></el-image>
              <div style="height: 80px;width: 100%;background: #222222;margin-top: -4px;">
                <div style="height: 13px"></div>
                <div style="color: #FFFFFF;margin-left: 7%;font-size: 16px;" align="left">Yuvan Yeung</div>
                <div style="color: #FFFFFF;margin-left: 7%;margin-top: 6px;font-size: 20px;" align="left">杨宇航</div>
              </div>
            </el-col>
            <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 6,}" style="padding: 48px 0px 0px 48px">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E5%BD%AD%E6%99%8B%E6%98%8C.png" style="height: auto;width: 100%"></el-image>
              <div style="height: 80px;width: 100%;background: #222222;margin-top: -4px;">
                <div style="height: 13px"></div>
                <div style="color: #FFFFFF;margin-left: 7%;font-size: 16px;" align="left">Peng Jinchang</div>
                <div style="color: #FFFFFF;margin-left: 7%;margin-top: 6px;font-size: 20px;" align="left">彭晋昌</div>
              </div>
            </el-col>
            <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 6,}" style="padding: 48px 0px 0px 48px">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E9%83%AD%E5%A4%A7%E6%B4%8B.png" style="height: auto;width: 100%"></el-image>
              <div style="height: 80px;width: 100%;background: #222222;margin-top: -4px;">
                <div style="height: 13px"></div>
                <div style="color: #FFFFFF;margin-left: 7%;font-size: 16px;" align="left">Guo Dayang</div>
                <div style="color: #FFFFFF;margin-left: 7%;margin-top: 6px;font-size: 20px;" align="left">郭大洋</div>
              </div>
            </el-col>
            <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 6,}" style="padding: 48px 0px 0px 48px">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E6%B1%AA%E6%99%93%E9%B9%8F.png" style="height: auto;width: 100%"></el-image>
              <div style="height: 80px;width: 100%;background: #222222;margin-top: -4px;">
                <div style="height: 13px"></div>
                <div style="color: #FFFFFF;margin-left: 7%;font-size: 16px;" align="left">Wang Xiaopeng</div>
                <div style="color: #FFFFFF;margin-left: 7%;margin-top: 6px;font-size: 20px;" align="left">汪晓鹏</div>
              </div>
            </el-col>
            <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 6,}" style="padding: 48px 0px 0px 48px">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E4%BD%99%E5%B4%87%E4%BA%AE.png" style="height: auto;width: 100%"></el-image>
              <div style="height: 80px;width: 100%;background: #222222;margin-top: -4px;">
                <div style="height: 13px"></div>
                <div style="color: #FFFFFF;margin-left: 7%;font-size: 16px;" align="left">Yu Chongliang</div>
                <div style="color: #FFFFFF;margin-left: 7%;margin-top: 6px;font-size: 20px;" align="left">余崇亮</div>
              </div>
            </el-col>
            <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 8}" :lg="{span: 6}" :xl="{span: 6,}" style="padding: 48px 0px 0px 48px">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E7%8E%8B%E6%98%93.png" style="height: auto;width: 100%"></el-image>
              <div style="height: 80px;width: 100%;background: #222222;margin-top: -4px;">
                <div style="height: 13px"></div>
                <div style="color: #FFFFFF;margin-left: 7%;font-size: 16px;" align="left">Wang Yi</div>
                <div style="color: #FFFFFF;margin-left: 7%;margin-top: 6px;font-size: 20px;" align="left">王易</div>
              </div>
            </el-col>
          </el-col>
        </el-row>
        <div style="height: 250px"></div>
      </div>
      <div>
        <el-row class="section">
          <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 2, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="body-title5" style="padding-top: 150px; padding-bottom: 120px; color: #000000">博客资讯</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 17, push: 7}" :md="{span: 16, push: 8}" :lg="{span: 6, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult_ar.png" class="consult-image"></el-image>
              <div class="consult-date">2022年4月02日</div>
              <div class="consult-text">Entysquare 成为全球唯一领先的Arweave算法提供商 …</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 17, push: 7}" :md="{span: 16, push: 8}" :lg="{span: 6, push: 3}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult2.png" class="consult-image"></el-image>
              <div class="consult-date">2021年5月5日</div>
              <div class="consult-text">EntySquare 创始人Terrill Tsang 担任 CSLA公链技术大使…</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 17, push: 7}" :md="{span: 16, push: 8}" :lg="{span: 6, push: 4}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult1.png" class="consult-image"></el-image>
              <div class="consult-date">2021年3月1日</div>
              <div class="consult-text">EntySquare 为韩国Investors交易所提供技术服务…</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 17, push: 7}" :md="{span: 16, push: 8}" :lg="{span: 6, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult4.png" class="consult-image"></el-image>
              <div class="consult-date">2021年4月19日</div>
              <div class="consult-text">EntySquare 团队为汉唐云提供算法技术和开发服务…</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 17, push: 7}" :md="{span: 16, push: 8}" :lg="{span: 6, push: 3}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult5.png" class="consult-image"></el-image>
              <div class="consult-date">2021年4月19日</div>
              <div class="consult-text">EntySquare 团队为E-mu.ai提供技术服务…</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
          <el-col :xs="{span: 20, push: 2}" :sm="{span: 17, push: 7}" :md="{span: 16, push: 8}" :lg="{span: 6, push: 4}"
                  :xl="{span: 6, push: 4}">
            <div class="consult-size">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult6.png" class="consult-image"></el-image>
              <div class="consult-date">2021年5月16日</div>
              <div class="consult-text">EntySquare 团队为KB Token提供技术服务…</div>
              <div class="consult-line"></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-row class="sideNaviEnd" style="padding-bottom: 120px;" type="flex" align="bottom" justify="start">
          <el-col :xs="{span: 2, push: 2}" :sm="{span: 2, push: 2}" :md="{span: 10, push: 2}" :lg="{span: 2, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="body-title5" style="color: #000000;">合作伙伴</div>
          </el-col>
          <el-col :xs="{span: 20, push: 0}" :sm="{span: 10, push: 0}" :md="{span: 10, push: 2}"
                  :lg="{span: 6, push: 14}"
                  :xl="{span: 6, push: 9}">
            <div>
              <span class="cooperation-text1">如果您有兴趣和我们合作和探讨，请与</span>
              <span class="cooperation-text2">我们联系</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="{span: 10, push: 2}" :sm="{span: 10, push: 2}" :md="{span: 5, push: 1}" :lg="{span: 5, push: 2}"
                  :xl="{span: 4, push: 4}">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/cooperation1.png" class="cooperation-icon"></el-image>
          </el-col>
          <el-col :xs="{span: 10, push: 2}" :sm="{span: 10, push: 2}" :md="{span: 5, push: 1}" :lg="{span: 5, push: 2}"
                  :xl="{span: 4, push: 4}">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/cooperation2.png" class="cooperation-icon"></el-image>
          </el-col>
          <el-col :xs="{span: 10, push: 2}" :sm="{span: 10, push: 2}" :md="{span: 5, push: 1}" :lg="{span: 5, push: 2}"
                  :xl="{span: 4, push: 4}">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/cooperation3.png" class="cooperation-icon"></el-image>
          </el-col>
          <el-col :xs="{span: 10, push: 2}" :sm="{span: 10, push: 2}" :md="{span: 5, push: 1}" :lg="{span: 5, push: 2}"
                  :xl="{span: 4, push: 4}">
            <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/cooperation4.png" class="cooperation-icon"></el-image>
          </el-col>
        </el-row>
      </div>
      <div class="home-footer-size">
        <el-row class="section">
          <el-col :xs="{span: 10, push: 2}" :sm="{span: 10, push: 2}" :md="{span: 10, push: 2}" :lg="{span: 6, push: 2}"
                  :xl="{span: 6, push: 4}">
            <div class="home-footer-title">做全球化的推动者和连接者</div>
            <div class="home-footer-subTitle">在无界的区块链世界持续精进，以前沿技术为全球客户提供价值。</div>
            <div class="home-footer-text">
              联系我们
              <el-popover
                placement="right-start"
                width="220"
                v-model="visible">
                <p>企业邮箱: terilscaub@gmail.com</p>
                <!--                <p>联系电话: 15361445990</p>-->
                <div style="text-align: right; margin: 0">
                  <el-button style="color: #94469B" size="mini" @click="visible = false">确定</el-button>
                </div>
                <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/grayArrow.png"
                          slot="reference"
                          class="home-rotter-arrow"></el-image>
              </el-popover>
            </div>
          </el-col>
          <el-col :xs="{span: 20, push: 4}" :sm="{span: 7, push: 5}" :md="{span: 7, push: 5}" :lg="{span: 6, push: 10}"
                  :xl="{span: 6, push: 8}">
            <div class="home-footer-image">
              <el-image src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/homeFooter.png"></el-image>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <el-footer style="margin: 0; padding: 0">
      <the-footer/>
    </el-footer>
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
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 10px 10px 20px" align="left">首页</el-col>
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 20px 10px 0px" align="right">+</el-col>
        </router-link>
      </el-row>
      <el-row>
        <router-link @click.native="drawer = false" to="/publicChain">
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 10px 10px 20px" align="left">公链</el-col>
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 20px 10px 0px" align="right">+</el-col>
        </router-link>
      </el-row>
      <el-row>
        <router-link @click.native="drawer = false" to="/token">
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 10px 10px 20px" align="left">代币</el-col>
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 20px 10px 0px" align="right">+</el-col>
        </router-link>
      </el-row>
      <el-row>
        <router-link @click.native="drawer = false" to="/coinMining">
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 10px 10px 20px" align="left">挖矿</el-col>
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 20px 10px 0px" align="right">+</el-col>
        </router-link>
      </el-row>
      <el-row>
        <router-link  @click.native="drawer = false"  to="/arCoin">
          <el-col :span="12" class="drawer-left-text" style=";padding: 10px 10px 10px 20px" align="left">算法</el-col>
          <el-col :span="12" class="drawer-left-text" style="padding: 10px 20px 10px 0px" align="right">+</el-col>
        </router-link>
      </el-row>
    </el-drawer>
  </el-container>
</template>

<script>
import Footer from '../layouts/Footer'

document.body.scrollTop = document.documentElement.scrollTop = 0

export default {
  name: 'Home',
  components: {
    TheFooter: Footer
  },
  data () {
    return {
      menuShow: false,
      visible: false,
      drawer: false,
      direction: 'rtl',
      visible1: false,
      sideNaviShow: false
    }
  },
  mounted () {
    window.scroll(0, 0) // 页面加载置顶

    window.addEventListener('scroll', this.scrollToTop)
    this.scrollToTop()
    this.footerJump() // 处理来自页脚的滑块定位
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    scrollAnimation: function () {
      let currentY = document.documentElement.scrollTop || document.body.scrollTop
      // scrollAnimation(currentY, window.innerHeight)
      scrollAnimationTo(currentY, screen.height, 20)
      this.menuShow = true
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      let currentY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.menuShow = currentY > 60 && screen.width >= 375
      let jump = document.getElementsByClassName('sideNaviEnd')
      let target = jump[0].offsetTop + 100
      this.sideNaviShow = currentY > 1000 && currentY < target && screen.width >= 375
    },
    handleClose (done) {
      done()
    },
    jump (index, offset = 0, splitTimes = 20) {
      let jump = document.getElementsByClassName('section')
      // 获取需要滚动的距离
      // offset 的设定针对页脚定位的情况，如果在当前页面，则传0
      let targetY = jump[index].offsetTop + offset
      let currentY = document.documentElement.scrollTop || document.body.scrollTop
      // 由于页脚定位滑动较慢，则手动传入这个参数，此参数越大，滑动得越慢
      // console.log(currentY + '=>' + targetY + ',' + splitTimes)
      scrollAnimationTo(currentY, targetY, splitTimes)
    },
    footerJump () {
      var href = window.location.href
      if (href.indexOf('?') > -1) {
        var index = href.split('?')[1].split('&')[0].split('=')[1]
        // offset设置503px （不知道为什么有这个偏移量）
        let docWidth = document.body.clientWidth.valueOf()
        // console.log(docWidth)
        if (docWidth >= 1920) {
          this.jump(index, 503, 5)
        } else {
          this.jump(index, 0, 5)
        }
      }
    }
  }
}

function scrollAnimationTo (currentY, targetY, splitTimes) {
  console.log(currentY + '=>' + targetY + ',' + splitTimes)
  // 获取当前位置方法
  // const currentY = document.documentElement.scrollTop || document.body.scrollTop
  // 计算需要移动的距离
  let needScrollTop = targetY - currentY
  let _currentY = currentY
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    var dist = 0
    if (needScrollTop < 0) {
      // ceil函数在对于大于-1小于0的数时，算出的结果0，会一直递归，需要特殊处理
      dist = -1 * Math.ceil(-1 * needScrollTop / splitTimes)
    } else {
      dist = Math.ceil(needScrollTop / splitTimes) // ceil函数在needScrollTop>-9时，算出的dist=0，所以会一直卡死在这
    }
    _currentY += dist
    window.scrollTo(0, currentY - 96)
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 1 || needScrollTop < -1) {
      scrollAnimationTo(_currentY, targetY, splitTimes)
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

/*移动端样式*/
@media screen and (max-width: 767px) {
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
    width: 319px;
    height: 56px;
    font-size: 32px;
    font-weight: 600;
    color: #000000;
    line-height: 56px;
    text-align: left;
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
    width: 100px;
    height: 80px;
    font-size: 24px;
    font-weight: 500;
    color: #A1A1A1;
    line-height: 80px;
    padding-top: 100px;
    text-align: left;
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
    width: 150px;
    font-size: 32px;
    font-weight: 500;
    color: #000000;
    line-height: 32px;
    text-align: left;
    padding-top: 32px;
  }

  .advance-text {
    height: 90px;
    width: 270px;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    line-height: 24px;
    text-align: left;
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
    height: 960px;
  }

  .team-person-background {
    width: 100px;
    height: 190px;
    background: #222222;
  }
  .team-person-image {
    width: 100px;
    height: 120px
  }

  .team-person-name {
    font-size: 12px;
    font-weight: 500;
    color: #FFFFFF;
    text-align: right;
    padding: 5px 5px 8px 0;
  }

  .team-person-position {
    font-size: 9px;
    font-weight: 500;
    color: #FFFFFF;
    text-align: right;
    padding: 0 5px 12px 0;
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

@media screen and (min-width: 768px) and (max-width: 991px) {
  .headBackground {
    height: 500px;
    width: 650px;
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
    width: 319px;
    height: 56px;
    font-size: 32px;
    font-weight: 600;
    color: #000000;
    line-height: 56px;
    text-align: left;
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
    width: 500px;
    height: 114px;
    font-size: 28px;
    font-weight: 500;
    color: #000000;
    line-height: 48px;
    text-align: left;
  }

  .bodyTitle2 {
    width: 100px;
    height: 80px;
    font-size: 24px;
    font-weight: 500;
    color: #A1A1A1;
    line-height: 80px;
    padding-top: 100px;
    text-align: left;
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
    width: 150px;
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
    width: 650px;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
    text-align: left;
  }
  .team-person-totalBack {
    background-color: black;
    width: 100%;
    height: 1260px;
  }

  .team-person-background {
    width: 200px;
    height: 280px;
    background: #222222;
  }
  .team-person-image {
    width: 200px;
    height: 230px
  }

  .team-person-name {
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    text-align: right;
    padding: 5px 10px 8px 0;
  }

  .team-person-position {
    font-size: 10px;
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
    margin: 0 20px -17px 10px
  }
  .home-footer-image {
    width: 312px;
    height: 341px;
    margin-top: 30px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .sideNavi {
    position: fixed;
    z-index: 5;
    left: 25px;
    top: 260px;
  }
  .headBackground {
    height: 500px;
    width: 650px;
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
    width: 319px;
    height: 56px;
    font-size: 32px;
    font-weight: 600;
    color: #000000;
    line-height: 56px;
    text-align: left;
  }

  .headTitle3 {
    width: 280px;
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
    width: 500px;
    height: 114px;
    font-size: 28px;
    font-weight: 500;
    color: #000000;
    line-height: 48px;
    text-align: left;
  }

  .bodyTitle2 {
    width: 100px;
    height: 80px;
    font-size: 24px;
    font-weight: 500;
    color: #A1A1A1;
    line-height: 80px;
    padding-top: 100px;
    text-align: left;
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
    width: 480px;
    height: 108px;
    font-size: 18px;
    font-weight: 500;
    color: #000000;
    line-height: 36px;
    text-align: left;
  }

  .advance-title {
    height: 32px;
    width: 150px;
    font-size: 32px;
    font-weight: 500;
    color: #000000;
    line-height: 32px;
    text-align: left;
    padding-top: 32px;
  }

  .advance-text {
    height: 90px;
    width: 320px;
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
    width: 650px;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
    text-align: left;
  }
  .team-person-totalBack {
    background-color: black;
    width: 100%;
    height: 1260px;
  }

  .team-person-background {
    width: 200px;
    height: 280px;
    background: #222222;
  }
  .team-person-image {
    width: 200px;
    height: 230px
  }

  .team-person-name {
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    text-align: right;
    padding: 5px 10px 8px 0;
  }

  .team-person-position {
    font-size: 10px;
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
    width: 246px;
    height: 146px
  }
  .home-footer-size {
    height: 493px;
    background-color: #FCFDFD;
  }

  .home-footer-title {
    width: 500px;
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
    margin: 0 20px -17px 10px
  }
  .home-footer-image {
    width: 312px;
    height: 341px;
    margin-top: 30px;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1919px) {
  .sideNavi {
    position: fixed;
    z-index: 5;
    left: 30px;
    top: 360px;
  }
  .headBackground {
    height: 600px;
    width: 751px;
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
    width: 319px;
    height: 56px;
    font-size: 32px;
    font-weight: 600;
    color: #000000;
    line-height: 56px;
    text-align: left;
  }

  .headTitle3 {
    width: 280px;
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
    width: 500px;
    height: 114px;
    font-size: 28px;
    font-weight: 500;
    color: #000000;
    line-height: 48px;
    text-align: left;
  }

  .bodyTitle2 {
    width: 100px;
    height: 80px;
    font-size: 24px;
    font-weight: 500;
    color: #A1A1A1;
    line-height: 80px;
    padding-top: 100px;
    text-align: left;
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
    width: 480px;
    height: 108px;
    font-size: 18px;
    font-weight: 500;
    color: #000000;
    line-height: 36px;
    text-align: left;
  }

  .advance-title {
    height: 32px;
    width: 150px;
    font-size: 32px;
    font-weight: 500;
    color: #000000;
    line-height: 32px;
    text-align: left;
    padding-top: 32px;
  }

  .advance-text {
    height: 90px;
    width: 320px;
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
    width: 650px;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
    text-align: left;
  }
  .team-person-totalBack {
    background-color: black;
    width: 100%;
    height: 1800px;
  }

  .team-person-background {
    width: 300px;
    height: 460px;
    background: #222222;
  }
  .team-person-image {
    width: 300px;
    height: 360px
  }

  .team-person-name {
    font-size: 24px;
    font-weight: 500;
    color: #FFFFFF;
    text-align: right;
    padding: 10px 15px 15px 0;
  }

  .team-person-position {
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    text-align: right;
    padding: 5px 15px 15px 0;
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
    width: 296px;
    height: 176px
  }
  .home-footer-size {
    height: 493px;
    background-color: #FCFDFD;
  }

  .home-footer-title {
    width: 500px;
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
    margin: 0 20px -17px 10px;
  }
  .home-footer-image {
    width: 312px;
    height: 341px;
    margin-top: 30px;
  }
}

/*适配web端*/
@media screen and (min-width: 1920px) {
  .sideNavi {
    position: fixed;
    z-index: 5;
    left: 70px;
    top: 360px;
  }
  .headBackground {
    height: auto;
    width: 1360px;
  }
  .headFont {
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
    height: 2240px;
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
    margin: -60px 0 0 80px;
  }
  .home-footer-image {
    width: 464px;
    height: 547px;
    margin-top: -157px
  }
}

.drawer-left-text {
  font-size: 24px;
  font-weight: 500;
  color: #000000;
}

.a-tag-color {
  font-size: 16px;
  font-weight: 500;
  color: #626262;
  line-height: 32px;
}

.a-tag-color:link {
  color: grey
}

.a-tag-color:hover {
  color: #94469B;
}

/* 鼠标移动到链接上 */
</style>
