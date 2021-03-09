/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","21e05e824da468753cd748cd14e8c076"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","2de9440ca4f24da7dde3e3ef4c536860"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","2bee7329d4cfac353d8098ca4bd127a8"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","6d26ef70acd345c5050d771f490ae7bf"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","6ed0927384d26116e5a7515e9a537511"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","9cc2f64f8269c6a28537448b70d91b38"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","56e3e6cbf267ad9b079bf6010c680bb3"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","a5675e2d1c04bd3b4d57bfe00f34d9cb"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","7b1a5071276c7c8e9bc6fc064d487437"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","026e5f214f367b648a892088cb6dc62d"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","c9263ff21825e328e0c3e54ac5dda96b"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","d004cf655fd8e9e72f4c7ea9911ac5bd"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","cb23b611a6c15a917efeff982d4a1896"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","9f11f1887d0f2723d22e4ba423dce78e"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","51db5ee814a64a2efda8edd02b356391"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","114d4570ee6f1adf64b9a87e5e84c961"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","6d8c97e1d4880388b12ea4feb4b0275b"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","5a23733e0db4303d3ace636e9d75976e"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","bca8d83fed23b0951a5b20fd8afd7412"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","6893976becba265a5522a51bc7989bc7"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","7d7fcdb16ebc781f410c8b814f80d1af"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","628e1b5a6888d483e6bb264945b03792"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","f12a6d23da8a464d23511f8ed55bf20a"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","0db10f89cfd76375f0d8017dbb530471"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","01d503de59b3712c0721fab6693c8954"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","08ff989e207919376e76b00647c2678d"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","84cfe4d848e089df557f8b905af05b7d"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","f2264e5bf0781e6eb34bda0b95e85b1e"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","72d3954536fe387eac2e4d4e5055c4f1"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","ee3a6db0b323f85ab2b339761b2e6ba6"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","f2cf02414228363124ac00ab508694b1"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","9f8c74b4cc878c7f5b47b9513f021e38"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","203d5542016868357b6dfd42b41e27de"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","3e87acaf06dc0ef95fb24f0c6c255673"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","21fbd0c4b79a86b6f9d3be132c4c1497"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","428cf44896bb5690dc9de9b8008beab4"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","078698be4d20a473e572c031f67a30f6"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","3656b3052e795541c0944af19dfefcb1"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","4b9a51a2782f5cc064228f5d3c3425aa"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","e5690e682c4d477fef22abf4db461598"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","6558b3412787ab5af7ee99473be949e3"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","9e8cbce52623af797860c781397f5e4e"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","80d238e84de3e592998d299eed7a62b1"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","a5911bc54a27d3c4279a071df950a2ed"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","2436991bbfb9f2a32fb2fcc3355f2988"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","cec441d0b9ce73e97c8ea2fd63567295"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","630d2f59d7257fec54174c8a46a5af2b"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","3a75f88b24320614cc37fcc841ad2741"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","4428c9887da79b5bae17d3df2c7eb0e6"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","039610f39e3a4a051a6074a01541b68b"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","21c06abcc315828a0d0776eb96371009"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","699ae0cf0b6c2468e971a1252258656d"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","dfd51c76532c5931149e0bc41dd94edd"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","cbf906c20092e36705575fa2e9fe900c"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","c6b924b4fbfa661774b12e313a0786b6"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","b00a302c2eccbaadf3d1dd4c2586081c"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","080765ff6530100632face3c3cba64f0"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","80f4e15976a6999a39ff539a5f9f6f4f"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","fc4cc80f10c31d5ac6d8c24c35f69a77"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","598b77816ef7fcc9f61a3ce88bc5b203"],["E:/qinhao/hexo/public/ByteDanceVerify.html","3fa65358dfd7e632e9ab9fd35afeeb76"],["E:/qinhao/hexo/public/about/index.html","fa7c19021c9b4ec8685115f552ccf37e"],["E:/qinhao/hexo/public/archives/2020/02/index.html","37fa7d1053334a79355f75611247204a"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","3679fa2ff773e061d1e0b1a9c8f542bf"],["E:/qinhao/hexo/public/archives/2020/03/index.html","9ed3701c0b170390f2310a73a3e819f7"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","7aa4451fb59494dd71c517b7efc6f405"],["E:/qinhao/hexo/public/archives/2020/04/index.html","a6ae7730e5fee9652e1773986b2dc356"],["E:/qinhao/hexo/public/archives/2020/05/index.html","6d9c6a38b9baf39de673d203675642e7"],["E:/qinhao/hexo/public/archives/2020/06/index.html","6c74c6ccccc2514cded431e469d5b03c"],["E:/qinhao/hexo/public/archives/2020/07/index.html","231d2e4b50f961e66df0565ab566652d"],["E:/qinhao/hexo/public/archives/2020/08/index.html","90ffa087858f1ec7dddcb5c54ac9a1b5"],["E:/qinhao/hexo/public/archives/2020/10/index.html","73634d5a0163e1cec89e38936a2b374c"],["E:/qinhao/hexo/public/archives/2020/11/index.html","7948c3b1f5e5e767be3e32285d1c8c84"],["E:/qinhao/hexo/public/archives/2020/12/index.html","09b249b10ad867c1d445b5e784a827fd"],["E:/qinhao/hexo/public/archives/2020/index.html","1defea5f54e61883112bd127b009d44c"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","6fa996f8e4fa6299749d38e6fb1db650"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","fa6e12b640b4963b900b7a70381a9ad6"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","742618734386bd76b55d7c44b9cee41e"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","594507f3553115d6a0be9e0fb810f505"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","26e12f92cfa3181e7ee08f4fb93c295e"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","41b8310b33dc103bb84645e22f7b4d1d"],["E:/qinhao/hexo/public/archives/index.html","162f0617155bde5e466453d8e68ebf79"],["E:/qinhao/hexo/public/archives/page/2/index.html","e4e4f49bea327863c0936feaa4c1d9f3"],["E:/qinhao/hexo/public/archives/page/3/index.html","162f0617155bde5e466453d8e68ebf79"],["E:/qinhao/hexo/public/archives/page/4/index.html","e4e4f49bea327863c0936feaa4c1d9f3"],["E:/qinhao/hexo/public/archives/page/5/index.html","e4e4f49bea327863c0936feaa4c1d9f3"],["E:/qinhao/hexo/public/archives/page/6/index.html","e4e4f49bea327863c0936feaa4c1d9f3"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","2667d9bf61afdd22389f596eef81bcb8"],["E:/qinhao/hexo/public/categories/Java/index.html","f7e13ddc58b03196af67b5292be6b98a"],["E:/qinhao/hexo/public/categories/Linux/index.html","54560b219123032c8e597e307937e486"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","10f3a2b0149d464ed6dd09f1a9a9ba87"],["E:/qinhao/hexo/public/categories/Python/index.html","93cb29d0f45b3def783822feba3013d1"],["E:/qinhao/hexo/public/categories/交换机/index.html","41ec235970017178a821991bba32d04b"],["E:/qinhao/hexo/public/categories/华为认证/index.html","0a5c388a9bb22f02f14d4f06ce975d07"],["E:/qinhao/hexo/public/categories/小技巧/index.html","7d7a7aed5894c426a1f40d431fe31da5"],["E:/qinhao/hexo/public/categories/数据库/index.html","9ff39c65a95147f6d211b17b6ff7e2c6"],["E:/qinhao/hexo/public/categories/服务器/index.html","0b0db2dc44ec913ae0e1363f819104c2"],["E:/qinhao/hexo/public/categories/网络安全/index.html","36c1aed93d50d5f0a640d3a9c24195f0"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","05f1c1ba6b037a3650e9e52e3fccf5f0"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","7f1aa75d5a3499ae39cf23f028049439"],["E:/qinhao/hexo/public/categories/软件破解/index.html","cf33e73b4db6a79ec670e853842e6fbf"],["E:/qinhao/hexo/public/categories/通信技术/index.html","15ab73553d0d16947def18136bc54d74"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","996128e38d3947d05e5d5c168179e95d"],["E:/qinhao/hexo/public/category/index.html","b0b1950d7a456de49129f8cc3823daad"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","877fe998b4de8a13687edc311aff85c7"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","f0048990afa23da694d5d8f160f7889b"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","5068b30223324261f3bb5a2a56468d5b"],["E:/qinhao/hexo/public/page/2/index.html","12216ac714975107e061b93d62c3223d"],["E:/qinhao/hexo/public/page/3/index.html","1e284e92c48b301009dfeac51cda7c9f"],["E:/qinhao/hexo/public/page/4/index.html","447365da8d6f89be0b577f16a9ab0f60"],["E:/qinhao/hexo/public/page/5/index.html","88fa57c13eec355648443232b9b2f2f1"],["E:/qinhao/hexo/public/page/6/index.html","5e8d694eca4527dbd3a466400ec1c28e"],["E:/qinhao/hexo/public/sw-register.js","974bf09212e2791fbb831af37b97b7bd"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","3ea13c571e4fbcea72cc6bd99ac3c018"],["E:/qinhao/hexo/public/tags/MySQL/index.html","03c017108cabc080163f1ccab78a528a"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","13d879a3ea4c7bc7ba1cf8c7c1639110"],["E:/qinhao/hexo/public/tags/VPN/index.html","d7a4ebbd7aa597ce8ee255264322b538"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","7a443bd19fbf3d29ce85cdd50c564673"],["E:/qinhao/hexo/public/tags/index.html","2ecda4b1c189f3ca8799978fa9538ffc"],["E:/qinhao/hexo/public/tags/交换机/index.html","5b22fd4e27a7e4516be85695d237f51e"],["E:/qinhao/hexo/public/tags/图像处理/index.html","a53426857034b5d6ef9a472dd0ffa016"],["E:/qinhao/hexo/public/tags/基础网络/index.html","753df781e7b342193bea19cff2f9af00"],["E:/qinhao/hexo/public/tags/思科/index.html","ffd1ceb55fe349e85f3fb251b5a00002"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","df67ff73711fd3cb6073a93c37a7a97a"],["E:/qinhao/hexo/public/tags/数据库/index.html","07e12bb44842bae59314620268c99b15"],["E:/qinhao/hexo/public/tags/无线技术/index.html","261003a3b053a255fdf6cc5093139848"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","95ca94998d7ed1453dfd732441db091c"],["E:/qinhao/hexo/public/tags/系统安装/index.html","fdab1557b9ad38c4e290d63cb3a94a20"],["E:/qinhao/hexo/public/tags/网络安全/index.html","5fe5cd6695f9b4d2f8344cd0ba22cc30"],["E:/qinhao/hexo/public/tags/网络技术/index.html","5bb3596c718d428371e91f05f19bb963"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","3f27b985cc9105b3527542d5c54c4c8f"],["E:/qinhao/hexo/public/tags/路由器/index.html","17cfb14c164a6edebc67005a6c7dbb12"],["E:/qinhao/hexo/public/tags/软考/index.html","b9cfd3f70fbad0a6cb0d577d648372f2"],["E:/qinhao/hexo/public/tags/通信原理/index.html","67906f321cf371521362e43160c071d3"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","f3a14d89b8c95e3936df1953cd738fbd"],["E:/qinhao/hexo/public/tags/通信技术/index.html","98319e581daf04e28f9e6b99cdf9fe91"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","7c0b4d95824cdab232737813c9f38cb0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







