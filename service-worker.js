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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","5ff8814dfe968505543a9e3074dfbd23"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","38f0bb0bee6de7fdcfc16450eadae3a3"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","7897505a4d332d3e19ab82ce61e4c20d"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","d9c56a28f113b7bc85ca9aefc2ce5588"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","e458a4d40861a428c7560e3b8fcf0ff3"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","6c7bfff991146749278b07b6cab72f90"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","af4ffbb00f0d97e488e6d21994254da3"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","e276b699f8ca9eb77ed1e6e2ef9df4f6"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","1be336f67dd31cfe452d389e1880b11f"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","10cc508a84abbcb1ad773fbe30f1da47"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","6b5ecfc1f16071ed756dab5a8b66c722"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","ba3d467c5e4ea1c72dc42f12b96d25ca"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","e036a7f4c5b04e6654c8b2ec2bd26f68"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","b11c7fcea4391f950055849cbbdea34f"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","32d8a6a033fd880da485b5186de4eeb8"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","f6e9494e7201fb1193abdaa1c2cbf3d8"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","10e4dc2ccb3bd872433df238687195e1"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","4ca6ba0e8b28beb2b07ba82d81fb527b"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","ed747ca0fb0132a6c668b048e3810e99"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","9348a99e46bfac56687fe377eaca54f3"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","78d6f3d61125d42e61e2c6773072813b"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","2f8420a0c299df433c26d635869ca549"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","278c0d018809390350cf73acbace114f"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","141c775a8f354745690026491fd84e63"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","82ac71d79e33918b74584785f30910dd"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","fc458342c3f03bba9954e4fb6936dc0e"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","fdf6d8124ba9b7750913a3f032e28c9e"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","3bc414fbf908b2a35304911a5998d34d"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","d9e5ceb095064748923bb11fc1059f8c"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","2463b1377271634b6ced2796e1e5e913"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","8f916ff1ac484a25ff87e3bca42ebda5"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","ceb85df510b7d48e1810be6ad431c3cd"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","be9f845554c71b700efc78254255c342"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","bf3d38fe7c2751fe31bb036437bb2793"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","555501a043c4813f50042a63ee5e86d9"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","9177e74142841220739fd9c160436cc0"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","7dd47fd99d51d9efc866861f2435c9f8"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","66a89ed79df57f9df4cde3076f02d78d"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","776c6aa72f1ec7a937122479e8ad8cef"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","44cdff672de64ddac317471fdbefb526"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","3c36d37335f55f8551c5863d3a18c72f"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","aec3c10e3326c783a7a8e83df656866c"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","acc0344df89cd9995b11e180d0354699"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","a82b9ebb26bac10b9d05c4b8a0eff24a"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","5bc83261b30c45365d98c0a07f92a709"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","7cbb59ca55fc145cba839542b31094ed"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","54093b26ca14465cf2852c7ae7139d65"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","624d87f155f602848c8e9906e794fba4"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","c20f958022677451e15499022f35796c"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","6480bd01fb9e8648e5d4ca18b4fe17a4"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","c0e89ed01b525c9d96aa11216cea1794"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","374aaf91511679498c6b350d4cdaf933"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","110f82aeb14c59023d8ff2fe8e0532d5"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","96078257b6577e2d6ef9bf432a83887c"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","5bf7a8313264ccdb36f037821ce99e06"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","ce1f7b5c5e08deb5cdce8450cfad5167"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","c003d91aac1eefda0e41b270dbccdf9a"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","0622fb0efd6433c62b836bde9a6b4d26"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","f1927d2f9afd3ae1892a25a6039e536a"],["E:/qinhao/hexo/public/2020/12/15/C_basic/index.html","5519c32d9603cb6486b7f898cfce799c"],["E:/qinhao/hexo/public/ByteDanceVerify.html","a4e4f0d6966fabd752bd1fada4e71456"],["E:/qinhao/hexo/public/about/index.html","818598e14dc3bf06cb26f02d2f08afdb"],["E:/qinhao/hexo/public/archives/2020/02/index.html","89430a21a7f4217c0115ab298efc91ea"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","9c9fc4d3b902be9832a250b0c6873122"],["E:/qinhao/hexo/public/archives/2020/03/index.html","0028cd20eb52e3874c664ba08d64a58a"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","6cb8afb2bcccf60bfde2236859431408"],["E:/qinhao/hexo/public/archives/2020/04/index.html","3f76647cd845ca24ba05ede82a556c7c"],["E:/qinhao/hexo/public/archives/2020/05/index.html","66f0b273b1ee37aa4895eaf5a022ecab"],["E:/qinhao/hexo/public/archives/2020/06/index.html","7ab9cfd5648c895cfd24f648f6558416"],["E:/qinhao/hexo/public/archives/2020/07/index.html","a6b84d803999c8dae2220a78b4496fa5"],["E:/qinhao/hexo/public/archives/2020/08/index.html","823b93c0c027a9f41d38bc5f03d55729"],["E:/qinhao/hexo/public/archives/2020/10/index.html","aec0e1a50846cffcc147a2dc9e019820"],["E:/qinhao/hexo/public/archives/2020/11/index.html","fd5e3528ff01f29233dd6dc777075021"],["E:/qinhao/hexo/public/archives/2020/12/index.html","87b53a1903ce08e6cb8fd5d39f627545"],["E:/qinhao/hexo/public/archives/2020/index.html","4d7d5fcbf6605e1947d73d8d3c1a9d08"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","960e76ea9ab7549d75fc650f0adc1431"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","9dac71a69d4b83931d4c7e84979612fa"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","97f3a35c2bc4d023784780f5f7669d7e"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","59f803bb1e3a1068854a9216dc2bdaa8"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","927bed1dc53837e7e3aaea9f16d00d5c"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","89948c607f04655b595b81646adb2d80"],["E:/qinhao/hexo/public/archives/index.html","b05e26067b7b1256b031244e9b6c3038"],["E:/qinhao/hexo/public/archives/page/2/index.html","f5ed765f2cb002608db74100800e7210"],["E:/qinhao/hexo/public/archives/page/3/index.html","b05e26067b7b1256b031244e9b6c3038"],["E:/qinhao/hexo/public/archives/page/4/index.html","f5ed765f2cb002608db74100800e7210"],["E:/qinhao/hexo/public/archives/page/5/index.html","878e1a59b084fe5d953610a88a640a71"],["E:/qinhao/hexo/public/archives/page/6/index.html","878e1a59b084fe5d953610a88a640a71"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","446d2b44b73974f6d95a3ada29d3ce7f"],["E:/qinhao/hexo/public/categories/Java/index.html","b4b6f1f1f70d4758c1cc6e563ac0bb94"],["E:/qinhao/hexo/public/categories/Linux/index.html","b104f965c149bcabc4aa8ea94264d917"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","e41a6fd5b2bce8de28e14ee9ba8fc31b"],["E:/qinhao/hexo/public/categories/Python/index.html","0f97824d61cf89eb50681bc2608806d6"],["E:/qinhao/hexo/public/categories/交换机/index.html","2ed6c4e290fcba0469e379dfac263b96"],["E:/qinhao/hexo/public/categories/华为认证/index.html","a414bd7307694e28f6bbf33e20a82b91"],["E:/qinhao/hexo/public/categories/小技巧/index.html","09675665aab1e914cfa959c044d7430b"],["E:/qinhao/hexo/public/categories/数据库/index.html","e12d21d67c2e273ed30d492217ecd3c6"],["E:/qinhao/hexo/public/categories/服务器/index.html","386369cab5405c76de8a1907530062cd"],["E:/qinhao/hexo/public/categories/网络安全/index.html","bc9734d49e86ef5e5570585b7da42b22"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","c040be767c6ccc58ca01f2f8c73dfc31"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","5deed9f89bf4e0982eafad0e6e211fb9"],["E:/qinhao/hexo/public/categories/软件破解/index.html","1757021051e7cc7a77570e7c64886a08"],["E:/qinhao/hexo/public/categories/通信技术/index.html","bf4a4201b473c94eeb71fbb6f33c7600"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","3a0c4cbb585a8105a6a4790f4dcd5350"],["E:/qinhao/hexo/public/category/index.html","92a698c5f81b7b7a3bf4f1a0674637b9"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","8e9e7be5884cfe16393d51bc7a6da897"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","02bae60cdfaa5351dcec96b297b8031b"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","9ab15177bc7794a98b92e1f5840d220d"],["E:/qinhao/hexo/public/page/2/index.html","a9ad4f15fbc704497b8ac7cccaeec432"],["E:/qinhao/hexo/public/page/3/index.html","5c3c2746f27d19cadf19a11ac8c33409"],["E:/qinhao/hexo/public/page/4/index.html","4dabecfbe641288bb30da2ff0d85d6c6"],["E:/qinhao/hexo/public/page/5/index.html","e316a7aea9420ca7ff26f0fd1372a864"],["E:/qinhao/hexo/public/page/6/index.html","c55c130d93efd7f1a896c21d968ea432"],["E:/qinhao/hexo/public/sw-register.js","9b6c50dd6fdfc1b8f87d1b5048684ac7"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","91fc6025a61521f3ec269567725824dd"],["E:/qinhao/hexo/public/tags/MySQL/index.html","f054e8d5b0869d04df670e84f7adfadd"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","a31d71fd5787fd1ae83eeb439e68fe39"],["E:/qinhao/hexo/public/tags/VPN/index.html","a87037cc66db63f4513d5c51fb73d084"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","72e9025812f8322652ceddd5a420910b"],["E:/qinhao/hexo/public/tags/index.html","d787f186033f46a6f397d26e64ae44c5"],["E:/qinhao/hexo/public/tags/交换机/index.html","ceb2f30157ad9ab4947f5cc8b7c5f8ce"],["E:/qinhao/hexo/public/tags/图像处理/index.html","bb270b044452a2059415250093dc33a0"],["E:/qinhao/hexo/public/tags/基础网络/index.html","4cc2d8e80572730eea5aded5b9d7782c"],["E:/qinhao/hexo/public/tags/思科/index.html","ecf462787187155b2828ece7c3e1d5c0"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","da88dd84014cd50c8fd6103a2434d78d"],["E:/qinhao/hexo/public/tags/数据库/index.html","1dfa9435af210599dd23342788cf5394"],["E:/qinhao/hexo/public/tags/无线技术/index.html","940082ee383405e9432dc1ec12833746"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","63846e99149d9172b2166b7b2fc7397e"],["E:/qinhao/hexo/public/tags/系统安装/index.html","743fc8f186d10e8ad9798f5c9de6191d"],["E:/qinhao/hexo/public/tags/网络安全/index.html","1a54484e2f386427fa717e1881f63e27"],["E:/qinhao/hexo/public/tags/网络技术/index.html","14d4a531b649cf0179ab777285a77bbf"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","07e0c833c6ac473de22bcfaa5cc9d8e9"],["E:/qinhao/hexo/public/tags/路由器/index.html","90964f586a48ce11815576f2b8dc9cf5"],["E:/qinhao/hexo/public/tags/软考/index.html","28bfece4738512e9510267e0c3ad4a9f"],["E:/qinhao/hexo/public/tags/通信原理/index.html","6783ee8edca395c7ba5110aeeb0de479"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","e69f9d5df0ef7d728c550fa2c2ecd856"],["E:/qinhao/hexo/public/tags/通信技术/index.html","dc5afa0727868ae95558500e7c7e5004"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","b9c7d081d65096add514a82d309d1a20"]];
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







