webpackJsonp([5],{wUZA:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("3loQ");document.body.scrollTop=document.documentElement.scrollTop=0;var n={name:"Home",components:{TheFooter:a.a},data:function(){return{menuShow:!1,visible:!1,drawer:!1,direction:"rtl",visible1:!1,sideNaviShow:!1}},mounted:function(){window.scroll(0,0),window.addEventListener("scroll",this.scrollToTop),this.scrollToTop(),this.footerJump()},destroyed:function(){window.removeEventListener("scroll",this.scrollToTop)},methods:{scrollAnimation:function(){i(document.documentElement.scrollTop||document.body.scrollTop,screen.height,20),this.menuShow=!0},scrollToTop:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.menuShow=t>60&&screen.width>=375;var s=document.getElementsByClassName("sideNaviEnd")[0].offsetTop+100;this.sideNaviShow=t>1e3&&t<s&&screen.width>=375},handleClose:function(t){t()},jump:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,a=document.getElementsByClassName("section"),n=a[t].offsetTop+s;i(document.documentElement.scrollTop||document.body.scrollTop,n,e)},footerJump:function(){var t=window.location.href;if(t.indexOf("?")>-1){var s=t.split("?")[1].split("&")[0].split("=")[1];document.body.clientWidth.valueOf()>=1920?this.jump(s,503,5):this.jump(s,0,5)}}}};function i(t,s,e){console.log(t+"=>"+s+","+e);var a=s-t,n=t;setTimeout(function(){var l=0;l=a<0?-1*Math.ceil(-1*a/e):Math.ceil(a/e),n+=l,window.scrollTo(0,t-96),a>1||a<-1?i(n,s,e):window.scrollTo(0,s-96)},1)}var l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("el-container",{attrs:{direction:"vertical"}},[e("el-main",{staticStyle:{margin:"0",padding:"0","overflow-x":"hidden"}},[e("div",{staticStyle:{width:"100%","background-color":"#FFFFFF",position:"fixed","z-index":"99"}},[e("el-row",{directives:[{name:"show",rawName:"v-show",value:t.menuShow,expression:"menuShow"}],staticClass:"hidden-sm-and-down",staticStyle:{height:"96px"},attrs:{type:"flex",align:"middle"}},[e("el-col",{attrs:{xs:{span:2,push:2},sm:{span:2,push:2},md:{span:2,push:2},lg:{span:2,push:2},xl:{span:2,push:1}}},[e("router-link",{attrs:{to:"/"}},[e("el-image",{staticStyle:{height:"48px",width:"235px"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/entyLogo.png"}})],1)],1),t._v(" "),e("el-col",{staticClass:"is-justify-center",attrs:{span:8,push:6}},[e("div",[e("el-row",{attrs:{gutter:38,type:"flex"}},[e("el-col",[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"headFont"},[t._v("首页")])])],1),t._v(" "),e("el-col",[e("router-link",{attrs:{to:"/publicChain"}},[e("div",{staticClass:"headFont"},[t._v("公链")])])],1),t._v(" "),e("el-col",[e("router-link",{attrs:{to:"/token"}},[e("div",{staticClass:"headFont"},[t._v("代币")])])],1),t._v(" "),e("el-col",[e("router-link",{attrs:{to:"/coinMining"}},[e("div",{staticClass:"headFont"},[t._v("挖矿")])])],1),t._v(" "),e("el-col",[e("router-link",{attrs:{to:"/arCoin"}},[e("div",{staticClass:"headFont"},[t._v("Arweave算法提供商")])])],1)],1)],1)]),t._v(" "),e("el-col",{attrs:{xs:{span:2,push:2},sm:{span:2,push:2},md:{span:3,push:7},lg:{span:3,push:7},xl:{span:3,push:8}}},[e("div",{staticStyle:{"font-size":"16px","font-weight":"500",color:"#00EAC4",display:"inline","margin-bottom":"30px"}},[t._v("\n              联系我们\n            ")])]),t._v(" "),e("el-col",{staticClass:"is-justify-center",attrs:{span:3,push:6}},[e("el-popover",{attrs:{placement:"bottom-end",width:"220"},model:{value:t.visible1,callback:function(s){t.visible1=s},expression:"visible1"}},[e("p",[t._v("企业邮箱: terilscaub@gmail.com")]),t._v(" "),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{staticStyle:{color:"#94469B"},attrs:{size:"mini"},on:{click:function(s){t.visible1=!1}}},[t._v("确定")])],1),t._v(" "),e("el-image",{staticStyle:{height:"60px",width:"60px","margin-top":"3px"},attrs:{slot:"reference",src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/rightArrow.png"},slot:"reference"})],1)],1)],1)],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.sideNaviShow,expression:"sideNaviShow"}],staticClass:"sideNavi hidden-sm-and-down"},[e("el-link",{staticClass:"a-tag-color",attrs:{underline:!1},on:{click:function(s){return t.jump(0)}}},[t._v("首页")]),t._v(" "),e("br"),t._v(" "),e("el-link",{staticClass:"a-tag-color",attrs:{underline:!1},on:{click:function(s){return t.jump(1)}}},[t._v("技术")]),t._v(" "),e("br"),t._v(" "),e("el-link",{staticClass:"a-tag-color",attrs:{underline:!1},on:{click:function(s){return t.jump(2)}}},[t._v("团队")]),t._v(" "),e("br"),t._v(" "),e("el-link",{staticClass:"a-tag-color",attrs:{underline:!1},on:{click:function(s){return t.jump(3)}}},[t._v("博客")]),t._v(" "),e("br"),t._v(" "),e("el-link",{staticClass:"a-tag-color",attrs:{underline:!1},on:{click:function(s){return t.jump(4)}}},[t._v("关于")]),t._v(" "),e("br")],1),t._v(" "),e("el-col",{directives:[{name:"show",rawName:"v-show",value:t.menuShow,expression:"menuShow"}],attrs:{xs:12,sm:12,md:0,lg:0,xl:0}},[e("div",{staticStyle:{height:"66px",width:"100%",background:"#FFFFFF",position:"fixed","z-index":"99"}},[e("router-link",{staticStyle:{float:"left"},attrs:{to:"/"}},[e("el-image",{staticStyle:{height:"auto",width:"150px","margin-top":"17px","margin-left":"20px"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/entyLogo.png"}})],1),t._v(" "),e("el-button",{staticStyle:{height:"100%",width:"80px",float:"right","font-size":"45px",color:"black",background:"transparent",outline:"none",border:"none"},attrs:{type:"primary"},on:{click:function(s){t.drawer=!0}}},[t._v("\n            =\n          ")])],1)]),t._v(" "),e("el-row",{staticClass:"section"},[e("el-col",{attrs:{xs:{span:22,push:2},sm:{span:22,push:2},md:{span:3,push:1},lg:{span:3,push:1},xl:{span:3,push:2}}},[e("div",{staticStyle:{height:"96px",width:"235px","padding-top":"48px"},on:{click:function(s){return t.scrollAnimation()}}},[e("el-image",{attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/entyLogo.png"}})],1),t._v(" "),e("div",{staticClass:"headTitle1"},[t._v("EntySquare")]),t._v(" "),e("div",{staticClass:"headTitle2"},[t._v("安全、简洁、速度。")]),t._v(" "),e("div",{staticClass:"headTitle3"},[t._v("凭借核心技术和专业沉淀，我们高效连接全球市场， 为所有商业创造价值。")]),t._v(" "),e("div",{staticStyle:{height:"96px",width:"96px","padding-top":"60px"},on:{click:function(s){return t.scrollAnimation()}}},[e("el-image",{attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/downArrow.png"}})],1)]),t._v(" "),e("el-col",{attrs:{xs:{span:22,push:0},sm:{span:15,push:2},md:{span:14,push:7},lg:{span:14,push:7},xl:{span:17,push:5}}},[e("div",{staticStyle:{"text-align":"right"}},[e("el-image",{staticClass:"headBackground",attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/background.png"}})],1)])],1),t._v(" "),e("el-row",{staticStyle:{"padding-top":"180px","padding-bottom":"216px"}},[e("el-col",{staticClass:"hidden-sm-and-down",attrs:{xs:{span:2,push:2},sm:{span:2,push:2},md:{span:2,push:2},lg:{span:2,push:2},xl:{span:2,push:1}}},[e("div",{staticStyle:{"min-height":"36px"}})]),t._v(" "),e("el-col",{attrs:{xs:{span:2,push:2},sm:{span:2,push:2},md:{span:12,push:7},lg:{span:12,push:7},xl:{span:13,push:5}}},[e("div",{staticClass:"bodyTitle1"},[t._v("我们以革新性的去中心化产品和服务， 以及覆盖全球的触达能力"),e("br"),t._v("不断为客户增值，实现财富增长。")])])],1),t._v(" "),e("el-row",[e("div",[e("div",{staticClass:"green-background"},[e("el-image",{attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/background_green.png"}})],1),t._v(" "),e("el-col",{attrs:{xs:{span:2,push:2},sm:{span:2,push:2},md:{span:2,push:2},lg:{span:2,push:2},xl:{span:2,push:4}}},[e("div",{staticClass:"bodyTitle2"},[t._v("服务")]),t._v(" "),e("router-link",{attrs:{to:"/arCoin"}},[e("div",{staticClass:"bodyTitle3"},[t._v("我们所做的")]),t._v(" "),e("div",{staticClass:"bodyTitle4"},[t._v("全球领先的"),e("br"),t._v("Arweave算法")])])],1)],1)]),t._v(" "),e("el-row",[e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:6,push:12},md:{span:10,push:12},lg:{span:10,push:14},xl:{span:12,push:11}}},[e("div",{staticClass:"enty-background"},[e("el-image",{attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/background_enty.png"}})],1)])],1),t._v(" "),e("el-row",[e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:2,push:2},md:{span:12,push:6},lg:{span:2,push:2},xl:{span:12,push:7}}},[e("div",{staticClass:"bodyText1"},[t._v("我们使Arweave 挖矿变得容易 EntySquare 正在为 Arweave 提供快速的算法支持")])])],1),t._v(" "),e("el-row",{staticClass:"section"},[e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:2,push:2},md:{span:2,push:2},lg:{span:2,push:2},xl:{span:2,push:4}}},[e("div",{staticClass:"bodyTitle2"},[t._v("优势")]),t._v(" "),e("div",{staticClass:"bodyTitle3"},[t._v("技术和经验沉淀")])])],1),t._v(" "),e("el-row",{attrs:{type:"flex"}},[e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:2,push:2},md:{span:2,push:2},lg:{span:6,push:12},xl:{span:6,push:11}}},[e("div",{staticStyle:{"text-align":"left"}},[e("el-image",{staticStyle:{width:"120px",height:"120px"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/advanIcon1.png"}})],1),t._v(" "),e("div",{staticClass:"advance-title"},[t._v("扩展性")]),t._v(" "),e("div",{staticClass:"advance-text"},[t._v("基于BA*-VRF共识的POS高性能公链，匿名选举、交易Proof验证压缩并支持NFT合约扩展，让去中心化应用更加顺畅")])])],1),t._v(" "),e("el-row",{staticStyle:{width:"115px"}}),t._v(" "),e("el-row",{staticStyle:{"padding-top":"112px"},attrs:{type:"flex"}},[e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:2,push:2},md:{span:2,push:2},lg:{span:6,push:12},xl:{span:6,push:11}}},[e("div",{staticStyle:{"text-align":"left"}},[e("el-image",{staticStyle:{width:"120px",height:"120px"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/advanIcon2.png"}})],1),t._v(" "),e("div",{staticClass:"advance-title"},[t._v("多样性")]),t._v(" "),e("div",{staticClass:"advance-text"},[t._v("构建全新金融应用、存储扩展、NFT去中心化执行、数字资产及用户语言聊天等多种应用场景")])])],1),t._v(" "),e("el-row",{staticStyle:{width:"115px"}}),t._v(" "),e("el-row",{staticStyle:{"padding-top":"112px","padding-bottom":"180px"},attrs:{type:"flex"}},[e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:2,push:2},md:{span:2,push:2},lg:{span:6,push:12},xl:{span:6,push:11}}},[e("div",{staticStyle:{"text-align":"left"}},[e("el-image",{staticStyle:{width:"120px",height:"120px"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/advanIcon3.png"}})],1),t._v(" "),e("div",{staticClass:"advance-title"},[t._v("安全性")]),t._v(" "),e("div",{staticClass:"advance-text"},[t._v("基于BA*-VRF的POS共识机制，在协议层增加了安全及攻击保护")])])],1),t._v(" "),e("div",{staticStyle:{background:"black"}},[e("el-row",{staticClass:"section"},[e("el-col",{attrs:{xs:{span:20,push:1},sm:{span:2,push:2},md:{span:8,push:2},lg:{span:8,push:2},xl:{span:6,push:4}}},[e("div",{staticClass:"body-title5"},[t._v("核心团队")]),t._v(" "),e("div",{staticClass:"team-text",staticStyle:{"padding-bottom":"80px"}},[t._v("来自分布式计算、金融交易、区块链共识设计和跨链等各领域经验丰富的资深人士")])])],1),t._v(" "),e("el-row",[e("el-col",{staticStyle:{"margin-left":"-48px"},attrs:{xs:{span:24,push:1},sm:{span:20,push:2},md:{span:20,push:2},lg:{span:20,push:2},xl:{span:16,push:4}}},[e("el-col",{staticStyle:{padding:"48px 0px 0px 48px"},attrs:{xs:{span:12},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6}}},[e("el-image",{staticStyle:{height:"auto",width:"100%"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E6%9B%BE%E5%8D%9A%E8%BF%9C.png"}}),t._v(" "),e("div",{staticStyle:{height:"80px",width:"100%",background:"#222222","margin-top":"-4px"}},[e("div",{staticStyle:{height:"13px"}}),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","font-size":"16px"},attrs:{align:"left"}},[t._v("Terrill Tsang")]),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","margin-top":"6px","font-size":"20px"},attrs:{align:"left"}},[t._v("曾博远")])])],1),t._v(" "),e("el-col",{staticStyle:{padding:"48px 0px 0px 48px"},attrs:{xs:{span:12},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6}}},[e("el-image",{staticStyle:{height:"auto",width:"100%"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E4%BD%B3%E5%AE%9D.png"}}),t._v(" "),e("div",{staticStyle:{height:"80px",width:"100%",background:"#222222","margin-top":"-4px"}},[e("div",{staticStyle:{height:"13px"}}),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","font-size":"16px"},attrs:{align:"left"}},[t._v("Jiabao")]),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","margin-top":"6px","font-size":"20px"},attrs:{align:"left"}},[t._v("佳宝")])])],1),t._v(" "),e("el-col",{staticStyle:{padding:"48px 0px 0px 48px"},attrs:{xs:{span:12},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6}}},[e("el-image",{staticStyle:{height:"auto",width:"100%"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E7%8E%8B%E4%BD%B3%E8%8D%A3.png"}}),t._v(" "),e("div",{staticStyle:{height:"80px",width:"100%",background:"#222222","margin-top":"-4px"}},[e("div",{staticStyle:{height:"13px"}}),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","font-size":"16px"},attrs:{align:"left"}},[t._v("Wang Jiarong")]),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","margin-top":"6px","font-size":"20px"},attrs:{align:"left"}},[t._v("王佳荣")])])],1),t._v(" "),e("el-col",{staticStyle:{padding:"48px 0px 0px 48px"},attrs:{xs:{span:12},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6}}},[e("el-image",{staticStyle:{height:"auto",width:"100%"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E7%BD%97%E8%B6%8A.png"}}),t._v(" "),e("div",{staticStyle:{height:"80px",width:"100%",background:"#222222","margin-top":"-4px"}},[e("div",{staticStyle:{height:"13px"}}),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","font-size":"16px"},attrs:{align:"left"}},[t._v("Luo Yue")]),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","margin-top":"6px","font-size":"20px"},attrs:{align:"left"}},[t._v("罗越")])])],1),t._v(" "),e("el-col",{staticStyle:{padding:"48px 0px 0px 48px"},attrs:{xs:{span:12},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6}}},[e("el-image",{staticStyle:{height:"auto",width:"100%"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E5%BA%84%E5%AF%92%E5%B0%98.png"}}),t._v(" "),e("div",{staticStyle:{height:"80px",width:"100%",background:"#222222","margin-top":"-4px"}},[e("div",{staticStyle:{height:"13px"}}),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","font-size":"16px"},attrs:{align:"left"}},[t._v("Zhuang Hanchen")]),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","margin-top":"6px","font-size":"20px"},attrs:{align:"left"}},[t._v("庄寒尘")])])],1),t._v(" "),e("el-col",{staticStyle:{padding:"48px 0px 0px 48px"},attrs:{xs:{span:12},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6}}},[e("el-image",{staticStyle:{height:"auto",width:"100%"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E6%9D%A8%E5%AE%87%E8%88%AA.png"}}),t._v(" "),e("div",{staticStyle:{height:"80px",width:"100%",background:"#222222","margin-top":"-4px"}},[e("div",{staticStyle:{height:"13px"}}),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","font-size":"16px"},attrs:{align:"left"}},[t._v("Yuvan Yeung")]),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","margin-top":"6px","font-size":"20px"},attrs:{align:"left"}},[t._v("杨宇航")])])],1),t._v(" "),e("el-col",{staticStyle:{padding:"48px 0px 0px 48px"},attrs:{xs:{span:12},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6}}},[e("el-image",{staticStyle:{height:"auto",width:"100%"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E5%BD%AD%E6%99%8B%E6%98%8C.png"}}),t._v(" "),e("div",{staticStyle:{height:"80px",width:"100%",background:"#222222","margin-top":"-4px"}},[e("div",{staticStyle:{height:"13px"}}),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","font-size":"16px"},attrs:{align:"left"}},[t._v("Peng Jinchang")]),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","margin-top":"6px","font-size":"20px"},attrs:{align:"left"}},[t._v("彭晋昌")])])],1),t._v(" "),e("el-col",{staticStyle:{padding:"48px 0px 0px 48px"},attrs:{xs:{span:12},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6}}},[e("el-image",{staticStyle:{height:"auto",width:"100%"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E9%83%AD%E5%A4%A7%E6%B4%8B.png"}}),t._v(" "),e("div",{staticStyle:{height:"80px",width:"100%",background:"#222222","margin-top":"-4px"}},[e("div",{staticStyle:{height:"13px"}}),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","font-size":"16px"},attrs:{align:"left"}},[t._v("Guo Dayang")]),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","margin-top":"6px","font-size":"20px"},attrs:{align:"left"}},[t._v("郭大洋")])])],1),t._v(" "),e("el-col",{staticStyle:{padding:"48px 0px 0px 48px"},attrs:{xs:{span:12},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6}}},[e("el-image",{staticStyle:{height:"auto",width:"100%"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E6%B1%AA%E6%99%93%E9%B9%8F.png"}}),t._v(" "),e("div",{staticStyle:{height:"80px",width:"100%",background:"#222222","margin-top":"-4px"}},[e("div",{staticStyle:{height:"13px"}}),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","font-size":"16px"},attrs:{align:"left"}},[t._v("Wang Xiaopeng")]),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","margin-top":"6px","font-size":"20px"},attrs:{align:"left"}},[t._v("汪晓鹏")])])],1),t._v(" "),e("el-col",{staticStyle:{padding:"48px 0px 0px 48px"},attrs:{xs:{span:12},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6}}},[e("el-image",{staticStyle:{height:"auto",width:"100%"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E4%BD%99%E5%B4%87%E4%BA%AE.png"}}),t._v(" "),e("div",{staticStyle:{height:"80px",width:"100%",background:"#222222","margin-top":"-4px"}},[e("div",{staticStyle:{height:"13px"}}),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","font-size":"16px"},attrs:{align:"left"}},[t._v("Yu Chongliang")]),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","margin-top":"6px","font-size":"20px"},attrs:{align:"left"}},[t._v("余崇亮")])])],1),t._v(" "),e("el-col",{staticStyle:{padding:"48px 0px 0px 48px"},attrs:{xs:{span:12},sm:{span:12},md:{span:8},lg:{span:6},xl:{span:6}}},[e("el-image",{staticStyle:{height:"auto",width:"100%"},attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/people/%E7%8E%8B%E6%98%93.png"}}),t._v(" "),e("div",{staticStyle:{height:"80px",width:"100%",background:"#222222","margin-top":"-4px"}},[e("div",{staticStyle:{height:"13px"}}),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","font-size":"16px"},attrs:{align:"left"}},[t._v("Wang Yi")]),t._v(" "),e("div",{staticStyle:{color:"#FFFFFF","margin-left":"7%","margin-top":"6px","font-size":"20px"},attrs:{align:"left"}},[t._v("王易")])])],1)],1)],1),t._v(" "),e("div",{staticStyle:{height:"250px"}})],1),t._v(" "),e("div",[e("el-row",{staticClass:"section"},[e("el-col",{attrs:{xs:{span:2,push:2},sm:{span:2,push:2},md:{span:2,push:2},lg:{span:2,push:2},xl:{span:6,push:4}}},[e("div",{staticClass:"body-title5",staticStyle:{"padding-top":"150px","padding-bottom":"120px",color:"#000000"}},[t._v("博客资讯")])])],1),t._v(" "),e("el-row",[e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:17,push:7},md:{span:16,push:8},lg:{span:6,push:2},xl:{span:6,push:4}}},[e("div",{staticClass:"consult-size"},[e("el-image",{staticClass:"consult-image",attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult_ar.png"}}),t._v(" "),e("div",{staticClass:"consult-date"},[t._v("2022年4月02日")]),t._v(" "),e("div",{staticClass:"consult-text"},[t._v("Entysquare 成为全球唯一领先的Arweave算法提供商 …")]),t._v(" "),e("div",{staticClass:"consult-line"})],1)]),t._v(" "),e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:17,push:7},md:{span:16,push:8},lg:{span:6,push:3},xl:{span:6,push:4}}},[e("div",{staticClass:"consult-size"},[e("el-image",{staticClass:"consult-image",attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult2.png"}}),t._v(" "),e("div",{staticClass:"consult-date"},[t._v("2021年5月5日")]),t._v(" "),e("div",{staticClass:"consult-text"},[t._v("EntySquare 创始人Terrill Tsang 担任 CSLA公链技术大使…")]),t._v(" "),e("div",{staticClass:"consult-line"})],1)]),t._v(" "),e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:17,push:7},md:{span:16,push:8},lg:{span:6,push:4},xl:{span:6,push:4}}},[e("div",{staticClass:"consult-size"},[e("el-image",{staticClass:"consult-image",attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult1.png"}}),t._v(" "),e("div",{staticClass:"consult-date"},[t._v("2021年3月1日")]),t._v(" "),e("div",{staticClass:"consult-text"},[t._v("EntySquare 为韩国Investors交易所提供技术服务…")]),t._v(" "),e("div",{staticClass:"consult-line"})],1)])],1),t._v(" "),e("el-row",[e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:17,push:7},md:{span:16,push:8},lg:{span:6,push:2},xl:{span:6,push:4}}},[e("div",{staticClass:"consult-size"},[e("el-image",{staticClass:"consult-image",attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult4.png"}}),t._v(" "),e("div",{staticClass:"consult-date"},[t._v("2021年4月19日")]),t._v(" "),e("div",{staticClass:"consult-text"},[t._v("EntySquare 团队为汉唐云提供算法技术和开发服务…")]),t._v(" "),e("div",{staticClass:"consult-line"})],1)]),t._v(" "),e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:17,push:7},md:{span:16,push:8},lg:{span:6,push:3},xl:{span:6,push:4}}},[e("div",{staticClass:"consult-size"},[e("el-image",{staticClass:"consult-image",attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult5.png"}}),t._v(" "),e("div",{staticClass:"consult-date"},[t._v("2021年4月19日")]),t._v(" "),e("div",{staticClass:"consult-text"},[t._v("EntySquare 团队为E-mu.ai提供技术服务…")]),t._v(" "),e("div",{staticClass:"consult-line"})],1)]),t._v(" "),e("el-col",{attrs:{xs:{span:20,push:2},sm:{span:17,push:7},md:{span:16,push:8},lg:{span:6,push:4},xl:{span:6,push:4}}},[e("div",{staticClass:"consult-size"},[e("el-image",{staticClass:"consult-image",attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/consult6.png"}}),t._v(" "),e("div",{staticClass:"consult-date"},[t._v("2021年5月16日")]),t._v(" "),e("div",{staticClass:"consult-text"},[t._v("EntySquare 团队为KB Token提供技术服务…")]),t._v(" "),e("div",{staticClass:"consult-line"})],1)])],1)],1),t._v(" "),e("div",[e("el-row",{staticClass:"sideNaviEnd",staticStyle:{"padding-bottom":"120px"},attrs:{type:"flex",align:"bottom",justify:"start"}},[e("el-col",{attrs:{xs:{span:2,push:2},sm:{span:2,push:2},md:{span:10,push:2},lg:{span:2,push:2},xl:{span:6,push:4}}},[e("div",{staticClass:"body-title5",staticStyle:{color:"#000000"}},[t._v("合作伙伴")])]),t._v(" "),e("el-col",{attrs:{xs:{span:20,push:0},sm:{span:10,push:0},md:{span:10,push:2},lg:{span:6,push:14},xl:{span:6,push:9}}},[e("div",[e("span",{staticClass:"cooperation-text1"},[t._v("如果您有兴趣和我们合作和探讨，请与")]),t._v(" "),e("span",{staticClass:"cooperation-text2"},[t._v("我们联系")])])])],1),t._v(" "),e("el-row",[e("el-col",{attrs:{xs:{span:10,push:2},sm:{span:10,push:2},md:{span:5,push:1},lg:{span:5,push:2},xl:{span:4,push:4}}},[e("el-image",{staticClass:"cooperation-icon",attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/cooperation1.png"}})],1),t._v(" "),e("el-col",{attrs:{xs:{span:10,push:2},sm:{span:10,push:2},md:{span:5,push:1},lg:{span:5,push:2},xl:{span:4,push:4}}},[e("el-image",{staticClass:"cooperation-icon",attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/cooperation2.png"}})],1),t._v(" "),e("el-col",{attrs:{xs:{span:10,push:2},sm:{span:10,push:2},md:{span:5,push:1},lg:{span:5,push:2},xl:{span:4,push:4}}},[e("el-image",{staticClass:"cooperation-icon",attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/cooperation3.png"}})],1),t._v(" "),e("el-col",{attrs:{xs:{span:10,push:2},sm:{span:10,push:2},md:{span:5,push:1},lg:{span:5,push:2},xl:{span:4,push:4}}},[e("el-image",{staticClass:"cooperation-icon",attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/cooperation4.png"}})],1)],1)],1),t._v(" "),e("div",{staticClass:"home-footer-size"},[e("el-row",{staticClass:"section"},[e("el-col",{attrs:{xs:{span:10,push:2},sm:{span:10,push:2},md:{span:10,push:2},lg:{span:6,push:2},xl:{span:6,push:4}}},[e("div",{staticClass:"home-footer-title"},[t._v("做全球化的推动者和连接者")]),t._v(" "),e("div",{staticClass:"home-footer-subTitle"},[t._v("在无界的区块链世界持续精进，以前沿技术为全球客户提供价值。")]),t._v(" "),e("div",{staticClass:"home-footer-text"},[t._v("\n              联系我们\n              "),e("el-popover",{attrs:{placement:"right-start",width:"220"},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[e("p",[t._v("企业邮箱: terilscaub@gmail.com")]),t._v(" "),e("div",{staticStyle:{"text-align":"right",margin:"0"}},[e("el-button",{staticStyle:{color:"#94469B"},attrs:{size:"mini"},on:{click:function(s){t.visible=!1}}},[t._v("确定")])],1),t._v(" "),e("el-image",{staticClass:"home-rotter-arrow",attrs:{slot:"reference",src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/grayArrow.png"},slot:"reference"})],1)],1)]),t._v(" "),e("el-col",{attrs:{xs:{span:20,push:4},sm:{span:7,push:5},md:{span:7,push:5},lg:{span:6,push:10},xl:{span:6,push:8}}},[e("div",{staticClass:"home-footer-image"},[e("el-image",{attrs:{src:"https://entysquare.oss-cn-shenzhen.aliyuncs.com/assets/homeFooter.png"}})],1)])],1)],1)],1),t._v(" "),e("el-footer",{staticStyle:{margin:"0",padding:"0"}},[e("the-footer")],1),t._v(" "),e("el-drawer",{attrs:{modal:!1,title:"",visible:t.drawer,direction:t.direction,"before-close":t.handleClose,size:"40%"},on:{"update:visible":function(s){t.drawer=s}}},[e("el-row",[e("router-link",{attrs:{to:"/"},nativeOn:{click:function(s){t.drawer=!1}}},[e("el-col",{staticClass:"drawer-left-text",staticStyle:{padding:"10px 10px 10px 20px"},attrs:{span:12,align:"left"}},[t._v("首页")]),t._v(" "),e("el-col",{staticClass:"drawer-left-text",staticStyle:{padding:"10px 20px 10px 0px"},attrs:{span:12,align:"right"}},[t._v("+")])],1)],1),t._v(" "),e("el-row",[e("router-link",{attrs:{to:"/publicChain"},nativeOn:{click:function(s){t.drawer=!1}}},[e("el-col",{staticClass:"drawer-left-text",staticStyle:{padding:"10px 10px 10px 20px"},attrs:{span:12,align:"left"}},[t._v("公链")]),t._v(" "),e("el-col",{staticClass:"drawer-left-text",staticStyle:{padding:"10px 20px 10px 0px"},attrs:{span:12,align:"right"}},[t._v("+")])],1)],1),t._v(" "),e("el-row",[e("router-link",{attrs:{to:"/token"},nativeOn:{click:function(s){t.drawer=!1}}},[e("el-col",{staticClass:"drawer-left-text",staticStyle:{padding:"10px 10px 10px 20px"},attrs:{span:12,align:"left"}},[t._v("代币")]),t._v(" "),e("el-col",{staticClass:"drawer-left-text",staticStyle:{padding:"10px 20px 10px 0px"},attrs:{span:12,align:"right"}},[t._v("+")])],1)],1),t._v(" "),e("el-row",[e("router-link",{attrs:{to:"/coinMining"},nativeOn:{click:function(s){t.drawer=!1}}},[e("el-col",{staticClass:"drawer-left-text",staticStyle:{padding:"10px 10px 10px 20px"},attrs:{span:12,align:"left"}},[t._v("挖矿")]),t._v(" "),e("el-col",{staticClass:"drawer-left-text",staticStyle:{padding:"10px 20px 10px 0px"},attrs:{span:12,align:"right"}},[t._v("+")])],1)],1),t._v(" "),e("el-row",[e("router-link",{attrs:{to:"/arCoin"},nativeOn:{click:function(s){t.drawer=!1}}},[e("el-col",{staticClass:"drawer-left-text",staticStyle:{padding:"10px 10px 10px 20px"},attrs:{span:12,align:"left"}},[t._v("算法")]),t._v(" "),e("el-col",{staticClass:"drawer-left-text",staticStyle:{padding:"10px 20px 10px 0px"},attrs:{span:12,align:"right"}},[t._v("+")])],1)],1)],1)],1)},staticRenderFns:[]};var o=e("VU/8")(n,l,!1,function(t){e("zKOg")},"data-v-1f099206",null);s.default=o.exports},zKOg:function(t,s){throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (93)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.14.1\n    at module.exports (/Users/guodayang/code-work/vue-work/enty-website/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/Users/guodayang/code-work/vue-work/enty-website/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (node:internal/modules/cjs/loader:1103:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Module.require (node:internal/modules/cjs/loader:1005:19)\n    at require (node:internal/modules/cjs/helpers:102:18)\n    at getDefaultSassImpl (/Users/guodayang/code-work/vue-work/enty-website/node_modules/sass-loader/dist/index.js:198:10)\n    at Object.loader (/Users/guodayang/code-work/vue-work/enty-website/node_modules/sass-loader/dist/index.js:80:29)\n    at /Users/guodayang/code-work/vue-work/enty-website/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/guodayang/code-work/vue-work/enty-website/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/guodayang/code-work/vue-work/enty-website/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at runSyncOrAsync (/Users/guodayang/code-work/vue-work/enty-website/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/guodayang/code-work/vue-work/enty-website/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\n    at iterateNormalLoaders (/Users/guodayang/code-work/vue-work/enty-website/node_modules/loader-runner/lib/LoaderRunner.js:221:10)\n    at /Users/guodayang/code-work/vue-work/enty-website/node_modules/loader-runner/lib/LoaderRunner.js:236:3\n    at Object.context.callback (/Users/guodayang/code-work/vue-work/enty-website/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/guodayang/code-work/vue-work/enty-website/node_modules/vue-loader/lib/selector.js:21:8)")}});
//# sourceMappingURL=5.c2fcd6e8cdcae73edc1e.js.map