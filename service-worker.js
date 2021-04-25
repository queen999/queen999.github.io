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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","ddbb23cce983d46073b8fab0b2000e1a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","f7ee7728c7837e0255a952a7b23772aa"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","c392c48631fa3d912a3c6257cb40ca96"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","66ca3e9f290b8c0c483c2047af2d5b57"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","04fe473723abbd2b1a4ec5c7675864ec"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","67e920eb483c6f0f86bac22129506451"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a722002d40de9054256cfe3d5763016e"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","941d1dfc0b3327694feb77d75d2529ed"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","4798ce717f2fad8cce36589d4b82b46a"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","7ee96ef6179d03a23aa57ed4b64a4941"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","c7b6e091d728dc62da4b467e3ade0ca6"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","e4d31b704ca6419d6c4f3400ddd753c5"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","b785cfd3c2d4f45f5e3998c59cf9bb87"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","41a7b7ffbc39d49693785c877de4252f"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","dff7117e346005978d62b4753e262d24"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","8c27acaff6d976fc37819329bdc24671"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","d02e58bb8208cc68bf90d01d61924cd1"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","b3611af9ebe841e327b0c72894fac0fc"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","6e0df190e3a8178bd3815d51fec02984"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","8dcbac059240cfea6b6b51246c560122"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","6248d727b320f192ca66d43c73df8342"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","fadc645646e1e49f521a9c8053092f61"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","de2bdd38a37bfc02c8d6c0fbfadd49b6"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","f5d6ee867c124552a50ea00e89ac378e"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","808344cf628b41e2d0ffdb832823f1e1"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","eb03163c9a8eeaec6f4cdf359e4a51b5"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","619c275f0715a038251c56f37ad21a28"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","cde1db7d99e5f5c423b22f6c3d41d746"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","9b7a39ae52d1f5dfc8bc603389537ae0"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","d0d381af004fdfb966cf3091861d9c6f"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","706bafd61b726e72e5640216aa54a4c6"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","ec32a2ac87f64c018d7f60c422a6ec27"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","1ca4c8f56b2513cb538103652af8f225"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","0101390c1da275b2e3a0df263a2f54eb"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","1fe0b601c40dce7b9ce4a21437218b5e"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","88e87d7cdf63fbf7ffa891a6bbf2e969"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","d9adb2141922a3694469b1906b63c517"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","1f30d96e41bddf3661e10e906b017574"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","c31b3b30391ab2fcd021cd4ac28144b4"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","cb2876029133de39dfb0af1b33e3ddb4"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","73f55a11e193aa314b2589d3a7938acf"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","7d6664b9772ed1fcb932e471acf9f009"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","2eee994d69d69bd434c049f12746e9f9"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","6f8760b074c27c1bda2a0f9f947a6bfc"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","ba781cd4b8faa2d095ad4846d4dcb240"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","26d16c71957e95bc33289f42141dd332"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","cf8fce3b55743fbc4845f12d5d88174d"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","f95fe91ef05a63555f0982ef6d5cd098"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","3c4e478cb24fcf4acd33050245d727ba"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","a82864c30006fc3dfe5ec501c341f405"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","0a8041a095c2fdec723e08e3906d019a"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","7e560112bf55745a3c848a613421eb6b"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","94ddbc136f785b473a5f435ca7caf8d5"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","06696a328765c64ffcd6ac58f31f1ce9"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","042df5d90c660ddb863eff197fe39dd5"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","24fbb055a3d31f327f68a0db250b04cc"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","81443a012c48e406fff7f4030ef0c586"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","b2419455905e4bfdd39cf095ece2d1a6"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","1e3eb24373cf58ac31f861193099044e"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","94ad83f758dc449b73c200fcfdd02cc7"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","3d549e58f386fe9cdc7ac94557e34787"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","7595d63fbc785d6ac609a759b50ae277"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","262a72ee2f6e63339dc6f8c9e4160963"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","d2e5b5f151e464d367a8b31f851b0f56"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","2493a2c9052289944d0aabafbe24895e"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","c2e5010507c8c2933200652f70d87eb2"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","21c6bd6f5acde0bc75861c93938efee2"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","0ce9e1047b6f9f7a67cc7bf765171f92"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","c71056f869f24c6382b6985d6cb9f412"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","01cf158d0e972a160c59eca550e5358e"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","f4d252fa38c44cd822542348bca03046"],["E:/qinhao/hexo/public/ByteDanceVerify.html","21d58b4232e529792bb8cc8f10f2d4e7"],["E:/qinhao/hexo/public/about/index.html","259e3801d077837ef274f2643df6c625"],["E:/qinhao/hexo/public/archives/2020/02/index.html","5e8a2e1e4c17baaf3524cfeccd9ae36e"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","75bf2432e4d91ef24c12e868e82cdca8"],["E:/qinhao/hexo/public/archives/2020/03/index.html","750ebd162f052d4fc680c77458581773"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","92105f909bff0df57efcd0fcc81b53e5"],["E:/qinhao/hexo/public/archives/2020/04/index.html","a5022c37abab55f105d4a17f4ddd9c3c"],["E:/qinhao/hexo/public/archives/2020/05/index.html","36c9c7f841712b4da7f0fa2831ae9720"],["E:/qinhao/hexo/public/archives/2020/06/index.html","6ff4d95e3052712e295f382df8e089e0"],["E:/qinhao/hexo/public/archives/2020/07/index.html","506f1d57534b9d7e0923f5c14d3659bd"],["E:/qinhao/hexo/public/archives/2020/08/index.html","e8e086a6c3e458055735fc980999b7c5"],["E:/qinhao/hexo/public/archives/2020/10/index.html","feb4c11934507e749cd5db380b15f271"],["E:/qinhao/hexo/public/archives/2020/11/index.html","5bb3d9773e01decf6e0a1a07e24f44c4"],["E:/qinhao/hexo/public/archives/2020/index.html","d6ed55532ffcbb9f870e241e7ec53ba6"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","70da9d87fd3403ebba6560168f0c3bfc"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","2c8e913b411cbc7d8b8cf4771efaa65d"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","46c27a287bdd942654252788a7a98470"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","b5e0ed6d67b25f269f20cf7beb240c2d"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","4f982972b1895c7ffb5b20bdc7d4d6d9"],["E:/qinhao/hexo/public/archives/2021/03/index.html","6a38e140195cc8086180955a5fd55b54"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","ae7f545b1bf0bba8266462bde6530aef"],["E:/qinhao/hexo/public/archives/2021/04/index.html","73688277a150a8c39f0f73de77530285"],["E:/qinhao/hexo/public/archives/2021/index.html","abae1270c81a10f45aa0a45dc84b7cb3"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","1eefe139a1adaebbfec0a2081542e561"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","ff49d6a6a9b8b35c1dc6b2e5d950f12a"],["E:/qinhao/hexo/public/archives/index.html","04b9f1d544625b25cde4730dee71a45b"],["E:/qinhao/hexo/public/archives/page/2/index.html","750b2c62752a33985f274937f317ff16"],["E:/qinhao/hexo/public/archives/page/3/index.html","bc3f4e6d2a80184f0434befaef4fa86c"],["E:/qinhao/hexo/public/archives/page/4/index.html","750b2c62752a33985f274937f317ff16"],["E:/qinhao/hexo/public/archives/page/5/index.html","bc3f4e6d2a80184f0434befaef4fa86c"],["E:/qinhao/hexo/public/archives/page/6/index.html","bc3f4e6d2a80184f0434befaef4fa86c"],["E:/qinhao/hexo/public/archives/page/7/index.html","bc3f4e6d2a80184f0434befaef4fa86c"],["E:/qinhao/hexo/public/archives/page/8/index.html","2c9a916bae88caed2882963ad69a165e"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","3a1ea7f57613f08c9fbfcf84d3848752"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","c05dd5c9d137ab0c5db65c5c0b06f677"],["E:/qinhao/hexo/public/categories/Java/index.html","a870836a92cef98fbf162b6bc33d3858"],["E:/qinhao/hexo/public/categories/Linux/index.html","7eb66a021104d381b61cb52160810063"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","b97290f858fd61e3f89c43e7ad3db857"],["E:/qinhao/hexo/public/categories/Python/index.html","1e257a5bef4084f5035d9f616d7bb1e2"],["E:/qinhao/hexo/public/categories/交换机/index.html","94de3ef88ba98d9e6482ec36d54d7f45"],["E:/qinhao/hexo/public/categories/华为认证/index.html","bd3d0190b244dc41aadae18252135bee"],["E:/qinhao/hexo/public/categories/小技巧/index.html","bbd26dc756df4d89b312cfa5a1516fe5"],["E:/qinhao/hexo/public/categories/数据库/index.html","320649b02c150454de8c149ea149d144"],["E:/qinhao/hexo/public/categories/服务器/index.html","2ea897ff3d7165c8879c49410b4dcca0"],["E:/qinhao/hexo/public/categories/网络安全/index.html","abfbd19627a6d37c6152b9bb70c6bec9"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","b65402622e6d2c72888c3be119e36189"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","861c7a0c36b94e203cc2d70093f548b3"],["E:/qinhao/hexo/public/categories/软件破解/index.html","ea6dd7237b649c83d2410a25680b4b3a"],["E:/qinhao/hexo/public/categories/通信技术/index.html","13b1b0d7e0f45852153180b7ff8f3167"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","bf51fda812548cd8721a4fd17f5df7b8"],["E:/qinhao/hexo/public/category/index.html","77c572b577b80f849e3d7ac40af93e6a"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","22b7cd1aa5607c068946645b1cee033b"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","9fd67eb70112cd1a56d74ec7b8f74df0"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","f19594dc2ad68c2cf6e0b0e79f9aee97"],["E:/qinhao/hexo/public/page/2/index.html","d939c7da0d80da97047d21bbaaa26df2"],["E:/qinhao/hexo/public/page/3/index.html","2a00a894fd6ee7af971fe77054e76b11"],["E:/qinhao/hexo/public/page/4/index.html","8483fc13bf6f6fb69a9389166253a585"],["E:/qinhao/hexo/public/page/5/index.html","54875c6c5f5a7e4cdf642713499feb80"],["E:/qinhao/hexo/public/page/6/index.html","1482da5929b10ca314cdcd3a233c585c"],["E:/qinhao/hexo/public/page/7/index.html","c393100556427fd21ba95b22e02b70a4"],["E:/qinhao/hexo/public/page/8/index.html","95942026f3b5cb59e70e26bfffff0843"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","2693c994d5341e92b1e5b7da1611ab51"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","7099cc3b5fd0d2771a00b99ed65b5d3d"],["E:/qinhao/hexo/public/tags/MySQL/index.html","1564700b54b4a7a994390c38ccecc296"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","cb2a30fea4f0fd0fd994e473275211e9"],["E:/qinhao/hexo/public/tags/VPN/index.html","622dccc9b03405fa953fd392f8764ed0"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","00a93b6029696362c46eb17fde20788e"],["E:/qinhao/hexo/public/tags/index.html","a45de883ebd0f55d7cc41dcbed0cc9b0"],["E:/qinhao/hexo/public/tags/交换机/index.html","5283ba2c9114764347b259e3ef369a7b"],["E:/qinhao/hexo/public/tags/图像处理/index.html","6cbf856b19a3cd7cb8370a85f7e62619"],["E:/qinhao/hexo/public/tags/基础网络/index.html","4f0673092143da9bd9b93de0347fa0c1"],["E:/qinhao/hexo/public/tags/思科/index.html","9522d2d70423b1e93a062964fff8dfde"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","7b9a9cbe8d4ef080dd37860cfcfe53a1"],["E:/qinhao/hexo/public/tags/数据库/index.html","c65c10dc5a1ad1838476baa3d974bcba"],["E:/qinhao/hexo/public/tags/无线技术/index.html","6009d458e3f833498102064eb9f2e3f1"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","8aef7ae4f9e8da11322e9a08d2d4ad88"],["E:/qinhao/hexo/public/tags/系统安装/index.html","42ab504167705abfbf72b61afaf13dfb"],["E:/qinhao/hexo/public/tags/网络安全/index.html","2d7e8b8b37f5855f3c2224635f93a5df"],["E:/qinhao/hexo/public/tags/网络技术/index.html","32fe959914b37599d855c642846a8d48"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","b4f86605f308319c916852c84bae9861"],["E:/qinhao/hexo/public/tags/路由器/index.html","6d135e016acf7176bf21c5d47b50fd68"],["E:/qinhao/hexo/public/tags/软考/index.html","fbbbea8b7d95bfd4a9a414a3e6c4fa0b"],["E:/qinhao/hexo/public/tags/通信原理/index.html","835c9598e0fc69f213503f2fcf4cf9d8"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","ba1e3116b62707c6bb7c69c10a0a5efc"],["E:/qinhao/hexo/public/tags/通信技术/index.html","86d7ac58a9bf8b315a15d75ff40207e6"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","2debe2eec382296f1af19047a2379217"]];
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







