
<template>
<!--  overflow-x: hidden;position:fixed;height: 100%;width: 100%; ;padding: 0;-->
  <div  style=";text-align: left;overflow-x: hidden;">
    <el-row :gutter="10">
      <el-col style="height: 800px;text-align:center;"  :style="floatingBalloonPng"  :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}" :lg="{span: '18',offset:'3'}" :xl="{span: '16',offset:'4'}">
        <div style="height: 20%"></div>
        <div style="font-size: 24px;;font-weight: 300;color: #000000;">
          敬请期待
        </div>
        <div style="height: 20px"></div>
        <div id="headFont72px" style="font-size: 72px;;font-weight: bold;color: #000000;">
          EntySquare
          <span style="white-space: nowrap">Smart Chain</span>
        </div>
        <div style="height: 20px"></div>
        <div id="headFont56px" style="font-size: 56px;;font-weight: 500;color: #94469B;line-height: 78px;background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
        <span>构建下一代</span>
        <span style="white-space: nowrap">去中心化支付网络</span>
        </div>
        <div style="height: 20px"></div>
        <div id="headFont32px" style="font-size: 32px;;font-weight: 300;color: #000000;line-height: 45px;">
          我们的全栈产品帮助企业

          <span style="white-space: nowrap">构建下一代去中心网络，</span>
          <div></div>
          使企业能够推出
          <span style="white-space: nowrap">更强大的金融基础设施。</span>
        </div>
      </el-col>
    </el-row>
    <div style="height: 100px"></div>
    <el-row :gutter="10">
      <el-col id="font_64px" :xs="{span: '22',offset:'1'}" :sm="{span: '22',push:'2'}" :md="{span: '22',push:'3'}" :lg="{span: '8',push:'3'}" :xl="{span: '5',push:'4'}" style="font-size: 64px;;font-weight: 500;color: #000000;">
        <div>轻松构建您的</div>
        <div style="height: 10px;width:100px;background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);margin-top: -17px"></div>
        <div>
          去中心化
        </div>
        <div style="height: 10px;width:200px;background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);margin-top: -17px"></div>
        <div>
          金融程序
        </div>
        <div style="height: 10px;width:150px;background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);margin-top: -17px;"></div>
        <div style="height: 120px"></div>
      </el-col>
      <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '7',push:'6'}" :xl="{span: '8',push:'7'}">
        <div style="font-size: 18px;;font-weight: 400;color: #1F1F1F;line-height: 28px;">
        EntySquare智能链基于POS共识协议打造，去中心化且高效节能，具有先进的智能合约和实现可扩展性和分布式存储，简化用户与去中心化世界之间的交互。致力于通过区块链技术造福所有金融生活。
        <div style="height: 20px"></div>
        EntySquare利用区块链解决传统金融、去中心化金融、商业和贸易领域长期存在的行业问题。我们使世界各地的开发人员、企业和人们能够构建下一代应用程序，启动现代金融基础设施，并访问去中心化网络。
      </div>
        <div style="height: 120px"></div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
    <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '22',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '8',push:'3'}" :xl="{span: '8',offset:'1'}" >
      <div style="font-size: 64px;;font-weight: 500;color: #000000;">核心功能</div>
      <div style="height: 120px"></div>
    </el-col>
    </el-row>
    <el-row>
      <el-col :xs="{span: '23',push:'1'}" :sm="{span: '20',push:'2'}" :md="{span: '19',push:'3'}" :lg="{span: '8',push:'14'}" :xl="{span: '9',push:'12'}">

        <div  style="height: 750px">
          <el-row :gutter="10">
          <el-col span="12" style=";padding: 20px">
<!--            <div style="height: 60px;width: 60px;background: #42b983"></div>-->
            <img src="@/assets/doubleSphere.png" style="height: 90px;width: auto">
            <div style="height: 20px"></div>
            <div style="font-size: 32px;;font-weight: 500;color: #000000;">
              扩展性
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px">
              匿名选举、交易Proof验证压缩并支持NFT合约扩展、存储扩展，让去中心化应用更加顺畅
            </div>
            <div style="height: 100px"></div>
          </el-col>
          <el-col span="12" style=";padding: 20px">
            <div>
              <img src="@/assets/doubleSphere.png" style="height: 90px;width: auto">
            <div style="height: 20px"></div>
            <div style="font-size: 32px;;font-weight: 500;color: #000000;">
              多样性
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px;">
              构建全新金融应用、NFT去中心化执行、数字资产及用户语言聊天等多种应用场景
            </div>
            <div style="height: 100px"></div>
            </div>
          </el-col>
          </el-row>
          <el-row >
          <el-col span="12" style=";padding: 20px">
            <div>
              <img src="@/assets/doubleSphere.png" style="height: 90px;width: auto">
            <div style="height: 20px"></div>
            <div style="font-size: 32px;;font-weight: 500;color: #000000;">
              安全性
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px;">
              基于BA*-VRF的POS共识机制，在协议层增加了安全及攻击保护
            </div>
            <div style="height: 100px"></div>
            </div>
          </el-col>
          <el-col span="12" style=";padding: 20px">
            <img src="@/assets/doubleSphere.png" style="height: 90px;width: auto">
            <div style="height: 20px"></div>
            <div style="font-size: 32px;;font-weight: 500;color: #000000;">
              互操作性
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px;">
              兼容EVM，支持多链以太坊、币安链等跨链互操作性
            </div>
            <div style="height: 100px"></div>
          </el-col>
          </el-row>
          <el-row >
          <el-col span="12" style=";padding: 20px">
            <img src="@/assets/doubleSphere.png" style="height: 90px;width: auto">
            <div style="height: 20px"></div>
            <div style="font-size: 32px;;font-weight: 500;color: #000000;">
              去中心化存储
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px;">
              为可扩展和隐私而设计的分布式数据存储解决方案
            </div>
            <div style="height: 100px"></div>
          </el-col>
          <el-col span="12" style=";padding: 20px">
            <img src="@/assets/doubleSphere.png" style="height: 90px;width: auto">
            <div style="height: 20px"></div>
            <div style="font-size: 32px;;font-weight: 500;color: #000000;">
              智能合约
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px;">
              使用linux、c#等编写智能合约
            </div>
            <div style="height: 100px"></div>
          </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <div style="height: 700px;width: 100%;" :style="purpleCurvePng">
<!--      <img src="@/assets/purpleCurve.png" style="height: 700px;width: 100%;z-index: -1;position:absolute;">-->
      <el-row :gutter="10">
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '22',push:'2'}" :md="{span: '19',push:'3'}" :lg="{span: '8',push:'3'}" :xl="{span: '8',push:'2',offset:'2'}"
                style="font-size: 60px;;font-weight: 500;color: #FFFFFF;">
          <div class="hidden-md-and-down">
            <div style="height: 80px">
            </div>
          </div>
          <div style="height: 50px"></div>
          赋能商业
          <div></div>
          生态
        </el-col>
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '22',push:'2'}" :md="{span: '19',push:'3'}" :lg="{span: '9',push:'6'}" :xl="{span: '12',push:'2'}">
          <div class="hidden-md-and-down">
            <div style="height: 50px">
            </div>
          </div>
          <div style="height: 80px"></div>
          <div style="font-size: 24px;;font-weight: 500;color: #FFFFFF;">
           <span style="color: #00EAC4;font-weight: 800"> + </span>  打造商业化智能合约
          </div>
<!--          &#8197;&#8197;&#8197;&#8197;&#8197;&#8197;-->
           <div style="color: #FFFFFF;font-size: 14px;padding-top: 15px;padding-bottom: 50px;padding-left: 24px">
             在标准、稳定、安全的环境实现商业化智能合约的编写、部署与自动执行
           </div>

          <div style="font-size: 24px;;font-weight: 500;color: #FFFFFF;">
            <span style="color: #00EAC4;font-weight: 800"> + </span>  创造可信去中心化应用
          </div>
          <div style="color: #FFFFFF;font-size: 14px;padding-top: 15px;padding-bottom: 50px;padding-left: 24px">
            按照稳定、兼容与模块化的设计原则，打造通用去中心化应用平台
          </div>

          <div style="font-size: 24px;;font-weight: 500;color: #FFFFFF;">
            <span style="color: #00EAC4;font-weight: 800"> + </span>  提供企业级区块链服务
          </div>
          <div style="color: #FFFFFF;font-size: 14px;padding-top: 15px;padding-bottom: 50px;padding-left: 24px">
            专为企业用户设计，提供企业级区块链解决方案
          </div>

        </el-col>
      </el-row>
    </div>
    <div class="hidden-md-and-down">
      <div style="height: 100px">
      </div>
    </div>
    <div style="height: 100px"></div>
    <el-row :gutter="10">
      <el-col :xs="{span: '23',push:'1'}" :sm="{span: '22',push:'2'}" :md="{span: '19',push:'3'}" :lg="{span: '6',push:'3'}" :xl="{span: '8',offset:'1'}" style="font-size: 60px;;font-weight: 500;color: #000000;">
        区块链
        <div></div>
        解决方案
      </el-col>
      <el-col :xs="{span: '22',push:'1'}" :sm="{span: '20',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '8',push:'7'}" :xl="{span: '6',push:'5'}">
        <img src="@/assets/solution.png" style="height: auto;width: 100%;float:right ">
      </el-col>
    </el-row>
    <div style="height: 126px"></div>
    <el-row :gutter="10">
      <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '7',push:'14'}" :xl="{span: '8',push:'12'}">
        <div style="font-size: 30px;;font-weight: 500;color: #000000;padding-bottom: 40px">
          资产管理
        </div>
        <div style="font-size: 17px;;font-weight: 400;color: #1F1F1F;margin-bottom: 100px">
          将传统金融、证券进行数字化并创建新的金融工具。EntySquare 可以帮助集成区块链技术，以便您可以无缝发布可定制的资产，并简化合规性、入职、生命周期管理、资产服务和分发。
        </div>
        <div style="font-size: 30px;;font-weight: 500;color: #000000;padding-bottom: 40px">
          资本市场
        </div>
        <div style="font-size: 17px;;font-weight: 400;color: #1F1F1F;margin-bottom: 100px">
          EntySquare 的区块链产品解决资本市场基础设施受到复杂规则、繁文缛节和责任的约束，以促进证券的快速发行、透明的销售和交易、无缝的数字资产管理以及即时清算和结算。
        </div>
        <div style="font-size: 30px;;font-weight: 500;color: #000000;padding-bottom: 40px">
          去中心化金融（DeFi）
        </div>
        <div style="font-size: 17px;;font-weight: 400;color: #1F1F1F;margin-bottom: 100px">
          去中心化金融 (DeFi) 释放了无数的经济机会。金融机构、加密企业、交易所和基金寻求参与并利用这种新经济体系。EntySquare 提供了多种区块链解决方案，以促进进入和参与DeFi。
        </div>
        <div style="font-size: 30px;;font-weight: 500;color: #000000;padding-bottom: 40px">
          不可替代代币 (NFT)
        </div>
        <div style="font-size: 17px;;font-weight: 400;color: #1F1F1F;margin-bottom: 100px">
          在几秒钟内铸造您自己的 NFT，费用超低。以数字方式证明所有权，并简化价值流。创造和分享艺术、收藏品和更多的好处，没有任何缺点。
        </div>
        <div style="font-size: 30px;;font-weight: 500;color: #000000;padding-bottom: 40px">
          支付和数字货币
        </div>
        <div style="font-size: 17px;;font-weight: 400;color: #1F1F1F;margin-bottom: 100px">
          银行和金融机构面临着众多挑战——从巨额的清算和结算费用、缓慢而昂贵的跨境支付，EntySquare 的数字货币解决方案可以帮助改善批发、零售、和具有新支付基础设施的跨境支付。
        </div>
      </el-col>
    </el-row>
    <div style="height: 100px"></div>
    <div style="height: 1000px;width: 100%;background: #F7F9FC">
      <el-row :gutter="10">
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '22',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '7',push:'3'}" :xl="{span: '5',push:'4'}" >
          <div class="hidden-md-and-down">
            <div style="height: 100px">
            </div>
          </div>
          <div style="height: 60px"></div>
          <div style="font-size: 56px;;font-weight: 500;color: #000000;">
            搭建全球
            <div></div>
            价值网络
          </div>
        </el-col>
        <el-col id="font_28px" :xs="{span: '22',offset:'1'}" :sm="{span: '22',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '8',push:'7'}" :xl="{span: '8',push:'7'}" style="font-size: 28px;;font-weight: 500;color: #4D4D4D;">
          <div class="hidden-md-and-down">
            <div style="height: 100px">
            </div>
          </div>
          <div style="height: 60px"></div>
            <div style="margin-bottom: 70px">
              <tr>
                <td style="color: #00EAC4;">+&ensp;&ensp;&ensp;</td>
                <td>构建、部署和管理企业区块链网络</td>
              </tr>
<!--             <div style="color: #00EAC4;">+ &ensp;</div> <div style="display:inline">构建、部署和管理企业区块链网络</div>-->
            </div>
          <div style="margin-bottom: 70px">
            <tr>
              <td style="color: #00EAC4;">+&ensp;&ensp;&ensp;</td>
              <td>创建现代金融基础设施</td>
            </tr>
          </div>
          <div style="margin-bottom: 70px">
            <tr>
              <td style="color: #00EAC4;">+&ensp;&ensp;&ensp;</td>
              <td>使用区块链应用程序</td>
            </tr>
          </div>
          <div style="margin-bottom: 70px">
            <tr>
              <td style="color: #00EAC4;">+&ensp;&ensp;&ensp;</td>
              <td>使用分布式数据存储</td>
            </tr>
          </div>
          <div style="margin-bottom: 70px">
            <tr>
              <td style="color: #00EAC4;">+&ensp;&ensp;&ensp;</td>
              <td>完备的开发工具</td>
            </tr>
          </div>
          <div style="margin-bottom: 70px">
            <tr>
              <td style="color: #00EAC4;">+&ensp;&ensp;&ensp;</td>
              <td>安全、便捷的支付体系</td>
            </tr>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style=";width: 100%;">
      <div style="height: 100px"></div>
      <div style="height: 92px" class="hidden-sm-and-down"></div>
      <el-row :gutter="10">
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '1',push:'1'}" :lg="{span: '2',push:'1'}" :xl="{span: '3',push:'2'}" style="font-size: 56px;; font-weight: 500;color: #000000;">
          生态
          <div></div>
          系统
        </el-col>
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '12',offset:'3'}" :lg="{span: '14',offset:'1'}" :xl="{span: '12',push:'0'}" >
          <img src="@/assets/byTakeTheMicrophone.png" style="height: auto;width: 100%;">
          <div style="height: 50px"></div>
          <div style="font-size: 30px;;font-weight: 400;color: #000000;">
            EntySquare + CSLA 公链
          </div>
          <div style="height: 27px">
          </div>
          <div style="font-size: 14px;font-weight: 500;color: #1F1F1F;">
            CSLA 与 EntySquare 合作创建了一个全球网络，以高效执行NFT通证化处理。CSLA 平台依靠 EntySquare 来管理区块链交易管理的复杂性。
          </div>
        </el-col>
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '3',offset:'0'}" :lg="{span: '2',offset:'0'}" :xl="{span: '2',pull:'0'}" class="hidden-sm-and-down">
          <img src="@/assets/cslaLogo.png" style="height: auto;width: 100%;">
        </el-col>
      </el-row>
    </div>
    <div style="height: 100px"></div>
  </div>
</template>

<script>
window.scroll(0, 0) // 页面加载置顶
document.body.scrollTop = document.documentElement.scrollTop = 0
window.onload = function () {
  Adaptation()
}
window.onresize = function () {
  Adaptation()
}

function Adaptation () {
  var docWidth = document.body.clientWidth.valueOf()
  console.log(docWidth)
  if (docWidth <= 423) {
    document.getElementById('font_64px').style.fontSize = '50px'
    document.getElementById('font_28px').style.fontSize = '20px'

    document.getElementById('headFont72px').style.fontSize = '50px'
    document.getElementById('headFont56px').style.fontSize = '40px'
    document.getElementById('headFont32px').style.fontSize = '20px'
  } else {
    document.getElementById('font_64px').style.fontSize = '64px'
    document.getElementById('font_28px').style.fontSize = '28px'

    document.getElementById('headFont72px').style.fontSize = '72px'
    document.getElementById('headFont56px').style.fontSize = '56px'
    document.getElementById('headFont32px').style.fontSize = '32px'
  }
}
export default {
  name: 'publicChain',
  // comments: {Metaballs},
  mounted () {
    window.scroll(0, 0) // 页面加载置顶
    document.body.scrollTop = document.documentElement.scrollTop = 0
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      floatingBalloonPng: {
        backgroundImage: 'url(' + require('@/assets/floatingBalloon.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      purpleCurvePng: {
        backgroundImage: 'url(' + require('@/assets/purpleCurve.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }
    }
  },
  components: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*.floatingBalloonPng {*/
/*  background-image: url('/src/assets/floatingBalloon.png') center center no-repeat;*/
/*}*/

/*canvas {*/
/*  vertical-align: baseline;*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  font: inherit;*/
/*  font-size: 100%;*/
/*  border: 0;*/
/*  position: relative;*/
/*  box-sizing: inherit;*/
/*  outline: 0;*/
/*  text-shadow: none;*/
/*  color: #fff;*/
/*  background: #FFFFFF;*/
/*}*/
</style>
