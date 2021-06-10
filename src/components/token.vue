
<template>
<!--  overflow-x: hidden;position:fixed;height: 100%;width: 100%; ;padding: 0; eseTokenText.png-->
  <div  style=";text-align: left;overflow-x: hidden;">
    <el-row :gutter="10">
      <el-col style="height: 800px;text-align:center;"  :style="floatingBalloonPng"  :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',offset:'3'}" :lg="{span: '18',offset:'3'}" :xl="{span: '16',offset:'4'}">
        <div style="height: 20%"></div>
        <div style="font-size: 24px;;font-weight: 300;color: #000000;">
          敬请期待
        </div>
        <img src="@/assets/eseTokenText.png" style="height: auto;width: 60%;max-width: 1000px;min-width: 305px">
        <div style="height: 20px"></div>
        <div style="height: 20px"></div>
        <div id="headFont48px" style="font-size: 48px;;font-weight: 300;color: #000000;line-height: 78px;">
        <div>购买算力凭证以</div>
        <div>赚取挖矿收益和代币奖励</div>
        </div>
      </el-col>
    </el-row>
    <div style="height: 100px"></div>
    <el-row :gutter="10">
      <el-col id="font_64px" :xs="{span: '22',offset:'1'}" :sm="{span: '22',push:'2'}" :md="{span: '22',push:'3'}" :lg="{span: '9',push:'3'}" :xl="{span: '6',push:'4'}" style="font-size: 48px;;font-weight: 500;color: #000000;">
        <div>
          旨在创建一种
        </div>
        <div style="height: 10px;width:100px;background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);margin-top: -17px"></div>
        <div>
          安全、便捷、可靠、
        </div>
        <div style="height: 10px;width:200px;background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);margin-top: -17px;"></div>
        <div>
          通用且具有流动性
        </div>
        <div style="height: 10px;width:150px;background: linear-gradient(90deg, #00EAC4 0%, #23BFCA 52%, #94469B 100%);margin-top: -17px;"></div>
        <div>
          的代币
        </div>
        <div style="height: 120px"></div>
      </el-col>
      <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '7',push:'5'}" :xl="{span: '8',push:'6'}">
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
      <div style="font-size: 64px;;font-weight: 500;color: #000000;">
        ESE代币
        <div></div>
        权益
      </div>
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
              算力通证
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px">
              锚定矿机标准算力通证
            </div>
            <div style="height: 100px"></div>
          </el-col>
          <el-col span="12" style=";padding: 20px">
            <div>
              <img src="@/assets/doubleSphere.png" style="height: 90px;width: auto">
            <div style="height: 20px"></div>
            <div style="font-size: 32px;;font-weight: 500;color: #000000;">
              放样
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px;">
              要成为Entysquare权益证明网络中的验证者，候选人需要锁定（权益）代币，网络根据分配给他们的抵押代币的数量来选择验证器。
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
              权益奖励
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px;">
              每年将有3亿ESE用于保护网络利益相关者
            </div>
            <div style="height: 100px"></div>
            </div>
          </el-col>
          <el-col span="12" style=";padding: 20px">
            <img src="@/assets/doubleSphere.png" style="height: 90px;width: auto">
            <div style="height: 20px"></div>
            <div style="font-size: 32px;;font-weight: 500;color: #000000;">
              治理
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px;">
              代币持有者可以参与社区治理,ESE使持有人能够控制自己的财务未来，推动Entysquare做出决策：从新产品到资产再平衡，战略和整合。
            </div>
            <div style="height: 100px"></div>
          </el-col>
          </el-row>
          <el-row >
          <el-col span="12" style=";padding: 20px">
            <img src="@/assets/doubleSphere.png" style="height: 90px;width: auto">
            <div style="height: 20px"></div>
            <div style="font-size: 32px;;font-weight: 500;color: #000000;">
              操作
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px;">
              代币持有者可以参与社区治理
            </div>
            <div style="height: 100px"></div>
          </el-col>
          <el-col span="12" style=";padding: 20px">
            <img src="@/assets/doubleSphere.png" style="height: 90px;width: auto">
            <div style="height: 20px"></div>
            <div style="font-size: 32px;;font-weight: 500;color: #000000;">
              链上治理
            </div>
            <div style="font-size: 18px;;font-weight: 500;color: #1E1E1E;padding-top: 15px;">
              代币持有者能够对Entysquare网络上的协议升级和参数更改进行投票。
            </div>
            <div style="height: 100px"></div>
          </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <div style=";width: 100%;background: black;">
<!--      <img src="@/assets/purpleCurve.png" style="height: 700px;width: 100%;z-index: -1;position:absolute;"> proportionalSphere.png-->
      <div style="height: 100px"></div>
      <el-row :gutter="10">
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '8',push:'3'}" :xl="{span: '8',push:'2',offset:'2'}" style="">
          <div style="font-size: 64px;font-weight: 500;color: #FFFFFF;">
            启动DeFi经济的代币
          </div>
          <div style="height: 100px"></div>
        </el-col>
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '8',push:'5'}" :xl="{span: '7',push:'1',offset:'2'}">
          <div style="font-size: 20px;font-weight: 300;color: #FFFFFF;">
            <div class="hidden-md-and-down">
            <div style="height: 150px"></div>
            </div>
            推出ESE以确保主网充分分散，在以太坊和 Entysquare之间建立有效的桥梁，并整合 关键基础架构
          </div>
          <div style="height: 100px"></div>
        </el-col>
      </el-row>
<!--      <div style="height: 100px"></div>-->
      <el-row :gutter="10">
        <el-col :xs="{span: '3' ,push :'1'}" :sm="{span: '3',push:'2'}" :md="{span: '3',push:'3'}" :lg="{span: '3',push:'3'}" :xl="{span: '2',push:'4'}" style="text-align: right">
          <div id="m1_64px" style="font-size: 64px;font-weight: bold;color: #FFFFFF;">
            20%
          </div>
          <div id="m1_32px" style="font-size: 32px;font-weight: 500;color: #E6E6E6;white-space: nowrap">
            生态和团队
          </div>
          <div style="height: 200px"></div>
<!--          <div class="hidden-sm-and-down">-->
<!--            <div style="height: 100px">-->
<!--            </div>-->
<!--          </div>-->
          <div id="m2_64px" style="font-size: 64px;font-weight: bold;color: #FFFFFF;">
            60%
          </div>
          <div id="m2_32px" style="font-size: 32px;font-weight: 500;color: #E6E6E6;white-space: nowrap">
            市场流通
          </div>
        </el-col>
        <el-col :xs="{span: '12',push :'3'}" :sm="{span: '9',push:'4'}" :md="{span: '10',push:'4'}" :lg="{span: '10',push:'4'}" :xl="{span: '8',push:'6'}" style="text-align:center;">
    <div style="height: 50px">
    </div>
    <img id="proportionalSpherePng" src="@/assets/proportionalSphere.png" style="height: auto;width: 100%;max-width: 500px;min-width: 200px">
          <div style="height: 100px"></div>
        </el-col>
        <el-col :xs="{span: '3',push :'3'}" :sm="{span: '3',push:'5'}" :md="{span: '3',push:'5'}" :lg="{span: '3',push:'5'}" :xl="{span: '2',push:'8'}" style="text-align: left">
          <div id="m3_64px" style="font-size: 64px;font-weight: bold;color: #FFFFFF;">
            20%
          </div>
          <div id="m3_32px" style="font-size: 32px;font-weight: 500;color: #E6E6E6;white-space: nowrap">
            生态和团队
          </div>
          <div style="height: 200px"></div>
<!--          <div class="hidden-sm-and-down">-->
<!--            <div style="height: 100px">-->
<!--            </div>-->
<!--          </div>-->
          <div id="m4_64px" style="font-size: 64px;font-weight: bold;color: #FFFFFF;">
            60%
          </div>
          <div id="m4_32px" style="font-size: 32px;font-weight: 500;color: #E6E6E6;white-space: nowrap">
            市场流通
          </div>
        </el-col>
      </el-row>
    </div>

    <div style="height: 1000px;width: 100%;background: #F7F9FC">
      <el-row :gutter="10">
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '22',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '7',push:'3'}" :xl="{span: '5',push:'4'}" >
          <div class="hidden-md-and-down">
            <div style="height: 100px">
            </div>
          </div>
          <div style="height: 60px"></div>
          <div style="font-size: 56px;;font-weight: 500;color: #000000;">
            常见
            <div></div>
            问题
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
                <td>ESE Token可以做什么？</td>
              </tr>
<!--             <div style="color: #00EAC4;">+ &ensp;</div> <div style="display:inline">构建、部署和管理企业区块链网络</div>-->
            </div>
          <div style="margin-bottom: 70px">
            <tr>
              <td style="color: #00EAC4;">+&ensp;&ensp;&ensp;</td>
              <td>ESE Token如何筹集资金？</td>
            </tr>
          </div>
          <div style="margin-bottom: 70px">
            <tr>
              <td style="color: #00EAC4;">+&ensp;&ensp;&ensp;</td>
              <td>在哪里可买到ESE Token？</td>
            </tr>
          </div>
          <div style="margin-bottom: 70px">
            <tr>
              <td style="color: #00EAC4;">+&ensp;&ensp;&ensp;</td>
              <td>ESE Token持有人权利?</td>
            </tr>
          </div>
          <div style="margin-bottom: 70px">
            <tr>
              <td style="color: #00EAC4;">+&ensp;&ensp;&ensp;</td>
              <td>ESE Token与BTC的区别？</td>
            </tr>
          </div>
          <div style="margin-bottom: 70px">
            <tr>
              <td style="color: #00EAC4;">+&ensp;&ensp;&ensp;</td>
              <td>如何获取ESE Token？</td>
            </tr>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="width: 100%;">
      <el-row>
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '20',offset:'2'}" :md="{span: '18',push:'1'}" :lg="{span: '18',push:'1'}" :xl="{span: '16',push:'2'}">
          <div style="height: 100px"></div>
          <div style="font-size: 64px;font-weight: 500;color: #000000;">合作伙伴</div>
          <div style="height: 100px"></div>
          <el-row style="">
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 20px">
              <img src="@/assets/cooperation1.png" style="height: auto;width: 100%">
            </el-col>
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 20px">
              <img src="@/assets/cooperation2.png" style="height: auto;width: 100%">
            </el-col>
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 20px">
              <img src="@/assets/cooperation3.png" style="height: auto;width: 100%">
            </el-col>
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" style="padding: 20px">
              <img src="@/assets/cooperation4.png" style="height: auto;width: 100%">
            </el-col>
          </el-row>
        </el-col>
        <div style="height: 90px"></div>
      </el-row>
<!--        <el-col :xs="{span: '9',offset:'4'}" :sm="{span: '8',offset:'4'}" :md="{span: '7',push:'3'}"  :xl="{span: '3',push:'0'}" style="height: 50px;background: #D32254"></el-col>-->
    </div>

    <div style="height: 150px"></div>

    <div style=";width: 100%;">
      <el-row :gutter="10">
        <el-col :xs="{span: '22',offset:'1'}" :sm="{span: '22',push:'2'}" :md="{span: '18',push:'3'}" :lg="{span: '7',push:'3'}" :xl="{span: '5',push:'4'}" >
          <div class="hidden-md-and-down">
            <div style="height: 100px">
            </div>
          </div>
          <div style="height: 60px"></div>
          <div style="font-size: 56px;;font-weight: 500;color: #000000;">
            线路图
          </div>
          <div style="height: 50px"></div>
          <div style="font-size: 18px;">
            了解项目的创建和
            <div></div>
            将来规划
          </div>
        </el-col>
        <el-col  :xs="{span: '22',offset:'6'}" :sm="{span: '22',push:'5'}" :md="{span: '18',push:'6'}" :lg="{span: '10',push:'5'}" :xl="{span: '9',push:'7'}" style="font-size: 28px;;font-weight: 500;color: #4D4D4D;">
          <div class="hidden-md-and-down">
            <div style="height: 290px">
            </div>
          </div>
          <div style="font-size: 18px;font-weight: 500;color: #808080;">从这里开始</div>
          <div style="height: 30px"></div>
          <!-- 一整段 -->
          <div style="width: 4px;height: 132px;background: #F1F1F1;"></div><!-- 下划线 -->
          <div style="font-size: 50px;margin: 1px 0px 1px -8px;">°</div>
          <div id="text_2020" style="font-size: 40px;font-weight: 500;color: #000000;margin: -71px 0px 0px -115px">2020</div>
          <div style="font-size: 40px;font-weight: 500;color: #F1F1F1;margin: -61px 0px 0px 15px">- - - -</div>
          <div style="margin: -41px 0px 0px 106px">
          <div style="height: 32px;background: #000000;border-radius: 16px;width: 158px;color: #FFFFFF;font-size: 23px;font-weight: 500;text-align:center;">
            Q1～Q2
          </div >
            <div style="height: 10px"></div>
            <div id="up_1">
              <div style="width: 158px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;margin-right: 10px;margin-bottom: 10px">
                项目启动，组建团队
              </div>
              <div style="width: 144px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;">
                概念核心协议原型
              </div>
            </div>
            </div>
          <!-- /一整段 -->

          <!-- 一整段 -->
          <div style="width: 4px;height: 132px;background: #F1F1F1;"></div><!-- 下划线 -->
          <div style="font-size: 50px;margin: 1px 0px 1px -8px;">°</div>
          <div style="font-size: 40px;font-weight: 500;color: #000000;margin: -71px 0px 0px -115px">&ensp;</div>
          <div style="font-size: 40px;font-weight: 500;color: #F1F1F1;margin: -61px 0px 0px 15px">- - - -</div>
          <div style="margin: -41px 0px 0px 106px">
            <div style="height: 32px;background: #000000;border-radius: 16px;width: 158px;color: #FFFFFF;font-size: 23px;font-weight: 500;text-align:center;">
              Q3
            </div>
            <div style="height: 10px"></div>
            <div id="up_2">
              <div style="width: 130px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;margin-right: 10px;margin-bottom: 10px;margin-bottom: 10px">
                设计架构和共识
              </div>
              <div  style="width: 176px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;">
                发布Entysquare线路图
              </div>
            </div>
          </div>
          <!-- /一整段 -->

          <!-- 一整段 -->
          <div style="width: 4px;height: 132px;background: #F1F1F1;"></div><!-- 下划线 -->
          <div style="font-size: 50px;margin: 1px 0px 1px -8px;">°</div>
          <div style="font-size: 40px;font-weight: 500;color: #000000;margin: -71px 0px 0px -115px">&ensp;</div>
          <div style="font-size: 40px;font-weight: 500;color: #F1F1F1;margin: -61px 0px 0px 15px">- - - -</div>
          <div style="margin: -41px 0px 0px 106px">
            <div style="height: 32px;background: #000000;border-radius: 16px;width: 158px;color: #FFFFFF;font-size: 23px;font-weight: 500;text-align:center;">
              Q4
            </div>
            <div style="height: 10px"></div>
            <div id="up_3">
              <div style="width: 144px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;margin-right: 10px;margin-bottom: 10px">
                发布代币经济系统
              </div>
              <div  style="width: 130px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;">
                获得天使轮投资
              </div>
            </div>
          </div>
          <!-- /一整段 -->

          <!-- 一整段 -->
          <div style="width: 4px;height: 132px;background: #F1F1F1;"></div><!-- 下划线 -->
          <div style="font-size: 50px;margin: 1px 0px 1px -8px;">°</div>
          <div id="text_2021" style="font-size: 40px;font-weight: 500;color: #000000;margin: -71px 0px 0px -115px">2021</div>
          <div style="font-size: 40px;font-weight: 500;color: #F1F1F1;margin: -61px 0px 0px 15px">- - - -</div>
          <div style="margin: -41px 0px 0px 106px">
            <div style="height: 32px;background: #000000;border-radius: 16px;width: 158px;color: #FFFFFF;font-size: 23px;font-weight: 500;text-align:center;">
              Q1～Q2
            </div>
            <div style="height: 10px"></div>
            <div id="up_4">
              <div style="width: 144px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;margin-right: 10px;margin-bottom: 10px">
                智能合约安全审核
              </div>
              <div  style="width: 116px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;">
                发布内部测试
              </div>
            </div>
          </div>
          <!-- /一整段 -->

          <!-- 一整段 -->
          <div style="width: 4px;height: 132px;background: #F1F1F1;"></div><!-- 下划线 -->
          <div style="font-size: 50px;margin: 1px 0px 1px -8px;">°</div>
          <div style="font-size: 40px;font-weight: 500;color: #000000;margin: -71px 0px 0px -115px">&ensp;</div>
          <div style="font-size: 40px;font-weight: 500;color: #F1F1F1;margin: -61px 0px 0px 15px">- - - -</div>
          <div style="margin: -41px 0px 0px 106px">
            <div style="height: 32px;background: #000000;border-radius: 16px;width: 158px;color: #FFFFFF;font-size: 23px;font-weight: 500;text-align:center;">
              Q3
            </div>
            <div style="height: 10px"></div>
            <div id="up_5">
              <div style="width: 88px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;margin-right: 10px;margin-bottom: 10px">
                发布代币
              </div>
              <div  style="width: 116px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;margin-right: 10px;margin-bottom: 10px">
                发布社区治理
              </div>
              <div style="width: 88px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;">
                上线挖矿
              </div>
            </div>
          </div>
          <!-- /一整段 -->
          <!-- 一整段 -->
          <div style="width: 4px;height: 132px;background: #F1F1F1;"></div><!-- 下划线 -->
          <div style="font-size: 50px;margin: 1px 0px 1px -8px;">°</div>
          <div style="font-size: 40px;font-weight: 500;color: #000000;margin: -71px 0px 0px -115px">&ensp;</div>
          <div style="font-size: 40px;font-weight: 500;color: #F1F1F1;margin: -61px 0px 0px 15px">- - - -</div>
          <div style="margin: -41px 0px 0px 106px">
            <div style="height: 32px;background: #000000;border-radius: 16px;width: 158px;color: #FFFFFF;font-size: 23px;font-weight: 500;text-align:center;">
              Q4
            </div>
            <div style="height: 10px"></div>
            <div id="up_6">
              <div style="width: 116px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;margin-right: 10px;margin-bottom: 10px">
                代币上线交易
              </div>
              <div  style="width: 87px;height: 32px;background: #FAFAFA;border-radius: 16px;font-weight: 500;font-size: 14px;color: #000000;text-align:center;line-height: 35px;float: left;">
                发布NFT
              </div>
            </div>
          </div>
          <!-- /一整段 -->
          <div style="width: 4px;height: 132px;background: linear-gradient(156deg, #F1F1F1 0%, rgba(241, 241, 241, 0) 100%);"></div>
        </el-col>
      </el-row>
      <div style="height: 200px"></div>
    </div>

  </div>
</template>

<script>
window.onload = function () {
  Adaptation()
}
window.onresize = function () {
  Adaptation()
}

function Adaptation () {
  var docWidth = document.body.clientWidth.valueOf()
  console.log(docWidth)
  if (docWidth <= 561) {
    document.getElementById('up_1').style.width = '1px'
    document.getElementById('up_2').style.width = '1px'
    document.getElementById('up_3').style.width = '1px'
    document.getElementById('up_4').style.width = '1px'
    document.getElementById('up_5').style.width = '1px'
    document.getElementById('up_6').style.width = '1px'
    // -115px
    document.getElementById('text_2020').style.fontSize = '30px'
    document.getElementById('text_2021').style.fontSize = '30px'
    document.getElementById('text_2020').style.padding = '5px 0px 7px 38px'
    document.getElementById('text_2021').style.padding = '5px 0px 7px 38px'
  } else {
    document.getElementById('up_1').style.width = '100%'
    document.getElementById('up_2').style.width = '100%'
    document.getElementById('up_3').style.width = '100%'
    document.getElementById('up_4').style.width = '100%'
    document.getElementById('up_5').style.width = '100%'
    document.getElementById('up_6').style.width = '100%'

    document.getElementById('text_2020').style.padding = '0px'
    document.getElementById('text_2021').style.padding = '0px'
    document.getElementById('text_2020').style.fontSize = '40px'
    document.getElementById('text_2021').style.fontSize = '40px'
    // -71px 0px 0px -115px
  }

  if (docWidth <= 767) {
    document.getElementById('m1_64px').style.fontSize = '34px'
    document.getElementById('m1_32px').style.fontSize = '22px'
    document.getElementById('m2_64px').style.fontSize = '34px'
    document.getElementById('m2_32px').style.fontSize = '22px'
    document.getElementById('m3_64px').style.fontSize = '34px'
    document.getElementById('m3_32px').style.fontSize = '22px'
    document.getElementById('m4_64px').style.fontSize = '34px'
    document.getElementById('m4_32px').style.fontSize = '22px'
  } else {
    document.getElementById('m1_64px').style.fontSize = '64px'
    document.getElementById('m1_32px').style.fontSize = '32px'
    document.getElementById('m2_64px').style.fontSize = '64px'
    document.getElementById('m2_32px').style.fontSize = '32px'
    document.getElementById('m3_64px').style.fontSize = '64px'
    document.getElementById('m3_32px').style.fontSize = '32px'
    document.getElementById('m4_64px').style.fontSize = '64px'
    document.getElementById('m4_32px').style.fontSize = '32px'
  }
  if (docWidth <= 377) {
    document.getElementById('m1_64px').style.fontSize = '24px'
    document.getElementById('m1_32px').style.fontSize = '12px'

    document.getElementById('m2_64px').style.fontSize = '24px'
    document.getElementById('m2_32px').style.fontSize = '12px'

    document.getElementById('m3_64px').style.fontSize = '24px'
    document.getElementById('m3_32px').style.fontSize = '12px'

    document.getElementById('m4_64px').style.fontSize = '24px'
    document.getElementById('m4_32px').style.fontSize = '12px'
  }
}
export default {
  name: 'publicChain',
  // comments: {Metaballs},
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
