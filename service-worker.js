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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","9773aa7a71fee7bf85999cb11f9baab1"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","d76f16d89ddbc946ac1212ee5235b6d5"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","079d2ab392e61fb1216caae149733ba7"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","68472f32db732f702423e52f74816495"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","e14bde53a8eba5bd7e444938859e1210"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","6a1cf4bbba014e0496b631589ad112a6"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","f1acc33884f96e3c58782453df705b4b"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","878e6bcd6b63b267bdb23732268da31a"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","1f327b2bd3ba369f5a8d211d558c4607"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","d96b3fda9271c1ac141a119a1c4139e0"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","0028008c847c46a47e786e158bd0de69"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","49548a3792fc9f2f6a5ab4afe0779b49"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","7e158d63b693b390b06379049015e4eb"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","6c91e75d4b032278deade7aa1023d165"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","8c09f5fe61eb59a388e3c1619d5c2bb5"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","12ef8e7ccc221e5ab980d6521a30d174"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","9c5498cc417f892a814e72b110cad889"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","af83e6e6c1cd6a3c5c6ba19e0d329c4f"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","5b163d284a68ec945432928fc644804f"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","cfa199b4d2d8c9c11279551f888b69ee"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","34703a3a88ed97cad64acd961ee78f08"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","3fb6d2d95fe41cdd25a2a963e5761f83"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","45b4f49f0b547e7100a9aa07ca7178bf"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","3527363ca44f52dc876f119d197d3dbf"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","8c270304676c9dbc3f2dfa5334e82639"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","cd1aa7621b222c5e04bd2bc123ed2fa7"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","50e6e2e73e65bbd19af4beecec30c03b"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","91e3737f420dd9842fe277c06abe3170"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","c58aa3d890a24671c939e9eb575a79ce"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","e05c70142fd0bcbc6975e39d316aba29"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","0a5484c8f0e722e2a22a73c53136dc54"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","ce6facfd2c555e73bddd015a3f612cb0"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","ebafdab3d8548116400be6177154531e"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","c8b0c64472c07a55b901b32e776fd48f"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","33c5ecd650462916fcc3f80fbec8c66b"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","398d54dfc6520bfc31e28eab62ab5caa"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","173a43465f4944e24aa78759e6096e12"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","ad07220f889dc2a8d4860f26c9d71d82"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","85c30922ea27830dfc7b020a241e87e4"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","bd03db97ee27e216fdacfc4228f256e2"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","dba9a23ca39722bcfc0fb5396e613c39"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","9d8ed25a9a7ba100f5b6d32b0002d6eb"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","be04943e110a13ce1307a8f03e2ee0b6"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","e3544cd44979d3aaeed8c3686b27525d"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","486cb4f84472ab3980f2fec5ddf6402f"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","fcc3d22b7efa6975c0cb0fb4e050ce41"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","32c3c8a3ff4d5bb737b1deb942dcffbb"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","e04759163387f578508020e88497b10d"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","9fddb06bd77a8cb2f33e9fc3f35a49be"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","506141e48b803603a1da5da5e04a742b"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","1be6a884d6e2d5a3e437c2bedda2f1fb"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","14b8d36bd989e497973f2d7ed0270ec8"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","5e7757aa3597c1df4bd0c175a9078f52"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","d6343552a29373c6c344c4fc6066c310"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","a4a226d8dca0cce765b4e690ada6177e"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","d575df1770708d95846877dfe3aac9db"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","fceac66fd26378746e4259bf1f51e23b"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","dcb8d1250da26ee88176838be95d1d8c"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","80a951bfd70ad578a07ed5200105af47"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","a0890c99e0061a4bd144a7922d1bee4d"],["E:/qinhao/hexo/public/ByteDanceVerify.html","c78b805452b14b7c7c00ffcbbc54bf0f"],["E:/qinhao/hexo/public/about/index.html","bb3f59c9f0f30c7fb1fe1e95ff7775ce"],["E:/qinhao/hexo/public/archives/2020/02/index.html","7013104d8c5401a5f17bb63760d6fc10"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","b714e36d797a5471e82a96e65ffc407c"],["E:/qinhao/hexo/public/archives/2020/03/index.html","f51bee9d76a0f895c3af3949f404d64b"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","894bfecea14dca06f2622db2d4e61a97"],["E:/qinhao/hexo/public/archives/2020/04/index.html","49cdce80f9e9d674e619f1f0b0f8ac8f"],["E:/qinhao/hexo/public/archives/2020/05/index.html","b82d8bc2cfb37569b92719195258173f"],["E:/qinhao/hexo/public/archives/2020/06/index.html","a18114000d69aa79488d6c61539f3d3a"],["E:/qinhao/hexo/public/archives/2020/07/index.html","59665b03543f6606e4ecbde21647f663"],["E:/qinhao/hexo/public/archives/2020/08/index.html","d5675334ce5815c54cc1b125b07088ea"],["E:/qinhao/hexo/public/archives/2020/10/index.html","e14a93a1350a001d83afa43f90e6eb39"],["E:/qinhao/hexo/public/archives/2020/11/index.html","f61a8361c2f1bc9d28d74cb915e9dee2"],["E:/qinhao/hexo/public/archives/2020/12/index.html","8602c3afd2a88b08ad926107a8c3ecd0"],["E:/qinhao/hexo/public/archives/2020/index.html","a021e7db457dd065611d0efc403d0ce9"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","f5225cebca345b04b9f98787f27226e6"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","6ecd9c36587af4a32bb9a0ae4f495f4b"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","aaa66d9fbdd6cdfdd015bd6faae237e9"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","feb11c61e5776b9ca6c00d00f32e1cde"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","95941ddc81c4363aea1e31095b1ad660"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","c5f1ed3499198f63e663808db566dbe4"],["E:/qinhao/hexo/public/archives/index.html","76a71eee396877efc7e3abeafd9f3e92"],["E:/qinhao/hexo/public/archives/page/2/index.html","47074018a986a0585cd5975424456dd6"],["E:/qinhao/hexo/public/archives/page/3/index.html","76a71eee396877efc7e3abeafd9f3e92"],["E:/qinhao/hexo/public/archives/page/4/index.html","47074018a986a0585cd5975424456dd6"],["E:/qinhao/hexo/public/archives/page/5/index.html","47074018a986a0585cd5975424456dd6"],["E:/qinhao/hexo/public/archives/page/6/index.html","47074018a986a0585cd5975424456dd6"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","ccbccd9879978550fd9e44436892f9fe"],["E:/qinhao/hexo/public/categories/Java/index.html","f35f13597888493b330bde054ab10920"],["E:/qinhao/hexo/public/categories/Linux/index.html","0783f3d3ba3f547a043baa5b5133cb71"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","e4e8a37bdd63d7900563f00fece4cad7"],["E:/qinhao/hexo/public/categories/Python/index.html","ca1d7e49abd124ed232e290968e3ae09"],["E:/qinhao/hexo/public/categories/交换机/index.html","7b9e9618f9880720334f5f9cb9c502bf"],["E:/qinhao/hexo/public/categories/华为认证/index.html","f0116e54c5e9886cd261309ee4ef682c"],["E:/qinhao/hexo/public/categories/小技巧/index.html","acf06c1bde3491c8cd8d363163841701"],["E:/qinhao/hexo/public/categories/数据库/index.html","6adebf4548962e45a53f53508628299c"],["E:/qinhao/hexo/public/categories/服务器/index.html","0e63b5986d5ef499ec65ce4f5c23ad94"],["E:/qinhao/hexo/public/categories/网络安全/index.html","51674ae535ba1d035ff2934840c69316"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","0977188cb247a02c9a887a43bdd8c520"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","4c1d2d1b773c4c907a4b8eeb972b00a3"],["E:/qinhao/hexo/public/categories/软件破解/index.html","8fd586cf93110df42c390b054dc861ae"],["E:/qinhao/hexo/public/categories/通信技术/index.html","2bf0c0a99f9d45740127d1ee56665fe8"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","78edd4f281f470e0809e2661ea4b93c0"],["E:/qinhao/hexo/public/category/index.html","476db8e25773f59f66d8b1c2c02aaf87"],["E:/qinhao/hexo/public/css/style.css","f5e2c67bc8af009b55f92e0cda779c39"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","778b9fcb9d210bf4d5672c8ce2851211"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","f89bc653453f058b9425b2c892dedabf"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","cc61bc84d5b9af04afc060e00f3fe216"],["E:/qinhao/hexo/public/page/2/index.html","992350210d625c68a37f0b42a510927a"],["E:/qinhao/hexo/public/page/3/index.html","e61287bcaaaf7afbeb5f1d5377b42b1d"],["E:/qinhao/hexo/public/page/4/index.html","37f63b77f611ec0842e585db03af22e2"],["E:/qinhao/hexo/public/page/5/index.html","3c8c14603fde776694e719bf776854f2"],["E:/qinhao/hexo/public/page/6/index.html","9b4da8abfaf8e8faf03f14e55be59aa7"],["E:/qinhao/hexo/public/sw-register.js","a41187869992d6b6c37bf39c76723067"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","b4d5f8967ce9661d31bc8d63f6b7a3c9"],["E:/qinhao/hexo/public/tags/MySQL/index.html","ea36569d0912721b716aaceb6db5ec16"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","e5ada9703123def63b0ca7e885d50bbc"],["E:/qinhao/hexo/public/tags/VPN/index.html","3281b7f427ba721ebb8172c1b3a09301"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","c864b77086feeca6021f9d27c0dc4ee8"],["E:/qinhao/hexo/public/tags/index.html","5ad304f743aa29b32bd545ca0789261e"],["E:/qinhao/hexo/public/tags/交换机/index.html","d1ca793519742e90a56a148513755128"],["E:/qinhao/hexo/public/tags/图像处理/index.html","deccf1c532294f07d314bccbef31ea4d"],["E:/qinhao/hexo/public/tags/基础网络/index.html","d03ba3ae29170a44f065fd98ee70db92"],["E:/qinhao/hexo/public/tags/思科/index.html","ea43fa6b005bc7add88c89be9e8f0f13"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","c6fea9d73157748299f4d07d6069a16f"],["E:/qinhao/hexo/public/tags/数据库/index.html","ec3afbb06e9371882708b44df0336332"],["E:/qinhao/hexo/public/tags/无线技术/index.html","42dc0d47b9178ae348321ae9a5fe8f66"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","04c74db5083c761e617610ae349f9309"],["E:/qinhao/hexo/public/tags/系统安装/index.html","7d8b21749530969daf14199f861bfc43"],["E:/qinhao/hexo/public/tags/网络安全/index.html","44a827a7ddf76d8622e6946166ac6b25"],["E:/qinhao/hexo/public/tags/网络技术/index.html","c3d459a56a9d7059b3aa2bb6dd53f6e6"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","67481bec333e96681946ee1ccbf0b00a"],["E:/qinhao/hexo/public/tags/路由器/index.html","5a30e3c598356b3d08d262ca5b73a69a"],["E:/qinhao/hexo/public/tags/软考/index.html","963d0efe4d8f35c44d475af38ac3aef2"],["E:/qinhao/hexo/public/tags/通信原理/index.html","4975e8f45709ff8d65c860e554615581"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","7998d3beb34e5a5e897cfd4da4248510"],["E:/qinhao/hexo/public/tags/通信技术/index.html","cec710a7d4a62e5116769fe5e62e0bb7"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","bf4697a4e89101073de62540039b6d26"]];
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







