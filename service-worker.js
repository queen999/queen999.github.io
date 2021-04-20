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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","ddbb23cce983d46073b8fab0b2000e1a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","f7ee7728c7837e0255a952a7b23772aa"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","c392c48631fa3d912a3c6257cb40ca96"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","66ca3e9f290b8c0c483c2047af2d5b57"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","04fe473723abbd2b1a4ec5c7675864ec"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","67e920eb483c6f0f86bac22129506451"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a722002d40de9054256cfe3d5763016e"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","941d1dfc0b3327694feb77d75d2529ed"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","4798ce717f2fad8cce36589d4b82b46a"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","7ee96ef6179d03a23aa57ed4b64a4941"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","c7b6e091d728dc62da4b467e3ade0ca6"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","e4d31b704ca6419d6c4f3400ddd753c5"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","b785cfd3c2d4f45f5e3998c59cf9bb87"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","41a7b7ffbc39d49693785c877de4252f"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","dff7117e346005978d62b4753e262d24"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","8c27acaff6d976fc37819329bdc24671"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","d02e58bb8208cc68bf90d01d61924cd1"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","b3611af9ebe841e327b0c72894fac0fc"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","6e0df190e3a8178bd3815d51fec02984"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","8dcbac059240cfea6b6b51246c560122"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","6248d727b320f192ca66d43c73df8342"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","fadc645646e1e49f521a9c8053092f61"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","de2bdd38a37bfc02c8d6c0fbfadd49b6"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","f5d6ee867c124552a50ea00e89ac378e"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","808344cf628b41e2d0ffdb832823f1e1"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","eb03163c9a8eeaec6f4cdf359e4a51b5"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","619c275f0715a038251c56f37ad21a28"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","cde1db7d99e5f5c423b22f6c3d41d746"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","9b7a39ae52d1f5dfc8bc603389537ae0"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","d0d381af004fdfb966cf3091861d9c6f"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","706bafd61b726e72e5640216aa54a4c6"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","ec32a2ac87f64c018d7f60c422a6ec27"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","1ca4c8f56b2513cb538103652af8f225"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","0101390c1da275b2e3a0df263a2f54eb"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","1fe0b601c40dce7b9ce4a21437218b5e"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","88e87d7cdf63fbf7ffa891a6bbf2e969"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","d9adb2141922a3694469b1906b63c517"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","1f30d96e41bddf3661e10e906b017574"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","c31b3b30391ab2fcd021cd4ac28144b4"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","cb2876029133de39dfb0af1b33e3ddb4"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","73f55a11e193aa314b2589d3a7938acf"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","7d6664b9772ed1fcb932e471acf9f009"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","2eee994d69d69bd434c049f12746e9f9"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","6f8760b074c27c1bda2a0f9f947a6bfc"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","ba781cd4b8faa2d095ad4846d4dcb240"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","26d16c71957e95bc33289f42141dd332"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","cf8fce3b55743fbc4845f12d5d88174d"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","f95fe91ef05a63555f0982ef6d5cd098"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","3c4e478cb24fcf4acd33050245d727ba"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","a82864c30006fc3dfe5ec501c341f405"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","0a8041a095c2fdec723e08e3906d019a"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","7e560112bf55745a3c848a613421eb6b"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","94ddbc136f785b473a5f435ca7caf8d5"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","06696a328765c64ffcd6ac58f31f1ce9"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","042df5d90c660ddb863eff197fe39dd5"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","24fbb055a3d31f327f68a0db250b04cc"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","81443a012c48e406fff7f4030ef0c586"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","b2419455905e4bfdd39cf095ece2d1a6"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","1e3eb24373cf58ac31f861193099044e"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","94ad83f758dc449b73c200fcfdd02cc7"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","3d549e58f386fe9cdc7ac94557e34787"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","7595d63fbc785d6ac609a759b50ae277"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","262a72ee2f6e63339dc6f8c9e4160963"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","d2e5b5f151e464d367a8b31f851b0f56"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","2493a2c9052289944d0aabafbe24895e"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","c2e5010507c8c2933200652f70d87eb2"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","21c6bd6f5acde0bc75861c93938efee2"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","0ce9e1047b6f9f7a67cc7bf765171f92"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","c71056f869f24c6382b6985d6cb9f412"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","43a529e412a66c79f1aa581b69947e28"],["E:/qinhao/hexo/public/ByteDanceVerify.html","21d58b4232e529792bb8cc8f10f2d4e7"],["E:/qinhao/hexo/public/about/index.html","259e3801d077837ef274f2643df6c625"],["E:/qinhao/hexo/public/archives/2020/02/index.html","b8413f6fd0b7ed84dc2774431aaf0f18"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","72e35a97743294754df4233495081dd0"],["E:/qinhao/hexo/public/archives/2020/03/index.html","5870342059f6a997b5cd0f0d61857b1a"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","fe2a30c150402e3ef8dd6f5715ef4892"],["E:/qinhao/hexo/public/archives/2020/04/index.html","8f121470ab821b0f6a736a78304358ca"],["E:/qinhao/hexo/public/archives/2020/05/index.html","bbf166fd2f69a1b9409876fe07fb43c9"],["E:/qinhao/hexo/public/archives/2020/06/index.html","ce8f9fe5d41154ff9a787e2e444bc9e4"],["E:/qinhao/hexo/public/archives/2020/07/index.html","59f4ef8070e0a37566ed7ce67e5e652f"],["E:/qinhao/hexo/public/archives/2020/08/index.html","4d4c540c6f6831fb89108b163121bd57"],["E:/qinhao/hexo/public/archives/2020/10/index.html","0933e05ef6a83eda3b09871843040460"],["E:/qinhao/hexo/public/archives/2020/11/index.html","bf5154d908ede9ec88eba77291ff74f6"],["E:/qinhao/hexo/public/archives/2020/index.html","9dca12565214a3550a3aa56c2ca51ff3"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","9555f345953b7716cca181f275a91b18"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","9d2ff53de67d49858ab95785166ef5b5"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","61d4c5b0a28dfe215254c2508fa4c85a"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","b546ecafd4f17c261df66ba8bbb9cecd"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","8883a821d7eca60fe21a2b061a6c4792"],["E:/qinhao/hexo/public/archives/2021/03/index.html","cd389c9079983d81dad61c96f56a6d8c"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","63052c40b2223159a2f65aa171ebf7e7"],["E:/qinhao/hexo/public/archives/2021/index.html","aa0a251ff1145728632fff313bb104ed"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","4c16a8d4dbcc7cc7229132821699bd9a"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","ff49d6a6a9b8b35c1dc6b2e5d950f12a"],["E:/qinhao/hexo/public/archives/index.html","32c5b9ab73aa28c9ce6671c39746ef8e"],["E:/qinhao/hexo/public/archives/page/2/index.html","32c5b9ab73aa28c9ce6671c39746ef8e"],["E:/qinhao/hexo/public/archives/page/3/index.html","63f846be79956786e5d3b5083e3cb730"],["E:/qinhao/hexo/public/archives/page/4/index.html","32c5b9ab73aa28c9ce6671c39746ef8e"],["E:/qinhao/hexo/public/archives/page/5/index.html","63f846be79956786e5d3b5083e3cb730"],["E:/qinhao/hexo/public/archives/page/6/index.html","456b460accdf9168c66091669ecd6c86"],["E:/qinhao/hexo/public/archives/page/7/index.html","456b460accdf9168c66091669ecd6c86"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","c3b251abd2a4353c5efe17120e5b07b9"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","5fdd0746555e2c6a0d5aaf3ab656ef12"],["E:/qinhao/hexo/public/categories/Java/index.html","7b6550a2fb14cb7dd9292d18eee383c7"],["E:/qinhao/hexo/public/categories/Linux/index.html","c257309ace3598a506750605dd692f93"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","790f373f6f95f05bc7b378fe086ca605"],["E:/qinhao/hexo/public/categories/Python/index.html","3aac83e6067493ccc305bdb6ed057038"],["E:/qinhao/hexo/public/categories/交换机/index.html","c384e5b21c77137304bd263d32dc8bba"],["E:/qinhao/hexo/public/categories/华为认证/index.html","f6e196c22fefac8013864247510b0e2b"],["E:/qinhao/hexo/public/categories/小技巧/index.html","4777bae7abca0eaa21863ac7437bf40e"],["E:/qinhao/hexo/public/categories/数据库/index.html","c3a4a798c63f861a17b51a81422b3763"],["E:/qinhao/hexo/public/categories/服务器/index.html","a23923d2db83d40a33a13497179e930f"],["E:/qinhao/hexo/public/categories/网络安全/index.html","9998a425fbdb8aff13907489a880e6f1"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","d0998c49c61f89f376c9ad7c3dcf0666"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","bf36d1c2a9589a06199c24f04372e1dc"],["E:/qinhao/hexo/public/categories/软件破解/index.html","ebf6cec2741c3e82e0d71e9b790e2d2e"],["E:/qinhao/hexo/public/categories/通信技术/index.html","2abbdededb01563a2360f49616072ff4"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","2cf5a5caf014eb4a809ef8efd49ffdca"],["E:/qinhao/hexo/public/category/index.html","e2ad5e32facfa51c40a41d912fbf60b4"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","22b7cd1aa5607c068946645b1cee033b"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","6f55c11338451ed6b02aa93d157f8ce2"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","7682daffa281743d45a36e9d52689e15"],["E:/qinhao/hexo/public/page/2/index.html","a5f1250ccdda92f0cc4c5f833d0df870"],["E:/qinhao/hexo/public/page/3/index.html","d632658606f118e0ac348642a271bef1"],["E:/qinhao/hexo/public/page/4/index.html","bae4df18c5bb1fda82c0fd2296e08069"],["E:/qinhao/hexo/public/page/5/index.html","1fde4cfb9a57b6b5ef17676445d80573"],["E:/qinhao/hexo/public/page/6/index.html","5252b45ff39e5472206a26b322f91c19"],["E:/qinhao/hexo/public/page/7/index.html","d8533454bcad6458ef0ca36472b851a1"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","95c8eeac65d6643a6a021a77e13061e8"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","adbdb073fb17f1a3b3886b97b5cbe27a"],["E:/qinhao/hexo/public/tags/MySQL/index.html","c24d6bdb17447dd0ecc2df754bae0dbd"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","c8f20a66d9b4b83b532ff3fd8d52dd3d"],["E:/qinhao/hexo/public/tags/VPN/index.html","745a51384a3c93e81b2538ce3cd63e1c"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","0abc702aabd4570fdeece6a0f7e7eac5"],["E:/qinhao/hexo/public/tags/index.html","a45de883ebd0f55d7cc41dcbed0cc9b0"],["E:/qinhao/hexo/public/tags/交换机/index.html","2fec6176f4f1d6b99de021cb66e244eb"],["E:/qinhao/hexo/public/tags/图像处理/index.html","09f4703c1ebc221d74aa7b1e3083a984"],["E:/qinhao/hexo/public/tags/基础网络/index.html","139abf2ff04c1eab55abc2b22a3f5bef"],["E:/qinhao/hexo/public/tags/思科/index.html","607b2c2db46f4862cb1a00cad7585f34"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","07d605238decffd1c13324c58612a994"],["E:/qinhao/hexo/public/tags/数据库/index.html","45f12ba05daabd1bb686ad3c6641d9de"],["E:/qinhao/hexo/public/tags/无线技术/index.html","76145eb0f958dc0e3325d7abe44f8745"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","cb833fde21aaaa468cdc4f04acc83c4b"],["E:/qinhao/hexo/public/tags/系统安装/index.html","07f9d0d60cadcea135eb4707675d8d6d"],["E:/qinhao/hexo/public/tags/网络安全/index.html","0a4aca7773a05f7428554714230f6103"],["E:/qinhao/hexo/public/tags/网络技术/index.html","0d7a3d971eb11cacb5028947c4d8462a"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","5c1d351c4cbab9ab572e4f3f7af2f4f9"],["E:/qinhao/hexo/public/tags/路由器/index.html","e891b67448e36f593793daac8fd96b2f"],["E:/qinhao/hexo/public/tags/软考/index.html","1cbc26dcf573f573cdf4fd4f627c5c46"],["E:/qinhao/hexo/public/tags/通信原理/index.html","71a0f4161697c253771cad8def528091"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","07fcb41d249ba4c1aafe66018ef3d74d"],["E:/qinhao/hexo/public/tags/通信技术/index.html","608a8f361c79e99f5a21b3e6cb195886"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","78c7f61baf237752b752b44609cc9d75"]];
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







