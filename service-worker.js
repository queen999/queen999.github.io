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

var precacheConfig = [["E:/qinhao/hexo/public/2019-nCoV/index.html","a3e72c00316219e4918cfa2a3772fcef"],["E:/qinhao/hexo/public/2020/02/14/RedHat_setup_script/index.html","ddbb23cce983d46073b8fab0b2000e1a"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_environment/index.html","f7ee7728c7837e0255a952a7b23772aa"],["E:/qinhao/hexo/public/2020/02/14/Windows_Web_build_website/index.html","c392c48631fa3d912a3c6257cb40ca96"],["E:/qinhao/hexo/public/2020/02/15/Web_site_SSL/index.html","66ca3e9f290b8c0c483c2047af2d5b57"],["E:/qinhao/hexo/public/2020/02/15/Windows_Web_often_use/index.html","04fe473723abbd2b1a4ec5c7675864ec"],["E:/qinhao/hexo/public/2020/02/15/a_server_build_many_webs/index.html","67e920eb483c6f0f86bac22129506451"],["E:/qinhao/hexo/public/2020/02/24/ssh/index.html","a722002d40de9054256cfe3d5763016e"],["E:/qinhao/hexo/public/2020/02/27/MySQL8_basics/index.html","941d1dfc0b3327694feb77d75d2529ed"],["E:/qinhao/hexo/public/2020/02/27/OLT_command/index.html","4798ce717f2fad8cce36589d4b82b46a"],["E:/qinhao/hexo/public/2020/02/27/computer_network_basics/index.html","7ee96ef6179d03a23aa57ed4b64a4941"],["E:/qinhao/hexo/public/2020/02/27/switchport-security/index.html","c7b6e091d728dc62da4b467e3ade0ca6"],["E:/qinhao/hexo/public/2020/03/04/acl/index.html","e4d31b704ca6419d6c4f3400ddd753c5"],["E:/qinhao/hexo/public/2020/03/06/mobile_communication/index.html","b785cfd3c2d4f45f5e3998c59cf9bb87"],["E:/qinhao/hexo/public/2020/03/06/wireless_word/index.html","41a7b7ffbc39d49693785c877de4252f"],["E:/qinhao/hexo/public/2020/03/07/3G/index.html","dff7117e346005978d62b4753e262d24"],["E:/qinhao/hexo/public/2020/03/07/GSM/index.html","8c27acaff6d976fc37819329bdc24671"],["E:/qinhao/hexo/public/2020/03/07/IP_Bearer_Network_basic/index.html","d02e58bb8208cc68bf90d01d61924cd1"],["E:/qinhao/hexo/public/2020/03/07/LTE/index.html","b3611af9ebe841e327b0c72894fac0fc"],["E:/qinhao/hexo/public/2020/03/07/NB-IoT/index.html","6e0df190e3a8178bd3815d51fec02984"],["E:/qinhao/hexo/public/2020/03/07/optical_transport_network_basic/index.html","8dcbac059240cfea6b6b51246c560122"],["E:/qinhao/hexo/public/2020/03/07/wireless_radio/index.html","6248d727b320f192ca66d43c73df8342"],["E:/qinhao/hexo/public/2020/03/11/Linux_often_use/index.html","fadc645646e1e49f521a9c8053092f61"],["E:/qinhao/hexo/public/2020/03/11/Python_basic_(1)/index.html","de2bdd38a37bfc02c8d6c0fbfadd49b6"],["E:/qinhao/hexo/public/2020/03/21/GRE-VPN/index.html","f5d6ee867c124552a50ea00e89ac378e"],["E:/qinhao/hexo/public/2020/03/25/IPSec_VPN/index.html","808344cf628b41e2d0ffdb832823f1e1"],["E:/qinhao/hexo/public/2020/03/29/FixedTools/index.html","eb03163c9a8eeaec6f4cdf359e4a51b5"],["E:/qinhao/hexo/public/2020/03/30/GRE-over-IPSec/index.html","619c275f0715a038251c56f37ad21a28"],["E:/qinhao/hexo/public/2020/03/31/bitwarden/index.html","cde1db7d99e5f5c423b22f6c3d41d746"],["E:/qinhao/hexo/public/2020/04/03/Layer/index.html","9b7a39ae52d1f5dfc8bc603389537ae0"],["E:/qinhao/hexo/public/2020/04/04/color/index.html","d0d381af004fdfb966cf3091861d9c6f"],["E:/qinhao/hexo/public/2020/04/09/wireless_framework/index.html","706bafd61b726e72e5640216aa54a4c6"],["E:/qinhao/hexo/public/2020/04/13/manage-MAN-skill/index.html","ec32a2ac87f64c018d7f60c422a6ec27"],["E:/qinhao/hexo/public/2020/04/13/structure-of-MAN/index.html","1ca4c8f56b2513cb538103652af8f225"],["E:/qinhao/hexo/public/2020/04/20/TD-LTE-System/index.html","0101390c1da275b2e3a0df263a2f54eb"],["E:/qinhao/hexo/public/2020/04/24/Network_Access/index.html","1fe0b601c40dce7b9ce4a21437218b5e"],["E:/qinhao/hexo/public/2020/04/24/build-MAN-idea/index.html","88e87d7cdf63fbf7ffa891a6bbf2e969"],["E:/qinhao/hexo/public/2020/04/25/OFDMA/index.html","d9adb2141922a3694469b1906b63c517"],["E:/qinhao/hexo/public/2020/05/11/MIMO/index.html","1f30d96e41bddf3661e10e906b017574"],["E:/qinhao/hexo/public/2020/05/12/ICIC/index.html","c31b3b30391ab2fcd021cd4ac28144b4"],["E:/qinhao/hexo/public/2020/05/19/No-module-named-pip/index.html","cb2876029133de39dfb0af1b33e3ddb4"],["E:/qinhao/hexo/public/2020/05/19/huawei-PCManager/index.html","73f55a11e193aa314b2589d3a7938acf"],["E:/qinhao/hexo/public/2020/05/19/not-allow-F12/index.html","7d6664b9772ed1fcb932e471acf9f009"],["E:/qinhao/hexo/public/2020/05/20/python-2/index.html","2eee994d69d69bd434c049f12746e9f9"],["E:/qinhao/hexo/public/2020/05/23/free-get-189vip/index.html","6f8760b074c27c1bda2a0f9f947a6bfc"],["E:/qinhao/hexo/public/2020/05/24/Python-3/index.html","ba781cd4b8faa2d095ad4846d4dcb240"],["E:/qinhao/hexo/public/2020/05/25/Python-4/index.html","26d16c71957e95bc33289f42141dd332"],["E:/qinhao/hexo/public/2020/05/29/huawei-exam-application/index.html","cf8fce3b55743fbc4845f12d5d88174d"],["E:/qinhao/hexo/public/2020/06/01/Python-5/index.html","f95fe91ef05a63555f0982ef6d5cd098"],["E:/qinhao/hexo/public/2020/06/11/lanzous/index.html","3c4e478cb24fcf4acd33050245d727ba"],["E:/qinhao/hexo/public/2020/06/13/mysql-install/index.html","a82864c30006fc3dfe5ec501c341f405"],["E:/qinhao/hexo/public/2020/07/07/Python_cards_manage/index.html","0a8041a095c2fdec723e08e3906d019a"],["E:/qinhao/hexo/public/2020/07/07/Python_variable/index.html","7e560112bf55745a3c848a613421eb6b"],["E:/qinhao/hexo/public/2020/07/17/computer_Internet_1/index.html","94ddbc136f785b473a5f435ca7caf8d5"],["E:/qinhao/hexo/public/2020/08/13/Files_and_directories/index.html","06696a328765c64ffcd6ac58f31f1ce9"],["E:/qinhao/hexo/public/2020/08/13/system_info/index.html","042df5d90c660ddb863eff197fe39dd5"],["E:/qinhao/hexo/public/2020/10/01/5G网络优化/index.html","24fbb055a3d31f327f68a0db250b04cc"],["E:/qinhao/hexo/public/2020/10/05/linux/index.html","81443a012c48e406fff7f4030ef0c586"],["E:/qinhao/hexo/public/2020/10/20/Design_patterns_1/index.html","b2419455905e4bfdd39cf095ece2d1a6"],["E:/qinhao/hexo/public/2020/11/01/network_security_comprehensive/index.html","1e3eb24373cf58ac31f861193099044e"],["E:/qinhao/hexo/public/2021/03/01/c_1/index.html","94ad83f758dc449b73c200fcfdd02cc7"],["E:/qinhao/hexo/public/2021/03/02/c_2/index.html","3d549e58f386fe9cdc7ac94557e34787"],["E:/qinhao/hexo/public/2021/03/03/c_3/index.html","7595d63fbc785d6ac609a759b50ae277"],["E:/qinhao/hexo/public/2021/03/04/c_4/index.html","262a72ee2f6e63339dc6f8c9e4160963"],["E:/qinhao/hexo/public/2021/03/05/c_5/index.html","d2e5b5f151e464d367a8b31f851b0f56"],["E:/qinhao/hexo/public/2021/03/06/c_6/index.html","2493a2c9052289944d0aabafbe24895e"],["E:/qinhao/hexo/public/2021/03/07/c_7/index.html","c2e5010507c8c2933200652f70d87eb2"],["E:/qinhao/hexo/public/2021/03/08/c_8/index.html","21c6bd6f5acde0bc75861c93938efee2"],["E:/qinhao/hexo/public/2021/03/15/c_9/index.html","0ce9e1047b6f9f7a67cc7bf765171f92"],["E:/qinhao/hexo/public/2021/03/16/c_10/index.html","c71056f869f24c6382b6985d6cb9f412"],["E:/qinhao/hexo/public/2021/03/17/c-11/index.html","01cf158d0e972a160c59eca550e5358e"],["E:/qinhao/hexo/public/2021/04/25/FileDownload/index.html","7f9d5c6d5d5692cf84e03b03f03e723d"],["E:/qinhao/hexo/public/2021/04/25/PythonUdp/index.html","4815d164409d2e2b2ca7c5ba7c372614"],["E:/qinhao/hexo/public/2021/04/25/TCP/index.html","da67afa240d40b9401af04f25b309aa1"],["E:/qinhao/hexo/public/2021/04/25/TCP_client/index.html","d63ddf3f3c3b5f2bb180f00ceb0f98d5"],["E:/qinhao/hexo/public/2021/04/25/TCP_server/index.html","198a1d29976987acb3829b7acc278929"],["E:/qinhao/hexo/public/ByteDanceVerify.html","21d58b4232e529792bb8cc8f10f2d4e7"],["E:/qinhao/hexo/public/about/index.html","259e3801d077837ef274f2643df6c625"],["E:/qinhao/hexo/public/archives/2020/02/index.html","2720d29df24a04c0fcededf216009b6c"],["E:/qinhao/hexo/public/archives/2020/02/page/2/index.html","eec14e71c0bf363d87760c9f33f57e93"],["E:/qinhao/hexo/public/archives/2020/03/index.html","eaf077db33ad867f76e8b8aeddee1cfe"],["E:/qinhao/hexo/public/archives/2020/03/page/2/index.html","10ae5ce1869942630379627e1b619a80"],["E:/qinhao/hexo/public/archives/2020/04/index.html","8c08b243bdeb6ea106870df6dbb8edb2"],["E:/qinhao/hexo/public/archives/2020/05/index.html","d44934a87dd04ef8380db174c2b12925"],["E:/qinhao/hexo/public/archives/2020/06/index.html","3b4f49fa89752a318f35cf0c4b717845"],["E:/qinhao/hexo/public/archives/2020/07/index.html","18c3f9bccfac99db499b43b97f1d2bb0"],["E:/qinhao/hexo/public/archives/2020/08/index.html","61b12571abedc82371131e9e50b64a38"],["E:/qinhao/hexo/public/archives/2020/10/index.html","b8a7af4b11e8248211ba71b69d18eaac"],["E:/qinhao/hexo/public/archives/2020/11/index.html","ba39ed8e4dc43feee214b307e3c44243"],["E:/qinhao/hexo/public/archives/2020/index.html","5f96dd19362783f85fe3bc4b2eecbf9e"],["E:/qinhao/hexo/public/archives/2020/page/2/index.html","dff22314cd263b355878a7a74ccb9524"],["E:/qinhao/hexo/public/archives/2020/page/3/index.html","8faa117c5b12cfb4bb49da87872273bd"],["E:/qinhao/hexo/public/archives/2020/page/4/index.html","f0718942752025c72c7a1b84d289102e"],["E:/qinhao/hexo/public/archives/2020/page/5/index.html","6b40f9fc054c97cc4e4a48bf43937a51"],["E:/qinhao/hexo/public/archives/2020/page/6/index.html","f026a04002294f667e0b9e09e94a9c57"],["E:/qinhao/hexo/public/archives/2021/03/index.html","03c8c7895d476924e88e8599590b38e2"],["E:/qinhao/hexo/public/archives/2021/03/page/2/index.html","855842630ee5fc5ef2c22783ffe1d163"],["E:/qinhao/hexo/public/archives/2021/04/index.html","6dddbfd3eaac72ca7ec562abb21b1873"],["E:/qinhao/hexo/public/archives/2021/index.html","f9e73fae3161d41f7178de1081c3a04d"],["E:/qinhao/hexo/public/archives/2021/page/2/index.html","c5cfbd94f94f3cc817a19cdeecf23e4c"],["E:/qinhao/hexo/public/archives/categories/技术/HP交换机配置.html","ff49d6a6a9b8b35c1dc6b2e5d950f12a"],["E:/qinhao/hexo/public/archives/index.html","2e6b28140e69cbc0a36a3a3ab5ff884e"],["E:/qinhao/hexo/public/archives/page/2/index.html","2e6b28140e69cbc0a36a3a3ab5ff884e"],["E:/qinhao/hexo/public/archives/page/3/index.html","2e6b28140e69cbc0a36a3a3ab5ff884e"],["E:/qinhao/hexo/public/archives/page/4/index.html","2e6b28140e69cbc0a36a3a3ab5ff884e"],["E:/qinhao/hexo/public/archives/page/5/index.html","2e6b28140e69cbc0a36a3a3ab5ff884e"],["E:/qinhao/hexo/public/archives/page/6/index.html","5bcb7d3fc0c71c29b1b0c841c88d2ecc"],["E:/qinhao/hexo/public/archives/page/7/index.html","5bcb7d3fc0c71c29b1b0c841c88d2ecc"],["E:/qinhao/hexo/public/archives/page/8/index.html","95df50e8814cd41e160f58a4980679e2"],["E:/qinhao/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/qinhao/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/qinhao/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/qinhao/hexo/public/categories/C语言/index.html","e4b7a47806a87f4fd1dbc9ccaa3e1b43"],["E:/qinhao/hexo/public/categories/C语言/page/2/index.html","553a391edd85e3610fa977ceb545b313"],["E:/qinhao/hexo/public/categories/Java/index.html","9540522dfbe18841bf78d0bfa0f98bff"],["E:/qinhao/hexo/public/categories/Linux/index.html","bd7e34134e42c671a4f75ef5f720a004"],["E:/qinhao/hexo/public/categories/Photoshop/index.html","84f3f400d5879fc0f3cad2272973e48b"],["E:/qinhao/hexo/public/categories/Python/index.html","e74d7afb9df2c887710b95885bab0fca"],["E:/qinhao/hexo/public/categories/Python/page/2/index.html","52bee8822b8fd8edba71393b422c818a"],["E:/qinhao/hexo/public/categories/交换机/index.html","bcf73c1428094ed60b6b8b871466cb07"],["E:/qinhao/hexo/public/categories/华为认证/index.html","87a0399f23c3883dbbc384c11e249100"],["E:/qinhao/hexo/public/categories/小技巧/index.html","ef5e57e535892504b627a8b4e516dab1"],["E:/qinhao/hexo/public/categories/数据库/index.html","6323274969823c993dcf0135a003aace"],["E:/qinhao/hexo/public/categories/服务器/index.html","cb9ba5d76f89fcfaf9030d9e93016eaa"],["E:/qinhao/hexo/public/categories/网络安全/index.html","8eb047e59c8a8f6cf96ba4d6a1328bab"],["E:/qinhao/hexo/public/categories/计算机三级/index.html","adcb67150dd8d5118e9dbcd1a58aeac8"],["E:/qinhao/hexo/public/categories/计算机网络/index.html","c8d894a936bb126c1ccbebf9d1b1b7ca"],["E:/qinhao/hexo/public/categories/软件破解/index.html","26b22e1b56462e8a820715abbcbb7025"],["E:/qinhao/hexo/public/categories/通信技术/index.html","a5c0560e198fc18ecc8c9f7cabd9c983"],["E:/qinhao/hexo/public/categories/通信技术/page/2/index.html","e6a208703d123a736cf57bcf652e694f"],["E:/qinhao/hexo/public/category/index.html","e9ff4c4d72d77842918b2262552e296f"],["E:/qinhao/hexo/public/css/style.css","69bbc27a8094ac09453486ddd0820200"],["E:/qinhao/hexo/public/donate/drinks/images/alipay.svg","4689050f28b41df015ac398a326e1502"],["E:/qinhao/hexo/public/donate/drinks/images/bitcoin.svg","5513a6898d7e2dfee541966cc5dd52b9"],["E:/qinhao/hexo/public/donate/drinks/images/coffee.png","b41acb9958f2e3311d171012cffb15fc"],["E:/qinhao/hexo/public/donate/drinks/images/github.svg","471d3c2c209dba9c47637de6fae15a1f"],["E:/qinhao/hexo/public/donate/drinks/images/paypal.svg","bf94752e85ce34ca712345c0a166e6be"],["E:/qinhao/hexo/public/donate/drinks/images/text.png","0fe44275efec64e47c7d109c3fd26b4a"],["E:/qinhao/hexo/public/donate/drinks/images/wechat.svg","3cbf2dd243a0526a79c6107199ef533c"],["E:/qinhao/hexo/public/donate/drinks/index.html","076e3508d27092947ae39737e2488397"],["E:/qinhao/hexo/public/donate/drinks/script.js","1c65abbe04a6bff48000efbc6a2a0648"],["E:/qinhao/hexo/public/donate/drinks/style.css","ccb18a5081285c1d9b3c5ddacd141444"],["E:/qinhao/hexo/public/donate/simple/images/AliPayQR.png","b1a2b897a3f6232ba4f40b4df6a5cd40"],["E:/qinhao/hexo/public/donate/simple/images/BTCQR.png","a62e2a8289350becedff944781558511"],["E:/qinhao/hexo/public/donate/simple/images/WeChanQR.png","2a47168bacd5370ad51fe7b9a449116f"],["E:/qinhao/hexo/public/donate/simple/images/WeChanSQ.png","e8999d5b1b09d5a34aad4d1c088c3ecb"],["E:/qinhao/hexo/public/donate/simple/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["E:/qinhao/hexo/public/donate/simple/images/bitcoin.svg","fa77a105ac57f7794672a195af317701"],["E:/qinhao/hexo/public/donate/simple/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["E:/qinhao/hexo/public/donate/simple/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["E:/qinhao/hexo/public/donate/simple/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["E:/qinhao/hexo/public/donate/simple/images/qq.svg","2104001092bbe3a97d3b99e8ed40fc8b"],["E:/qinhao/hexo/public/donate/simple/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["E:/qinhao/hexo/public/donate/simple/index.html","a44382894a431db7a4d2e4bee3f53c89"],["E:/qinhao/hexo/public/donate/simple/script.js","1edd6baa549da99da85451d92cde64f8"],["E:/qinhao/hexo/public/donate/simple/style.css","9c37938f8f1c147940a6a197a851e679"],["E:/qinhao/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/qinhao/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/qinhao/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/qinhao/hexo/public/footer/index.html","73ddad643a8ade999a9a4481934f60ba"],["E:/qinhao/hexo/public/friends/index.html","22b7cd1aa5607c068946645b1cee033b"],["E:/qinhao/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/qinhao/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/qinhao/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/qinhao/hexo/public/index.html","a3c364e004631e53fb635347f22e59b3"],["E:/qinhao/hexo/public/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["E:/qinhao/hexo/public/js/app.js","60b11cc8c0c85ca294cd3ff2e82096ad"],["E:/qinhao/hexo/public/js/search.js","e9d8258f51e5d90e1b5a733d09ce2d35"],["E:/qinhao/hexo/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["E:/qinhao/hexo/public/mylist/index.html","8d457c392c5142cb8e2c796c3870ec4f"],["E:/qinhao/hexo/public/page/2/index.html","8b8e5831f11bfe5d315602c3271de8b2"],["E:/qinhao/hexo/public/page/3/index.html","52f443574628bc60350d1f154e71b211"],["E:/qinhao/hexo/public/page/4/index.html","2108e88a92e8828d2fea9fad593ad778"],["E:/qinhao/hexo/public/page/5/index.html","9ae174c176a715316f369c36386f3c1c"],["E:/qinhao/hexo/public/page/6/index.html","c94a90641a568453949c6796f75a59d0"],["E:/qinhao/hexo/public/page/7/index.html","5fc4b4f3ef4bb9701ba8019aac718373"],["E:/qinhao/hexo/public/page/8/index.html","1f3516d6f08a38c1972a06091dc4674e"],["E:/qinhao/hexo/public/style.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/qinhao/hexo/public/sw-register.js","f472206852b0836fddbfbe0965a85fee"],["E:/qinhao/hexo/public/sw.js","24ccc13d4460a439fa61ad272894ca7b"],["E:/qinhao/hexo/public/tags/IIS/index.html","4b30272aafe743cb2431eb040a1e1726"],["E:/qinhao/hexo/public/tags/MySQL/index.html","3c8cd796b40a49970f58222b4d24118c"],["E:/qinhao/hexo/public/tags/Photoshop/index.html","00c1abff087111f707ba6fdba1244608"],["E:/qinhao/hexo/public/tags/VPN/index.html","4d64086167acbb2d0b1b3bb998f35c08"],["E:/qinhao/hexo/public/tags/Web服务器/index.html","5e83fcaa623e048f5e300d1d4733e3d1"],["E:/qinhao/hexo/public/tags/index.html","a45de883ebd0f55d7cc41dcbed0cc9b0"],["E:/qinhao/hexo/public/tags/交换机/index.html","174422eda128906a0bc65cb3a4dba1f4"],["E:/qinhao/hexo/public/tags/图像处理/index.html","21b5cb1affd8e2adc037763fd9956dd9"],["E:/qinhao/hexo/public/tags/基础网络/index.html","8fd2f714b417f9e33d2e659a4df23bbe"],["E:/qinhao/hexo/public/tags/思科/index.html","0a3c2faaa374d6a0ee55753cda966401"],["E:/qinhao/hexo/public/tags/思科GRE/index.html","cc986bdaddb00a5baaf623ef8ed01ae5"],["E:/qinhao/hexo/public/tags/数据库/index.html","fdacc51d1994dd79a9c7c119981930d2"],["E:/qinhao/hexo/public/tags/无线技术/index.html","7d65a4415b144722e96689229951a377"],["E:/qinhao/hexo/public/tags/无线技术/page/2/index.html","85b09d0153931d4948e774aee504ddc5"],["E:/qinhao/hexo/public/tags/系统安装/index.html","6eb7d253c8bfc670f7b47acbcf8e9933"],["E:/qinhao/hexo/public/tags/网络安全/index.html","e233b2006f7a62d827aaa9898aa8f18e"],["E:/qinhao/hexo/public/tags/网络技术/index.html","2e913488f0d1d301963499b19f955651"],["E:/qinhao/hexo/public/tags/计算机三级/index.html","cc45af92cef1915c1f325051b962aa8b"],["E:/qinhao/hexo/public/tags/路由器/index.html","5aaacd4192d5cf760d36278ba62e0b99"],["E:/qinhao/hexo/public/tags/软考/index.html","5de6f3518a1d274061449cde64348027"],["E:/qinhao/hexo/public/tags/通信原理/index.html","ef8a6eb4961be2e0937a805ec0068d6d"],["E:/qinhao/hexo/public/tags/通信原理/page/2/index.html","0f2c8950b6091c42b7015eab3facfc22"],["E:/qinhao/hexo/public/tags/通信技术/index.html","c54baf22a73d83567de397fca011f57c"],["E:/qinhao/hexo/public/tags/通信技术/page/2/index.html","6a614f030f66273c4e8ab61de5a32aa9"]];
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







